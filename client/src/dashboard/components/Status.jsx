import React from "react";
import "./styles/row.css";

const Status = ({ style, status }) => {
  return (
    <>
      {status === "Accepted" ? (
        <div className="  rounded-full bg-green-700 text-white p-2 w-20">
          <p className="status"> {status}</p>
        </div>
      ) : status === "Rejected" ? (
        <div className="  rounded-full bg-red-700 text-white p-2 w-20">
          <p className="status"> {status}</p>
        </div>
      ) : status === "Pending" ? (
        <div className=" rounded-full bg-yellow-600 text-white p-2 w-20">
          <p className="status"> {status}</p>
        </div>
      ) : (
        <div className=" rounded-full bg-blue-700 text-white p-2 w-20">
          <p className="status"> {status}</p>
        </div>
      )}
    </>
  );
};

export default Status;
