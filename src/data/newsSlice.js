import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news',
    params: {pair_ID: '1057391', page: '1', time_utc_offset: '28800', lang_ID: '1'},
    headers: {
      'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com',
      'X-RapidAPI-Key': 'ada81c9567msh2c69f56c160870ap13c2e1jsn96837303e7ac'
    }
  };

  export const getNewsAPI = createAsyncThunk('api/news',async(obj,{state,error})=>{
    const req = await axios.request(options)
    return req.data.data[0].screen_data.news;
  })



const newsSlice = createSlice({
    name:"news",
    initialState:[],
    reducers:{},
    extraReducers:{
        [getNewsAPI.fulfilled]:(state,action)=>{
            return action.payload;
            
        },
        [getNewsAPI.rejected]:(state,action)=>{
            return []
        }
    }
})

export const actions = newsSlice.actions;
export default newsSlice ;