import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Img } from 'src/app/interfaces/image';
import { Project } from 'src/app/interfaces/project';
import { ImageloaderService } from 'src/app/services/imageloader.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})


export class ProjectEditComponent implements OnInit {

  constructor(private projectService: ImageloaderService,
    private route: ActivatedRoute,
    private location: Location) {
    this.route.params.subscribe(params => this.id = params.projectId);
  }

  isDelete: boolean = null;
  isSuccess: boolean = null;
  persentage: number;

  // project: Project = null;

  project$: Observable<Project> = null;
  projectThumb$: Observable<Img>;

  // projectThumb;
  imgArr: Img[] = [];

  // Project Id
  id: string;

  // Input type='file' client views
  thumbFileName: string = null;
  fileCounter: number = null;

  progressBar:number = null;

  getProject() {
    // Project collection
    this.project$ = this.projectService.getProjectDetail(this.id).pipe(
      tap(() => {
        this.getProjectThumb();
      }),
      map((projectItem) => {
        return {
          id: projectItem.id,
          ...projectItem.data()
        } as Project
      })
    );
  }

  getProjectThumb() {
    this.projectThumb$ = this.projectService.getProjectThumb(this.id).pipe(
      map((projectThumb) => {
        return projectThumb;
      })
    );
  }


  editThumb(event) {
    const thumb = event.target.files[0];
    this.thumbFileName = thumb.name;
    this.projectService.deleteThumb(this.id);
    this.projectService.setThumb(this.id, thumb).subscribe(
      data => {
        this.persentage = data;
        if (data === 100) {
          this.projectThumb$ = this.projectService.getProjectThumb(this.id);
        }
      }
    );
  }

  getImages() {
    this.projectService.getImages(this.id).subscribe(
      data => {
        data.items.map(val => {
          val.getDownloadURL().then(
            imgPath => this.imgArr.push({ url: imgPath, name: val.name })
          )
        })
      }
    )
  }

  deleteImage(img: Img) {
    for (let i = 0; i < this.imgArr.length; i++) {
      if (img.name === this.imgArr[i].name) {
        this.imgArr.splice(i, 1);
      }
    }
    this.projectService.deleteImage(this.id, img.name);
  }


  editImages(event) {
    const imgFiles = event.target.files;
    this.fileCounter = imgFiles.length;
    this.projectService.editImages(imgFiles, this.id).subscribe(
      data => {
        console.log(data);
        this.progressBar = data;
        if(this.progressBar === 100) {
              
        }
      }
    );
  }

  saveData(form: NgForm) {
    this.projectService.editData(this.id, { ...form.value }).then(
    ).finally(
      () => {
        this.isSuccess = true;
        this.location.back();
      }
    );
  }



  ngOnInit(): void {
    this.getProject();
    this.getImages();
  }

}
