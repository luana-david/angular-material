import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  minDate = new Date()
  maxDate = new Date (2020, 5, 30)

  options = ['Angular', 'Vue', 'React']
  objectOptions = [
    {name : 'Angular'},
    {name : 'Vue'},
    {name : 'React'},
  ]

  myControl = new FormControl
  filteredOptions: Observable<string[]>

  displayFn(subject) {
    return subject? subject.name : undefined
  }

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  private _filter(value: string) : string[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(option => option.toLowerCase().includes(filterValue))
  }

  selected: string;

  dateFilter = date => {
    const day = date.getDay()
    return day !== 0 && day!== 6
  }
}
