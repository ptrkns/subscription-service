import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Service from "./Service.tsx";
import Services from '../../public/assets/services.json';
import { useService } from "../utility/ServiceContext.tsx";
import { usePackage } from '../utility/PackageContext.tsx';

function PackageCreation() {

  const navigate = useNavigate();
  const {services} = useService();
  const {activePackages, addPackage} = usePackage();
  const [packageReady, setPackageReady] = useState(false);
  const [paymentReady, setPaymentReady] = useState(false);

  useEffect(() => {
    if(services.length !== 0) setPackageReady(true);
    else setPackageReady(false);
  }, [services]);

  const handleClick = () => {
    /* + A csomag létrehozása */
    setPaymentReady(true);
    setPackageReady(false);
  }

  const [duration, setDuration] = useState(1);
  const handleDropdownChange = (e: any) => {
      const optionValue = Number(e.target.value);
      setDuration(optionValue);
  };

  const filteredServices = Services.filter(s => s.duration === duration);
  const serviceData = filteredServices.map(s => {
      return <Service key={s.serviceID}
                serviceID={s.serviceID}
                name={s.name}
                img={s.img}
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
        <select onChange={(e) => handleDropdownChange(e)} className="w-full py-2 px-1 mb-5 cursor-pointer" disabled={packageReady === true}>
          <option value={1}>Monthly subscription</option>
          <option value={6}>Six months subscription</option>
          <option value={12}>Annual subscription</option>
        </select>
      </section>
      <section> {serviceData} </section>
      <section className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-4 my-10">
        <button
          className={`py-4 ${packageReady === false ? "border-2 border-blue-600 text-blue-600 cursor-default" : "bg-blue-600 hover:bg-blue-500 text-white font-semibold"}`}
          onClick={() => handleClick()} disabled={packageReady === false}>Create package</button>
        <button
          className={`py-4 ${paymentReady === false ? 'border-2 border-blue-600 text-blue-600 cursor-default' : 'bg-blue-600 hover:bg-blue-500 text-white font-semibold'}`}
          onClick={() => navigate('/payment')} disabled={paymentReady === false}>Continue to payment</button>
      </section>
    </div>
  );
}

export default PackageCreation;