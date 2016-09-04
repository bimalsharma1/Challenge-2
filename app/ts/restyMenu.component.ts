import {Component, Pipe, PipeTransform} from 'angular2/core';
import {RestyMenuService} from './restyMenu.service';

@Component({
    selector: 'resty-Menu',
    providers: [RestyMenuService],
    templateUrl: './app/ts/restyMenu.components.html'
})

export class RestyMenuComponent {
    getData : Array<string>;
    constructor (private _httpService:RestyMenuService) { 
        this._httpService.getCurrentMenu()
        .subscribe(
            data => this.getData = data,
            error => alert(error),    ///ERROR handling
            () => console.log("Finished")
        );} 
}