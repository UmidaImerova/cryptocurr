import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar';
import News from './components/News'
import Home from './components/Home'
import Cryptocurr from './components/Cryptocurr';





function App() {
  return (
   <Grid container spacing={2}>
     <Grid item xs={3}>
        <div className='nav'>
          <Navbar/>
        </div>
     </Grid>
     <Grid item xs={9}>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cryptocurrencies' element={<Cryptocurr/>}/>
          <Route path='/news' element={<News/>}/>
        </Routes>
      </div>
     </Grid>
   </Grid>
  );
}

export default App;

/*      <Grid item xs={9}>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cryptocurrencies' element={<Cryptocurr/>}/>
          <Route path='/news' element={<News/>}/>
        </Routes>
      </div>
     </Grid> */