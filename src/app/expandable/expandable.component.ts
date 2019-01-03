import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss']
})
export class ExpandableComponent implements OnInit {

  @Input('expanded') expanded;
  @Input('expandedHeight') expandedHeight;

  currentHeight = 0;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.expanded);
    console.log(this.expandedHeight);
  }

  ngOnInit() {
  }

}
