import logo from './logo.svg';
import './App.css';
import Home from './Screens/HomePage';
import {Routes,Route} from 'react-router-dom'
import SignPage from './Screens/SignIn';
import AdminHomePage from './Screens/AdminHomePage';
import UpdatingFuelStationPage from './Screens/UpdatingFuelStationPage';
import OwnerHomePage from './Screens/OwnerHomePage'
import CreateShopPage from './Screens/CreateShopPage';
import ShopHomePage from './Screens/ShopHomePage'
import CustomerHomePage from './Screens/CustomerHomePage';
import CFuelStationPage from './Screens/CFuelStationPage';
import ItemAddingPage from './Screens/ItemAddingPage';
import ShopWithItemPage from './Screens/ShopWithItemPage';
import ShopHomePageCC from './Screens/ShopHomePageCC';
import ShopWithItemPageCC from './Screens/ShopWithItemPageCC';
import CurrentLocationFormPage from './Screens/CurrentLocationFormPage';
import NearMePage from './Screens/NearMePage';
import GarageHomePage from './Screens/Garage/GarageHomePage';
import CreatedServices from './Components/Garage/CreatedService';
import CreatedServicesPage from './Screens/Garage/CreatedServicesPage';
import GarageFindPageCC from './Screens/Garage/GarageFindPageCC';
import MakeAppoinmentForm from './Components/Garage/MakeAppoinmentForm';
import MakeAppoinmentPage from './Screens/Garage/MakeAppoinmentPage';
import BatteryComparisionPage from './Screens/BateryComparision/BatteryComparisionPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/signin'element={<SignPage/>}/>
        <Route path='/adminHome' element={<AdminHomePage/>}/>
        <Route path='/updateFuelStation' element={<UpdatingFuelStationPage/>}/>
        <Route path='/ownerHome' element={<OwnerHomePage/>}/>
        <Route path='/createShop' element={<CreateShopPage/>}/>
        <Route path='/shopHome' element={<ShopHomePage/>}/>
        <Route path='/customerHome' element={<CustomerHomePage/>}/>
        <Route path='/seeFuel'element={<CFuelStationPage/>}/>
        <Route path='/itemAddingForm' element={<ItemAddingPage/>}/>
        <Route path='/shopView' element={<ShopWithItemPage/>}/>
        <Route path='/seeShops' element={<ShopHomePageCC/>}/>
        <Route path='/shopViewCC' element={<ShopWithItemPageCC/>}/>
        <Route path='/locateMYFuel' element={<CurrentLocationFormPage/>}/>
        <Route path='/nearStation' element={<NearMePage/>}/>
        <Route path='/garageHome' element={<GarageHomePage/>}/>
        <Route path='/createdServices' element={<CreatedServicesPage/>}/>
        <Route path='/seeServices' element={<GarageFindPageCC/>}/>
        <Route path='/makeAppoinment' element={<MakeAppoinmentPage/>}/>
        <Route path='/batteryCompare' element={<BatteryComparisionPage/>}/>
      </Routes>
    </div>

  );
}

export default App;
