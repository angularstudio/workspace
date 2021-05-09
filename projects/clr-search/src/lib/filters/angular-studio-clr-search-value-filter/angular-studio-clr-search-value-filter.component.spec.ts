import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStudioClrSearchValueFilterComponent } from './angular-studio-clr-search-value-filter.component';

describe('AngularStudioClrSearchValueFilterComponent', () => {
  let component: AngularStudioClrSearchValueFilterComponent;
  let fixture: ComponentFixture<AngularStudioClrSearchValueFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularStudioClrSearchValueFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStudioClrSearchValueFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
