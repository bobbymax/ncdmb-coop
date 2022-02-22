import React from "react";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <>
      <style jsx={true}>
        {`
          .container {
            max-width: 100%;
            width: 100%;
            height: 100%;
            background-color: rgb(0, 0, 0, 0.2);
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 100;
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
          }}
          loop
          autoplay
        />
      </div>
    </>
  );
};

export default Loading;
