import React from "react";

const Alert = (props) => {
  return (
    <>
      {props.alert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {props.alert.type} {props.alert.message}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
