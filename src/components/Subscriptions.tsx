import Package from "./Package.tsx";
import { usePackage } from "../utility/PackageContext.tsx";

function Subscriptions() {

  const {activePackages, expiredPackages} = usePackage();

  const activePackageComponents = activePackages.map((pkg) => {
    return(<Package
      key={pkg.packageID}
      packageID = {pkg.packageID}
      userID = {pkg.userID}
      isActive={pkg.isActive}
      services={pkg.services}
      price={pkg.price}
      duration={pkg.duration}
      sDate={pkg.sDate}
      eDate={pkg.eDate}>
    </Package>);
  });

  const expiredPackageComponents = expiredPackages.map((pkg) => {
    return(<Package
      key={pkg.packageID}
      packageID = {pkg.packageID}
      userID = {pkg.userID}
      isActive={pkg.isActive}
      services={pkg.services}
      price={pkg.price}
      duration={pkg.duration}
      sDate={pkg.sDate}
      eDate={pkg.eDate}>
    </Package>);
  });

  return (
    <div className="min-h-screen md:my-20 md:mb-40">
      <section>
          <h1 className="font-bold text-2xl md:text-4xl py-4 text-gray-800 cursor-default">Active subscriptions</h1>
          {activePackages.length !== 0 && <p className="text-base md:text-xl mb-5 cursor-default">Warning: Cancellation of the subscriptions is immediate! By performing this action, you will loose access to the services!</p>}
          {activePackages.length === 0 && <p className="text-base md:text-xl mb-5 cursor-default">There are no active subscriptions.</p>}
          <div className="mb-5"> {activePackageComponents} </div>
      </section>
      <section>
          <h1 className="font-bold text-2xl md:text-4xl py-4 text-gray-800 cursor-default">Expired subscriptions</h1>
          {expiredPackages.length !== 0 && <p className="text-base md:text-xl mb-5 cursor-default">By clicking the "Renew subscription" button, you can regain access to the services in the package after payment.</p>}
          {expiredPackages.length === 0 && <p className="text-base md:text-xl mb-5 cursor-default">There are no expired subscriptions.</p>}
          <div className="mb-10"> {expiredPackageComponents} </div>
      </section>
    </div>
  );
}

export default Subscriptions;