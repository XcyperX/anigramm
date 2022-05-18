import './App.css';
import {Button} from "@mui/material";
import Navbar from './components/navbar/Navbar'
import MainPage from './components/mainpage/MainPage';

function App() {
    document.body.style.backgroundColor = 'gainsboro';
    return (
        <>
            <Navbar/>
            {/* <MainPage/> */}
        </>
    );
}

export default App;
