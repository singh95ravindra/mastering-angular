import { Component } from '@angular/core';

@Component({
    selector: 'test-examples',
    templateUrl: 'test.component.html',
    styleUrls: ['test.component.css']
})
export class TestComponent{
    userName = '';

    isUserNameEmpty(){
        return this.userName.length==0;
    }

    onResetUser(){
        this.userName = '';
    }
}