import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldHigh from "@amcharts/amcharts5-geodata/worldHigh";
import am5geodata_usaHigh from "@amcharts/amcharts5-geodata/usaHigh";
import am5geodata_italyHigh from "@amcharts/amcharts5-geodata/italyHigh";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Micro from "@amcharts/amcharts5/themes/Micro";
import countries from "@amcharts/amcharts5-geodata/data/countries2";

import { albumXcountry } from 'src/data/countryxalbum.data';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-map';
  worldSeries!: am5map.MapPolygonSeries;
  usSeries!: am5map.MapPolygonSeries;
  itSeries!: am5map.MapPolygonSeries;
  root!: am5.Root;
  chart!: am5map.MapChart;
  allSeries: am5map.MapPolygonSeries[] = [];
  mapConfig!: am5map.IMapChartSettings
  colors: any = {};

  htmlTooltip: string = '';
  constructor(private http: HttpClient) { }


  async ngOnInit() {
    this.htmlTooltip = await firstValueFrom(this.http.get('assets/tooltip.html', { responseType: 'text' }));

    // root-init
    this.root = am5.Root.new("map"); // pass id of the <div> container
    this.root.numberFormatter.set("numberFormat", "#"); // do not add , to thousands
    this.root.setThemes([
      am5themes_Animated.new(this.root),
      am5themes_Micro.new(this.root)
    ]);

    this.setMapConfig();
    
    // chart-init
    this.chart = this.root.container.children.push(am5map.MapChart.new(this.root, this.mapConfig));

    this.createPolygonSeries();
    this.setChartBg();
    this.setSeriesConfig();
    this.setSeriesData(); // Must be the last operation performed
  }

  /**
   * Add polygon maps to the chart
   * @returns void
   */
  createPolygonSeries(): void {

    this.worldSeries = this.chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldHigh,
      })
    );

    this.usSeries = this.chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_usaHigh,
      })
    );

    this.itSeries = this.chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_italyHigh,
      })
    );


    this.allSeries.push(this.worldSeries)
  }

  /**
   * Get am5 Color from css var name
   * @param  {string} propertyName
   * @returns am5
   */
  getColor(propertyName: string): am5.Color {
    return am5.color(getComputedStyle(document.documentElement).getPropertyValue(propertyName) || '#ff0000');
  }

  setChartBg(): void {
    /// Main bg
    this.chart.chartContainer.set("background", am5.Rectangle.new(this.root, {
      fill: this.getColor('--bg-color'),
      fillOpacity: 0.9
    }));

    /// Sea bg
    let backgroundSeries = this.chart.series.unshift(
      am5map.MapPolygonSeries.new(this.root, {})
    );

    backgroundSeries.mapPolygons.template.setAll({
      fill: this.getColor('--sea-color'),
      stroke: this.getColor('--sea-color'),
    });

    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });

    this.allSeries.forEach(series => {series.mapPolygons.template.states.create("hover", {
        fill: this.getColor('--hover-color'),
      });
    });
  }

  setSeriesConfig(): void {
    this.allSeries.forEach(series => {
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
    })
  }

  /**
   * Set data for tooltip
   * @returns void
   */
  setSeriesData(): void {
    this.allSeries.forEach(series => {
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

  setMapConfig(): void {
    this.mapConfig = {
      projection: am5map.geoOrthographic(), // Globe projection
      panX: "rotateX",
      panY: "rotateY",

      /// zoom settings
      zoomControl: am5map.ZoomControl.new(this.root, {}), // Add zoom control
      minZoomLevel: 0.1,
      maxZoomLevel: 32
    }
  }
}
