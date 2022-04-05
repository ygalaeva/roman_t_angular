import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/interfaces/project';
import { ImageloaderService } from '../../../services/imageloader.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(public projectService: ImageloaderService) { }

  getProjects() {
    this.projects$ = this.projectService.getProjects().pipe(
      map((projectArr) => {
        return projectArr.map(
          projectItem => {
            return {
              id: projectItem.payload.doc.id,
              ...projectItem.payload.doc.data()
            } as Project
          }
        )
      })
    )
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
