import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { PlainlayoutComponent } from './plainlayout/plainlayout.component';
import { BukutamuComponent } from './bukutamu/bukutamu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableComponent } from './table/table.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    PlainlayoutComponent,
    BukutamuComponent,
    HomeComponent,
    AboutComponent,
    TableComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
