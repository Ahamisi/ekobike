import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThemeLanguageSelctionPage } from './theme-language-selction.page';

describe('ThemeLanguageSelctionPage', () => {
  let component: ThemeLanguageSelctionPage;
  let fixture: ComponentFixture<ThemeLanguageSelctionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeLanguageSelctionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeLanguageSelctionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
