import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsAPI } from '../data/newsSlice'
import {Link} from 'react-router-dom'

import {Grid, Card, CardHeader, CardContent, Typography, Avatar} from '@mui/material'

const News = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(getNewsAPI());
  }, []);
  console.log(data.news);
  
  return (
    <>
     <>
        <Grid container spacing={3}>
      {data.news.map((item) => (
        <>
          <Grid item xs={3}>
            <a href={item.third_party_url} target='_blank'>
              <Card item sx={6} md={4} key={item.news_ID}>
                  <CardHeader
                  title={item.HEADLINE}
                  avatar={<Avatar alt="news img" src={item.related_image} />}
                />
              </Card>
              </a> 
          </Grid>
        </>
      ))}
    </Grid>
      </>

    </>
  )
}

export default News