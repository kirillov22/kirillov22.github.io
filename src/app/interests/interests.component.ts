import { Component, OnInit } from '@angular/core';
import { Interest } from 'src/model/Interest';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent implements OnInit {
  public interests: Interest[];

  constructor() {
    this.interests = [
      {
        title: 'Board games',
        description:
          'I got interested in playing chess during the first nation-wide lock-down in 2020, then after it was lifted a friend introduced me to dominion. ' +
          'I was skeptical at first because I thought it was just going to be a night playing something similar to monopoly. ' +
          'However, after I had the rules explained to me and we started playing it was such a fun experience. Ever since then I have been hooked on playing and collecting board games',
        icon: 'boardgame.jpg',
      },
      {
        title: 'Basketball',
        description:
          'I have played basketball socially since high school and I still play it today. I am also interested in watching it, but most of the games are during the day when I am working so I try and catch some in the weekend if I am free',
        icon: 'basketball.jpg',
      },
      {
        title: 'Reading',
        description:
          'I started to get more into reading books over the past couple of years because its a nice break from a screen. I find sitting down with a great book is a nice way to relax and unwind. ' +
          'I quite like the thriller and mystery novels, in particular the Agatha Christie whodunit novels.',
        icon: 'reading.jpg',
      },
      {
        title: 'Music',
        description:
          'I love listening to music whether its to hype myself up with some rock or rap or whether its to relax and unwind with some indie hits or liquid drum and bass. ' +
          'I enjoy most genres and always enjoy discovering new music. I am also a big fan of Kiwi artists such as L.A.B, BENEE, SIX60, Shapeshifter ' +
          "and some lesser known ones like Mako Road, Soaked Oats, Marlon's Dreaming and Albion Place",
        icon: 'music.jpg',
      },
      {
        title: 'Craft beers',
        description:
          'After my uni years I discovered there were other beers out there apart from Speights, Tui and whatever was on special at the supermarket. I have grown to like IPAs and a few different stouts',
        icon: 'craft-beer.jpg',
      },
      {
        title: 'Technology',
        description:
          'I have been fascinated by technology from a young age. Growing up I always thought I would be an engineer or scientist because I was always curious about how things worked and ' +
          'I always loved to take things apart and see what was inside and how they worked. However, my passion for technology really started the day my dad brought home a computer. ' +
          'I remember I would often watch him play games on the computer and when I got older I started playing games myself. Eventually I learned about Visual Basic so I started making some small ' +
          'GUI apps using Visual Studio that would show different colours on the screen or calculate your age. Fast-forward a few years and now I am doing almost the same thing but in other languages',
        icon: 'monitor.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}
