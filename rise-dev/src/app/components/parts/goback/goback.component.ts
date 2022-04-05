import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goback',
  templateUrl: './goback.component.html',
  styleUrls: ['./goback.component.scss']
})
export class GobackComponent implements OnInit {

  constructor(private location: Location) { }

  goBack() {
    this.location.back()
  }

  ngOnInit(): void {
  }

}
