import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';

export const GalleryRoutes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    children: [
      {
        path: 'list',
        component: GalleryListComponent
      },
      {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];
