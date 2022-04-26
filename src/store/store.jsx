import {configureStore} from '@reduxjs/toolkit'
import topCoinSlice from  '../data/topCoinSlice'
import coinSlice from  '../data/coinSlice'
import newsSlice from '../data/newsSlice'

const store =  configureStore({
    reducer:{
        topCrypto:topCoinSlice.reducer,
        cryptocurr:coinSlice.reducer,
        news: newsSlice.reducer

    }
})

export default store