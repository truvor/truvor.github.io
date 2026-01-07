import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TrinityComponent } from "./trinity.component";
import { ActivatedRoute } from "@angular/router";

describe("TrinityComponent", () => {
  let component: TrinityComponent;
  let fixture: ComponentFixture<TrinityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrinityComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: {}, url: [] } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrinityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
