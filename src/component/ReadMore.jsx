import React, { useState } from "react";
import "./ReadMore.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less "}
      </span>
    </div>
  );
};

const Content = () => {
  return (
    <div className="container">
      <h1>The Headlines</h1>
      <h3>
        <ReadMore>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          voluptates minima quibusdam repudiandae delectus iste aliquid facere,
          ipsum dolores maxime commodi quidem cumque sapiente sit libero
          praesentium aliquam. Illum, nostrum!
        </ReadMore>
      </h3>

      <div className="content_right">
        <h1>The Daily New</h1>
        <h3>
          <ReadMore>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            eius perspiciatis ex nostrum vitae totam earum ut molestiae nam qui,
            possimus commodi, iusto veritatis. Labore harum sapiente porro iste
            aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ad, quas.
          </ReadMore>
        </h3>
      </div>
    </div>
  );
};

export default Content;
