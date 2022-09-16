import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GuardGuard } from './auth/guard.guard';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { ListkategoriComponent } from './listkategori/listkategori.component';
import { ListprodukComponent } from './listproduk/listproduk.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { PlainlayoutComponent } from './plainlayout/plainlayout.component';

const routes: Routes = [
  {
    path : '',
    children: [
      {
        component : DataComponent,
        canActivate: [GuardGuard],
        path : 'data',
      },
      {
        component : ListkategoriComponent,
        path : 'kategori'
      },
      {
        component : ListprodukComponent,
        path : 'produk'
      },
      {
        component : HomeComponent,
        path : 'home'
      }
    ],
    component: MainlayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
