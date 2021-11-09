import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from "../api.service";
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-wordpress-vis',
  templateUrl: './wordpress-vis.component.html',
  styleUrls: ['./wordpress-vis.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WordpressVisComponent implements OnInit {
  
  dataSource: any;
  columnsToDisplay = ['id', 'slug', 'status', 'title', 'date'];
  expandedElement: any | null;
  
  constructor(private _apiService:ApiService) { }
  
  ngOnInit(): void {
    this._apiService.getWPApi().subscribe(resp => {
      console.log(resp)
      this.dataSource = resp;
    });
  }

  
}