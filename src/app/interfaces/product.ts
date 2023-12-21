export interface Product {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:RatingProps;
}

interface RatingProps{
    rate:number;
    count:number;
}

export interface ProductsResponse {
    products: Product[],
    total: number;
    skip: number;
    limit: number;
}