import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/Reducers/Cart.reducer";
import { useDispatch } from "react-redux";

export default function BlogCard({ product = {} }) {
  const dispatcher = useDispatch();
  return (
    <div className="card product-card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <Link to={`/blog/${product.id}`}>
          <h5 className="card-title">{product.name}</h5>
        </Link>
        <p className="card-text details">{product.details}</p>
        <button
          className="btn btn-primary"
          onClick={() => dispatcher(addToCart(product))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
