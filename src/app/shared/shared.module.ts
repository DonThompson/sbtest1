import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SampleComponent } from './sample/sample.component';



@NgModule({
  declarations: [ButtonComponent, SampleComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, SampleComponent]
})
export class SharedModule { }
