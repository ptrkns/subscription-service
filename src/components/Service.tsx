import { useState } from "react";
import { ServiceProps } from "../interfaces/ServiceProps";

function Service(props: ServiceProps) {

    const [selected, setSelected] = useState(false);
    const newService = { serviceID: props.serviceID, name: props.name, description: props.description, duration: props.duration, price: props.price };
    const handleClick = () => {
        setSelected((prevSelected) => {
            const newSelected = !prevSelected;
            /*
            if (newSelected) { handleServiceSelection(newService, "Add"); }
            else { handleServiceSelection(newService, "Remove"); }
            */
            return newSelected;
        });
    };

    return (
    <div className="grid grid-cols-3 gap-1 bg-gray-300 hover:bg-gray-200 p-2 mb-3 cursor-pointer shadow-lg">
        <div className="col-span-2">
            <h2 className="font-bold text-xl md:text-2xl pb-2 text-gray-800 cursor-pointer">{props.name}</h2>
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