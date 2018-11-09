import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ListComponent } from './pages/list/list.component';
import { PageComponent } from './pages/page/page.component';

const routes: Routes = [{
  path: '',
  component: ListComponent
}, {
  path: 'Page/:pageId',
  component: PageComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
  	AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
