import { Injectable } from '@angular/core';
import { MongoService } from 'wacom';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppService {
public pages;
public templates;
public curPage;
	constructor(private http: HttpClient,
		private mongo: MongoService,
		private router: Router) { 
		this.pages = mongo.get('pages');
		http.get < any[] > ('/waw/pages/templetes').subscribe(resp => {
			console.log(resp);
			this.templates = resp;
		})
	}
	create(){
		this.mongo.create('pages', created=>{
			console.log(created);
			this.open(created);
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
		setTimeout(() => {
			return this.router.navigate(['/Page/' + page._id ]);
		}, 100);
		
	}

  /*
	get
	create
	update
	delete
  */
}
