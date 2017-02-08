import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PutService{
    constructor(private http: Http,public storage: Storage) {}

    completeAction(key, id, action){
        console.log(action);
        let authHeader = new Headers();
            authHeader.append('Authorization', 'Bearer '+ key);
            authHeader.append('Content-Type','application/json')
        return this.http.put('http://enrollpro.coopertechnology.com/api/actions/' + id, JSON.stringify(action), { headers: authHeader})
        .map(res => console.log(res));
    }
    advancePipe(key, id, pipe){
        console.log('Advancing...', id, pipe)
        let authHeader = new Headers();
            authHeader.append('Authorization', 'Bearer '+ key);
        return this.http.put('http://enrollpro.coopertechnology.com/api/contacts/' + id, JSON.stringify(pipe), { headers: authHeader}).
        map(res => {
            console.log(res);
        })
        ;
    }

}