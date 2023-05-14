import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOverviewByCliComponent } from './component-overview-by-cli.component';

describe('ComponentOverviewByCliComponent', () => {
  let component: ComponentOverviewByCliComponent;
  let fixture: ComponentFixture<ComponentOverviewByCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentOverviewByCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentOverviewByCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
