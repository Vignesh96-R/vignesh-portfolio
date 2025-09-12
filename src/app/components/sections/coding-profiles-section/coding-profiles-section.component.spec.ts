import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodingProfilesSectionComponent } from './coding-profiles-section.component';

describe('CodingProfilesSectionComponent', () => {
  let component: CodingProfilesSectionComponent;
  let fixture: ComponentFixture<CodingProfilesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingProfilesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingProfilesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 