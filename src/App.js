import './App.css';
import theme from './style/theme';
import { ThemeProvider } from '@material-ui/core';
import {Routes, Route} from 'react-router-dom';
import Explore from './pages/Explore';
import Offer from './pages/Offer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import Category from './pages/Category';
import Navigation from './components/Navigation';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <main>
        <Routes>
          <Route path="/" element={<Explore/>}/>
          <Route path="/offer" element={<Offer/>}/>
          <Route path="/profile" element={<PrivateRoute/>}>
            <Route path="/profile" element={<Profile/>}/>  
           </Route>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/forget-password" element={<ForgetPassword/>}/>
          <Route path='/category/:categoryName' element={<Category/>}/>
          
        </Routes>
        <Navigation/>
        <ToastContainer/>
      </main>
    </ThemeProvider>
  );
}


export default App;