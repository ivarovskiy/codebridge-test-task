import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWrapperComponent } from './search-wrapper.component';

describe('SearchWrapperComponent', () => {
  let component: SearchWrapperComponent;
  let fixture: ComponentFixture<SearchWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
