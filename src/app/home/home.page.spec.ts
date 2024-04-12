import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Titulo', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ion-title').textContent).toContain('Iniciar sesión');
  });

  it('Inicializacion de variables', () => {
    expect(component.username).toEqual('');
    expect(component.password).toEqual('');
  });

  it('Funcion del boton', () => {
    spyOn(component, 'login');
    const button = fixture.debugElement.nativeElement.querySelector('ion-button');
    button.click();
    fixture.detectChanges();
    expect(component.login).toHaveBeenCalled();
  });
});
