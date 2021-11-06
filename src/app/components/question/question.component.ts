import { Component, OnInit } from '@angular/core';
import {WordsService} from "../../services/words.service";
import {WordType} from "../../data/models";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // @ts-ignore
  word: WordType = null;

  constructor(private wordService: WordsService) { }

  ngOnInit(): void {
    this. fetchWord();
  }

  private fetchWord(): void {
    // @ts-ignore
    this.word = this.wordService.getWords().shift()
  }

  addToNouns(word: WordType): void {
    this.wordService.addNoun(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType): void {
    this.wordService.addVerbs(word);
    this.fetchWord();
  }

  check(): void {
    this.wordService.check();
  }

}
