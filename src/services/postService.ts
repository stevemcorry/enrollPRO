import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService{

    constructor(private http: Http) {

    }

    // requestOAuth(user){
    //     return this.http.post('http://enrollpro.coopertechnology.com/oauth/token', user)
    //     .map( res => {
    //             return res.json();
    //         })
    // }

    requestOAuth(user) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post('http://enrollpro.coopertechnology.com/oauth/token', user, headers).map((res: Response) => res.json());
    }

}
    