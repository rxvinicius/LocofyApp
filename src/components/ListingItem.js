import "./ListingItem.css";

const ListingItem = ({
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  showBestTime,
  onListingItemContainerClick,
  superhostIcon,
  heartIcon,
  starIcon,
  trendIcon,
}) => {
  return (
    <div className="listing-item" onClick={onListingItemContainerClick}>
      <img className="listing-image-icon" alt="" src={listingImage} />
      <div className="superhost-tag">
        <img className="superhost-icon" alt="" src={superhostIcon} />
        <div className="superhost">Superhost</div>
      </div>
      <div className="wrapper-heart-icon">
        <img className="heart-icon" loading="lazy" alt="" src={heartIcon} />
      </div>
      <div className="item-details">
        <div className="listing-info">
          <div className="listing-cont">
            <div className="listing-title">{listingTitle}</div>
            <div className="listing-subtitle">{listingSubtitle}</div>
          </div>
          <div className="rating-cont">
            <div className="rating">{rating}</div>
            <img className="star-icon" loading="lazy" alt="" src={starIcon} />
          </div>
        </div>
        <div className="bottom-container">
          <div className="price-per-night">
            <div className="price">{price}</div>
            <div className="night">/night</div>
          </div>
          {showBestTime && (
            <div className="best-time">
              <img
                className="trend-icon"
                loading="lazy"
                alt=""
                src={trendIcon}
              />
              <div className="price-chart">Price chart</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
