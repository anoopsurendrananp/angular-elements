import { Component, OnInit } from '@angular/core';
import { GalleryService } from './../../shared/services/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {

  contents: any = [];

  current = 1;
  index = 0;
  limit = 18;
  total = 42;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.getContents(this.index);
  }

  getContents(index) {
    // this.contents = this.galleryService.getFruits(index, 18);
    let res = this.galleryService.getFruits(index, this.limit);
    if (res.data) {
      this.contents = res.data.items;
      this.total = res.data.total;
    }
    console.log('INFO', this.contents, this.total);
  }

  pageClick(page) {
    this.current = page;
    this.index = page - 1;
    this.getContents(this.index);
  }


}
