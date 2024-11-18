import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/default_image.svg";

const ImageGenerator = () => {

  const [imageUrl, setImageUrl] = useState("/");
  let inputRef = useRef(null);


  return (
    <div className="ai-image-generator">
      <div className="header">
        {" "}
        AI Image <span> Generator </span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={ imageUrl === "/" ? default_image : imageUrl} alt="" />
        </div>
      </div>
      <div className="search-box">
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Describe What You Want To See"
        />
        <div className="generate-btn">Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
