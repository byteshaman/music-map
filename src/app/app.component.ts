import { Component } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldHigh from "@amcharts/amcharts5-geodata/worldHigh";
import am5geodata_usaHigh from "@amcharts/amcharts5-geodata/usaHigh";
import am5geodata_italyHigh from "@amcharts/amcharts5-geodata/italyHigh";
import countries from "@amcharts/amcharts5-geodata/data/countries2";

import { colors } from 'src/data/colors.data';
import { albumXcountry } from 'src/data/countryxalbum.data';



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
    this.initializeColors(); 

    // Initialize the root
    this.root = am5.Root.new("map");

    // Disable thousand separator for all numbers
    this.root.numberFormatter.set("numberFormat", "#");

    // Set various properties
    let chart = this.root.container.children.push(
      am5map.MapChart.new(this.root, {
        projection: am5map.geoOrthographic(), // Globe projection
        panX: "rotateX", // Allow horizontal panning
        panY: "rotateY", // Allow vertical panning
        
        /// zoom settings
        zoomControl: am5map.ZoomControl.new(this.root, {}), // Add zoom control
        minZoomLevel: 0.1,
        maxZoomLevel: 32
      })
    );


    //#region bg colors
    /// Main bg
    chart.chartContainer.set("background", am5.Rectangle.new(this.root, {
      fill: am5.color(this.colors.bgColor),
      fillOpacity: 0.9
    }));

    /// Sea bg
    let backgroundSeries = chart.series.unshift(
      am5map.MapPolygonSeries.new(this.root, {})
    );

    backgroundSeries.mapPolygons.template.setAll({
      fill: am5.color(this.colors.seaColor),
      stroke: am5.color(this.colors.seaColor),
    });

    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });
    //#endregion bg colors

    //#region maps
    let polygonSeriesWorld = chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldHigh,
      })
    );

    // let polygonSeriesUSA = chart.series.push(
    //   am5map.MapPolygonSeries.new(this.root, {
    //     geoJSON: am5geodata_usaHigh,
    //   })
    // );

    // let polygonSeriesItaly = chart.series.push(
    //   am5map.MapPolygonSeries.new(this.root, {
    //     geoJSON: am5geodata_italyHigh,
    //   })
    // );
    //#endregion maps

    // this.setPolygonSeriesProperties([polygonSeriesUSA, polygonSeriesWorld, polygonSeriesItaly]);
    this.setPolygonSeriesProperties([polygonSeriesWorld]);

    // Must be the last operation performed
    // this.setPolygonSeriesData([polygonSeriesUSA, polygonSeriesWorld, polygonSeriesItaly]);
    this.setPolygonSeriesData([polygonSeriesWorld]);

  }

  /**
   * Create an obejct to easily access colors using SCSS variables
   * @returns void
   */
  initializeColors(): void {
    Object.entries(colors).forEach(([key, cssVar]) => {
      this.colors[key] = getComputedStyle(document.documentElement)
        .getPropertyValue(cssVar).trim()
      })
    // console.log(this.colors)
  }

  setPolygonSeriesProperties(polygonSeries: am5map.MapPolygonSeries[]): void {
    polygonSeries.forEach(series => {
      
      // Set HTML popup
      series.mapPolygons.template.setAll({
        tooltipHTML: "<div><p>Country: {name}</p><p>Album: {album}</p></div>",
        interactive: true,
      })

      //dbg log item on hover to inspect properties
      series.mapPolygons.template.events.on("pointerover", (event) => {
        let dataItem = event.target.dataItem;
        if (dataItem) {
          console.log(dataItem.dataContext);
        }
      });

      // Set color on hover
      series.mapPolygons.template.states.create("hover", {
        fill: am5.color(0x677935)
      });
    })
  }

  
  /**
   * Set data for tooltip
   * @param  {am5map.MapPolygonSeries[]} polygonSeries
   * @returns void
   */
  setPolygonSeriesData(polygonSeries: am5map.MapPolygonSeries[]): void {
    polygonSeries.forEach(series => {
      series.data.setAll(
        albumXcountry.map(el => {
          return {
            album: el.album,
            artist: el.artist,
            genres: el.genres,
            id: el.code,
            year: el.year,
            url: el.link
          }
        })
      )
    })
  }

}
