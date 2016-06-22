import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig } from '@angular/router-deprecated';
import { UI_COMPONENTS } from 'angular2-ui/index';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'seed-app',
  templateUrl: 'app/app.component.html',
  providers: [ROUTER_PROVIDERS],
  directives: [UI_COMPONENTS, ROUTER_DIRECTIVES]
})
@RouteConfig([{
	path:'/home',
	name: 'Home',
	component: HomeComponent,
	useAsDefault: true
}])
export class AppComponent { 
	constructor() { 
		
	}

	ngOnInit() { 
		//Place any initialization logic here...
	}
}