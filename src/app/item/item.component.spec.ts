import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ItemComponent } from "./item.component";
import { ActivatedRoute } from "@angular/router";

describe("ItemComponent", () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ItemComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: {}, url: [] } },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
