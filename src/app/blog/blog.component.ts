import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post-service'
import { Post } from '../models/post.model'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrayPosteos: Post[];
  filtrado: any;

  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.arrayPosteos = this.postService.getAll();
    console.log(this.arrayPosteos);
  }
  filtrarHumor() {
    this.arrayPosteos = this.postService.filtrarCategoria('humor')
    console.log(this.filtrado);
  }
  filtrarCoding() {
    this.arrayPosteos = this.postService.filtrarCategoria('coding');
  }
}
