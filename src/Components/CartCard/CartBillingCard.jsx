export default function CartBillingCard({
  total,
  platformCharges,
  grandTotal,
}) {
  return (
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
  );
}
