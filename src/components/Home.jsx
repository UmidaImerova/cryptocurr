import React from "react";
import Statistic from './Statistic'
import { Link } from "react-router-dom";
import {Grid, Typography} from '@mui/material'
import News from "./News";
import CryptoRating from "./CryptoRating";

const Home = () => {
  return (
    <>
      <Statistic/>
    </>
  );
};

export default Home;


/*       <Grid container>
        <Grid item xs={9}>
          <Typography className="home-title" variant="h4">
            Top cryptocurrencies
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className="show-more" variant="h5">
            <Link to="/cryptocurrencies">Show more</Link>
          </Typography>
        </Grid>
      </Grid>
      <CryptoRating/>
      <Grid container>
        <Grid item xs={9}>
          <Typography className="home-title " variant="h4">Latest news</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className="show-more" variant="h5">
            <Link to="/news">Show more</Link>
          </Typography>
        </Grid>
        <News/>
      </Grid> */