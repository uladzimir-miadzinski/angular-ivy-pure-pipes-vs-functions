import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayCounterComponent
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
  @Input() counter: number;
  @Input() prefix: string;

  mSquare(): number {
    console.log('DCC: Method Square');
    return this.counter * this.counter;
  }

  get gSquare(): number {
    console.log('DCC: Getter Square');
    return this.counter * this.counter;
  }

  ngDoCheck(): void {
    console.log('DCC: ngDoCheck');
  }

  ngAfterViewChecked(): void {
    console.log('DCC: ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('DCC: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('DCC: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('DCC: ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('DCC: ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('DCC: ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('DCC: ngOnInit');
  }
}
