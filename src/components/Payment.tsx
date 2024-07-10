import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {

    const [paymentDisabled, setPaymentDisabled] = useState(true);
    const navigate = useNavigate();
    const handleCancel = (e) => {
        e.preventDefault
        navigate('/package-creation');
    };

    const handleConfirm = (e) => {
        e.preventDefault
        if(paymentDisabled === true) { setPaymentDisabled(false); }
    };

    return (
        <div>
            <h1 className="font-bold text-2xl md:text-4xl py-4 text-gray-800 cursor-default">Payment</h1>
            <section className="bg-gray-300 cursor-default shadow-lg px-4 pt-4">
                <h2 className="font-bold text-xl md:text-2xl pb-2 text-gray-800">Name</h2>
                <div className="grid grid-cols-2 grid-rows-2">
                    <p className="mt-2 mb-1 font-semibold">Starting date</p>
                    <p className="text-end mt-2 mb-1">0000.00.00</p>
                    <p className="text-end mt-2 mb-1 font-semibold">End date</p>
                    <p className="mt-2 mb-1">0000.00.00</p>
                </div>
                <div>
                    <p className="my-4 font-semibold">Included services</p>
                    <div className="grid grid-cols-2 border-2 border-black bg-white p-1 mb-2">
                        <p>Service name</p>
                        <p>Price</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2">
                    <p className="mt-4 font-semibold">Total price</p>
                    <p className="mt-4">0000 ETH</p>
                </div>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-3 gap-2 my-10">
                <button className="border-2 border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-100 font-semibold py-4" onClick={e => handleCancel(e)}>Cancel</button>
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4" onClick={e => handleConfirm(e)}>Confirm selection</button>
                {paymentDisabled ?
                    <button className="border-2 border-blue-600 text-blue-600 py-4 col-span-2 md:col-span-1 cursor-default" disabled>Pay with MetaMask</button> :
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 col-span-2 md:col-span-1">Pay with MetaMask</button>
                }
            </section>
        </div>
  );
}

export default Payment;