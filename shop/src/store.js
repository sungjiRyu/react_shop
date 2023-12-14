import { configureStore, createSlice } from "@reduxjs/toolkit"


let user = createSlice({
    name: 'user',
    initialState : 'Kim',
    reducers : {
      changeName(state){
        return 'john ' + state
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
      changeCount(state){
      }
    }
})




export default configureStore({
    reducer: { 
        user : user.reducer,
        stock : stock.reducer
    }
})