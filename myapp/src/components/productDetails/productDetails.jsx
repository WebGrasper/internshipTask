import "./productDetails.css";

export default function ProductDetails() {
  return (
    <div className="main-container">
      {/* ------------------------------------left Container start------------------------------------ */}
      <div className="container-1">
        <div className="main-container-1-images">
          <div className="sub-container-1-images">
            <div className="sub-images-container">
              <img className="sub-images" src="/images/i11.webp" alt="" />
              <img className="sub-images" src="/images/i12.webp" alt="" />
              <img className="sub-images" src="/images/i13.webp" alt="" />
            </div>
            <div className="main-image-container">
              <img className="main-image" src="/images/i11.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="main-container-1-buttons">
          <button className="main-container-1-button-1">
            <span class="material-symbols-outlined shopping">
              shopping_cart
            </span>
            Add to cart
          </button>
          <button className="main-container-1-button-2">
            <span class="material-symbols-outlined shopping">flash_on</span>Buy
            now
          </button>
        </div>
      </div>
      {/* ------------------------------------left Container start------------------------------------ */}

      {/* ------------------------------------Right Container start------------------------------------ */}
      <div className="container-2">
        <div className="main-routes-container">
          <div className="routes-container">
            <div className="navigator-container">
              <p className="navigator-location">Home</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
            <div className="navigator-container">
              <p className="navigator-location">Clothing</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
            <div className="navigator-container">
              <p className="navigator-location">Topwear</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
            <div className="navigator-container">
              <p className="navigator-location">Shirts</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
            <div className="navigator-container">
              <p className="navigator-location">Men's shirts</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
            <div className="navigator-container">
              <p className="navigator-location">Casual shirts</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
            <div className="navigator-container">
              <p className="navigator-location">TRPIR Casual shirts</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
          </div>
          <div className="share-button-container">
            <span class="material-symbols-outlined share-icon">Share</span>
            <p className="share-heading">Share</p>
          </div>
        </div>

        <div className="basic-details-container">
          <p className="company-name">Solbiza</p>
          <p className="product-description">
            Men Regular Fit Striped Casual Shirt
          </p>
          <p className="special-tag">Special price</p>
          <div className="prices">
            <span className="discounted-price">₹275</span>
            <span className="regular-price">₹1,599</span>
            <span className="discount-percent">82% off</span>
          </div>
          <div className="rating-container">
            <div className="average-rating">
              3.9
              <span class="material-symbols-outlined star-icon">star</span>
            </div>
            <p className="number-of-rating-and-reviews">
              2,567 ratings and 140 reviews
            </p>
          </div>
        </div>

        <div className="variants-and-size-container"></div>

        <div className="offers-container">
          <p className="avail-offer-heading">Available offers</p>
          <div className="offers">
            <span class="material-symbols-outlined sell-icon">sell</span>
            <p className="offer-type">Bank offer</p>
            <p className="offer-description">
              Flat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns,
              Min Txn Value ₹10,000
            </p>
            <p className="offer-TC">T&C</p>
          </div>
          <div className="offers">
            <span class="material-symbols-outlined sell-icon">sell</span>
            <p className="offer-type">Bank offer</p>
            <p className="offer-description">
              Flat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns,
              Min Txn Value ₹10,000
            </p>
            <p className="offer-TC">T&C</p>
          </div>
          <div className="offers">
            <span class="material-symbols-outlined sell-icon">sell</span>
            <p className="offer-type">Bank offer</p>
            <p className="offer-description">
              Flat ₹500 off on HDFC Bank Credit/Debit Card on 9 months EMI Txns,
              Min Txn Value ₹10,000
            </p>
            <p className="offer-TC">T&C</p>
          </div>
          <div className="offers">
            <span class="material-symbols-outlined sell-icon">sell</span>
            <p className="offer-type">Special price</p>
            <p className="offer-description">
              Get extra 20% off (price inclusive of cashback/coupon)
            </p>
            <p className="offer-TC">T&C</p>
          </div>
        </div>
        <div className="availability-check-container">
          <div className="sub-1-availablity-check-container">
            <div className="delivery-input-container">
              <div className="location-icon-container">
                <span class="material-symbols-outlined location-icon">
                  location_on
                </span>
                <p className="location-deliever-heading">Deliver to</p>
              </div>
              <div className="location-area-input">
                <input type="number" className="location-input" placeholder="Enter delivery pincode"/>
                <button className="location-submit-button">Check</button>
              </div>
            </div>
            <div className="service-check-container">
              <p className="service-keyword">Services</p>
              <div className="cash-on-tag">
                <span class="material-symbols-outlined rupee-icon">currency_rupee</span>
                <p className="cash-on-delivery-keyword">Cash on Delivery available</p>
              </div>
            </div>
          </div>
          <div className="sub-2-availability-check-container">
            <div className="delivery-date-and-time">
              <div className="delivery-date-container">
                <p className="delivery-date-description">Delivery by 28 Sep, Thursday |</p>
                <div className="delivery-off">
                  <p className="free-keyword">Free</p>
                  <p className="off-40">₹40</p>
                </div>
              </div>
              <div className="delivery-time-container">
                <p className="delivery-time-keyword">if ordered before 6:59 PM</p>
              </div>
            </div>
            <p className="view-detail-tag">View Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}
