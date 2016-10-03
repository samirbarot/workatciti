import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit, AfterViewInit {

  @ViewChild('myname') myName: ElementRef;
  @ViewChild('mybutton') myButton: ElementRef;
  @ViewChild('myinputbutton') myInputButton: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  OnClick(event, value) {

    let userName: string | null = '';
    console.log(userName);

    console.log('Entered Name:' + value);

    console.log(this.myName);
    console.log(this.myButton);
    console.log(this.myInputButton);

    $(this.myName.nativeElement).prop('value', 'Samir Barot');

    $(this.myButton.nativeElement).prop('innerText', 'Clicked !!');
    $(this.myButton.nativeElement).prop('className', 'btn btn-primary');

    $(this.myInputButton.nativeElement).prop('value', 'Clicked !!');
    $(this.myInputButton.nativeElement).prop('className', 'btn btn-warning');

    toastr.success('You have clicked.');
  }
}
