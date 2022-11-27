import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ComandasService {

  url = "https://mini-tpv-backend-production.up.railway.app:"+process.env.PORT+"/comandas/add"
  constructor(private http:HttpClient) { }
 
  public addComanda(comanda:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
    };
    return this.http.post(`${this.url}`,comanda,httpOptions)
  }

}
