import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';

import Sidebar from './components/SideBar/SideBar';
import Customers from './components/Customers/CustomerView'

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
        {/* <Customers></Customers> */}
      </div>
    </div>
  );
}

export default App;
