import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { materialImports } from './material-imports';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { QuotesService } from './quotes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    materialImports
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
