import { Component, OnInit } from '@angular/core';

export interface Blog {
  id: number,
  title: string,
  body: string,
  datePosted: Date,
};

export const blogs: Blog[] = [
  { 
    id: 0,
    title: 'First Story',
    body: 'This is the body of the story.',
    datePosted: new Date('2020-04-07')
  },
  {
    id: 1,
    title: 'Second Story',
    body: 'This is the body of the story.',
    datePosted: new Date('2020-04-08')
  }
];

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})

export class BlogListComponent implements OnInit {
  blogs;

  constructor() { }

  ngOnInit(): void {
    this.blogs = blogs;
  }

}
