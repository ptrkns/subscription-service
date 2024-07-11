import { useState } from "react";
import { ServiceProps } from "../interfaces/ServiceProps";
import { useService } from "../utility/ServiceContext";

function Service(props: ServiceProps) {
    const {addService, removeService} = useService();
    const [selected, setSelected] = useState(false);
    const newService : ServiceProps = { serviceID: props.serviceID, name: props.name, img:props.img, description: props.description, duration: props.duration, price: props.price };

    const handleClick = () => {
        setSelected((prevSelected : boolean) => {
            const newSelected : boolean = !prevSelected;
            if (newSelected) { addService(newService); }
            else { removeService(newService.serviceID); }
            return(newSelected);
        });
    };

    return (
    <div className={`grid grid-cols-3 gap-1 ${selected ? 'bg-blue-600 hover:bg-blue-500 text-white': 'bg-gray-300 hover:bg-gray-200'} p-4 mb-5 cursor-pointer shadow-lg`} onClick={handleClick}>
        <div className="col-span-2">
            <div className="flex flex-row justify-start items-center pb-2">
                <h2 className={`font-bold text-xl md:text-2xl ${selected ? 'text-white' : 'text-gray-800'} cursor-pointer`}>{props.name}</h2>
                {/*<img className="ml-2 w-5 h-5" src={`../../public/assets/${props.img}`}/>*/}
            </div>
            <p className="text-justify pr-2 cursor-pointer">{props.description}</p>
        </div>
        <div className="m-auto text-right md:mx-0 pr-2 cursor-pointer">
            {props.duration == 1 && <p>{props.price} ETH / month</p>}
            {props.duration == 6 && <p>{props.price} ETH / {props.duration} months</p>}
            {props.duration == 12 && <p>{props.price} ETH / year</p>}
        </div>
    </div>
  );
}

export default Service;