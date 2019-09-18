import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GalleryRoutes } from './gallery.routing';
import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GalleryRoutes)
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
