import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomicalStructuresListComponent } from './anatomical-structures-list.component';

describe('AnatomicalStructuresListComponent', () => {
  let component: AnatomicalStructuresListComponent;
  let fixture: ComponentFixture<AnatomicalStructuresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnatomicalStructuresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnatomicalStructuresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
