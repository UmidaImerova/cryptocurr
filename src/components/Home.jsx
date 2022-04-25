import React from "react";
import { Link } from "react-router-dom";
import {Grid, Typography} from '@mui/material'
import Cryptocurr from "./Cryptocurr";

const Home = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={9}>
          <Typography className="home-title">
            Top 10 cryptocurrencies
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className="show-more">
            <Link to="/cryptocurrencies">Show more</Link>
          </Typography>
        </Grid>
        <Cryptocurr/>
      </Grid>
      <Grid container>
        <Grid item xs={9}>
          <Typography className="home-title">Latest news</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className="show-more">
            <Link to="/news">Show more</Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
