import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todaydate: any;

  public persondata = [];

  constructor(private myservice: MyserviceService) {}

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();

    this.myservice.getData.subscribe((data) =>{
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
    })
  }
  title = 'Welcome to Angular';
  description = 'Welcome to our first Angular project. Start building your project with the most popular Javascript frameworks.';

  months = ['January','February','March','April','May','June','July','August','September','october','November','December'];

  isAvailable = true;

  simplePipeData="This is going really well!";

  setTrue(){
    console.log('Now we have set the vue to True!');
  }
  setFalse(){
    console.log('Now we have set the vue to False!');
  }

  firstFeature={
    heading : 'Feature One',
    body : "Some feature details for the first feature for demo."
  }
  secondFeature={
    heading : 'Feature Two',
    body : "Some feature details for the second feature for demo."
  }
  thirdFeature={
    heading : 'Feature Three',
    body : "Some feature details for the third feature for demo."
  }
  fourthFeature={
    heading : 'Feature Four',
    body : "Some feature details for the fourth feature for demo."
  }
}
