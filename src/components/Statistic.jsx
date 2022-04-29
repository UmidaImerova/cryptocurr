import { Card, CardContent, Typography } from "@mui/material";
import millify from "millify";
import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {callDataAPI} from '../data/dataSlice'
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';

const Statistic = ()=>{
    let theme = createTheme();
    theme = responsiveFontSizes(theme);


    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    useEffect(() => {
      dispatch(callDataAPI());
    }, [dispatch]);

    const statData = data.cryptoData.stats


      return(
          <div className="stat-content">
            <ThemeProvider theme={theme}>
            <Card sx={{ minWidth: 345, margin: 2 }} >
                <CardContent>
                    <Typography variant="h6">Total Cryptocurrencies</Typography>
                    <Typography variant="h3">{statData.total}</Typography>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 345, margin: 2  }}>
                <CardContent>
                    <Typography variant="h6">Total Exchanges</Typography>
                    <Typography variant="h3">{statData.totalExchanges}</Typography>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 345, margin: 2  }}>
                <CardContent>
                    <Typography variant="h6">Total Market Cap</Typography>
                    <Typography variant="h3">{millify(statData.totalMarketCap)}</Typography>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 345, margin: 2  }}>
                <CardContent>
                    <Typography variant="h6">Total Markets</Typography>
                    <Typography variant="h3">{millify(statData.totalMarkets)}</Typography>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 345, margin: 2  }}>
                <CardContent>
                    <Typography variant="h6">Total volume for 24h</Typography>
                    <Typography variant="h3">{millify(statData.total24hVolume)}</Typography>
                </CardContent>
            </Card>
            </ThemeProvider>
          </div>
      )

}

export default Statistic