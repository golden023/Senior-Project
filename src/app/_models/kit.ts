export interface KIT {
    KitID: string,
    KitName: string,
    Price: string,
    Image: string,
    Discount: number,
    PriceDis: number,
    NewFlag: string,
    DefaultQnt: number,
    ShippingCost: number,
    Description: string
}

export interface TOTALS {
    subtotal: number,
    totalQnt: number,
    shipping: number,
    taxes: number,
    total: number,
}

export class Kit {
    
    constructor(
        public KitID: string,
        public KitName: string,
        public Price: number,
        public Image: string,
        public Discount: number,
        public PriceDis: number,
        public NewFlag: string,
        public Quantity: number
    ){
        this.KitID = KitID;
        this.KitName = KitName;
        this.Price = Price;
        this.Image = Image;
        this.Discount = Discount;
        this.PriceDis = PriceDis;
        this.NewFlag = NewFlag;
        this.Quantity = 1;
    }  
    get quantity(){
        return this.calcTotal();
    }
    calcTotal(){
        return this.Quantity * this.Price;
    }
}

