import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

// Importa l'interfaccia AlbumInfo e la lista albums
import { AlbumInfo, albums } from 'src/data/albums.data';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';


@Component({
    selector: 'app-album-table',
    templateUrl: './album-table.component.html',
    styleUrls: ['./album-table.component.scss'],
    imports: [MatFormField, MatLabel, MatInput, ReactiveFormsModule, MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow]
})
export class AlbumTableComponent implements OnInit {
  displayedColumns: string[] = ['country', 'artist', 'album', 'group', 'year', 'genres'];

  dataSource: MatTableDataSource<AlbumInfo>; 
  filterControl = new FormControl('');

  // MatSort / MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(albums);
  }

  ngOnInit() {
    // Add columns to filter predicate 
    this.dataSource.filterPredicate = (data: AlbumInfo, filter: string) => {

      const dataStr = Object.keys(data).filter(k => !['url','id'].includes(k)).reduce((currentTerm: string, key: string) => {
        return currentTerm + (data as { [key: string]: any })[key] + '◬';
      }, '').toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) != -1;
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
