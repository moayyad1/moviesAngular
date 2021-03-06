import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { newestmoviesComponent } from './newest-movies/newest-movies.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { HorrorCategoryComponent } from './specific-category/horror-category/horror-category.component';
import { ActionCategoryComponent } from './specific-category/action-category/action-category.component';
import { ComedyCategoryComponent } from './specific-category/comedy-category/comedy-category.component';
import { DramaCategoryComponent } from './specific-category/drama-category/drama-category.component';
import { FantasyCategoryComponent } from './specific-category/fantasy-category/fantasy-category.component';
import { RomanceCategoryComponent } from './specific-category/romance-category/romance-category.component';
import { MysteryCategoryComponent } from './specific-category/mystery-category/mystery-category.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyFavouratiesComponent } from './user-profile/my-favouraties/my-favouraties.component';
import { AddToWalletComponent } from './user-profile/add-to-wallet/add-to-wallet.component';
import { ChangePasswordComponent } from './user-profile/change-password/change-password.component';
import { AddTestimonialComponent } from './user-profile/add-testimonial/add-testimonial.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'newest_movies',component:newestmoviesComponent},
  {path:'about',component:AboutComponent},
  {path:'movie-details',component:MovieDetailsComponent},
  {path:'contact',component:ContactComponent},
  {path:'all_shows',component:AllShowsComponent},
  {path:'top_rated',component:TopRatedComponent},
  {path:'horror_movies',component:HorrorCategoryComponent},
  {path:'action_movies',component:ActionCategoryComponent},
  {path:'comedy_movies',component:ComedyCategoryComponent},
  {path:'drama_movies',component:DramaCategoryComponent},
  {path:'fantasy_movies',component:FantasyCategoryComponent},
  {path:'romance_movies',component:RomanceCategoryComponent},
  {path:'mystery_movies',component:MysteryCategoryComponent},
  {path:'user_profile',component:UserProfileComponent},
  {path:'user_favouraties',component:MyFavouratiesComponent},
  {path:'add_balance',component:AddToWalletComponent},
  {path:'change_pass',component:ChangePasswordComponent},
  {path:'add_testimonial',component:AddTestimonialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
