import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http : HttpClient) { }


getMovieDetails(){
  return this.http.get<any>("http://localhost:9090/api/v1/movieTicket/movieTickets/all")
  .pipe(map((res:any)=>{
    return res;
  }))
}


deleteMovieDetails(id : number){
  return this.http.delete<any>("http://localhost:9090/api/v1/movieTicket/movieTickets/delete/"+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}
}

