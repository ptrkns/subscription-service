import { customAlphabet } from "nanoid";
import { PackageProps } from "../interfaces/PackageProps.tsx";
import { ServiceProps } from "../interfaces/ServiceProps.tsx";

export const PackageAssembler = () => {

    function calculatePrice(services: ServiceProps[]) {
        var sum = 0;
        services.forEach((service) => {
            sum += service.price;
        });
        return sum * 0.00032;
    }

    const generateRandomID = customAlphabet('0123456789', 5);

    function assemblePackage(userID: string, isActive: boolean, services: ServiceProps[], price: number, duration: number, sDate: Date, eDate: Date) {
        const newPackage : PackageProps = {
            packageID: generateRandomID(),
            userID: userID,
            isActive: isActive,
            services: services,
            price: price,
            duration: duration,
            sDate: sDate,
            eDate: eDate
        };
        return newPackage;
    };

    function recreatePackage(packageID: string, userID: string, isActive: boolean, services: ServiceProps[], price: number, duration: number, sDate: Date, eDate: Date) {
        const newPackage : PackageProps = {
            packageID: packageID,
            userID: userID,
            isActive: isActive,
            services: services,
            price: price,
            duration: duration,
            sDate: sDate,
            eDate: eDate
        };
        return newPackage;
    };

    return {
        calculatePrice,
        assemblePackage,
        recreatePackage
    };
};