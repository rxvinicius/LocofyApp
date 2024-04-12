import "./SearchSectionHeader.css";

const SearchSectionHeader = () => {
  return (
    <div className="search-section-header">
      <div className="difference-function">
        <h3 className="stays-nearby">Stays nearby:</h3>
        <h3 className="toronto-ontario">Toronto Ontario</h3>
      </div>
      <div className="layout-selection">
        <div className="ancestry-network">
          <img className="bento-menu-1-icon" alt="" src="/bento-menu1.svg" />
        </div>
        <div className="ancestry-network1">
          <img className="map-icon" alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

export default SearchSectionHeader;
