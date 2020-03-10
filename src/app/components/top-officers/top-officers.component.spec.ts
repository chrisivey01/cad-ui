import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOfficersComponent } from './top-officers.component';

describe('TopOfficersComponent', () => {
  let component: TopOfficersComponent;
  let fixture: ComponentFixture<TopOfficersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopOfficersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
