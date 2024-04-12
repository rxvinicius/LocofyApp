import { useMemo } from "react";
import "./StayCard.css";

const StayCard = ({
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className="staycard">
      <div className="frame-parent7" style={frameDiv1Style}>
        <div className="vector-parent">
          <img className="vector-icon3" alt="" src="/superhost-icon.svg" />
          <div className="superhost2">Superhost</div>
        </div>
        <div className="wrapper-heart-icon1">
          <img className="heart-icon2" alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className="similar-stays-parent">
        <div className="brightwoods-estate">
          <div className="urban-loft">
            <div className="brightwoods-estate1">{brightwoodsEstate}</div>
            <div className="bridlepath-ontario-canada1">
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className="urban-loft1">
            <div className="simcoe-ontario">4.8</div>
            <img className="vector-icon4" alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className="michelle-review-card1">
          <div className="parent1">
            <div className="div2">$502</div>
            <div className="night2">/night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
