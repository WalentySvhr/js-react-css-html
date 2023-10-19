
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Nav-bar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Other from './components/Other/Other';
import { BrowserRouter, Route, Routes } from 'react-router-dom';






const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' Component={Dialogs} />
            <Route path='/profile/*' Component={Profile} />
            <Route path='/news/*' Component={News} />
            <Route path='/other/*' Component={Other} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


