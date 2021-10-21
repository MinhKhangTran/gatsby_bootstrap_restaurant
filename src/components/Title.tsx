import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="wrapper">
      <h3 className="title">{title}</h3>
      <div className="underbar_wrapper">
        <div className="underbar underbar_1"></div>
        <div className="underbar underbar_2"></div>
        <div className="underbar underbar_1"></div>
      </div>
    </div>
  );
};

export default Title;
