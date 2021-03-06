import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { UpdateMovieComponent } from '../update-movie/update-movie.component';
import { UploadMovieComponent } from '../upload-movie/upload-movie.component';
@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css'],
})
export class AdminMoviesComponent implements OnInit {
  categoryId: number = 1;
  allMovies: any = [{}];
  catMovies: any = [{}];
  Categorys: any = [{}];
  nameSearch: string = '';
  searchResult: any = [{}];

  constructor(public myDialog: MatDialog, private service: MyServiceService,private spinner:NgxSpinnerService,private toast:ToastrService) {}

  ngOnInit(): void {
    this.getMovies();
    this.getCategory();
  }
  UploadMovie () {
    const dialogvar = this.myDialog.open(UploadMovieComponent, {
      height: '800px',
      width: '1400px',
    });
  }


UpdateMovie(id:any){

  const dialogConfig = new MatDialogConfig()
  
  dialogConfig.height='800px'
  dialogConfig.width='1400px'
  dialogConfig.data={movieID:id}

  const DialogRef=this.myDialog.open(UpdateMovieComponent,dialogConfig)

}



  getMovies() {
    this.service
      .requestCall('https://localhost:44391/api/Movie/GetMovie', 'Get')
      ?.subscribe((data) => {
        this.allMovies = data;
      });
  }
  getCategory() {
    this.service
      .requestCall('https://localhost:44391/api/Category/GetCategory', 'Get')
      ?.subscribe((data) => {
        this.Categorys = data;
      });
  }

  search() {
    let list: any = [];
    if (this.nameSearch) {
      this.allMovies.forEach((element: any) => {
        if (
          element.name
            .toString()
            .toLowerCase()
            .search(this.nameSearch.toLowerCase()) != -1
        ) {
          console.log(element.name);

          list.push(element);
        }
      });
      this.allMovies = list;
    } else {
      this.getMovies();
    }
  }
  DeleteMovie(id:any){
    this.service.requestCall("https://localhost:44391/api/Movie/DeleteMovie/"+id,"Delete")?.subscribe(
        (data) => {
          setTimeout(() => {
            this.spinner.hide();
          }, 1500);
          this.getMovies()
          this.toast.success('Deleted successfully');
        },
        (err) => {
          setTimeout(() => {
            this.spinner.show();
          }, 1500);
         this.toast.error('Error While Deleting')
        }
      );
    
   }
}
