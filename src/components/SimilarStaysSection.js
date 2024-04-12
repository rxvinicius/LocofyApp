import StayCard from "./StayCard";
import "./SimilarStaysSection.css";

const SimilarStaysSection = () => {
  return (
    <section className="similar-stays-section">
      <div className="data-transformer">
        <h3 className="similar-stays">Similar stays</h3>
        <div className="button2">View all</div>
      </div>
      <div className="decision-tree">
        <StayCard
          brightwoodsEstate="Missisuaga Aistream"
          bridlepathOntarioCanada="Missisauga, Ontario, Canada"
        />
        <div className="staycard1">
          <div className="frame-parent8">
            <div className="vector-group">
              <img className="vector-icon5" alt="" src="/superhost-icon.svg" />
              <div className="superhost3">Superhost</div>
            </div>
            <div className="wrapper-heart-icon2">
              <img className="heart-icon3" alt="" src="/hearticon-1.svg" />
            </div>
          </div>
          <div className="frame-parent9">
            <div className="frame-parent10">
              <div className="urban-loft-parent">
                <div className="urban-loft2">Urban Loft</div>
                <div className="urban-loft3">Urban Loft</div>
              </div>
              <div className="parent2">
                <div className="div3">4.8</div>
                <img className="vector-icon6" alt="" src="/star-icon.svg" />
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="parent3">
                <div className="div4">$502</div>
                <div className="night3">/night</div>
              </div>
            </div>
          </div>
        </div>
        <StayCard
          brightwoodsEstate="Forestville Cottages"
          bridlepathOntarioCanada="Simcoe, Ontario Canada"
          propBackgroundImage="url('/frame-94@3x.png')"
        />
      </div>
    </section>
  );
};

export default SimilarStaysSection;
