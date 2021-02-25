import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Product";
import TopMenu from "./components/TopMenu";
import "bootstrap/dist/css/bootstrap.min.css";

import { CartProvider } from "./contexts/Cart";

function Home() {
  return <h2>Home</h2>;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <TopMenu />
          <Switch>
            <Route path="/product/">
              <Products />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}
