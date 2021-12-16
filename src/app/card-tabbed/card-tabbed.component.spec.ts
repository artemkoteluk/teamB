import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardTabbedComponent} from './card-tabbed.component';

describe('CardTabbedComponent', () => {
  let component: CardTabbedComponent;
  let fixture: ComponentFixture<CardTabbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTabbedComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTabbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
