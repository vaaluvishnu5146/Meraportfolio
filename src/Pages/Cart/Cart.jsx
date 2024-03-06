import { useEffect, useReducer } from "react";
import { computeBilling, handleQuantityChange } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { handleCountChange } from "../../Redux/Reducers/Cart.reducer";

const INITIAL_STATE = {
  cart: [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmy3YIzU0SxjvZNNJJT9UpfeBXRk23lZ10yWYorrH83Q&s",
      productName: "Javascript Mastery",
      quantity: 1,
      price: 499,
    },
    {
      id: 2,
      image:
        "https://www.shutterstock.com/image-vector/front-end-development-web-application-260nw-521164462.jpg",
      productName: "FE Mastery",
      quantity: 1,
      price: 499,
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-vector/back-end-typographic-header-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-210.jpg",
      productName: "BE Mastery",
      quantity: 1,
      price: 499,
    },
  ],
  coupon: {
    name: "COUPA50",
    value: 50,
    type: "%",
  },
  total: 0,
  grandTotal: 0,
  platformCharges: 10,
};

function cartReducer(state, action) {
  if (action.type === "inc") {
    const cart = handleQuantityChange(
      state.cart,
      action.type,
      action.payload.id
    );
    const { total, grandTotal } = computeBilling(
      cart,
      state.coupon,
      state.platformCharges
    );
    return {
      ...state,
      cart: cart,
      total,
      grandTotal,
    };
  } else if (action.type === "dec") {
    const cart = handleQuantityChange(
      state.cart,
      action.type,
      action.payload.id
    );
    const { total, grandTotal } = computeBilling(
      cart,
      state.coupon,
      state.platformCharges
    );
    return {
      ...state,
      cart: cart,
      total,
      grandTotal,
    };
  } else if (action.type === "billing") {
    const { total, grandTotal } = computeBilling(
      state.cart,
      state.coupon,
      state.platformCharges
    );
    return {
      ...state,
      cart: state.cart,
      total,
      grandTotal,
    };
  }
  throw Error("Unknown action.");
}

export default function Cart() {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { platformCharges, total, grandTotal } = state;
  const { items = [] } = useSelector((state) => state.cart);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatch({ type: "billing" });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <div className="row">
            <h1 className="mb-3">Cart ({items.length})</h1>
            <div className="col-12">
              {items.map((item, index) => (
                <div key={`${item.productName}-${index}`} className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-3">
                        <img style={{ width: "100%" }} src={item.image} />
                      </div>
                      <div className="col-3">
                        <h4>{item.productName}</h4>
                        <div className="d-flex align-items-center justify-content-start">
                          <button
                            onClick={() =>
                              dispatcher(
                                handleCountChange({
                                  type: "dec",
                                  id: item.id,
                                })
                              )
                            }
                            className="btn btn-outline-primary"
                            type="button"
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() =>
                              dispatcher(
                                handleCountChange({
                                  type: "inc",
                                  id: item.id,
                                })
                              )
                            }
                            className="btn btn-primary"
                            type="button"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-3">
          <h1 className="mb-3">Billing</h1>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <h5>Total</h5>
                </div>
                <div className="col-6">
                  <p>{total}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h5>Platform Fees</h5>
                </div>
                <div className="col-6">
                  <p>{platformCharges}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h4>Grand Total</h4>
                </div>
                <div className="col-6">
                  <h4>{grandTotal}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
