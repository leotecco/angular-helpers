import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  test1$: Subject<string>;
  test1: Array<string> = [];

  ngOnInit() {
    this.initTest1();
  }

  initTest1() {
    if (!this.test1$ || this.test1$.isStopped) {
      this.test1$ = new Subject();
      this.test1$.
        debounceTime(500)
        .distinctUntilChanged()
        .subscribe((text) => {
          this.test1.push(text);
          console.log(this.test1)
        });
    }
  }

  stopTest1() {
    this.test1$.unsubscribe();
    this.test1 = [];
  }

  changeTest1(event) {
    if (!this.test1$.isStopped) {
      let text = event.target.value
      this.test1$.next(text);
    }
  }
}
