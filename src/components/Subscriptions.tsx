import Package from "./Package.tsx";

import DateHandler from "../utility/DateHandler.ts";

function Subscriptions() {

  const { getCurrentDate, getEndDate } = DateHandler();

  return (
    <div className="min-h-screen md:mt-20">
      <section>
          <h1 className="font-bold text-2xl md:text-4xl py-4 text-gray-800 cursor-default">Active subscriptions</h1>
          <p className="text-base md:text-xl mb-5 cursor-default">Warning: Cancellation of the subscriptions is immediate! By performing this action, you will loose access to the services!</p>
          <div className="mb-5">
          <Package
              packageID={"1"}
              userID={"1"}
              isActive={true}
              services={[]}
              price={1}
              duration={6}
              sDate={getCurrentDate()}
              eDate={getEndDate(6)}
          />
          </div>
      </section>
      <section>
          <h1 className="font-bold text-2xl md:text-4xl py-4 text-gray-800 cursor-default">Expired subscriptions</h1>
          <p className="text-base md:text-xl mb-5 cursor-default">By clicking the "Renew subscription" button, you can regain access to the services in the package after payment.</p>
          <div className="mb-10">
          <Package
              packageID={"1"}
              userID={"1"}
              isActive={false}
              services={[]}
              price={1}
              duration={12}
              sDate={getCurrentDate()}
              eDate={getEndDate(12)}
          />
          </div>
      </section>
    </div>
  );
}

export default Subscriptions;