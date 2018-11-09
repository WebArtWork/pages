import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public a: AppService) {
  	a.curPage='PageList';
  }

  ngOnInit() {
  }

}
