import {Component, Optional} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app-material.component.css']
})
export class AppComponent {
    //문자열 타입의 title 변수 선언과 동시에 값 할당
    title = 'Tour of Heroes';

    isDarkTheme: boolean = false;
}
//<my-heroes></my-heroes>
//<a routerLink="/heroes">Heroes</a>
//    <router-outlet></router-outlet>