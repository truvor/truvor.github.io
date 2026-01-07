import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CanalComponent } from "./canal.component";
import { ActivatedRoute } from "@angular/router";

describe("CanalComponent", () => {
  let component: CanalComponent;
  let fixture: ComponentFixture<CanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanalComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: {}, url: [] } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
