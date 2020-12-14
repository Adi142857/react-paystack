declare type Currency = 'NGN' | 'GHS' | 'USD' | 'ZAR';
declare type PaymentChannels = 'bank' | 'card' | 'qr' | 'ussd' | 'mobile_money';
declare type Bearer = 'account' | 'subaccount';
declare type phone = number | string;
export interface PaystackProps {
    publicKey: string;
    email: string;
    firstname?: string;
    lastname?: string;
    phone?: phone;
    amount: number;
    reference?: string;
    metadata?: {
        custom_field: Record<string, string>[];
    };
    currency?: Currency;
    channels?: PaymentChannels[];
    label?: string;
    plan?: string;
    quantity?: number;
    subaccount?: string;
    transaction_charge?: number;
    bearer?: Bearer;
    'data-custom-button'?: string;
    split_code?: string;
    split?: Record<string, any>;
}
export {};
