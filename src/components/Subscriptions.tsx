function Subscriptions() {
  return (
    <div>
      <section>
          <h1 className="font-bold text-2xl md:text-4xl py-4 text-gray-800 cursor-default">Active subscriptions</h1>
          <p className="text-base md:text-xl mb-5 cursor-default">Warning: Cancellation of the subscriptions is immediate! By performing this action, you will loose access to the services!</p>
          <div className="mb-5">Active Packages</div>
      </section>
      <section>
          <h1 className="font-bold text-2xl md:text-4xl py-4 text-gray-800 cursor-default">Expired subscriptions</h1>
          <p className="text-base md:text-xl mb-5 cursor-default">By clicking the "Renew subscription" button, you can regain access to the services in the package after payment.</p>
          <div className="mb-5">Expired Packages</div>
      </section>
    </div>
  );
}

export default Subscriptions;