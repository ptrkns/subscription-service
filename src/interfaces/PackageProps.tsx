import { ServiceProps } from "./ServiceProps.tsx";

export interface PackageProps {
    packageID: string,
    userID: string, // Wallet address
    isActive: boolean,
    services: ServiceProps[],
    price: number,
    duration: number,
    sDate: Date,
    eDate: Date
}