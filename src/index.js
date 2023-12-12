import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from "react-router-dom/cjs/react-router-dom.min";


ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
            <App />
    </Router>
)