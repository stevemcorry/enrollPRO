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
        let headers = new Headers({ 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY4NzU2Y2MwZDIxNjJjM2Q3YTEwYzcwYjU5NmEzMDZlMDRmZDQzMzJiZjFiMjdjMjU1OWM4ZTJmOGU5MjllOGZjNjZiZDRkNjNhNGQ4N2FmIn0.eyJhdWQiOiIyIiwianRpIjoiZjg3NTZjYzBkMjE2MmMzZDdhMTBjNzBiNTk2YTMwNmUwNGZkNDMzMmJmMWIyN2MyNTU5YzhlMmY4ZTkyOWU4ZmM2NmJkNGQ2M2E0ZDg3YWYiLCJpYXQiOjE0ODYwNzEwMDUsIm5iZiI6MTQ4NjA3MTAwNSwiZXhwIjoxNTE3NjA3MDA1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ieVeVYCaH-2UR_jp2pqMypM-H2ueNoLjEvq2xwrBIsd2bb5AMjrd-DhnO8ZSdImJad0nDdyfyLsjKLp99F4OALX102G2VnFwYwLmpW3f8-jMWYeSZgIMtXm5Vq49Zh2pqs-i5OadlM84u_81limxN_W4XbfYTfpzqdQT0Vu7JokC6CcEnSxcndpQykl0xr1nptDqj9UHQZqnB3w6hAi-Ae1Ul3TE_dk1SfypPsvp2-7WS933Tf3hmyza0EAaSX6ySLeDdGOHF0HI1XvEm1IE19qSg4qQsX9R8mYtZoOPNLdrhVwmXX-8FGOS4Em54sTrunu-pO8X701Eq3TAeksbyxauo_TebcoNOC3-uvw0_q3IuA6EMpxXECxvB1qUcAtWPjWPAhEtsJkHS6LfyADMqkflkfgUSVzIIbrZnqU6CJNl9S8t74XqcOpkiHs4cCb8k57SIzaixpBepMupIP8WwhunRYdcnvQpZ6q99I6XlsCYKF1Uq8tJ3IzbtpzTvGVykvcFwvGvy8eBo9JQZf9kfRLkk18Z_xOEmGIqAcWwAZQUGTDIpORb7wltc7qdI6XUSlJqzSH_e_Swh1eTuM8ym_vKWmGiMVSqlRCrqBx9F36vwrD3H6fLhte0TFNZD8ZAz4sKtRhbR3mnVgNexdRxfkVuNDNFN-HEnw0nGN-JQFI' });
        return this.http.get('http://enrollpro.coopertechnology.com/api/contacts', headers)
        .map(res=>{
            return res.json();
        })
    }
}