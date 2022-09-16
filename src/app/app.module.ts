import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { PlainlayoutComponent } from './plainlayout/plainlayout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListprodukComponent } from './listproduk/listproduk.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListkategoriComponent } from './listkategori/listkategori.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    PlainlayoutComponent,
    HomeComponent,
    AboutComponent,
    ListprodukComponent,
    ListkategoriComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
