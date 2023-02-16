import { Component} from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-driven-form-app';

  onSubmit(data : NgForm){
    console.log(data.value);
    
  }
  onClick(datas: NgForm){
   alert(JSON.stringify(datas.value,null,6))
    

  }
}
