import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';

import Sidebar from './components/SideBar/SideBar';
import Customers from './components/Customers/CustomerView'

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
<<<<<<< HEAD
        <Sidebar/>
        <MainDash/>
        <RightSide/>
=======
        <Sidebar />
        
        <Customers></Customers>

        {/* <MainDash/> */}
        <RightSide />
        
>>>>>>> 2f2a71439cb6ddba14d13448ebf125281b48b1d0
      </div>
    </div>
  );
}

export default App;
