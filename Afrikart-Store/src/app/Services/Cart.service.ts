import { Injectable } from "@angular/core";
import { Product } from "../Models/Product";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private items: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
    private count: number = 0;




    constructor() { }


    addToCart(product: any) {

        let prod = { ...product, quantity: 1 }
        let id = prod.id;

        if (this.items.length === 0) {
            this.items.push(prod);
            localStorage.setItem('cartItems', JSON.stringify(this.items));
            alert(`${prod.name}` + " " + "added to your cart!")
        } else {
            let index: number = -1;
            this.items = JSON.parse(localStorage.getItem('cartItems'));
            for (let i = 0; i < this.items.length; i++) {

                if (parseInt(id) === parseInt(this.items[i].id)) {
                    if (this.items[i].quantity === this.items[i].items_left) {
                        alert("Only" + " " + `${prod.items_left}` + " " + "in stock currently.")
                    } else {
                        this.items[i].quantity++;
                        prod.quantity = this.items[i].quantity;
                        alert('Item already exists in cart. Quantity added.')

                    }

                    index = i;
                    break;

                }
            }

            if (index === -1) {
                this.items.push(prod);
                localStorage.setItem('cartItems', JSON.stringify(this.items));
                alert(`${prod.name}` + " " + " also added ")
            }

            else {
                localStorage.setItem('cartItems', JSON.stringify(this.items));
            }

        }


    }

    //= prod.quantity;


    deleteItem(item: any) {
        this.items = this.items.filter((i) => i.id !== item.id);
        localStorage.setItem('cartItems', JSON.stringify(this.items));

    }

    getItems() {
        return this.items;
    }


    addMoreToCart(id: number, product: any) {
        let prod = { ...product };
        let left = prod.items_left;
        let item = this.items.find((i) => i.id === id)

        if (item && item.quantity !== left) {
            item.quantity += 1
        }

        localStorage.setItem('cartItems', JSON.stringify(this.items));


    }

    addLessToCart(id: number) {
        let item = this.items.find((i) => i.id === id)

        if (item && item.quantity !== 1) {
            item.quantity -= 1
        }

        localStorage.setItem('cartItems', JSON.stringify(this.items));
    }


    getOrderPrice() {
        return this.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);

    }

    getTotalPrice(additional: any) {
        return this.items.reduce((acc, item) => {
            return (acc + item.price * item.quantity) + additional;
        }, 0);
    }


    setCount(){
        if(localStorage.getItem('cartItems') != null){
            let cartCount = JSON.parse(localStorage.getItem('cartItems'));
            this.count = cartCount.length;
        }

        return this.count
    }


}

