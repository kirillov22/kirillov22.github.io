import { Component, OnInit } from '@angular/core';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faLinkedIn = faLinkedin;
  faGithub = faGithubSquare;
  faEmail = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
