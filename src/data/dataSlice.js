import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': 'ada81c9567msh2c69f56c160870ap13c2e1jsn96837303e7ac'
    }
  };

  export const callDataAPI = createAsyncThunk ('cryptoInfo', async(obj, {state, error})=>{
      const req = await axios.request(options)
      return req.data.data;
  })

  const dataSlice = createSlice({
      name:'cryptocurr',
      initialState:[],
      reducer:{},
      extraReducers:{
        [callDataAPI.fulfilled]:(state,action)=>{
            return action.payload;
            
        },
        [callDataAPI.rejected]:(state,action)=>{
            return []
        }
      }
  })

  export const actions = dataSlice.actions;
export default dataSlice ;