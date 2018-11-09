import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

	public newPage={};
  constructor(public a: AppService) { 
  	a.curPage='PageEdit';
  }

  ngOnInit() {
  }

}
