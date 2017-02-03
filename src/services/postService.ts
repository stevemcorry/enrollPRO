import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService{
    constructor(private http: Http,public storage: Storage) {}

    requestOAuth(user) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post('http://enrollpro.coopertechnology.com/oauth/token', user, headers).map((res: Response) => res.json());
    }



    store(user){
        this.storage.set('name', user.username).then(() => {
            console.log('Name has been set');
        });
        this.storage.set('password', user.password).then(() => {
            console.log('Password has been set');
        });
    }
    gett(){
        this.storage.get('name').then((name) => {
            console.log('Name: ' + name);
        });
        this.storage.get('password').then((name) => {
            console.log('password: ' + name);
        });
    }


}
    