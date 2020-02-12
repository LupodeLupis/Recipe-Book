import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    @Output() navigateToFeature: EventEmitter<string>;

    constructor() {
        this.navigateToFeature = new EventEmitter<string>();
    }

    navigateToRecipe(feature: string) {
        this.navigateToFeature.emit(feature);
    }
    navigateToShopping(feature: string) {
        this.navigateToFeature.emit(feature);
    }

    ngOnInit() {
    }
}

