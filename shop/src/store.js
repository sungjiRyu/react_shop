import { configureStore, createSlice } from "@reduxjs/toolkit"


let user = createSlice({
    name: 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
      changeName(state){
        // return {name : 'park', age : 20}
        state.name = 'park'
      }
    }
})
// 함수 export
export let { changeName } = user.actions

let stock = createSlice({
    name: 'stock',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
    reducers : {
      addCount(state, action){
        let id = state.findIndex((a)=>{return a.id == action.payload })
        state[id].count ++
      },
      addItem(state, action){
        state.push(action.payload)
      }
    }
    
})

export let { addCount, addItem } = stock.actions



export default configureStore({
    reducer: { 
        user : user.reducer,
        stock : stock.reducer
    }
})