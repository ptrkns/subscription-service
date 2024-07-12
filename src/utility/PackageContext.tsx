import React, { createContext, useState, useContext } from 'react';
import { PackageProps } from "../interfaces/PackageProps.tsx";

type ProviderProps = {
    children: React.ReactNode;
};

interface PackageContextProps {
    newPackage: PackageProps;
    activePackages: PackageProps[];
    expiredPackages: PackageProps[];
    paymentAction: string;
    setPackage: (newPackage: PackageProps) => void;
    addPackage: (action: string) => void;
    deactivatePackage: (packageID: string) => void;
    removePackage: (packageID: string) => void;
    findExpiredPackage: (packageID: string) => void;
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
    paymentAction: '',
    setPackage: () => {},
    addPackage: () => {},
    deactivatePackage: () => {},
    removePackage: () => {},
    findExpiredPackage: () => {}
});

export const PackageProvider = (props: ProviderProps) => {
    const [newPackage, setNewPackage] = useState<PackageProps>(initialPackage);
    const [activePackages, setActivePackages] = useState<PackageProps[]>([]);
    const [expiredPackages, setExpiredPackages] = useState<PackageProps[]>([]);
    const [paymentAction, setPaymentAction] = useState('');

    const setPackage = (pkg: PackageProps) => {
        setNewPackage(pkg);
        setPaymentAction('Add');
    };

    const addPackage = (action: string) => {
        switch(action) {
            case 'Add': {
                setActivePackages((prevPackages) => [...prevPackages, newPackage]);
                break;
            };
            case 'Renew': {
                setExpiredPackages((prevExpPackages) => {
                    setActivePackages((prevPackages) => [...prevPackages, newPackage]);
                    return prevExpPackages.filter(pkg => pkg.packageID !== newPackage.packageID);
                });
                break;
            }
            default: { throw new Error ('Error: Invalid action at payment!'); }
        }
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

    const findExpiredPackage = (packageID: string) => {
        var tmpPackage = expiredPackages.find(p => p.packageID === packageID);
        if(tmpPackage) {
            tmpPackage!.isActive = true;
            setNewPackage(tmpPackage!);
            setPaymentAction('Renew');
        }
    };

    return(
        <PackageContext.Provider value={{newPackage, activePackages, expiredPackages, paymentAction, setPackage, addPackage, deactivatePackage, removePackage, findExpiredPackage}}>
            {props.children}
        </PackageContext.Provider>
    );
};

export const usePackage = () => {
    const context = useContext(PackageContext);
    if (context === undefined) throw new Error('usePackage must be used within a PackageProvider');
    return context;
};