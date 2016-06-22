import { Component, ElementRef, Inject } from '@angular/core';
import { UI_COMPONENTS, UIModalService } from 'angular2-ui/index';

@Component({
	//The angular 2 team recommends prefixing all of your components. This is to prevent naming collisions with libraries that you pull in.
	selector:'seed-home',
	templateUrl: 'app/home/home.component.html',
	directives: [UI_COMPONENTS],
	providers: [UIModalService]
})
export class HomeComponent { 


	constructor(private elementRef: ElementRef, private modal: UIModalService) { 

		this.items = [
			new ListItem('Thing 1', true),
			new ListItem('Thing 2', false),
			new ListItem('Thing 3', false),
			new ListItem('The Other Thing', false),
		];

	}

	items:ListItem[];

	showModal() { 
		//this.modal.show({
		//	template: '<p> This is a modal </p>',
		//	templateUrl: null,
		//	keyboard: true,
		//	parent: this.elementRef
		//});
		this.modal.alert('OMG, What just happened', 'Something really weird happened, a modal appeared!');
	}

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