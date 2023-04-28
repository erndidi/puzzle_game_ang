import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisplacedComponent } from './misplaced.component';

describe('MisplacedComponent', () => {
  let component: MisplacedComponent;
  let fixture: ComponentFixture<MisplacedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisplacedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisplacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
