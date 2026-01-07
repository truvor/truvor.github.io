import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AlbumComponent } from "./album.component";
import { ActivatedRoute } from "@angular/router";

describe("AlbumComponent", () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: {}, url: [] } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
