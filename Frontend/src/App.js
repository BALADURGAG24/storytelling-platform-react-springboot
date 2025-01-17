import React from 'react';
import './App.css';
import Login from './pages/SignIn/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './pages/SignUp/Create';
import Genre from './pages/Genre/Genre';
import Dashboard from './pages/Dashboardf/dashboard';
import Terms from './pages/Terms/Terms';
import PrivacyPolicy from './pages/Policies/PrivacyPolicy';
import Contact from './pages/Contact/Contact';
import ShortStory from './pages/ShortStory/ShortStory';
import Dbuserdetails from './pages/Dashboardf/dbuserdetails';
import Dboverview from './pages/Dashboardf/dboverview';
import Dbadmins from './pages/Dashboardf/dbadmins';
import Admin from './pages/AdminLogin/adminlogin';
import Queries from './pages/Queries/Queries';
import FAQ from './pages/Faq/Fa';
import TextEditor from './pages/TextEditor/TextEditor';
import Home from './pages/Home/Home';
import  Feedpage from './pages/Table/feedbacktable';
import  Storypage from './pages/Table/storytable';
import  Userpage from './pages/Table/usertable';
import Creators from './pages/Creators Corner/Creators';
import Story from './pages/Genre/Stories/Story';
import  ShortStoryPage from './pages/Table/shortsorytable';
// import NewGenrePage from "./NewGenrePage"; 

function App() {
  return (
    <div className="App">

    <Router>
    <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/Create" element={<Create />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/genre" element={<Genre/>} />
    <Route exact path="/genre/:id" element={<Story />} />
    <Route exact path="/shortstory" element={<ShortStory/>} />
    <Route exact path="/contact" element={<Contact/>} />
    <Route exact path="/add" element={<TextEditor/>}/> 
    <Route exact path="/creator" element={<Creators />} />
    <Route exact path="/queries" element={<Queries/>}/> 
    <Route exact path='/FAQ' element={<FAQ/>} />
    <Route exact path="/policies" element={<PrivacyPolicy/>} />
    <Route exact path="/terms" element={<Terms/>} />
    <Route exact path="/dash" element={<Dashboard/>}/>
    <Route exact path="/dbuser" element={<Dbuserdetails/>}/> 
    <Route exact path="/dbover" element={<Dboverview/>}/> 
    <Route exact path="/dbadmins" element={<Dbadmins/>}/>     
    <Route exact path="/admin" element={<Admin/>}/> 
    <Route exact path="/feedcrud" element={<Feedpage/>} />
    <Route exact path="/storycrud" element={<Storypage/>} />
    <Route exact path="/usercrud" element={<Userpage />} />
    <Route exact path="/shortstorycrud" element={<ShortStoryPage />} />
    {/* <Route exact path="/genre/newgenre" element={<NewGenrePage/>} />  */}
    </Routes>
    </Router>
    
    </div>
  );
}
export default App;



// import Lifestyle from './pages/Genre/Stories/Lifestyle';
// import Crime from './pages/Genre/Stories/Crime';
// import Sports from './pages/Genre/Stories/Sports';
// import Mythology from './pages/Genre/Stories/Mythology';
// import Horror from './pages/Genre/Stories/Horror';
// import Comedy from './pages/Genre/Stories/Comedy';
// import History from './pages/Genre/Stories/History';
// import Love from './pages/Genre/Stories/Love';
// import Kids from './pages/Genre/Stories/Kids';

{/* <Route exact path="/lifestyle" element={<Lifestyle/>} />
<Route exact path="/crime" element={<Crime/>} />
<Route exact path="/mythology" element={<Mythology/>} />
<Route exact path="/sports" element={<Sports/>} />
<Route exact path="/love" element={<Love/>} />
<Route exact path="/kids" element={<Kids/>} />
<Route exact path="/horror" element={<Horror/>} />
<Route exact path="/comedy" element={<Comedy/>} />
<Route exact path="/history" element={<History/>} /> */}