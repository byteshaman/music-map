import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

/// Material
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


/// Components
import { AppComponent } from './app.component';
import { AlbumTableComponent } from 'src/components/album-table/album-table.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({ declarations: [
        AppComponent,
        AlbumTableComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatSortModule,
        MatInputModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSlideToggleModule], providers: [HttpClientModule, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
