import { PackageProps } from '../interfaces/PackageProps.tsx';
import { usePackage } from "../utility/PackageContext.tsx";
import DateHandler from '../utility/DateHandler.ts';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Package(props:PackageProps) {

    const {deactivatePackage, removePackage, findExpiredPackage} = usePackage();
    const { dateToString } = DateHandler();
    const navigate = useNavigate();
    const [cancel, setCancel] = useState(false);
    const [remove, setRemove] = useState(false);
    const [renew, setRenew] = useState(false);

    const packageName = () => {
        switch (props.duration) {
            case 1: { return "Monthly"; }
            case 6: { return "Six months"; }
            case 12: { return "Annual"; }
            default: { return; }
        }
    };

    const packageDuration = () => {
        switch (props.duration) {
            case 1: { return "month"; }
            case 6: { return "six months"; }
            case 12: { return "year"; }
            default: { return; }
        }
    };

    const activeServiceNames = props.services.map((service) => {
        return( <p key={service.serviceID} className='p-1 md:p-2 text-center bg-blue-600 text-white mr-1'>{service.name}</p> );
    });

    const expiredServiceNames = props.services.map((service) => {
        return( <p key={service.serviceID} className='p-1 md:p-2 text-center bg-red-600 text-white mr-1'>{service.name}</p> );
    });

    useEffect(() => {
        if(cancel) deactivatePackage(props.packageID);
    }, [cancel]);

    const handleCancel = () => {
        setCancel((prev)=>{
            var curr = !prev;
            return curr;
        });
    };

    useEffect(() => {
        if(remove) removePackage(props.packageID);
    }, [remove]);

    const handleRemove = () => {
        setRemove((prev)=>{
            var curr = !prev;
            return curr;
        });
    };

    useEffect(() => {
        if(renew) {
            findExpiredPackage(props.packageID);
            navigate('/payment');
        }
    }, [renew]);

    const handleRenew = () => {
        setRenew((prev)=>{
            var curr = !prev;
            return curr;
        });
    };

    return (
    <div className="bg-gray-300 mb-5 cursor-default shadow-lg">
        <section className='flex flex-col md:flex-row md:justify-between md:items-center px-4 pt-4'>
            <h2 className="font-bold text-xl md:text-2xl text-gray-800 cursor-default">{packageName()} package</h2>
            <div className='flex flex-row mt-3 md:m-0 md:justify-end'>
                {props.isActive === false && <button className='p-1 md:p-2 text-center border-2 border-red-600  text-red-600  hover:bg-gray-200 mr-1' onClick={handleRenew}>Renew</button>}
                {props.isActive ?
                    <button className='p-1 md:p-2 text-center border-2 border-blue-600 text-blue-600 hover:bg-gray-200 mr-1' onClick={handleCancel}>Cancel</button>:
                    <button className='p-1 md:p-2 text-center border-2 border-red-600  text-red-600  hover:bg-gray-200 mr-1' onClick={handleRemove}>Remove</button>}
                {props.isActive ? <p className="p-1 md:p-2 text-center bg-blue-600 text-white">Active</p> : <p className="p-1 md:p-2 text-center bg-red-600 text-white">Inactive</p>}
            </div>
        </section>
        <section className='p-4'>
            <div className="grid grid-cols-2 gap-2 mb-4 w-full">
                <p className="py-1 border-2 border-black bg-white text-center">{dateToString(props.sDate)}</p>
                <p className="py-1 border-2 border-black bg-white text-center">{dateToString(props.eDate)}</p>
            </div>
            <div className='flex flex-row justify-start items-center'>
                <p className={`p-1 md:p-2 text-center ${props.isActive ? 'bg-blue-600' : 'bg-red-600'} text-white mr-1`}>ID: {props.packageID}</p>
                {props.isActive ? activeServiceNames : expiredServiceNames}
            </div>
            <p className="mt-4 mb-1 font-semibold">{props.price / 0.00032} USD / {packageDuration()}</p>
        </section>
    </div>
  );
}

export default Package;