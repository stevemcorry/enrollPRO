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
    getTasks(){
        return this.http.get('/assets/tasks.json')
        .map( res => {
            return res.json();
        })
    }

    getContacts(){
        let headers = new Headers({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmYTY1YjE1NzNlNWFiNTA4ZjEwYzkxN2E2OGZiNDY5NDk2NmFlNjg2YjM1ZDE3MGFhNDRhMWU0NDJiODVhMjVjM2FmOWFmM2VhNDJlNzk3In0.eyJhdWQiOiIyIiwianRpIjoiZmZhNjViMTU3M2U1YWI1MDhmMTBjOTE3YTY4ZmI0Njk0OTY2YWU2ODZiMzVkMTcwYWE0NGExZTQ0MmI4NWEyNWMzYWY5YWYzZWE0MmU3OTciLCJpYXQiOjE0ODYwNjQ0NTMsIm5iZiI6MTQ4NjA2NDQ1MywiZXhwIjoxNTE3NjAwNDUzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.l_aiY5LHISCzxsE97FYNGblkmr6Dap8yiEA_ftSOAaPKbUmDgApODOopzu6eaSZBkSpVVBc3TCgG5VDHC0oX8tGWSvb4DlUV4a8WmpILRpk03R2zhXyQMvCxSRT0DO0MpF9O5-jamPC_a6YHGHQiZyEiHFiQdxWGILodTTUO0GOWtwhswFNL1j52LiCkh3dOLKgReidOLtZ_N_uVspZ7vqRvlWvKJfFMVO7ZnPuHEK--7nhELSilc-IDrTdx6SydqIDRue7tts1K37GWc_a6-73a9AR85k3nJv6mlXOxnDLfVhzDeZVYhZ3Yg1N2f08qrYBNsU8pUW60Jk2OjrZZeSC0ti-5JaSJjg7SPnHn-rIbiYBiWcA7g0bUkyykXP_anD5SPhfzpxwVVtKIq4hCc4jG7vJfU4QRIGhBFR83rTePVOwEFWUWdC6GeekqxrLuU6C2WehscZxA83Tic6vizSrjOL_tMoam86pUifo3l8I3Bh7FOuKnJQbDZMviPuq3D4dECo53_J5YVXO02kzQhccsdPWNvMnSWmbSr7pnsJ6ji0tLfqcVPxMySGo9Sth5WelQRiYOIMGHeAz_GnIYqXjBa2fQ7FrhKtDtgv9cGR9R4eltBlULRGRncArD2snwXe0m0G97bo5wOt3RsFgiXkr1HU3nlvpsEPw8MqyYCsY' });
        return this.http.get('http://enrollpro.coopertechnology.com/api/contacts', headers)
        .map(res=>{
            return res.json();
        })
    }
}