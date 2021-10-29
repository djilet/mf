import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageList = ({width, data }) => {
  const images: any[] = [];
  data.forEach(image => images.push({ original: image.filename, thumbnail: image.filename, width: 900 }));
  const [isShow, setIsShow] = useState(true)
  useEffect(()=>{
    if (width=== ('xs' || 'md')){
      setIsShow(false)
    }else(
      setIsShow(true)
    )
  }, [width])
  return (
    <div style={{ width: "100%", maxWidth: '900px' }}>
      <ImageGallery items={images} showFullscreenButton={isShow} showPlayButton={isShow} />
    </div>
  );
};

export default ImageList;
