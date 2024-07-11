import React, { createContext, useState, useContext } from 'react';
import { ServiceProps } from '../interfaces/ServiceProps.tsx';

type ProviderProps = {
  children : React.ReactNode;
}

interface ServiceContextProps {
  services: ServiceProps[];
  addService: (service: ServiceProps) => void;
  removeService: (serviceID: number) => void;
  clearServices: () => void;
}

const ServiceContext = createContext<ServiceContextProps>({
  services: [],
  addService: () => {},
  removeService: () => {},
  clearServices: () => {}
});

export const ServiceProvider = (props: ProviderProps) => {
  const [services, setServices] = useState<ServiceProps[]>([]);

  const addService = (service: ServiceProps) => {
    setServices((prevServices) => [...prevServices, service]);
  };

  const removeService = (serviceID: number) => {
    setServices((prevServices) => prevServices.filter(s => s.serviceID !== serviceID));
  }

  const clearServices = () => { setServices([]); };

  return (
    <ServiceContext.Provider value={{services, addService, removeService, clearServices}}>
      {props.children}
    </ServiceContext.Provider>
  );
};

export const useService = () => {
  const context = useContext(ServiceContext);
  if (context === undefined) throw new Error('useService must be used within a ServiceProvider');
  return context;
};