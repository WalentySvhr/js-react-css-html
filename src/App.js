
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Nav-bar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Other from './components/Other/Other';
import {  Route, Routes } from 'react-router-dom';
import Friends from './components/Friends/Friends';




const App = (props) => {
  
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
          {/* <Route path='/friend/*' element={  <Friends friends={props.state.friendsPage.friends} addFriend={props.addFriend}/>  } /> */}
            <Route path='/dialogs/*' element={  <Dialogs dialogs={props.state.dialogsPages.dialogs} messages={props.state.dialogsPages.messages}  /> } />
            {/* інший варіант, читати комент із низу до верху */}
            <Route path='/profile/*' element ={ <Profile profilePages={props.state.profilePages} 
            addPost={props.addPost}  
            updateNewPostText={props.updateNewPostText}
            /> } /> 
            {/* як альтернатива тому що зверху код дивитись в Profile */}
            <Route path='/news/*' Component={News} />
            <Route path='/other/*' Component={Other} />
           
          </Routes>
        </div>
      </div>
  );
}

export default App;


