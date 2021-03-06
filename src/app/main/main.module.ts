import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { categoriesComponent } from './categories/categories.component';
import { newestmoviesComponent } from './newest-movies/newest-movies.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainRoutingModule } from './main-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HorrorCategoryComponent } from './specific-category/horror-category/horror-category.component';
import { ActionCategoryComponent } from './specific-category/action-category/action-category.component';
import { ComedyCategoryComponent } from './specific-category/comedy-category/comedy-category.component';
import { DramaCategoryComponent } from './specific-category/drama-category/drama-category.component';
import { FantasyCategoryComponent } from './specific-category/fantasy-category/fantasy-category.component';
import { MysteryCategoryComponent } from './specific-category/mystery-category/mystery-category.component';
import { RomanceCategoryComponent } from './specific-category/romance-category/romance-category.component';
import { FormsModule } from '@angular/forms';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { MyFavouratiesComponent } from './user-profile/my-favouraties/my-favouraties.component';
import { AddToWalletComponent } from './user-profile/add-to-wallet/add-to-wallet.component';
import { ChangePasswordComponent } from './user-profile/change-password/change-password.component';
import { MyMoviesComponent } from './user-profile/my-movies/my-movies.component';
import { AddTestimonialComponent } from './user-profile/add-testimonial/add-testimonial.component';

@NgModule({
  declarations: [ 
    LandingComponent,
    categoriesComponent,
    newestmoviesComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    TestimonialComponent,
    CarouselComponent,
    MovieDetailsComponent,
    AllShowsComponent,
    TopRatedComponent,
    UserProfileComponent,
    HorrorCategoryComponent,
    ActionCategoryComponent,
    ComedyCategoryComponent,
    DramaCategoryComponent,
    FantasyCategoryComponent,
    MysteryCategoryComponent,
    RomanceCategoryComponent,
    MyFavouratiesComponent,
    AddToWalletComponent,
    ChangePasswordComponent,
    MyMoviesComponent,
    AddTestimonialComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ] 
})
export class MainModule { }
