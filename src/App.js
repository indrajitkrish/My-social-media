//import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Mockman from "mockman-js";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from './pages/LoginPage';
import { UserProfile } from './pages/UserProfile';
import { ExplorePage } from './pages/ExplorePage';
import { BookMarkPage } from './pages/BookMarkPage';
//import { RightSideTab } from './Components/RightSideTab';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
       <h3 class="heading">Motivator</h3>
      </header>
      <Routes>
          <Route>
            <Route path = "/" element={<LoginPage/>}/>
          <Route path = "/mockman" element={<Mockman/>}/>
          <Route path = "/home" element={<HomePage/>}/>
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/explore" element={<ExplorePage/>} />
          <Route path="/bookmark" element={<BookMarkPage/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
