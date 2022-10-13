import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})

export class SidePanelComponent implements OnInit {


  constructor() {
  }
  getStyle(path: string) {

    return window.location.pathname == path ? '1' : '0.6';
  }

  ngOnInit(): void {
  }

}
