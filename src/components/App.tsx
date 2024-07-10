import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header.tsx';
import Footer from './Footer.tsx';

import Home from './Home.tsx';
import PackageCreation from './PackageCreation.tsx';
import Subscriptions from './Subscriptions.tsx';
import Account from './Account.tsx';
import Payment from './Payment.tsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <div className='mx-5 md:m-auto lg:m-auto md:w-2/3 lg:w-2/3'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/package-creation' element={<PackageCreation/>}/>
            <Route path='/subscriptions' element={<Subscriptions/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/payment' element={<Payment/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;