import React from 'react';

const ListItem = ({ data }) => {
  const { image, isActive, name, about, price, _id: id } = data;
  const label = isActive ? 'block2-labelnew' : '';

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
      <div className="block2">
        <div className={`block2-img wrap-pic-w of-hidden pos-relative ${label}`}>
          <img src={image} alt={about} />

          <div className="block2-overlay trans-0-4">
            <a
              href="/"
              className="block2-btn-addwishlist hov-pointer trans-0-4"
            >
              <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
              <i
                className="icon-wishlist icon_heart dis-none"
                aria-hidden="true"
              />
            </a>

            <div className="block2-btn-addcart w-size1 trans-0-4">
              <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="block2-txt p-t-20">
          <a
            href="product-detail.html"
            className="block2-name dis-block s-text3 p-b-5"
          >
            {name}
          </a>

          <span className="block2-price m-text6 p-r-5">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
