export interface CategoryTypes {
    _id: string;
    name:string;
    __v:number;
}

export interface GameItemTypes {
    _id: string;
    status : string;
    name : string;
    thumbnail:string;
    category: CategoryTypes;
}

export interface BanksType {
    _id : string;
    name: string;
    bankName: string;
    noRekening: string;
}

export interface PaymentItemTypes {
    _id: string;
    type: string;
    status: string;
    banks: BanksType[];
}

export interface NominalItemTypes {
    _id: string;
    coinQuantity: number;
    coinName: string;
    price: number;
}

export interface LoginTypes {
    email: string;
    password: string;
}

export interface UserTypes {
    id: string;
    username: string;
    name: string;
    email: string;
    password: string;
    avatar: string;
}

export interface JWTPayloadTypes {
    player : UserTypes;
    iat : number;
}

export interface CheckoutTypes {
    voucher: string;
    nominal: string;
    payment: string;
    bank: string;
    name: string;
    accountUser: string;
}

export interface HistoryVoucherTopupTypes{
    category: string;
    coinName: string;
    coinQty: string;
    gameName: string;
    price: number;
    thumbnail: string;
}

export interface HistoryPaymentTypes{
    bankName: string;
    name: string;
    noRekening: number;
    type: string;
}

export interface HistoryTransactionTypes {
    _id : string;
    historyVoucherTopup : HistoryVoucherTopupTypes;
    value: number;
    status: string;
    accountUser: string;
    tax: number;
    name:string;
    historyPayment: HistoryPaymentTypes;
}

export interface TopupCategoriesTypes{
    _id: string;
    value: number;
    name: string
}