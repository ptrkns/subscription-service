function Account() {

  const handleEmailChange = (e) => {
    e.preventDefault;
  };

  const requestAccount = () => {};

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-2xl md:text-4xl py-4 text-gray-800 cursor-default">Account management</h1>
        <p className="bg-blue-600 p-2 text-white text-center cursor-default shadow-lg">USER #####</p>
      </div>
      <form className="bg-gray-200 px-4 py-1 mb-3 shadow-lg">
        <h2 className="font-bold text-xl md:text-2xl py-4 text-gray-800 cursor-default">Update email address</h2>
        <div className="flex flex-row mb-2">
          <p className="mr-1">Current email address:</p>
          <p className="">someone@email.com</p>
        </div>
        <div className="flex flex-col justify-center mb-2">
          <label className="mb-1">New email address:</label>
          <input
              type="email"
              name="email"
              onChange={(e) => handleEmailChange(e)}
              className="border-2 border-black mt-1 mb-3 p-1"
          ></input>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold m-auto py-4 w-1/2 mb:w-1/4 lg:w-1/4" type="submit">Save changes</button>
        </div>
      </form>

      <form className="bg-gray-200 px-4 py-1 mb-3 shadow-lg">
        <div>
          <h2 className="font-bold text-xl md:text-2xl py-4 text-gray-800 cursor-default">Update password</h2>
          <p className="mb-3">Passwords must be at least 6 characters long!</p>
        </div>
        <div className="flex flex-col justify-center mb-2">
          <label className="mb-1">Current password</label>
          <input
          type="password" name="currPassword"
          onChange={(event) => setCurrPassword(event.target.value)}
          className="border-2 border-black mt-1 mb-3 p-1"
          ></input>
          <label className="mb-1">New password</label>
          <input
          type="password" name="newPassword"
          onChange={(event) => setFormData({ ...formData, newPassword: event.target.value })}
          className="border-2 border-black mt-1 mb-3 p-1"
          ></input>
          <label className="mb-1">Confirm new password</label>
          <input
          type="password" name="confPassword"
          onChange={(event) => setConfPassword(event.target.value)}
          className="border-2 border-black mt-1 mb-3 p-1"
          ></input>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold m-auto py-4 w-1/2 mb:w-1/4 lg:w-1/4" type="submit">Save changes</button>
        </div>
      </form>

      <section className="flex flex-col justify-center bg-gray-200 px-4 pt-1 pb-3 mb-5 md:mb-10 lg:mb-10 shadow-lg">
        <h2 className="font-bold text-xl md:text-2xl py-4 text-gray-800 cursor-default">Update wallet address</h2>
        <p className="mb-3">Open the MetaMask extension, select the wallet you want to use, then click the address below to load the new address into the app</p>
        <div className="border-2 border-black mt-1 mb-3 p-1 bg-white" onClick={requestAccount()}>Address</div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold m-auto py-4 w-1/2 mb:w-1/4 lg:w-1/4" onClick={(event) => handleClick(event)}>Update address</button>
      </section>
    </div>
  );
}

export default Account;