import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PurePipe } from './pure.pipe';
import { ImpurePipe } from './impure.pipe';
import { DisplayCounterComponent } from './display-counter/display-counter.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PurePipe, ImpurePipe, DisplayCounterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
