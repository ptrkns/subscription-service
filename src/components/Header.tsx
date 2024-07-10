import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between md:px-5 bg-blue-600 text-white font-bold '>
        <h1 className='text-2xl pt-5 md:pt-0 lg:pt-0 md:text-3xl lg:text-3xl cursor-default'>Subs-3</h1>
        <ul className='flex flex-row md:text-xl lg:text-xl'>
            <li className='py-5 md:px-3 border-b-4 border-blue-600 hover:border-white cursor-pointer'><Link to='/package-creation'>Package Creation</Link></li>
            <li className='py-5 md:px-3 border-b-4 border-blue-600 hover:border-white cursor-pointer'><Link to='/subscriptions'>Subscriptions</Link></li>
            <li className='py-5 md:px-3 border-b-4 border-blue-600 hover:border-white cursor-pointer'><Link to='/account'>Account</Link></li>
            <li className='py-5 md:px-3 border-b-4 border-blue-600 hover:border-white cursor-pointer'><Link to='/'>Log out</Link></li>
        </ul>
    </div>
  );
}

export default Header;