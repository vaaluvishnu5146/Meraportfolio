import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCountChange,
  handleCartValueComputation,
} from "../../Redux/Reducers/Cart.reducer";
import CartItemCard from "../../Components/CartCard/CartItemCard";
import CartBillingCard from "../../Components/CartCard/CartBillingCard";

export default function Cart() {
  const dispatcher = useDispatch();
  const {
    items = [],
    total,
    grandTotal,
    platformCharges,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatcher(handleCartValueComputation());
  }, []);

  useEffect(() => {
    dispatcher(handleCartValueComputation());
  }, [items]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <div className="row">
            <h1 className="mb-3">Cart ({items.length})</h1>
            <div className="col-12">
              {items.map((item, index) => (
                <CartItemCard
                  key={`${item.productName}-${index}`}
                  item={item}
                  dispatcher={dispatcher}
                  handleCountChange={handleCountChange}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-3">
          <h1 className="mb-3">Billing</h1>
          <CartBillingCard
            total={total}
            platformCharges={platformCharges}
            grandTotal={grandTotal}
          />
        </div>
      </div>
    </div>
  );
}
