import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

function UserReducer(state={
        name: "John",
        age:23,
        isStudent:true
}, action) {
        switch (action.type) {
                case "setName":
                        return { ...state, name: "Johon" }
                        break
                case "setAge":
                        return {...state, age:32}
                        break
                case "setStudent":
                        return {...state, isStudent:false}
        }
        return state
}

function TodoUsers(state={
        kartoshka:"20kg",
        ananas:"33kg"
},action){
        switch(action.type){
                case "setKartoshka":
                        return {...state, kartoshka:"10kg"}
                        break
                case "setAnanas":
                        return {...state, ananas:"30kg"}
                        break
        }
        return state
}

const store = createStore(combineReducers({UserReducer, TodoUsers}), applyMiddleware(logger))

store.dispatch({ type: "setKartoshka" })
store.dispatch({ type: "setAnanas" })