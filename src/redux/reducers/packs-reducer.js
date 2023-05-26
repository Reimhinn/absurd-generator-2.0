import { createSlice } from "@reduxjs/toolkit";

let id = 1;

export const packsSlice = createSlice({
  name: "packs and words",
  initialState: {
    activePackId: [1],
    activePacks: [], // ID du pack actif
    activeVerbs: [], // Verbes actifs
    activeNouns: [], // Noms actifs
    activeThirds: [], // Troisièmes actifs
    packs: [
      {
        id: 1,
        name: "mots ajoutés",
        verbs: ["découpe", "mache", "croque"],
        nouns: ["aligator", "marais"],
        thirds: ["coupé en deux"],
      },
      {
        id: Date.now,
        name: "mots ajoutés",
        verbs: ["découpe", "mache", "croque"],
        nouns: ["aligator", "marais"],
        thirds: ["coupé en deux"],
      },
      {
        id: Date.now,
        name: "mots ajoutés",
        verbs: ["découpe", "mache", "croque"],
        nouns: ["aligator", "marais"],
        thirds: ["coupé en deux"],
      }
    ],
  },
  reducers: {
    addPack: (state, action) => {
      const newPack = {
        id: Date.now,
        name: action.payload,
        verbs: [],
        nouns: [],
        thirds: [],
      };

      state.packs.push(newPack);
    },
    addVerb: (state, action) => {
      const { packId, verb } = action.payload;
      const pack = state.packs.find((pack) => pack.id === packId);

      if (pack) {
        pack.verbs.push(verb);
      }
    },
    addNoun: (state, action) => {
      const { packId, noun } = action.payload;
      const pack = state.packs.find((pack) => pack.id === packId);

      if (pack) {
        pack.nouns.push(noun);
      }
    },
    addThird: (state, action) => {
      const { packId, third } = action.payload;
      const pack = state.packs.find((pack) => pack.id === packId);

      if (pack) {
        pack.thirds.push(third);
      }
    },
    deleteActiveVerb: (state, action) => {
      const verb = action.payload;

      // Filtrer les mots actifs pour créer une nouvelle liste sans le mot supprimé
      state.activeVerbs = state.activeVerbs.filter((activeVerb) => activeVerb !== verb);
    },
    addActivePackId: (state, action) => {
      state.activePackId = state.activePackId.concat(action.payload);
    },
    // addActiveVerbs: (state, action) => {
    //   state.activeVerbs = state.activeVerbs.concat(action.payload);
    // },
    // addActiveNouns: (state, action) => {
    //   state.activeNouns = state.activeNouns.concat(action.payload);
    // },
    // adddActiveThirds: (state, action) => {
    //   state.activeThirds = state.activeThirds.concat(action.payload);
    // },
    filterActivePacks: (state) => {
      state.activePacks = state.packs.filter((pack) => state.activePackId.includes(pack.id));
    },
    filterActiveVerbs: (state) => {
      state.activeVerbs = [];

      state.activePacks.forEach((activePack) => {
        const pack = state.packs.find((pack) => pack.id === activePack.id);

        if (pack) {
          state.activeVerbs = state.activeVerbs.concat(pack.verbs);
        }
      });
    },
    filterActiveNouns: (state) => {
      state.activeNouns = [];
    
      state.activePacks.forEach((activePack) => {
        const pack = state.packs.find((pack) => pack.id === activePack.id);
    
        if (pack) {
          state.activeNouns = state.activeNouns.concat(pack.nouns);
        }
      });
    },
    
    filterActiveThirds: (state) => {
      state.activeThirds = [];
    
      state.activePacks.forEach((activePack) => {
        const pack = state.packs.find((pack) => pack.id === activePack.id);
    
        if (pack) {
          state.activeThirds = state.activeThirds.concat(pack.thirds);
        }
      });
    },
  },
});

export const {
  addPack,
  addVerb,
  addNoun,
  addThird,
  deleteActiveVerb,
  addActivePackId,
  addActiveVerbs,
  addActiveNouns,
  addActiveThirds,
  filterActivePacks,
  filterActiveVerbs,
  filterActiveNouns,
  filterActiveThirds
} = packsSlice.actions;
