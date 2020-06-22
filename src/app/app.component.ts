import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slide', 
      [state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style(
        {
          transform: 'translate3d(-100%, 0, 0)'
        }
      )),
      state('inTablet', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('outTablet', style({
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out=>in', animate('400ms ease-in-out')),
      transition('inTablet=>outTablet', animate('400ms ease-in-out')),
      transition('outTablet=>inTablet', animate('400ms ease-in-out')),
    ]
    ),
    trigger('slideRouter', [
      state('out', style({
        transform: 'translate3d(0,-70%,0)'
      })),
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out=>in', animate('400ms ease-in-out')),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'material-app';
  menuState: string
  routerState: string
  openedSide = false
  size: string

  ngOnInit() {
    if(this.size === 'tablet') {
      this.menuState = 'inTablet'
      this.routerState = 'in'
    } else {
      this.menuState = 'in'
    }
  }

  constructor() {
    this.getScreenSize()
  }

  openMenu() {
    // this.menuState === 'in' ? this.menuState = 'out' : this.menuState = 'in'
    if(this.size === 'tablet') {
      if(this.menuState === 'inTablet') {
        this.menuState = 'outTablet'
      } else {
        this.menuState = 'inTablet'
        this.routerState = 'in'
      }
    } else {
      if(this.menuState === 'in') {
        this.menuState = 'out'
      } else {
        this.menuState = 'in'
      }
    }
    console.log(this.menuState)
  }

  onClicked() {
    if(this.size === 'tablet') {
      this.menuState = 'outTablet'
      this.routerState = 'out'
    } else {
      this.menuState = 'out'
    }
  }

  openSide() {
    this.openedSide = !this.openedSide
  }

  screenWidth: number

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    let check = 'desktop'
    this.screenWidth = window.innerWidth
    console.log(this.screenWidth)
    if(this.screenWidth <= 768) {
      this.size = 'tablet'
      this.routerState = 'out'
      this.menuState = 'outTablet'
    } else {
      this.size = 'desktop'
      this.menuState = 'in'
      this.routerState = 'in'
    }
    console.log(this.size)
  }
}
