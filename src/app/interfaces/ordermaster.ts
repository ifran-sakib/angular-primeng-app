export interface Ordermaster {
    id:number;
    code:string;
    orderdate: Date | undefined;
    customer_id:number;
    grandtotal:number;
    remarks:string;
    orderDetails: Orderdetail[],
}
export interface Orderdetail {
    id:number;
    order_id:number;
    item_id:number;
    qty:number;
    rate:number;
    total:number;
}

export interface OrdersResponse {
    orders: Ordermaster[],
    total: number;
    skip: number;
    limit: number;
}