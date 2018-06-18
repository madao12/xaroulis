import { Component, OnInit } from '@angular/core';
import { GREEK } from '../greek-text';
import { ENGLISH } from '../english-text';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  content = GREEK;



  constructor() { }

  ngOnInit() {
  }

  changeLanguage(language: String) {
    if (language === 'gr') {
      this.content = GREEK;
    } else {
      this.content = ENGLISH;
    }

  }


}
