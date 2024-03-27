import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrls: ['./allblogs.component.scss']
})
export class AllblogsComponent implements OnInit{

  allBlogs: Blog[]= [];
  limit:number =9
  searchKey: string= '';
  show: boolean = true
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
    this.allBlogs = res;
  },
  error:(err)=>{
    console.log(err);
    
  }
})
}

}
