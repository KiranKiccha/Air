import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FilipAir';

  familiy=[];

  familyList(){
    alert(this.familiy=['Sundaresh','Ambika','Harsha','Suma','Nanjundi','Kiran','Dinesh','Vaishu']);
  }


}
