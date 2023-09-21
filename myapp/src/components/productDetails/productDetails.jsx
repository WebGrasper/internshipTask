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
              <span class="material-symbols-outlined share-icon">share</span>
              <p className="share-heading">Share</p>
            </div>
        </div>

        <div className="basic-details-container"></div>
        <div className="variants-and-size-container"></div>
        <div className="offers-container"></div>
        <div className="availability-check-container"></div>
      </div>
    </div>
  );
}
