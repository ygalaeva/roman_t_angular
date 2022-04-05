import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ImageloaderService } from 'src/app/services/imageloader.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {
  projectImageList: Object | null;
  projectThumb;
  project: Object;
  projectLoader: number;

  projectThumbName: string = null;
  projectFilesCounter: number = null;

  constructor(public imageService: ImageloaderService) { }

  uploadThumb(event) {
    this.projectThumbName = event.target.files[0].name;
    this.projectThumb = event.target.files[0];
  }

  upload(event) {
    this.projectFilesCounter = event.target.files.length;
    this.projectImageList = event.target.files;
  }

  addProject(form: NgForm) {
    this.project = { projectInfo: form.value, projectImages: this.projectImageList, projectThumb: this.projectThumb }
    this.imageService.upload(this.project);

    this.imageService.percent.subscribe(
      val => this.projectLoader = val
    )
  }

  ngOnInit(): void {
  }

}
