import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerHomeComponent } from './tower-home.component';

describe('TowerHomeComponent', () => {
  let component: TowerHomeComponent;
  let fixture: ComponentFixture<TowerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
