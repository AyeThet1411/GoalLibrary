import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BookQuantity(props) {
  return (
    <div>
      <div>
        <div>
          <FontAwesomeIcon icon={props.icon} className="book-icon" />
          <p>{props.bookType}</p>
          <p>{props.quantity}</p>
        </div>
      </div>
    </div>
  );
}
