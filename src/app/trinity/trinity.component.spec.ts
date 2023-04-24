import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinityComponent } from './trinity.component';

describe('TrinityComponent', () => {
  let component: TrinityComponent;
  let fixture: ComponentFixture<TrinityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrinityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrinityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
