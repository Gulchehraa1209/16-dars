import ReactDOM from 'react-dom/client'
import App from './App'
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'



function reducer(state = { 
        name:"John",
        age:32
 }, action) {
        switch (action.type) {
                case "setName":
                        return {...state, name:"Johon"}
                        break
        }
        return state
}
const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.createRoot(document.getElementById("root")).render(
        <Provider store={store}>
                <App />
        </Provider>
)