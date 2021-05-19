import React from "react";
import Gallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  const imageList = images?.map((image) => {
    return { original: image, thumbnail: image };
  });
  return (
    <div>
      <Gallery items={imageList} showBullets showThumbnails={true} />
    </div>
  );
};

export default ImageGallery;
