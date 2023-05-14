import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  isChildDestroyed = false;

  ngOnInit(): void {
    console.log('ngOnInit from the parent component');
  }
  userName = 'Maria';

  updateUser() {
    this.userName = 'Chris';
  }

  destroy() {
    this.isChildDestroyed = true;
  }
}
