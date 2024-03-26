import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedInstrumentsComponent } from './recommended-instruments.component';

describe('RecommendedInstrumentsComponent', () => {
  let component: RecommendedInstrumentsComponent;
  let fixture: ComponentFixture<RecommendedInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedInstrumentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
