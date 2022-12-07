import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheIslandComponent } from './the-island.component';

describe('TheIslandComponent', () => {
  let component: TheIslandComponent;
  let fixture: ComponentFixture<TheIslandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheIslandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
