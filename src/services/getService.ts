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
        let authHeader = new Headers();
        authHeader.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg5OTI3MzM4NWM0MTViNGY5MzVhZWIyMjdiMGI0ZTgzOTI5M2U1ZjA4ODgzMTgwNjFlZGVkZjAyZGZjMDBiODI4ZDBjNzZiMTdjOTAyYmI5In0.eyJhdWQiOiIyIiwianRpIjoiODk5MjczMzg1YzQxNWI0ZjkzNWFlYjIyN2IwYjRlODM5MjkzZTVmMDg4ODMxODA2MWVkZWRmMDJkZmMwMGI4MjhkMGM3NmIxN2M5MDJiYjkiLCJpYXQiOjE0ODYwNzI3OTcsIm5iZiI6MTQ4NjA3Mjc5NywiZXhwIjoxNTE3NjA4Nzk2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.YmdAFzsOUMvZAlybzS2zebTgl3MDIa1XZvnU4eBPEO49QK29m48kdyHQ40l6uYhRJ8PJCgM1_VIAHgQ7geBmYYvprcE-Fnqp25P1_cwmTQu6KgOOnVjx5OZLjZA8sar7mGxqCGkhHWuZdfOnIrCwYoLrRhNT3LS1NccQrntH2IQqewlYoQt5wSGA6fnArCpYeJV75XoRKMYJkOhDIOzpNFphA_NSOraholj-3ufsLhNMavdnvHw62aE4rOwXzsxJOfmEdI31xEHLyBQqHp6u7wC3Nc86C5c6iZftlUV1sOG5XNMKs2Nrj_gJoiTeS8ARMVk5aCiuTnEQy1Zxg_nt3sV_0ZDi2YbGZjaCi8t9-EvS4h6TyFvn8dbMtBKhIyF6AzZ7j2_7qj0dtSGqOCtfudqsJiSEpn9J0aX-iMlj942QSWFlpZGOVHex4Ij893Bf3uMZ9qSpPXwM8BCBIlH9x7TbQZicnOZeOE3G_xZfYHurEexdsuPeK-Xm9gYiambEBSgtXXcFAskA-FpJ4EDBWP_2sanuhntnD9OWXux-np5juTQ1YK59wDAlu4GAfeaOIbigHq-1S2LA0aG78P-ofn_dFEJkrITTwtSobhwzLMwxiE4Gde4UOliHxN-6R8lxv_sd191DHcS0-N2tun6kfxjNLLbnQGUze5OTQtwGUlQ');
        return this.http.get('http://enrollpro.coopertechnology.com/api/contacts', {headers: authHeader})
        .map(res=>{
            return res.json();
        })
    }
}