import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BukutamuComponent } from './bukutamu/bukutamu.component';
import { HomeComponent } from './home/home.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { PlainlayoutComponent } from './plainlayout/plainlayout.component';

const routes: Routes = [
  {
    component : MainlayoutComponent,
    path : 'apps',
    children: [
      {
        component : BukutamuComponent,
        path : 'bk'
      }
    ]
  },
  {
    component : PlainlayoutComponent,
    path : '',
    children : [
      {
        component : AboutComponent,
        path : 'about'
      },
      {
        component : HomeComponent,
        path : ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
