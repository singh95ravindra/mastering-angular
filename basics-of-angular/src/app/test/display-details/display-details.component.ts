import { Component } from '@angular/core';

@Component({
    selector: 'display-details',
    templateUrl: 'display-details.component.html',
    styleUrls:['display-details.component.css']
})
export class DisplayDetailsComponent{
    isParaVisible = true;
    allEvents = [];

    toggleAndAddTimestamp(){
        this.isParaVisible = !this.isParaVisible;
        this.allEvents.push(new Date());
    }

    getColor(i:number){
        return this.isMoreThanFive(i)?'blue':'white';
    }

    isMoreThanFive(i:number){
        return i>=5;
    }
}