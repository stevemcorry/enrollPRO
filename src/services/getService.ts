import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetService{

    constructor(private http: Http) {

    }

    getProspects(){
        return this.http.get('../assets/prospects.json')
        .map( res => {
                return res.json();
            })
    }
}