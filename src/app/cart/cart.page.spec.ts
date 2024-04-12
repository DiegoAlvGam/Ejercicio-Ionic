import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { CartPage } from './cart.page';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../services/data.service';

describe('CartPage', () => {
  let component: CartPage;
  let fixture: ComponentFixture<CartPage>;
  let dataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [DataService] 
    }).compileComponents();

    fixture = TestBed.createComponent(CartPage);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService); 
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Verifica que el carrito este vacio', () => {
    expect(component.cartItems.length).toEqual(0);
  });
  it('Verifica que se llame al metodo getCart()', () => {
    spyOn(dataService, 'getCart').and.returnValue([]); 
    component.ngOnInit(); 
    expect(dataService.getCart).toHaveBeenCalled();
  });
  it('Elimina productos', () => {
    component.cartItems = [{ id: 1, name: 'Manzana', price: 10 }];
    component.removeFromCart(component.cartItems[0]); 
    expect(component.cartItems.length).toEqual(0); 
  });
  it('Regresa a lista d eproductos', () => {
    const navigateSpy = spyOn((<any>component).router, 'navigateByUrl');
    const backButton = fixture.debugElement.nativeElement.querySelector('ion-button[routerLink="/lista-productos"]');
    backButton.click(); 
    expect(navigateSpy).toHaveBeenCalledWith('/lista-productos');
  });
});
