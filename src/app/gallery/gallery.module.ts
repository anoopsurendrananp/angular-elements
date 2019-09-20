import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { GalleryRoutes } from './gallery.routing';
import { GalleryComponent } from './gallery.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild(GalleryRoutes)
  ],
  declarations: [
    GalleryComponent,
    GalleryListComponent
  ]
})
export class GalleryModule { }
