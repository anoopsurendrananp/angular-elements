import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../shared/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  items: any = [];
  spot = 'assets/images/fruits/apples.jpg';

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.getItems()
  }

  getItems() {
    this.items = this.galleryService.getFruits();
    console.log('INFO', this.items);
  }

}
