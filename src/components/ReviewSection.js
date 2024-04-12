import ReviewCard from "./ReviewCard";
import "./ReviewSection.css";

const ReviewSection = () => {
  return (
    <section className="review-section">
      <div className="image-stack">
        <h3 className="reviews1">Reviews</h3>
        <div className="button1">View all</div>
      </div>
      <div className="circle-container">
        <ReviewCard
          nA="/ellipse-12@2x.png"
          johnnyCash="Johnny Cash"
          june2023="June 2023"
          prop="5.0"
          michellesPlaceWasSoGreatA="Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!"
        />
        <ReviewCard
          nA="/ellipse-12-1@2x.png"
          johnnyCash="Yuta Watanabe"
          june2023="May 2023"
          prop="4.5"
          michellesPlaceWasSoGreatA="The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended."
          propMinWidth="114px"
          propMinWidth1="64px"
        />
        <ReviewCard
          nA="/ellipse-12-2@2x.png"
          johnnyCash="Shane Willis"
          june2023="December 2022"
          prop="4.8"
          michellesPlaceWasSoGreatA="A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)"
          propMinWidth="95px"
          propMinWidth1="104px"
        />
      </div>
    </section>
  );
};

export default ReviewSection;
