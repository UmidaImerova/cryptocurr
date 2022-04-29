import {configureStore} from '@reduxjs/toolkit'

import dataSlice from '../data/dataSlice'

const store =  configureStore({
    reducer:{
        cryptoData: dataSlice.reducer

    }
})

export default store