import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  public applyForm !: FormGroup
  constructor(private formBulider : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.applyForm = this.formBulider.group({
      description:[''],
      ticket_price:[''],
      language :[''],
      movieName :[''],
      show_timing :[''], 
      
    })
  }

  Apply(){
    this.http.post<any>("http://localhost:9090/api/v1/movieTicket/movieTickets/add", this.applyForm.value)
    .subscribe(res=>{
      alert("ADDED Succesfully");
      console.log(res);
      this.applyForm.reset();
      this.router.navigate(['view']);   
    },err=>{
      alert("Something went wrong")
    })
  }

}
