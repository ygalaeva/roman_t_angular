import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common'
import { Observable } from 'rxjs'

import { ImageloaderService } from 'src/app/services/imageloader.service';
import { Project } from '../../../interfaces/project';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {
  project: Project | any = null;
  imgSrc = [];
  id: string;

  constructor(private projectService: ImageloaderService, private route: ActivatedRoute, private location: Location) { }

  getProject() {
    this.projectService.getProjectDetail(this.id).subscribe(
      (data) => {
        this.project = { ...data.data() as Project }
      }
    )
  }
  
  
  
  
  goBack() {
    this.location.back();
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProject();
  }


}
