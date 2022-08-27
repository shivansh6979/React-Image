import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  console.log("tags", tags);

  return (
    <div>
      <div className="card">
        <img src={image.webformatURL} alt="loading" />
        <h3 className="user">Photo by {image.user}</h3>
        <ul className="list">
          <li>
            <strong>Views</strong> :{image.views}
          </li>
          <li>
            <strong>Downloads</strong> :{image.downloads}
          </li>
          <li>
            <strong>Likes</strong> :{image.likes}
          </li>
        </ul>
        {tags.map((tag, index) => {
          return (
            <span className="tag" key={index}>
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCard;
