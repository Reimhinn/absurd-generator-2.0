import {createSlice} from "@reduxjs/toolkit"

export const packsSlice = createSlice({
    name: "packs",
    initialState: [{id:1,name:'aligator',verbs:['découpe' , 'mache' , 'croque'], nouns:['aligator', 'marais'], thirds:['coupé en deux']}],
    reducers: {
        addPack : (state, action) => {
            const newPack = {
                id: Date.now(),
                name: action.payload,
                verbs: [],
                nouns: [],
                thirds: [],
            }

            state.push(newPack)
        },
        addVerb: (state, action) => {
            const { packId, verb } = action.payload;
            const pack = state.find((pack) => pack.id === packId);
            console.log(pack)
      
            if (pack) {
              pack.verbs.push(verb);
        
            }
          },
          addNoun: (state, action) => {
            const { packId, noun } = action.payload;
            const pack = state.find((pack) => pack.id === packId);
      
            if (pack) {
              pack.nouns.push(noun);
            }
          },
          addThird: (state, action) => {
            const { packId, third } = action.payload;
            const pack = state.find((pack) => pack.id === packId);
      
            if (pack) {
              pack.thirds.push(third);
            }
          },
    }
})

export const { addPack, addVerb, addNoun, addThird } = packsSlice.actions