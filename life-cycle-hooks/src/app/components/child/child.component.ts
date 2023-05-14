import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() userName = '';
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered', changes);

    if (!changes['userName'].isFirstChange()) {
      if (changes['userName'].currentValue === "Chris") {
        this.userName = 'Hello ' + this.userName
      } else {
        this.userName = changes['userName'].previousValue
      }
    }
  }
  ngOnInit(): void {
    console.log('ngOnInit from the child component');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck triggered');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - \'contentWrapper', this.content);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - wrapper', this.wrapper);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked triggered');
  }
  ngOnDestroy(): void {
    console.log('Child component is destroyed! :(');
  }
}
