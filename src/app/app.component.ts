import { Component } from '@angular/core';

import '../../public/css/styles.css';

@Component({
    selector: 'core-app',
    templateUrl: './app.component.html',
    styles: [require('./app.component.less')]
})

export class AppComponent {
    title = "Axinom Core for ng2";    
 }