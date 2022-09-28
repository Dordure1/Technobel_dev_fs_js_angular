import { IProduct } from "./IProduct.model";

export class Product implements IProduct{
    categId: number=0;
    id: number = 0;
    name: string = "Produit Non Crée";
    price: number = 0.0;
    
}