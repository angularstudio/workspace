import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularstudioComponentFactoryComponent } from './angularstudio-component-factory.component';

describe('AngularstudioComponentFactoryComponent', () => {
  let component: AngularstudioComponentFactoryComponent;
  let fixture: ComponentFixture<AngularstudioComponentFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularstudioComponentFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularstudioComponentFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
