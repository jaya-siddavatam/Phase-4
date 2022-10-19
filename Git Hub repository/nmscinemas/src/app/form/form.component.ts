import { Component, OnInit } from '@angular/core';
import {  FormGroup ,FormControl,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { MovieTicket } from '../movie-ticket';
import { MovieTicketServiceService } from '../movie-ticket-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  movieName:string ="";
  language:string ="";
  Description:string="";
 // show_timing:string ="";
  Ticket_price:number=0;

 //totalPrice:string = sessionStorage.getItem('totalprice')
 
  movielistbyname:Array<MovieTicket> =[];
    loginref = new FormGroup ({
    email:new FormControl("RRR",[Validators.required]),
    pass:new FormControl("Commercial",[Validators.required]),
    show_timing:new FormControl("10:00",[Validators.required]),
    language :new FormControl("Telugu",[Validators.required]),
    tickets:new FormControl("",[Validators.required]),
    cost:new FormControl("300",[Validators.required])

  })
  constructor(public ms:MovieTicketServiceService , public router:Router) { }
   movieRef = new FormGroup({
    moviename:new FormControl()
  })



  ngOnInit(): void {
  }


  updateProduct(MovieTicket:any){
    this.Description=MovieTicket.Description;
    this.Ticket_price=MovieTicket.Ticket_price;
    this.movieName = MovieTicket.movieName;
    //this.show_timing=MovieTicket.show_timing;
    this.language=MovieTicket.language;
}

  
  findmoviebyname(){
    let moviename = this.movieRef.get('moviename')?.value;

    console.log(moviename);
    this.ms.searchMovieByName(moviename).subscribe({
      next:(result:any)=>this.movielistbyname=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("movielistbyname",this.movielistbyname)

    })
  }


  updateDataFromDb(){
    // let MovieTicket = {Description:this.Description,Ticket_price:this.Ticket_price,
    // movieName:this.movieName,show_timing:this.show_timing,language:this.language};
    let MovieTicket = {movieName:this.movieName};
    //let movie =JSON.stringify(MovieTicket);
    this.ms.searchMovieByName("rrr").subscribe({
      next:(result:any)=>this.movielistbyname=result,
      error:(error:any)=>console.log(error),
      complete:()=>{
          this.findmoviebyname();   
      }
    })
  }

  user(){

    let totalcost:any = this.loginref.value;
    sessionStorage.setItem("cost",totalcost.tickets);
    this.router.navigate(["payment"])
    // this.router.navigate{[]}
  }

}
