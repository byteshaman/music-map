import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldHigh from "@amcharts/amcharts5-geodata/worldHigh";
import am5geodata_usaHigh from "@amcharts/amcharts5-geodata/usaHigh";
import am5geodata_italyHigh from "@amcharts/amcharts5-geodata/italyHigh";

import { AlbumInfo, albums } from 'src/data/albums.data';
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

  minZoom: number = 1;
  maxZoom: number = 32;
  splitUSA: boolean = false;

  playedTooltip: string = '';
  notPlayedTooltip: string = '';
  constructor(private http: HttpClient) { }


  async ngOnInit() {
    this.playedTooltip = await firstValueFrom(this.http.get('assets/played-tooltip.html', { responseType: 'text' }));
    this.notPlayedTooltip = await firstValueFrom(this.http.get('assets/not-played-tooltip.html', { responseType: 'text' }));

    // root-init
    this.root = am5.Root.new("map"); // pass id of the <div> container
    this.root.numberFormatter.set("numberFormat", "#"); // do not add , to thousands
    // this.root.setThemes([am5themes_Animated.new(this.root)]);

    this.setMapConfig();
    
    // chart-init
    this.chart = this.root.container.children.push(am5map.MapChart.new(this.root, this.mapConfig));

    this.createPolygonSeries();
    this.setChartBg();
    this.setSeriesConfig();
    this.setSeriesData(); // Must be the last operation performed
    this.toggleUSAView();
  }

  /**
   * Add polygon maps to the chart
   * @returns void
   */
  createPolygonSeries(): void {


    this.worldSeries = this.chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldHigh,
        exclude: ["AQ"]
      })
    );

    this.usSeries = this.chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_usaHigh,
      })
    );

    // this.itSeries = this.chart.series.push(
    //   am5map.MapPolygonSeries.new(this.root, {
    //     geoJSON: am5geodata_italyHigh,
    //   })
    // );


    this.allSeries.push(this.worldSeries, this.usSeries)
  }

  /**
   * Get am5 Color from css var name
   * @param  {string} propertyName
   * @returns am5
   */
  getColor(propertyName: string): am5.Color {
    return am5.color(getComputedStyle(document.documentElement).getPropertyValue(propertyName) || '#ff0000');
  }

  getColorByYear(year: number, minYear: number, maxYear: number): am5.Color {
    const normalizedYear = (year - minYear) / (maxYear - minYear);
    return am5.Color.interpolate(normalizedYear, this.getColor('--min-year-color'), this.getColor('--max-year-color'));
  }

  /**
   * Set backgrounds
   * @returns void
   */
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

    //! hover-color set in setSeriesConfig
  }

  /**
   * Set common config for all series
   * @returns void
   */
  setSeriesConfig(): void {
    const minYear = Math.min(...albums.map(el => el.year));
    const maxYear = Math.max(...albums.map(el => el.year));


    this.allSeries.forEach(series => {
      series.mapPolygons.template.setAll({
        tooltipHTML: "{tooltipContent}",
        // Border
        stroke: this.getColor('--nation-border-color'), 
        strokeWidth: .23,
      });

      // Dynamic tooltip
      series.mapPolygons.template.adapters.add("tooltipHTML", (text, target) => {
        const dataContext = target.dataItem?.dataContext as any;
        return dataContext.year ? this.playedTooltip : this.notPlayedTooltip;
      });

      //dbg log item on hover to inspect properties
      // series.mapPolygons.template.events.on("pointerover", (event) => {
      //   let dataItem = event.target.dataItem;
      //   if (dataItem) {
      //     console.log(dataItem.dataContext);
      //   }
      // });

      // Set fill color based on year
      series.mapPolygons.template.adapters.add("fill", (fill, target) => {
        const dataItem = target.dataItem;
        if (dataItem?.dataContext) {
          const year = (dataItem.dataContext as any).year;
          return year ? this.getColorByYear(year, minYear, maxYear) : this.getColor('--not-listened-color');
        }
        return fill;
      });

      // onClick -> open rym page
      series.mapPolygons.template.events.on("click", (event) => {
        let url = (event.target.dataItem!.dataContext as any).url;
        if (url) {
          window.open(url, "/blank");
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
        albums.map(el => {
          return {
            album: el.album,
            artist: el.artist,
            genres: el.genres,
            id: el.id,
            year: el.year,
            url: el.url
          }
        })
      )
    })
  }

  /**
   * Set map chart settings
   * @returns void
   */
  setMapConfig(): void {
    this.mapConfig = {
      projection: am5map.geoOrthographic(), // Globe projection (default is am5map.geoMercator())
      panX: "rotateX",
      panY: "rotateY",

      /// zoom settings
      zoomControl: am5map.ZoomControl.new(this.root, {}), // Add zoom control
      minZoomLevel: this.minZoom,
      maxZoomLevel: this.maxZoom
    }
  }

  /**
   * Determine how USA should be displayed
   * @returns void
   */
  toggleUSAView(): void {
    this.splitUSA ? this.usSeries.show() : this.usSeries.hide();

    // Hide worldSeries' US polygons when needed
    this.worldSeries.mapPolygons.each((polygon) => {
      const countryCode = (polygon.dataItem?.dataContext as AlbumInfo).id;

      if (countryCode === 'US') {
        this.splitUSA ? polygon.hide() : polygon.show();
      }
    });

    this.splitUSA = !this.splitUSA;
  }
}
