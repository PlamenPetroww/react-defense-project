import {Routes, Route} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {AuthProvider} from './contexts/authContext';
import Path from './paths';

import Footer from './components/footer/Footer';
import Hauptmenu from './components/hauptmenu/Hauptmenu';
import Header from './components/header/Header';
import GalleryList from './components/gallery/gallery-list/GalleryList';
import About from './components/about/About';
import Create from './components/create/Create';
import Main from './components/main/Main';
import RestaurantDetails from './components/restaurant-details/RestaurantDetails';
import RestaurantEdit from './components/restaurant-edit/RestaurantEdit';
import Register from './components/user/register/Register';
import Login from './components/user/login/Login';
import Logout from './components/user/logout/logout';
import NotFound from './components/Not-Found/Not-Found';
import AuthGuard from './components/guards/authGuard';

function App() {
    

  return (
      <>
        <AuthProvider>
        
            <Header />

            <Hauptmenu />
      <ToastContainer />
                <Routes>
                    <Route path={Path.Home} element={<Main />}/>
                    <Route path={Path.Gallery} element={<AuthGuard><GalleryList /></AuthGuard>}/>
                    <Route path={Path.Create} element={<AuthGuard><Create /></AuthGuard>}/>
                    <Route path={Path.About} element={<About />}/>
                    <Route path={Path.GalleryRestaurantId} element={<RestaurantDetails />} />
                    <Route path={Path.RestaurantEdit} element={<AuthGuard><RestaurantEdit /></AuthGuard>} />
                    <Route path={Path.Register} element={<Register />}/>
                    <Route path={Path.Login} element={<Login/>}/>
                    <Route path={Path.Logout} element={<Logout/>}/>
                    <Route path={Path.NotFound} element={<NotFound />} />
                </Routes>
            <Footer /> 
        </AuthProvider>
  </>
  )
}

export default App;