import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchPipe } from './pipes/search.pipe';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AllblogsComponent } from './components/allblogs/allblogs.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { ErrorsComponent } from './shared/errors/errors.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPipe,
    NotFoundComponent,
    AllblogsComponent,
    BlogItemComponent,
    LoaderComponent,
    ErrorsComponent,
    PaginatorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
