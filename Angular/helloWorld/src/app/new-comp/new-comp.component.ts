import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

  @Input() featureSet: any;
  constructor(){ }

  ngOnInit(): void {
  }


}
