import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'product';

  pname:any;


  result:any;
  flag=false;

  getResponse(response:any):any{
    
    this.result=response;

    if(response!="")
      this.flag=true;
  }
}
