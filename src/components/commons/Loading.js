import React from "react";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <>
      <style jsx={true}>
        {`
          .container {
            width: 2000px;
            height: 100%;
            background-color: rgb(0, 0, 0, 0.5);
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>

      <div className="container">
        <Lottie
          animationData={require("../../assets/animations/loading-bloob.json")}
          style={{
            width: 300,
            opacity: 0.5,
          }}
          loop
          autoplay
        />
      </div>
    </>
  );
};

export default Loading;
