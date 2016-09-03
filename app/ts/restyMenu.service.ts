import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http'
import 'rxjs/add/operator/map';
import {Config} from './config.service';

//dependency injection 
//
@Injectable()
export class RestyMenuService {
    constructor (private _http: Http) {}

    getCurrentMenu(){
        return this._http.get(Config.dataSource)
        .map(res => res.json())
    }
}