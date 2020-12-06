import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { M5glossaryComponent } from './M5/m5glossary/m5glossary.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'm5/glossery', component: M5glossaryComponent },
  { path: '**', component: HomeComponent  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
