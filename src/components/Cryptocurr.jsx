import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCounter from "./Pagination";

import { callDataAPI } from "../data/dataSlice";

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
import SearchIcon from "@mui/icons-material/Search";
import millify from "millify";
import { Link } from "react-router-dom";

const Cryptocurr = ({simplified}) => {
  
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(callDataAPI());
    setLoading(false);
  }, [dispatch]);

  console.log(data.cryptoData.coins);
  const [crypto, setCrypto] = useState(data?.cryptoData?.coins);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(10);
  const [serchItem, setSearchItem] = useState('')

  useEffect(()=>{
    const filteredData = data?.cryptoData?.coins.filter((coin)=>coin.name.toLowerCase().includes(serchItem.toLowerCase()));
    setCrypto(filteredData)
  },[crypto, serchItem])
  //pagination logic
  const indexOfLast = currentPage * cardPerPage;
  const indexOfFirst = indexOfLast - cardPerPage;
  const currentCards = crypto.slice(indexOfFirst, indexOfLast)
  //change page
  const paginate = (pageQqt)=>setCurrentPage(pageQqt)

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
    {!simplified && ( <div className="serch-input">
        <TextField
        id="outlined-basic"
        variant="outlined"
        label="Search..."
        onChange={(e)=>setSearchItem(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
        
      />
      </div>)}
    <Grid container spacing={3}>
        {currentCards.map((currency) => (
          <Grid item xs={3}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card item sx={6} md={4} key={currency.uuid}>
                <CardHeader
                  title= {`${currency.rank}.${currency.name}`}
                  avatar={<Avatar alt="coin img" src={currency.iconUrl} />}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Price: {millify(currency.price)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Market CAP: {millify(currency.marketCap)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Daily change: {currency.change} %
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <PageCounter cardPerPage={cardPerPage} totalCard={crypto.length} paginate={paginate}/>
      </>)
};

export default Cryptocurr;

