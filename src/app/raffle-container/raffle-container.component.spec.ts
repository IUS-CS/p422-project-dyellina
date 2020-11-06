import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleContainerComponent } from './raffle-container.component';

describe('RaffleContainerComponent', () => {
  let component: RaffleContainerComponent;
  let fixture: ComponentFixture<RaffleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaffleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaffleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
