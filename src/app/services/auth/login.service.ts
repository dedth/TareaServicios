import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { LoginRequest } from './loginRequest';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from './usuario'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credenciales:LoginRequest):Observable<User>{
   return  this.http.get<User>('././assets/data.json').pipe(
    catchError(this.handleError)
   )
    /* ('http://localhost:3000/api/v1/usurios/catalogue') */

  }

  private handleError (error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se adectectado un error ', error.error);
    }else{
      console.error('Backend retomo el codigo de estado',error.status,error.error);
    }
    return throwError(() => new Error('Algo fallo por favor intente nuevamente'));
  }


}

