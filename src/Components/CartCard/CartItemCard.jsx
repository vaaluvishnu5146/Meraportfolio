import React from "react";

export default function CartItemCard({
  item = {},
  dispatcher = () => {},
  handleCountChange = () => {},
}) {
  return (
    <div className="card mb-3">
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
  );
}
