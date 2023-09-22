import React from "react";
import { useState } from "react";
import "./productDetails.css";

export default function ProductDetails() {
  // const changeMainImage = (e) => {
  //   const source = e.target.src;
  //   const mainImageElement = document.querySelector(".main-image");
  //   mainImageElement.src = source;
  // }
  const [isDark, setDark] = useState(false);
  function myFunction() {
    document.body.classList.toggle("dark-mode");
    setDark(!isDark);
  }
  return (
    <div className="main-container">
      {/* ------------------------------------left Container start------------------------------------ */}
      <div className="container-1">
        <div className="main-container-1-images">
          <div className="sub-container-1-images">
            <div className="sub-images-container">
              <img
                className="sub-images"
                id="p01"
                src="/images/i11.webp"
                onClick={(e) => {
                  const source = e.target.src;
                  const mainImageElement =
                    document.querySelector(".main-image");
                  mainImageElement.src = source;
                }}
                alt=""
              />
              <img
                className="sub-images"
                id="p02"
                src="/images/i12.webp"
                onClick={(e) => {
                  const source = e.target.src;
                  const mainImageElement =
                    document.querySelector(".main-image");
                  mainImageElement.src = source;
                }}
                alt=""
              />
              <img
                className="sub-images"
                id="p03"
                src="/images/i13.webp"
                onClick={(e) => {
                  const source = e.target.src;
                  const mainImageElement =
                    document.querySelector(".main-image");
                  mainImageElement.src = source;
                }}
                alt=""
              />
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
              <p className="navigator-location" style={isDark ? { color: 'white' } : {}}>
                Home
              </p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
            <div className="navigator-container">
              <p className="navigator-location" style={isDark ? { color: 'white' } : {}}>Clothing</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
            <div className="navigator-container">
              <p className="navigator-location" style={isDark ? { color: 'white' } : {}}>Topwear</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
            <div className="navigator-container">
              <p className="navigator-location" style={isDark ? { color: 'white' } : {}}>Shirts</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
            <div className="navigator-container">
              <p className="navigator-location" style={isDark ? { color: 'white' } : {}}>Men's shirts</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
            <div className="navigator-container">
              <p className="navigator-location" style={isDark ? { color: 'white' } : {}}>Casual shirts</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
            <div className="navigator-container">
              <p className="navigator-location" style={isDark ? { color: 'white' } : {}}>TRPIR Casual shirts</p>
              <span class="material-symbols-outlined right-arrow">
                navigate_next
              </span>
            </div>
          </div>
          <div className="share-button-container">
            <span class="material-symbols-outlined share-icon" style={isDark ? { color: 'white' } : {}}>Share</span>
            <p className="share-heading" style={isDark ? { color: 'white' } : {}}>Share</p>
          </div>
          <button onClick={myFunction} className="dark-mode-button" style={isDark ? { color: 'black', backgroundColor:'white'} : {}}>{isDark ? 'Light' : 'Dark'}</button>
        </div>

        <div className="basic-details-container">
          <p className="company-name">Solbiza</p>
          <p className="product-description" style={isDark ? { color: 'white' } : {}}>
            Men Regular Fit Striped Casual Shirt
          </p>
          <p className="special-tag">Special price</p>
          <div className="prices">
          <span className="discounted-price" style={isDark ? { color: 'white' } : {}}>₹275</span>
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

        <div className="variants-and-size-container">
          <div className="variants-and-size-container-color">
            <span style={isDark ? { color: 'white' } : {}}>Color</span>
            <div className="color-selector-image">
              <img
                src="/images/i11.webp"
                onClick={(e) => {
                  const sourceParent = e.target.src;
                  document.querySelector("#p01").src = "/images/i11.webp";
                  document.querySelector("#p02").src = "/images/i12.webp";
                  document.querySelector("#p03").src = "/images/i13.webp";
                  document.querySelector(".main-image").src = sourceParent;
                }}
                alt=""
                srcset=""
              />
            </div>
            <div className="color-selector-image">
              <img
                src="/images/i21.webp"
                onClick={(e) => {
                  const sourceParent = e.target.src;
                  document.querySelector("#p01").src = "/images/i21.webp";
                  document.querySelector("#p02").src = "/images/i22.webp";
                  document.querySelector("#p03").src = "/images/i23.webp";
                  document.querySelector(".main-image").src = sourceParent;
                }}
                alt=""
                srcset=""
              />
            </div>
            <div className="color-selector-image">
              <img
                src="/images/i31.webp"
                onClick={(e) => {
                  const sourceParent = e.target.src;
                  document.querySelector("#p01").src = "/images/i31.webp";
                  document.querySelector("#p02").src = "/images/i32.webp";
                  document.querySelector("#p03").src = "/images/i33.webp";
                  document.querySelector(".main-image").src = sourceParent;
                }}
                alt=""
              />
            </div>
          </div>
          <br />
          <div className="variants-and-size-container-color adjust">
            <span style={isDark ? { color: 'white' } : {}}>Size</span>
            <div className="size-selector-div">S</div>
            <div className="size-selector-div" id="blue-effect">
              M
            </div>
            <div className="size-selector-div">L</div>
            <div className="size-selector-div">XL</div>
          </div>
        </div>

        <div className="offers-container">
          <p className="avail-offer-heading" style={isDark ? { color: 'white' } : {}}>Available offers</p>
          <div className="offers">
            <span class="material-symbols-outlined sell-icon">sell</span>
            <p className="offer-type" style={isDark ? { color: 'white' } : {}}>Bank offer</p>
            <p className="offer-description" style={isDark ? { color: 'white' } : {}}>
              Flat ₹200 off on HDFC Bank Credit/Debit Card on 3 months EMI Txns,
              Min Txn Value ₹10,000
            </p>
            <p className="offer-TC">T&C</p>
          </div>
          <div className="offers">
            <span class="material-symbols-outlined sell-icon">sell</span>
            <p className="offer-type" style={isDark ? { color: 'white' } : {}}>Bank offer</p>
            <p className="offer-description" style={isDark ? { color: 'white' } : {}}>
              Flat ₹500 off on HDFC Bank Credit/Debit Card on 6 months EMI Txns,
              Min Txn Value ₹10,000
            </p>
            <p className="offer-TC">T&C</p>
          </div>
          <div className="offers">
            <span class="material-symbols-outlined sell-icon">sell</span>
            <p className="offer-type" style={isDark ? { color: 'white' } : {}}>Bank offer</p>
            <p className="offer-description" style={isDark ? { color: 'white' } : {}}>
              Flat ₹500 off on HDFC Bank Credit/Debit Card on 9 months EMI Txns,
              Min Txn Value ₹10,000
            </p>
            <p className="offer-TC">T&C</p>
          </div>
          <div className="offers">
            <span class="material-symbols-outlined sell-icon">sell</span>
            <p className="offer-type" style={isDark ? { color: 'white' } : {}}>Special price</p>
            <p className="offer-description" style={isDark ? { color: 'white' } : {}}>
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
                <p className="location-deliever-heading" style={isDark ? { color: 'white' } : {}}>Deliver to</p>
              </div>
              <div className="location-area-input">
                <input
                  type="number"
                  className="location-input"
                  placeholder="Enter delivery pincode"
                  style={isDark ? { color: 'white', backgroundColor:'#191919'} : {}}
                />
                <button className="location-submit-button" style={isDark ? { color: 'white' } : {}}>Check</button>
              </div>
            </div>
            <div className="service-check-container">
              <p className="service-keyword" style={isDark ? { color: 'white' } : {}}>Services</p>
              <div className="cash-on-tag">
                <span class="material-symbols-outlined rupee-icon">
                  currency_rupee
                </span>
                <p className="cash-on-delivery-keyword">
                  Cash on Delivery available
                </p>
              </div>
            </div>
          </div>
          <div className="sub-2-availability-check-container">
            <div className="delivery-date-and-time">
              <div className="delivery-date-container">
                <p className="delivery-date-description">
                  Delivery by 28 Sep, Thursday |
                </p>
                <div className="delivery-off">
                  <p className="free-keyword">Free</p>
                  <p className="off-40">₹40</p>
                </div>
              </div>
              <div className="delivery-time-container">
                <p className="delivery-time-keyword">
                  if ordered before 6:59 PM
                </p>
              </div>
            </div>
            <p className="view-detail-tag">View Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}
