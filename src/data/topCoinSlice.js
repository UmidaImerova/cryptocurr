import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/currencies/list',
    params: {lang_ID: '1', time_utc_offset: '28800'},
    headers: {
      'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com',
      'X-RapidAPI-Key': 'ada81c9567msh2c69f56c160870ap13c2e1jsn96837303e7ac'
    }
  };

  export const topCryptoAPI = createAsyncThunk('api/top list',async(obj,{state,error})=>{
    const req = await axios.request(options)
    return req.data.data[0][0].data;
  })



const topCoinSlice = createSlice({
    name:"topCrypto",
    initialState:[],
    reducers:{},
    extraReducers:{
        [topCryptoAPI.fulfilled]:(state,action)=>{
            return action.payload;
            
        },
        [topCryptoAPI.rejected]:(state,action)=>{
            return []
        }
    }
})

export const actions = topCoinSlice.actions;
export default topCoinSlice ;