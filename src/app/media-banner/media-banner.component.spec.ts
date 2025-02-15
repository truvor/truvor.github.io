import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaBannerComponent } from './media-banner.component';

describe('MediaBannerComponent', () => {
  let component: MediaBannerComponent;
  let fixture: ComponentFixture<MediaBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
