import { Component, OnInit } from '@angular/core';

interface Blog {
  id: number,
  title: string,
  body: string,
  datePosted: Date,
};

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
