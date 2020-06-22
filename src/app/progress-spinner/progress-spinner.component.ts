import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {
  loaded = true

  constructor() { }

  ngOnInit(): void {
  }

  load() {
    this.loaded = false
    setTimeout(() => {
      this.loaded = true
    }, 3000)
  }
}
