import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuitarPage } from './guitar.page';

describe('GuitarPage', () => {
  let component: GuitarPage;
  let fixture: ComponentFixture<GuitarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuitarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
