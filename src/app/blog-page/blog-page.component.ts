import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Blog, blogs } from '../blog-list/blog-list.component';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})

export class BlogPageComponent implements OnInit {
  blog: Blog;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.blog = blogs[+params.get('id')]
    })
  }

}
