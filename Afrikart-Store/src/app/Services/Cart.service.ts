import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private items: any[] = [];
    private count: number = 0;

    constructor() { }



    addToCart(product: any) {
        this.items.push({ ...product, quantity: 1 });
    }

    getItems() {
        return this.items;
    }


    addMoreToCart(id: number) {
        let item = this.items.find((i) => i.id === id)

        if (item) {
            item.quantity++
        }


    }

    addLessToCart(id:number){
        let item = this.items.find((i)=> i.id === id)
       
        if(item && item.quantity !== 0){
            item.quantity--
        }
    }


}

