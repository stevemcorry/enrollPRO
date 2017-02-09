import { Injectable }     from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService{
    constructor(private http: Http,public storage: Storage) {}

    requestOAuth(user) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post('http://enrollpro.coopertechnology.com/oauth/token', user, headers).map((res) => res.json());
    }
    store(user, name){
        this.storage.set('token', user.access_token).then(() => {
            this.storage.set('name', name).then(()=>{
            console.log('Token has been set', user.access_token);
            })
        });
    }
    addContact(key, contact){
        let authHeader = new Headers();
            authHeader.append('Authorization', 'Bearer '+ key);
        return this.http.post('http://enrollpro.coopertechnology.com/api/contacts', contact, { headers: authHeader});
    }
    addAction(key, action){
        console.log('action');
        let authHeader = new Headers();
            authHeader.append('Authorization', 'Bearer '+ key);
        return this.http.post('http://enrollpro.coopertechnology.com/api/actions', JSON.stringify(action), { headers: authHeader});
    }

}