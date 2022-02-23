import React from "react";

const Icon = ({ bgColor = "white", iconColor = "success" }) => {
  return (
    <>
      <style jsx="true">{`
        .container {
          align-items: center;
          border-radius: 50%;
          display: flex;
          height: 50px;
          justify-content: center;
          width: 50px;
        }

        #icon {
          font-size: 28px;
        }
      `}</style>

      <div className={"container bg-" + bgColor}>
        <i className={"fa fa-user text-" + iconColor} id="icon"></i>
      </div>
    </>
  );
};

export default Icon;
