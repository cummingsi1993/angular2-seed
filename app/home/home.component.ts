import { Component } from '@angular/core';
import { Components } from 'angular2-ui/components'

@Component({
	selector:'home',
	templateUrl: 'app/home/home.component.html',
	directives: [Components]
})
export class HomeComponent { 


	constructor() { 

		this.items = [
			new ListItem('Thing 1', true),
			new ListItem('Thing 2', false),
			new ListItem('Thing 3', false),
			new ListItem('The Other Thing', false),
		];

	}

	items:ListItem[];

	itemDisplay(x:ListItem){
		return x.name;
	}

	itemActive(x:ListItem) { 
		return x.active;
	}

	onItemSelect(x:ListItem) { 

		//this.items.forEach(x => x.active = false);

		//x.active = true;
	}

}

class ListItem { 
	constructor(public name:string, public active:boolean) { 
		if (active == null) { 
			this.active = false;
		}
	}
	

}