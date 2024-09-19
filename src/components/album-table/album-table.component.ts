import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

// Importa l'interfaccia AlbumInfo e la lista albums
import { AlbumInfo, albums } from 'src/data/albums.data';


@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.scss']
})
export class AlbumTableComponent implements OnInit {
  displayedColumns: string[] = ['country', 'artist', 'album', 'group', 'year', 'genres'];

  dataSource: MatTableDataSource<AlbumInfo>; 
  filterControl = new FormControl('');

  // MatSort / MatPaginator
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(albums);
  }

  ngOnInit() {
    // Add columns to filter predicate 
    this.dataSource.filterPredicate = (data: AlbumInfo, filter: string) => {
      const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
        return currentTerm + (data as { [key: string]: any })[key] + '◬';
      }, '').toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) != -1;
    }
  }

  ngAfterViewInit() {
    // Collega sort e paginator al dataSource dopo che la view è stata inizializzata
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Apply filter
   */
  applyFilter() {
    const filterValue = this.filterControl.value!;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openURL(url: string) {
    window.open(url, '_blank');
  }
}
