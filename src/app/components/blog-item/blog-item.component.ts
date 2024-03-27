import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit{

  allBlogs: Blog[]= [];
  limit:number =9
  searchKey: string= '';
  constructor(private _blogsService: BlogsService){
  }

ngOnInit(): void {
  this._blogsService.limit.subscribe((res)=>{
    this.limit = res;
    this.getAllBlogs();
   });

   this._blogsService.searchValue.subscribe((res)=>{
    this.searchKey = res;
   });

}

getAllBlogs(){
this._blogsService.getBlogs(this.limit).subscribe({
  next:(res)=>{
    // console.log(res);
    this.allBlogs = res;
  },
  error:(err)=>{
    console.log(err);
    
  }
})
}

}
