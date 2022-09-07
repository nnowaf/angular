import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GuardGuard } from './auth/guard.guard';
import { BukutamuComponent } from './bukutamu/bukutamu.component';
import { HomeComponent } from './home/home.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { PlainlayoutComponent } from './plainlayout/plainlayout.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'home',
    redirectTo :'',
    pathMatch: 'full'
  },
  {
    component : TableComponent,
    canActivate : [GuardGuard],
    path : 'data'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
