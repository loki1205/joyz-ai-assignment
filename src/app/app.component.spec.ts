import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, TreeViewComponent] // <-- include it here
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
