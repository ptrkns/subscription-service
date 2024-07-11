import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PackageProvider } from '../utility/PackageContext.tsx';
import { ServiceProvider } from '../utility/ServiceContext.tsx';

import Header from './Header.tsx';
import Footer from './Footer.tsx';

import Home from './Home.tsx';
import PackageCreation from './PackageCreation.tsx';
import Subscriptions from './Subscriptions.tsx';
import Payment from './Payment.tsx';

function App() {
  return (
    <div>
      <PackageProvider>
        <ServiceProvider>
          <BrowserRouter>
            <Header/>
            <div className='mx-5 md:m-auto lg:m-auto md:w-2/3 lg:w-2/3'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/package-creation' element={<PackageCreation/>}/>
                <Route path='/subscriptions' element={<Subscriptions/>}/>
                <Route path='/payment' element={<Payment/>}/>
              </Routes>
            </div>
            <Footer/>
          </BrowserRouter>
        </ServiceProvider>
      </PackageProvider>
    </div>
  );
}

export default App;