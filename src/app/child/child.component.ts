import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent {

  @Input()
  first:any;



  // event emitter : send response back to parent
  @Output()
  eventEmitter=new EventEmitter();



  

  products=[

    new Product("mobile",1,1000),
    new Product("TV",2,12000),
    
    
  ]

  




  getProduct():any{
    let name=this.first;
    let res="";
   
    for(let i=0;i<this.products.length;i++){
    
      if(name==this.products[i].pname){
        
        res=this.products[i].pcost;
      
        break;
      }
    }

    this.eventEmitter.emit(res);

  }

}
