import { useEffect, useState } from "react";
import { ServiceProps } from "../interfaces/ServiceProps";
import { useService } from "../utility/ServiceContext";

function Service(props: ServiceProps) {
    const {addService, removeService} = useService();
    const [selected, setSelected] = useState(false);
    const newService : ServiceProps = { serviceID: props.serviceID, name: props.name, img:props.img, description: props.description, duration: props.duration, price: props.price };

    const priceAndDuration = () => {
        switch(props.duration){
            case 1: {return `${props.price} USD / month`;}
            case 6: {
                return(<>
                <p>{`${props.price / 6}  USD / month`}</p>
                <p>{`${props.price}  USD in total`}</p>
                </>);
            }
            case 12: {
                return(<>
                    <p>{`${props.price / 12} USD / month`}</p>
                    <p>{`${props.price} USD in total`}</p>
                </>);
            }
            default: {return};
        };
    }

    const handleClick = () => {
        setSelected((prevSelected) => {
            var newSelected = !prevSelected;
            return newSelected;
        });
    };

    useEffect(()=>{
        if(selected) {addService(newService);}
        else{removeService(newService.serviceID);}
    },[selected]);

    return (
    <div className={`grid grid-cols-3 gap-1 ${selected ? 'bg-blue-600 hover:bg-blue-500 text-white': 'bg-gray-300 hover:bg-gray-200'} p-4 mb-5 cursor-pointer shadow-lg`} onClick={handleClick}>
        <div className="col-span-2">
            <h2 className={`font-bold text-xl md:text-2xl ${selected ? 'text-white' : 'text-gray-800'} cursor-pointer`}>{props.name}</h2>
            <p className="text-justify pr-2 cursor-pointer">{props.description}</p>
        </div>
        <div className="m-auto text-right md:mx-0 pr-2 cursor-pointer">
            {priceAndDuration()}
        </div>
    </div>
  );
}

export default Service;