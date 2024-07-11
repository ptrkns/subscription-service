import { PackageProps } from '../interfaces/PackageProps.tsx';
import DateHandler from '../utility/DateHandler.ts';

function Package(props:PackageProps) {

    const { dateToString } = DateHandler();

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

    return (
    <div className="bg-gray-300 mb-3 cursor-default shadow-lg">
        <section className='flex flex-col md:flex-row md:justify-between md:items-center px-4 pt-4'>
            <h2 className="font-bold text-xl md:text-2xl text-gray-800 cursor-default">{packageName()} package</h2>
            <div className='flex flex-row mt-3 md:m-0 justify-end'>
                <p className={`p-1 md:p-2 text-center ${props.isActive ? 'bg-blue-600' : 'bg-red-600'} text-white mr-1`}>ID: {props.packageID}</p>
                {props.isActive === false && <p className='p-1 md:p-2 text-center bg-red-600 text-white mr-1'>Remove</p>}
                {props.isActive ? <p className="p-1 md:p-2 text-center bg-blue-600 text-white">Active</p> : <p className="p-1 md:p-2 text-center bg-red-600 text-white">Inactive</p>}
            </div>
        </section>
        <section className='p-4'>
            <div className="grid grid-cols-2 gap-2 mb-4 w-full">
                <p className="py-1 border-2 border-black bg-white text-center">{dateToString(props.sDate)}</p>
                <p className="py-1 border-2 border-black bg-white text-center">{dateToString(props.eDate)}</p>
            </div>
            <p>Includes: servicesNames</p>
            <p className="mt-2 mb-1">{props.price} ETH / {packageDuration()}</p>
        </section>
    </div>
  );
}

export default Package;