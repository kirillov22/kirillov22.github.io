import { Component, Input, OnInit } from '@angular/core';
import { TimeLineEvent } from 'src/model/TimeLineEvent';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  public timeLineEvents: TimeLineEvent[];

  constructor() {
    this.timeLineEvents = [
      {
        date: 'Future',
        description: ['Who knows what the future will hold or what opportunities could be right around the corner?'],
      },
      {
        date: '2018',
        summary: 'Verizon Connect - Software Engineer',
        description: [
          'Worked as a full-stack software engineer on mobile and web products.',
          'Utilized the following technologies Angular, React, Node.Js, C#, Kotlin, Java, SQL and Titanium (a cross-platform mobile framework).',
          'Played a key role in the delivery of numerous products and features for the compliance side of the business.',
          'Presented a handful of talks on both technical and non-technical topics to the wider group I was working in and also a few to the whole office.',
        ],
      },
      {
        date: '2016',
        summary: 'University of Canterbury - Bachelor of Science in Computer Science',
        description: [
          'Started university where I really developed my passion for software development and computer science.',
          'Learnt how to study independently, work hard to achieve my goals and many other valuable lessons.',
          "One of the most memorable was that being a great software developer isn't always about coming up with the best solution to a problem, but its about how you deal with the consequences of the decisions made by your former colleagues or potentially even your past self.",
          'Met some extraordinary people, made some life-long friends and although it was fun it was also quite a challenge, but looking back now I think all the hard work definitely paid off.',
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
