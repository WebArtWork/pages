import { Injectable } from '@angular/core';
import { MongoService } from 'wacom';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppService {
public pages;
public curPage;
	constructor(private http: HttpClient,
		private mongo: MongoService,
		private router: Router) { 
		this.pages = mongo.get('pages');
	}
	create(page){
		console.log(page);
		if(!page.title||!page.description) return;
		this.mongo.create('pages', {
			title: page.title,
			description: page.description
		}, created=>{
			console.log(created);
			this.open(created._id);
		});
	}
	update(page){

	}
	delete(page){
		this.mongo.delete('pages', {
			_id: page._id
		});
	}
	
	open(page){
		return this.router.navigate(['/Page/' + page._id ]);
	}

  /*
	get
	create
	update
	delete
  */
}
