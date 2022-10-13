import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ModalBoxComponent } from './components/modal-box/modal-box.component';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyTaskComponent } from './components/my-task/my-task.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'my-task', component: PageNotFoundComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    NavBarComponent,
    HomeComponent,
    TaskComponent,
    TaskListComponent,
    ModalBoxComponent,
    PageNotFoundComponent,
    MyTaskComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
