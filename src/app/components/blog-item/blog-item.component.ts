import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit{

  allBlogs: Blog[]= [];
  constructor(private _blogsService: BlogsService){}

ngOnInit(): void {
    this.getAllBlogs()
}

getAllBlogs(){
this._blogsService.getBlogs().subscribe({
  next:(res)=>{
    console.log(res);
    this.allBlogs = res
  },
  error:(err)=>{
    console.log(err);
    
  }
})
}

}
