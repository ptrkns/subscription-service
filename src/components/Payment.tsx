import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useService } from "../utility/ServiceContext.tsx";
import { usePackage } from "../utility/PackageContext.tsx";

function Payment() {
    const [confirmDisabled, setConfirmDisabled] = useState(false);
    const [paymentDisabled, setPaymentDisabled] = useState(true);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const navigate = useNavigate();
    const {clearServices} = useService();
    const {newPackage, addPackage, removePackage} = usePackage();

    const handleCancel = () => {
        clearServices();
        removePackage(newPackage.packageID);
        navigate('/package-creation');
    };

    useEffect(()=>{
        if(paymentSuccess){
            addPackage();
            clearServices();
            navigate('/package-creation');
        }
    }, [paymentSuccess]);

    const handleConfirm = () => {
        setPaymentDisabled((prevState) => {
            var newState = !prevState;
            return newState;
        });
        setConfirmDisabled((prevState) => {
            var newState = !prevState;
            return newState;
        });
    };


    const initPay = () => {
        setPaymentSuccess((prevState) => {
            var newState = !prevState;
            return newState;
        });
    };

    const packageName = () => {
        switch(newPackage.duration){
            case 1: return 'Monthly Package';
            case 6: return '6 Months Package';
            case 12: return 'Annual Package';
            default: throw new Error('Error: invalid duration value!');
        };
    }

    const serviceList = newPackage.services.map((service) => {
        return(
            <div key={`${service.serviceID}`} className="grid grid-cols-2 border-2 border-black bg-white p-1 mb-2">
                <p>{service.name}</p>
                <p>{service.price}</p>
            </div>
        );
    });

    return (
        <div>
            <h1 className="font-bold text-2xl md:text-4xl py-4 text-gray-800 cursor-default">Payment</h1>
            <section className="bg-gray-300 cursor-default shadow-lg px-4 pt-4">
                <h2 className="font-bold text-xl md:text-2xl pb-2 text-gray-800">{packageName()}</h2>
                <div className="grid grid-cols-2 grid-rows-2">
                    <p className="mt-2 mb-1 font-semibold">Starting date</p>
                    <p className="text-end mt-2 mb-1">{newPackage.sDate.toDateString()}</p>
                    <p className="text-end mt-2 mb-1 font-semibold">End date</p>
                    <p className="mt-2 mb-1">{newPackage.eDate.toDateString()}</p>
                </div>
                <div>
                    <p className="my-4 font-semibold">Included services</p>
                    {serviceList}
                </div>
                <div className="grid grid-cols-2 grid-rows-2">
                    <p className="mt-4 font-semibold">Total price</p>
                    <p className="mt-4">{newPackage.price}</p>
                </div>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-3 gap-2 my-10">
                <button className="border-2 border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-100 font-semibold py-4" onClick={handleCancel}>Cancel</button>
                <button className={`py-4 col-span-2 md:col-span-1 font-semibold ${confirmDisabled === true ? "border-2 border-blue-600 text-blue-600 cursor-default" : "bg-blue-600 hover:bg-blue-500 text-white"}`}
                    disabled={confirmDisabled === true} onClick={handleConfirm}>Confirm selection</button>
                <button
                    className={`py-4 col-span-2 md:col-span-1 font-semibold ${paymentDisabled === true ? "border-2 border-blue-600 text-blue-600 cursor-default" : "bg-blue-600 hover:bg-blue-500 text-white"}`}
                    disabled={paymentDisabled} onClick={initPay}>Pay with MetaMask</button>
            </section>
        </div>
  );
}

export default Payment;