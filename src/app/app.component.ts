import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldHigh from "@amcharts/amcharts5-geodata/worldHigh";
import am5geodata_usaHigh from "@amcharts/amcharts5-geodata/usaHigh";
import am5geodata_italyHigh from "@amcharts/amcharts5-geodata/italyHigh";
import countries from "@amcharts/amcharts5-geodata/data/countries2";

import { colors } from 'src/data/colors.data';
import { albumXcountry } from 'src/data/countryxalbum.data';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-map';
  root!: am5.Root;
  colors: any = {};

  htmlTooltip: string = '';
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.initializeColors();

    this.htmlTooltip = await firstValueFrom(this.http.get('assets/tooltip.html', { responseType: 'text' }));

    // root-init
    this.root = am5.Root.new("map"); // pass id of the <div> container
    this.root.numberFormatter.set("numberFormat", "#"); // do not add , to thousands


    // MARK: map-init
    const mapConfig: am5map.IMapChartSettings = {
      projection: am5map.geoOrthographic(), // Globe projection
      panX: "rotateX",
      panY: "rotateY",

      /// zoom settings
      zoomControl: am5map.ZoomControl.new(this.root, {}), // Add zoom control
      minZoomLevel: 0.1,
      maxZoomLevel: 32
    }

    const mapChart: am5map.MapChart = am5map.MapChart.new(this.root, mapConfig)

    let chart = this.root.container.children.push(mapChart); // Make map visible

    //todo: understand how bg works


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
    this.setData([polygonSeriesWorld]);

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
        tooltipHTML: this.htmlTooltip,
        interactive: true,
      })


      //dbg log item on hover to inspect properties
      series.mapPolygons.template.events.on("pointerover", (event) => {
        let dataItem = event.target.dataItem;
        if (dataItem) {
          console.log(dataItem.dataContext);
        }
      });

      // MARK: hover-color
      // series.mapPolygons.template.states.create("hover", {
      //   fill: am5.color(0x677935)
      // });
    })
  }


  /**
   * Set data for tooltip
   * @param  {am5map.MapPolygonSeries[]} polygonSeries
   * @returns void
   */
  setData(polygonSeries: am5map.MapPolygonSeries[]): void {
    polygonSeries.forEach(series => {
      series.data.setAll(
        // MARK: tooltip-data
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
