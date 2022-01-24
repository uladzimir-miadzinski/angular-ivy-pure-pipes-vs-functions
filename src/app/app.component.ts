import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  VERSION,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    DoCheck
{
  num = 0;
  prefix = '';

  increaseCount() {
    console.log('increase');
    this.num++;
  }

  decreaseCount() {
    console.log('decrease');
    this.num--;
  }

  changePrefix(event: Event) {
    this.prefix = (event.target as HTMLInputElement).value;
  }

  ngDoCheck(): void {
    console.log('AC: ngDoCheck');
  }
  ngAfterViewChecked(): void {
    console.log('AC: ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('AC: ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AC: ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AC: ngAfterViewInit');
  }
  ngOnDestroy(): void {
    console.log('AC: ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('AC: ngOnChanges', changes);
  }
  ngOnInit(): void {
    console.log('AC: ngOnInit');
  }
}
