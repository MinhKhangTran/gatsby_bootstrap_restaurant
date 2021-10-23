import React from "react";

const Title = ({ title, heading }: { title: string; heading: boolean }) => {
  return (
    <div className="wrapper">
      {heading ? (
        <h1 className="title">{title}</h1>
      ) : (
        <h2 className="title">{title}</h2>
      )}

      <div className="underbar_wrapper">
        <div className="underbar underbar_1"></div>
        <div className="underbar underbar_2"></div>
        <div className="underbar underbar_1"></div>
      </div>
    </div>
  );
};

export default Title;
