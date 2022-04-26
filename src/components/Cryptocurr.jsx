import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCounter from "./Pagination";

import { coinlistAPI } from "../data/coinSlice";

import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Grid,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import millify from "millify";
import { Link } from "react-router-dom";

const Cryptocurr = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(10);
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();

  const data = useSelector((state) => state);
  useEffect(() => {
   dispatch(coinlistAPI());
   setLoading(false)
    
  }, [dispatch]);
  

//pagination logic
const indexOfLast = currentPage * cardPerPage;
const indexOfFirst = indexOfLast - cardPerPage;
const currentCards = data.cryptocurr.slice(indexOfFirst, indexOfLast)
//change page
const paginate = (pageQqt)=>setCurrentPage(pageQqt)


if (loading){
  return (
    <h1>Loading...</h1>
  )
}
  return (
    <>
      <div className="serch-input">
        <TextField
        id="outlined-basic"
        variant="outlined"
        label="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
        /* onChange = {(e)=>setSearchCurr(e.target.value)} */
      />
      </div>
      <Grid container spacing={3}>

        {currentCards.map((currency) => (
          <Grid item xs={3}>
            <Link to={`/crypto/${currency.id}`}>
              <Card item sx={6} md={4} key={currency.id}>
                <CardHeader
                  title={currency.name}
                  avatar={<Avatar alt="coin img" src={currency.logo_url} />}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    USD Price: {currency.inst_price_usd}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Market CAP: {millify(currency.inst_market_cap_plain)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Daily change:{" "}
                    {millify(currency.pair_change_percent_numeric)} %
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <PageCounter cardPerPage={cardPerPage} totalCard={data.cryptocurr.length} paginate={paginate}/>

    </>
  );
};

export default Cryptocurr;

/* 
          <Card sx={{ maxWidth: 345 }} key={currency.id}>
            <CardHeader
              title={currency.name}
              avatar={
                <Avatar
                  alt="coin img"
                  src={currency.logo_url}
                />
              }
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
       */

/*    <Grid container spacing={3}>
      {data.cryptocurr.map((currency) => (
        <>
          <Grid item xs={3}>
            <Link to={`/crypto/${currency.id}`}>
              <Card item sx={6} md={4} key={currency.id}>
                <CardHeader
                  title={currency.name}
                  avatar={<Avatar alt="coin img" src={currency.logo_url} />}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    USD Price: {currency.inst_price_usd}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Market CAP: {millify(currency.inst_market_cap_plain)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Daily change: {millify(currency.pair_change_percent_numeric)} %
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </>
      ))}
    </Grid> */

/*     <Grid container spacing={3}>
      {data.topCrypto.map((currency) => (
        <>
          <Grid item xs={3}>
            <Link to={`/crypto/${currency.currency_ID}`}>
              <Card item sx={6} md={4} key={currency.currency_ID}>
                <CardHeader
                  title={currency.fullname}
                  avatar={<Avatar alt="coin img" src={currency.flag_image_32x32_flat} />}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    USD Price:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Market CAP: 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Daily change:  %
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </>
      ))}
    </Grid> */

/* function Home(){
  const dispatch = useDispatch()
  const data = useSelector((state)=> state)
  useEffect(()=>{
      dispatch(coinlistAPI())
  },[])
  console.log(data.cryptocurr); 
  return(
      <>
          <h1>this is my home</h1>
          <div>
          {
            data.cryptocurr.map((currency)=>(
                <div key={currency.id}>
                <h3>{currency.name}</h3>
                </div>
            ))
        }
          </div>
      </>
  )
}
export default Home */
