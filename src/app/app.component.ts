import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  title = 'anatomical-structures-app';

  constructor(private _elementRef: ElementRef) {
  }

  // On initialization, the ng-version is hidden from DOM for security
  ngOnInit(): void {
    this._elementRef.nativeElement.removeAttribute("ng-version");
}
}
