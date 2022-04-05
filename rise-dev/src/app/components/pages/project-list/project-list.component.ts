import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/interfaces/project';
import { ImageloaderService } from 'src/app/services/imageloader.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(private projectService: ImageloaderService) { }

  projects$: Observable<Project[]> = null;

  getProjects() {
    this.projects$ = this.projectService.getProjects().pipe(
      map(
        (projectArr) => {
          if (projectArr.length != 0) {
            return projectArr.map((projectItem) => {
              return {
                id: projectItem.payload.doc.id,
                ...projectItem.payload.doc.data()
              } as Project
            })
          } else {
            return this.projects$ = null;
          }
        }
      )
    )
  }


  deleteProject(id: string) {
    this.projectService.deleteProject(id);
  }


  ngOnInit(): void {
    this.getProjects();
  }


}
