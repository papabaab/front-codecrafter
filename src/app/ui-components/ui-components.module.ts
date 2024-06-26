import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormTemplateComponent } from './form-template/form-template.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, FormTemplateComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent, FooterComponent, FormTemplateComponent, LoaderComponent]
})
export class UiComponentsModule { }
