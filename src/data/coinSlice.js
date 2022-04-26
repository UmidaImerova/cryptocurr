import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


const option = {
    method: 'GET',
    url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list',
    params: {
      edition_currency_id: '12',
      time_utc_offset: '28800',
      lang_ID: '1',
      sort: 'PERC1D_DN',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com',
      'X-RapidAPI-Key': 'ada81c9567msh2c69f56c160870ap13c2e1jsn96837303e7ac'
    }
  };

  export const coinlistAPI = createAsyncThunk('api/coinlist',async(obj,{state,error})=>{
    const req = await axios.request(option)
    return req.data.data[0].screen_data.crypto_data;
  })



const coinSlice = createSlice({
    name:"currency",
    initialState:[],
    reducers:{},
    extraReducers:{
        [coinlistAPI.fulfilled]:(state,action)=>{
            return action.payload;
            
        },
        [coinlistAPI.rejected]:(state,action)=>{
            return []
        }
    }
})

export const actions = coinSlice.actions;
export default coinSlice ;