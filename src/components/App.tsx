import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header.tsx';
import Footer from './Footer.tsx';

import Home from './Home.tsx';
import PackageCreation from './PackageCreation.tsx';
import Subscriptions from './Subscriptions.tsx';
import Account from './Account.tsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <div className='mx-5 md:m-auto lg:m-auto md:w-2/3 lg:w-2/3'>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/package-creation' element={<PackageCreation/>}/>
            <Route exact path='/subscriptions' element={<Subscriptions/>}/>
            <Route exact path='/account' element={<Account/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;