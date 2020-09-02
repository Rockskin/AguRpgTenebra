import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { M5glossaryComponent } from './M5/m5glossary/m5glossary.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'm5/glossery', component: M5glossaryComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
