import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { id, name, number } = action.payload;
      state.contacts = [...state.contacts, { id, name, number }];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } =
  phoneBookSlice.actions;

export const phoneBookReducer = phoneBookSlice.reducer;

// export const phoneBookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'phoneBook/addContact': {
//       const { id, name, number } = action.payload;
//         return {
//             ...state,
//             contacts: [...state.contacts, { id, name, number }],
//           };
//     }
//     case 'phoneBook/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case 'phoneBook/changeFilter': {
//       return { ...state, filter: action.payload };
//     }

//     default:
//       return state;
//   }
// }

// /*
// export const addContact = payload =>{
//   return {
//     type: 'phoneBook/addContact',
//     payload,
//   }
// }
// export const deleteContact = payload =>{
//   return {
//     type: 'phoneBook/deleteContact',
//     payload,
//   }
// }
// export const changeFilter = payload =>{
//   return {
//     type: 'phoneBook/changeFilter',
//     payload,
//   }
// }
