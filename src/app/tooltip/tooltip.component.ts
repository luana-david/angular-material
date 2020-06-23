import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  constructor(private snakBar: MatSnackBar, private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openSnackbar(message,action) {
    let snackbarRef = this.snakBar.open(message, action, {duration: 2000})
    snackbarRef.afterDismissed().subscribe(() =>{
      console.log('Snackbar undone')
    }
    )

    snackbarRef.onAction().subscribe(() => {
      console.log('Was clicked')
    })
  }

  openCustomSnack() {
    this.snakBar.openFromComponent(CustomSnackBarComponent, {duration: 2000})
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {data: {name: 'Luana'}})

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }
}

@Component({
  selector: 'custom-snackbar',
  template: "<span style='color: orange'>Custom Snackbar</span>"
})

export class CustomSnackBarComponent { }
