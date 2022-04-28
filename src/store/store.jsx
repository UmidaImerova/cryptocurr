import {configureStore} from '@reduxjs/toolkit'
import topCoinSlice from  '../data/topCoinSlice'
import coinSlice from  '../data/coinSlice'
import newsSlice from '../data/newsSlice'
import dataSlice from '../data/dataSlice'

const store =  configureStore({
    reducer:{
        topCrypto:topCoinSlice.reducer,
        cryptocurr:coinSlice.reducer,
        news: newsSlice.reducer,
        statistic: dataSlice.reducer

    }
})

export default store