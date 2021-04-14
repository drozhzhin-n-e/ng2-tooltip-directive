import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TooltipModule } from './tooltip';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let nativeEl: HTMLElement;
  let debugEl: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule, TooltipModule,
        ],
        declarations: [
          AppComponent
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    nativeEl = fixture.nativeElement;
    debugEl = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  xit(`should have as title 'tooltipAppNg11'`, () => {
    expect(debugEl.title).toEqual('tooltipAppNg11');
  });

  xit('should render title', () => {
    expect(nativeEl.querySelector('.content span').textContent)
      .toContain('tooltipAppNg11 app is running!');
  });

  it('should render h3:Properties', () => {
    expect(nativeEl.querySelector('h3').textContent).toContain('Properties');
  });

  it('should have someTooltip', () => {
    expect(nativeEl.querySelector('#someTooltip').textContent).toContain('Tooltip on top');
  });
});
