import PropTypes from "prop-types";

export default function Square({ onClick, title, isFree }) {
  return (
    <div className="square" onClick={onClick}>
      <span className="banner">{isFree ? "Free" : "Paid"}</span>
      {title}
    </div>
  );
}

Square.propTypes = {
  onClick: PropTypes.func,
  isFree: PropTypes.bool,
  title: PropTypes.string,
};
