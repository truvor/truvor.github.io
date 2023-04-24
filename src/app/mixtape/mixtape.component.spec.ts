import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MixtapeComponent } from './mixtape.component';

describe('MixtapeComponent', () => {
  let component: MixtapeComponent;
  let fixture: ComponentFixture<MixtapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixtapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
