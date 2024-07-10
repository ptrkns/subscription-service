const isServiceSelected = () : boolean => { return false; }
const handleDropdownChange = () => {}

function PackageCreation() {
  return (
    <div>
      <section>
        <h1 className="font-bold text-2xl md:text-4xl py-4 text-gray-800 cursor-default">Create your package</h1>
        <p className="text-base md:text-xl mb-5 cursor-default">Filter available services by subscription period! The filter you choose will determine the subscription period of your package.</p>
        <select
          disabled={isServiceSelected()}
          onChange={handleDropdownChange()}
          className="w-full py-2 px-1 mb-5 cursor-pointer"
        >
          <option value={1}>Monthly subscription</option>
          <option value={6}>Six months subscription</option>
          <option value={12}>Annual subscription</option>
        </select>
      </section>
      <section>
        Services
      </section>
      <section className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-4 my-5">
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4">Create package</button>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4">Continue to payment</button>
      </section>
    </div>
  );
}

export default PackageCreation;