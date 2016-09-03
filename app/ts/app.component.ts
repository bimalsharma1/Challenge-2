import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {RestyMenuComponent} from './restyMenu.component';

@Component({
    selector: 'my-app',
    styleUrls:['./app/ts/style/style.css'], //I normally use sass here with scss
    templateUrl: './app/ts/app.component.html',
    directives: [AppComponent,RestyMenuComponent] 
})

export class AppComponent {
    topHeading = Config.MAIN_HEADING;
}
