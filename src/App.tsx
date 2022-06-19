import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";


function App() {

    const dialogsData = {
        users: [
            {id: 1, name: 'Jake'},
            {id: 2, name: 'Joe'},
            {id: 3, name: 'Mike'},
            {id: 4, name: 'Ivan'},
        ],

        messages: [
            {text: "Some text here"},
            {text: "Data text here"},
            {text: "Just a text here"},
        ]
    }

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-main-content"}>
                    <Routes>
                        <Route path='/' element={<Profile/>}/>
                        <Route path='/messages' element={<Dialogs userInfo={dialogsData.users}
                                                                  messages={dialogsData.messages}
                        />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>

                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

