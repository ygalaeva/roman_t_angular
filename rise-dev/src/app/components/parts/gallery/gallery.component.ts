import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ImageloaderService } from 'src/app/services/imageloader.service';
import { NgImageSliderComponent } from 'ng-image-slider'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnDestroy, OnInit {
  @Input() id: string;
  @ViewChild('gallery') slider:NgImageSliderComponent;
  imgArr = []
  arrows:boolean = false;  



  constructor(private projectService: ImageloaderService) { }
  getImages() {
    this.projectService.getImages(this.id).subscribe(
      data => {
        data.items.map(
          val => {
            val.getDownloadURL().then(
              imagePath => {
                this.imgArr.push({ image: imagePath, thumbImage: imagePath })
              }
            )
          }
        )
      }
    );
  }

  isClick() {
    
  }

  nextImage() {
    this.slider.prev()
  }
  prevImage() {
    this.slider.next();
  }

  ngOnInit(): void {
    this.getImages();
  }

  ngOnDestroy(): void {
    this.imgArr = [];
  }
}
