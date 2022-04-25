import {configureStore} from '@reduxjs/toolkit'
import topCoinSlice from  '../data/topCoinSlice'


const storeTopCoin =  configureStore({
    reducer:{
        topCrypto:topCoinSlice.reducer
    }
})

export default storeTopCoin