import {configureStore} from '@reduxjs/toolkit'
import topCoinSlice from  '../data/topCoinSlice'
import coinSlice from  '../data/coinSlice'

const store =  configureStore({
    reducer:{
        topCrypto:topCoinSlice.reducer,
        cryptocurr:coinSlice.reducer

    }
})

export default store