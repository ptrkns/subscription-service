import React, { createContext, useState, useContext } from 'react';
import { PackageProps } from "../interfaces/PackageProps.tsx";

type ProviderProps = {
    children: React.ReactNode;
};

interface PackageContextProps {
    newPackage: PackageProps;
    activePackages: PackageProps[];
    expiredPackages: PackageProps[];
    setPackage: (newPackage: PackageProps) => void;
    addPackage: () => void;
    deactivatePackage: (packageID: string) => void;
    removePackage: (packageID: string) => void;
};

const initialPackage = {
    packageID: '',
    userID: '',
    isActive: true,
    services: [],
    price: 0,
    duration: 1,
    sDate: new Date,
    eDate: new Date
};

const PackageContext = createContext<PackageContextProps>({
    newPackage: initialPackage,
    activePackages: [],
    expiredPackages: [],
    setPackage: () => {},
    addPackage: () => {},
    deactivatePackage: () => {},
    removePackage: () => {}
});

export const PackageProvider = (props: ProviderProps) => {
    const [newPackage, setNewPackage] = useState<PackageProps>(initialPackage);
    const [activePackages, setActivePackages] = useState<PackageProps[]>([]);
    const [expiredPackages, setExpiredPackages] = useState<PackageProps[]>([]);

    const setPackage = (pkg: PackageProps) => {
        setNewPackage(pkg);
    };

    const addPackage = () => {
        setActivePackages((prevPackages) => [...prevPackages, newPackage]);
    };

    const deactivatePackage = (packageID: string) => {
        setActivePackages((prevActivePackages) => {
            var tmpPackage = activePackages.find(p => p.packageID === packageID);
            if(tmpPackage) {
                tmpPackage!.isActive = false;
                setExpiredPackages((prevPackages) => [...prevPackages, tmpPackage!]);
                return prevActivePackages.filter(pkg => pkg.packageID !== packageID);
            }
            return prevActivePackages;
        });
    };

    const removePackage = (packageID: string) => {
        setExpiredPackages((prevExpiredPackages) => prevExpiredPackages.filter(p => p.packageID !== packageID));
        setNewPackage(initialPackage);
    };

    return(
        <PackageContext.Provider value={{newPackage, activePackages, expiredPackages, setPackage, addPackage, deactivatePackage, removePackage}}>
            {props.children}
        </PackageContext.Provider>
    );
};

export const usePackage = () => {
    const context = useContext(PackageContext);
    if (context === undefined) throw new Error('usePackage must be used within a PackageProvider');
    return context;
};