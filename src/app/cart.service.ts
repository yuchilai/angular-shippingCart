import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  constructor(
    private http: HttpClient
  ) { }

  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}



// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   constructor() {}

// }

// StackBlitz might generate the @Injectable() decorator without the { providedIn: 'root' } statement as above. Instead, the generator provides the cart service in app.module.ts by default. For the purposes of this tutorial, either way works. The @Injectable() { providedIn: 'root' } syntax allows tree shaking, which is beyond the scope of this guide.