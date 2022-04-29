import React from "react";

import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Statistic from "./Statistic";
import Cryptocurr from './Cryptocurr'
import News from "./News";


const Home = () => {
  return (
    <>
      <header>
        <Typography className="home-title" variant="h4">
          Global statistic
        </Typography>
        <Statistic />
      </header>
      <Grid container>
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
      <Cryptocurr simplified/>
      <Grid container>
        <Grid item xs={9}>
          <Typography className="home-title " variant="h4">Latest news</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className="show-more" variant="h5">
            <Link to="/news">Show more</Link>
          </Typography>
        </Grid>
  
      </Grid>
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
