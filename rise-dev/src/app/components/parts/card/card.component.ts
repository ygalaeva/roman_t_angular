import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/interfaces/project';
import { ImageloaderService } from 'src/app/services/imageloader.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() Item: Project = null;
  projectImgUrl$: Observable<string>;

  constructor(private projectService: ImageloaderService) { }

  getThumb() {
    this.projectImgUrl$ = this.projectService.getProjectThumb(this.Item.id).pipe(
      map((imgUrl) => {
        return imgUrl;
      })
    );
  }

  ngOnInit(): void {
    this.getThumb()
  }

}
