import {configureStore} from '@reduxjs/toolkit'
import coinSlice from  '../data/coinSlice'


const storeCoinList =  configureStore({
    reducer:{
        cryptocurr:coinSlice.reducer
    }
})

export default storeCoinList