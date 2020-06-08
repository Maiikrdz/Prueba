import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiddlePage } from './fiddle.page';

describe('FiddlePage', () => {
  let component: FiddlePage;
  let fixture: ComponentFixture<FiddlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiddlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiddlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
