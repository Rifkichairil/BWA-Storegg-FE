import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { BanksType, NominalItemTypes, PaymentItemTypes } from "../../../services/data-types";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";

interface TopUpFormProps {
    nominals : NominalItemTypes[];
    payments : PaymentItemTypes[]
}

export default function TopUpForm(props :TopUpFormProps ) {
    const [verifyID, setVerifyID] = useState('');
    const [bankAccountName, setBankAccountName] = useState('');
    const [nominalItem, setNominalItem] = useState({});
    const [paymentItem, setPaymentItem] = useState({});
    const { nominals, payments } = props;
    const router = useRouter();

    console.log();

    const onNominalItemChange = (data: NominalItemTypes) => {
        setNominalItem(data);
    }

    const onPaymentItemChange = (payment:PaymentItemTypes, bank:BanksType) => {
        const data = {
            payment, bank
        }
        setPaymentItem(data);
    }

    const onSubmit = () => {
        console.log('verifyID', verifyID);
        console.log('bank account', bankAccountName);
        console.log('nominal item ', nominalItem);
        console.log('payment item ', paymentItem);
        if (verifyID === '' || bankAccountName === '' || nominalItem === {} || paymentItem === {}) {
            toast.error('Silahkan Isi semua data!!')
        }else{
            const data = {
                verifyID, bankAccountName, nominalItem, paymentItem
            }
            localStorage.setItem('data-topup', JSON.stringify(data));
            router.push('/checkout');
        }
        
    }
    return (
        < >
            <div className="pt-md-50 pt-30">
                <div className="">
                    <label for="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">Verify
                        ID</label>
                    <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID"
                        aria-describedby="verifyID" placeholder="Enter your ID"
                        value={verifyID}
                        onChange={(event => setVerifyID(event.target.value))}/>
                </div>
            </div>
            <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
                <div className="row justify-content-between">
                    {nominals.map((nominal) => {
                        return <NominalItem 
                        key={nominal._id} 
                        _id={nominal._id} 
                        coinQuantity={nominal.coinQuantity} 
                        coinName={nominal.coinName} 
                        price={nominal.price} 
                        onChange={() => onNominalItemChange(nominal)}/>
                    })}

                    <div className="col-lg-4 col-sm-6">
                    </div>
                </div>
            </div>
            <div className="pb-md-50 pb-20">
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
                <fieldset id="paymentMethod">
                    <div className="row justify-content-between">

                        {payments.map(payment => {
                            return  payment.banks.map((bank) => (
                                <PaymentItem bankID={bank._id} type={payment.type} bankName={bank.bankName} 
                                onChange={() => onPaymentItemChange(payment, bank)}/>
                            ))
                        })}

                        {/* <PaymentItem bankID="11" type="Transfer" bankName="Mandiri" />
                        <PaymentItem bankID="12" type="Transfer" bankName="Mandiri" /> */}
                        <div className="col-lg-4 col-sm-6">
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="pb-50">
                <label className="form-label text-lg fw-medium color-palette-1 mb-10">Bank
                    Account
                    Name</label>
                <input type="text" className="form-control rounded-pill text-lg" id="bankAccount"
                    name="bankAccount" aria-describedby="bankAccount"
                    placeholder="Enter your Bank Account Name"
                    value={bankAccountName}
                    onChange={(event) => setBankAccountName(event.target.value)}/>
            </div>
            <div className="d-sm-block d-flex flex-column w-100">
                <button type="button"
                    onClick={onSubmit}
                    className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</button>
            </div>
        </>
    )
}
