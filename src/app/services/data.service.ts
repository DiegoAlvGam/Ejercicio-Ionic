import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000';
  private cart: any[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    console.log('Estos son los productos')
    return this.http.get<any[]>(this.apiUrl + '/products');
  }

  addToCart(product: any): void {
    console.log('Producto agregado')
    this.cart.push(product);
  }
  getCart(): any[] {
    return this.cart; 
  }
  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.http.get<{ users: user[] }>(this.apiUrl).subscribe((data) => {
        const users = data.users;
        const user = users.find((u: { username: string; password: string; }) => u.username === username && u.password === password);
        if (user) {
          observer.next(true); 
        } else {
          observer.next(false);
        }
        observer.complete();
      });
    });
  }
}
