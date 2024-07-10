import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Service from "./Service.tsx";
import services from '../../public/assets/services.json';

function PackageCreation() {

  const navigate = useNavigate();
  const [isPackageReady, setIsPackageReady] = useState(false);
  const handleClick = () => { setIsPackageReady(true); }

  const isServiceSelected = () : boolean => { return false; }

  const [duration, setDuration] = useState(1);
  const handleDropdownChange = (e) => {
      const optionValue = Number(e.target.value);
      setDuration(optionValue);
  };

  const filteredServices = services.filter(s => s.duration === duration);
  const serviceData = filteredServices.map(s => {
      return <Service key={s.serviceID}
                serviceID={s.serviceID}
                name={s.name}
                description={s.description}
                duration={s.duration}
                price={s.price}
              />
  });

  return (
    <div>
      <section>
        <h1 className="font-bold text-2xl md:text-4xl py-4 text-gray-800 cursor-default">Create your package</h1>
        <p className="text-base md:text-xl mb-5 cursor-default">Filter available services by subscription period! The filter you choose will determine the subscription period of your package.</p>
        <select
          disabled={isServiceSelected()}
          onChange={(e) => handleDropdownChange(e)}
          className="w-full py-2 px-1 mb-5 cursor-pointer"
        >
          <option value={1}>Monthly subscription</option>
          <option value={6}>Six months subscription</option>
          <option value={12}>Annual subscription</option>
        </select>
      </section>
      <section> {serviceData} </section>
      <section className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-4 my-10">
        {isPackageReady ?
          <button className="border-2 border-blue-600 text-blue-600 py-4 cursor-default" disabled>Create package</button> :
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4" onClick={() => handleClick()}>Create package</button>
        }
        {isPackageReady ?
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4" onClick={() => navigate('/payment')}>Continue to payment</button> :
          <button className="border-2 border-blue-600 text-blue-600 py-4 cursor-default" disabled>Continue to payment</button>
        }
      </section>
    </div>
  );
}

export default PackageCreation;