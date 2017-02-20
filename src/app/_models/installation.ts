/* * * ./app/comments/model/comment.ts * * */
export class Installation {
    constructor(
        public AccountCode: number,
        public AccountID: number,
        public AccountName: string,
        public AddressAccountID: number,
        public AddressTypeID: number,
        public City:string,
        public Country:string,
        public County:string,
        public EquipmentID:number,
        public SerialNumber:number,
        public State:string,
        public Street:string,
        public ZipCode:number
        ){}
}
