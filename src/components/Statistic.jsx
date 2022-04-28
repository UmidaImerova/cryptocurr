import { Card, CardContent, Typography } from "@mui/material";
import millify from "millify";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {callDataAPI} from '../data/dataSlice'

const Statistic = ()=>{
    const [statistic, setStatistic] = useState([])
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    useEffect(() => {
      dispatch(callDataAPI());
      setStatistic(data.statistic.stats)
    }, []);


      return(
          <div className="stat-content">
            <Card sx={{ minWidth: 345, margin: 2 }} >
                <CardContent>
                    <Typography variant="h5">Total Cryptocurrencies</Typography>
                    <Typography>{statistic.totalCoins}</Typography>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 345, margin: 2  }}>
                <CardContent>
                    <Typography variant="h5">Total Market Cap</Typography>
                    <Typography>{millify(statistic.totalMarketCap)}</Typography>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 345, margin: 2  }}>
                <CardContent>
                    <Typography variant="h5">Total Markets</Typography>
                    <Typography>{statistic.totalMarkets}</Typography>
                </CardContent>
            </Card>
            <Card sx={{ minWidth: 345, margin: 2  }}>
                <CardContent>
                    <Typography variant="h5">Total volume for 24h</Typography>
                    <Typography>{millify(statistic.total24hVolume)}</Typography>
                </CardContent>
            </Card>
          </div>
      )

}

export default Statistic