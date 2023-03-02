import React from "react";

function AppAlert({ mesage, variant, dismissTime }) {
  return (
    <div className="d-flex justify-content-end px-4">
      <div
        style={{ position: "absolute", top: 0 }}
        className={`alert alert-${variant} alert-with-icon d-flex align-items-center w-fit  `}
      >
        <button
          type="button"
          //   aria-hidden="true"
          className="close alert-dismissible"
          style={{ top: 0, height: "100%" }}
          data-dismiss="alert"
          aria-label="Close"
        />
        {/* <i className="tim-icons icon-simple-remove"></i> */}

        <span data-notify="icon" className="tim-icons icon-alert-circle-exc" />
        <span className="mr-5">
          <b> {mesage} </b>
        </span>
      </div>
    </div>
  );
}

export default AppAlert;
