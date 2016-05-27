import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig } from '@angular/router-deprecated';
import { Components } from 'angular2-ui/components';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'seed-app',
  templateUrl: 'app/app.component.html',
  providers: [ROUTER_PROVIDERS],
  directives: [Components, ROUTER_DIRECTIVES]
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