import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
@Component({
  selector: 'app-all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.css']
})
export class AllShowsComponent implements OnInit {
search:any
trending:any=[{}];
user:any={};
categories:any=[{}];
categoryId:any;
  constructor(private movieService:MovieServiceService,private route:Router) {

    }
    
  ngOnInit(): void {
    this.getTrending();
    this.IsUserOwnIt();
    this.GetCategory();
    console.warn(this.categories);
    
  }
  getTrending()
  {  
    this.movieService.getallmovies().subscribe((res:any) => { (this.trending=res) },
    err => { console.log(err) }) 
  }
  goToDtails(id:any)
  {
   this.IsUserOwnIt();
   this.movieService.movieIdDetails=id;
   this.route.navigate(["movies/movie-details"]);
  }
  IsUserOwnIt()
  {
    this.user=localStorage.getItem('userToken');
  }
  GetCategory()
  {
    this.movieService.GetCategory().subscribe((res:any) => { (this.categories=res);     console.warn(this.trending) },
    err => { console.log(err) })
  }

}
