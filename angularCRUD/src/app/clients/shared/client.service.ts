import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from "rxjs/operators";
import { Client } from './client.model';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  selectedClient : Client;
  clientList : Client[];
  constructor(private http : Http) { }

  postClient(cli : Client){
    var body = JSON.stringify(cli);
    var headerOptions = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http.post('http://localhost:56823/api/Client', body, requestOptions).pipe(map(x => x.json()));
  }

  getClientList(){
    this.http.get('http://localhost:56823/api/Client')
    .pipe(map((data : Response) => {
      return data.json() as Client[];
    })).toPromise().then(x => {
      this.clientList = x;
    })
  }

  putClient(id, cli){
    var body = JSON.stringify(cli);
    var headerOptions = new Headers({ 'Content-Type' : 'application/json' });
    var requestOptions = new RequestOptions({method : RequestMethod.Put, headers : headerOptions});
    return this.http.put('http://localhost:56823/api/Client/' + id, body, requestOptions).pipe(map(res => res.json()));
  }

  deleteClient(id: string){
    return this.http.delete('http://localhost:56823/api/Client/' + id).pipe(map(res => res.json()));
  }
}

