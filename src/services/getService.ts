import { Component, Input, OnInit } from '@angular/core';
import { Injectable }     from '@angular/core';
import {Storage} from '@ionic/storage';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetService implements OnInit{

    constructor(private http: Http, private storage: Storage) {}
    getProspects(){
        return this.http.get('../assets/prospects.json')
        .map( res => {
                return res.json();
            })
    }
    getTasks(){
        return this.http.get('/assets/tasks.json')
        .map( res => {
            return res.json();
        })
    }
    getPipelinePositions(){
        return this.http.get('')
    }
    getContacts(key){
        console.log('service', key);
            let authHeader = new Headers();
            authHeader.append('Authorization', 'Bearer '+ key);
            return this.http.get('http://enrollpro.coopertechnology.com/api/contacts', {headers: authHeader})
            .map(data=>{
                return data.json();
            })
    }
    
    getStorage(){
            return (this.storage.get('token').then((name) => {
            return name;
            }))
    }
    ngOnInit(){
    }
}