import { Injectable, Inject, inject } from "@angular/core";

@Injectable()
export class Product {
    id: number;
    name: string;
    origin: string;
    description: string;
    key: string;
    material: {
        wood: string,
        skin: string,
        string: string,
    };
    brand: string;
    category: string;
    price: number;
    taxPrice: number;
    is_in_inventory: boolean;
    items_left: number;
    imageUrl: string;
    is_on_sale: boolean;

    constructor(@Inject('id')id: number, @Inject('name')name: string, @Inject('origin')origin: string, @Inject('description')description: string, @Inject('key')key: string,
    @Inject('material')material: { wood: string, skin: string, string: string }, @Inject('brand')brand: string, @Inject('category')category: string, @Inject('price')price: number, @Inject('taxPrice')taxPrice: number,
    @Inject('is_in_inventory')is_in_inventory: boolean, @Inject('items_left')items_left: number, @Inject('imageUrl')imageUrl: string, @Inject('is_on_sale')is_on_sale: boolean) {
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.description = description;
        this.key = key;
        this.material = material;
        this.brand = brand;
        this.category = category;
        this.price = price;
        this.taxPrice = taxPrice;
        this.is_in_inventory = is_in_inventory;
        this.items_left = items_left;
        this.imageUrl = imageUrl;
        this.is_on_sale = is_on_sale;
    }
}