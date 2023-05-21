import {createSlice} from "@reduxjs/toolkit"

export const packsSlice = createSlice({
    name: "packs",
    initialState: [ {id:1,name:'aligator'}],
    reducers: {
        addPack : (state, action) => {
            const newPack = {
                id: Date.now(),
                name: action.payload
            }

            state.push(newPack)
        }
    }
})

