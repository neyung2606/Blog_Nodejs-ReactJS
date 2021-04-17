import React from "react";
import './index.scss'

const Title = (props) => {
  return (
    <div className="title-content">
      <p className="title">{props.title}</p>
    </div>
  );
};

export { Title };
