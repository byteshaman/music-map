import { Component } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldHigh from "@amcharts/amcharts5-geodata/worldHigh";
import am5geodata_usaHigh from "@amcharts/amcharts5-geodata/usaHigh";
import am5geodata_italyHigh from "@amcharts/amcharts5-geodata/italyHigh";
import { colors } from 'src/data/colors.data';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-map';
  root!: am5.Root;
  chart!: am5map.MapChart;
  colors: any = {};


  ngOnInit() {
    let root = am5.Root.new("map");

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoOrthographic(), // Globe projection
        panX: "rotateX", // Allow horizontal panning
        panY: "rotateY", // Allow vertical panning
      })
    );

    this.initializeColors(); // populate Clors

    //#region bg colors
    /// Main bg
    chart.chartContainer.set("background", am5.Rectangle.new(root, {
      fill: am5.color(this.colors.bgColor),
      fillOpacity: 0.9
    }));

    /// Sea bg
    let backgroundSeries = chart.series.unshift(
      am5map.MapPolygonSeries.new(root, {})
    );

    backgroundSeries.mapPolygons.template.setAll({
      fill: am5.color(this.colors.seaColor),
      stroke: am5.color(this.colors.seaColor),
    });

    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });
    //#endregion bg colors


    let polygonSeriesWorld = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldHigh,
      })
    );

    let polygonSeriesUSA = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaHigh,
      })
    );

    let polygonSeriesItaly = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_italyHigh,
      })
    );

    this.setTooltip([polygonSeriesUSA, polygonSeriesWorld, polygonSeriesItaly]);

  }

  initializeColors(): void {
    Object.entries(colors).forEach(([key, cssVar]) => {
      this.colors[key] = getComputedStyle(document.documentElement)
        .getPropertyValue(cssVar).trim()
      })
    console.log(this.colors)
  }

  setTooltip(polygonSeries: am5map.MapPolygonSeries[]): void {
    polygonSeries.forEach(series => {
      series.mapPolygons.template.setAll({
        tooltipText: "{name} - {value}",
        toggleKey: "active",
        interactive: true
      })
    })
  }

}
