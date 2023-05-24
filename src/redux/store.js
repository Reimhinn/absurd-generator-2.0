import { configureStore } from "@reduxjs/toolkit"
import { packsSlice } from "./reducers/packs-reducer"

export const store = configureStore({
    reducer: {
        packs: packsSlice.reducer
    }
})