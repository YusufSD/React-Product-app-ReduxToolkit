import ProductForm from "./companents/ProductForm";
import ProductSearch from "./companents/ProductSearch";
import ProductList from "./companents/ProductList";
import ProductPrice from "./companents/ProductPrice";
import "./App.css";

function App() {
  return (
    <div className="container is-fluid">
      <ProductForm />
      <ProductSearch />
      <ProductList />
      <ProductPrice />
    </div>
  );
}

export default App;
