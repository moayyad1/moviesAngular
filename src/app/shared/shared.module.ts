import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";
import {MatProgressSpinnerModule} from'@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import {NgxPrintModule} from 'ngx-print';
@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgbModule,
    SlickCarouselModule,
    VgCoreModule,
    HttpClientModule,
    YouTubePlayerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    NgxPrintModule,
    NgSelectModule,
    
   ],
   exports:[
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgbModule,
    SlickCarouselModule,
    VgCoreModule,
    HttpClientModule,
    YouTubePlayerModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    NgxPrintModule,
    NgSelectModule,
    ],
   providers: [HttpClient]

})
export class SharedModule { }
