import { useMemo } from "react";
import "./ReviewCard.css";

const ReviewCard = ({
  nA,
  johnnyCash,
  june2023,
  prop,
  michellesPlaceWasSoGreatA,
  propMinWidth,
  propMinWidth1,
}) => {
  const johnnyCashStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const june2023Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="reviewcard">
      <div className="n-a-parent">
        <div className="n-a">
          <img className="n-a-icon" loading="lazy" alt="" src={nA} />
          <div className="n-a1">
            <div className="johnny-cash" style={johnnyCashStyle}>
              {johnnyCash}
            </div>
            <div className="june-2023" style={june2023Style}>
              {june2023}
            </div>
          </div>
        </div>
        <div className="michelle-review-card">
          <div className="div1">{prop}</div>
          <img className="vector-icon2" alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className="michelles-place-was">{michellesPlaceWasSoGreatA}</div>
    </div>
  );
};

export default ReviewCard;
