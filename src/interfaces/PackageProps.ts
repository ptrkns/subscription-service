import { ServiceProps } from "./ServiceProps.ts";

export interface PackageProps {
    packageID: number,
    userID: number,
    isActive: boolean,
    services: ServiceProps[],
    price: number,
    duration: number,
    sDate: Date,
    eDate: Date
}