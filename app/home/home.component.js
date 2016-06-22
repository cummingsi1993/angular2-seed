"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('angular2-ui/index');
var HomeComponent = (function () {
    function HomeComponent(elementRef, modal) {
        this.elementRef = elementRef;
        this.modal = modal;
        this.items = [
            new ListItem('Thing 1', true),
            new ListItem('Thing 2', false),
            new ListItem('Thing 3', false),
            new ListItem('The Other Thing', false),
        ];
    }
    HomeComponent.prototype.showModal = function () {
        //this.modal.show({
        //	template: '<p> This is a modal </p>',
        //	templateUrl: null,
        //	keyboard: true,
        //	parent: this.elementRef
        //});
        this.modal.alert('OMG, What just happened', 'Something really weird happened, a modal appeared!');
    };
    HomeComponent.prototype.itemDisplay = function (x) {
        return x.name;
    };
    HomeComponent.prototype.itemActive = function (x) {
        return x.active;
    };
    HomeComponent.prototype.onItemSelect = function (x) {
        //this.items.forEach(x => x.active = false);
        //x.active = true;
    };
    HomeComponent = __decorate([
        core_1.Component({
            //The angular 2 team recommends prefixing all of your components. This is to prevent naming collisions with libraries that you pull in.
            selector: 'seed-home',
            templateUrl: 'app/home/home.component.html',
            directives: [index_1.UI_COMPONENTS],
            providers: [index_1.UIModalService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, index_1.UIModalService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var ListItem = (function () {
    function ListItem(name, active) {
        this.name = name;
        this.active = active;
        if (active == null) {
            this.active = false;
        }
    }
    return ListItem;
}());
//# sourceMappingURL=home.component.js.map