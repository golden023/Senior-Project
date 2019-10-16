export interface KIT {
    KitID: string,
    KitName: string,
    Price: string,
    Image: string,
    Discount: number,
    PriceDis: number,
    NewFlag: string
}

export class Kit {
    
    constructor(
        public KitID: string,
        public KitName: string,
        public Price: string,
        public Image: string,
        public Discount: number,
        public PriceDis: number,
        public NewFlag: string
    ){}  
}

