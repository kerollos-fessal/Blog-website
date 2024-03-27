import { Component } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
declare var $: any; 
@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent {


  constructor( private _blogsService: BlogsService){}

  reloadBlogs(){
    this._blogsService.getBlogs(9).subscribe({

    })
  }
}