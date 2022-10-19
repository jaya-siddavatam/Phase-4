import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MovieService } from '../movie.service';
import { MovieModel } from './view-moviedetails.model';
@Component({
  selector: 'app-view-moviedetails',
  templateUrl: './view-moviedetails.component.html',
  styleUrls: ['./view-moviedetails.component.css']
})
export class ViewMoviedetailsComponent implements OnInit {
  formValue !: FormGroup;
  MovieModelobj : MovieModel = new MovieModel();
  MovieData !: any;


  constructor(private formbuilder: FormBuilder, private api : MovieService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      description:[''],
      ticket_price:[''],
      language :[''],
      movieName :[''],
      show_timing :[''], 
      
    })
    this.getAllMovies();
  }

  getAllMovies(){
    this.api.getMovieDetails()
    .subscribe(res=>{
      console.log(res);
      this.MovieData= res;
      
    })
  }
    deleteMovies(row: any){
      this.api.deleteMovieDetails(row.id)
      .subscribe(res=>{
        alert("Movie Deleted")
        this.getAllMovies();
      })
  
      
    }
  }


  




























