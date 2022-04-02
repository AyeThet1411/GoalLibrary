import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faBookOpen,
  faDownload,
  faCalendarDays,
  faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";

export default function BookCard(props) {
  return (
    <div className="book--each--card">
      <div className="book--title">{props.name}</div>
      <div className="book--information">
        <img src={props.img} className="book--img" />
        <div className="book--info">
          <h3>Author:{props.author}</h3>
          <p>
            <FontAwesomeIcon icon={faBookOpen} className="book--icon" />
            {props.type}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarDays} className="book--icon" />
            {props.date}
          </p>
          <p>
            <FontAwesomeIcon icon={faSquarePlus} className="book--icon" />
            Add to Favourite
          </p>
          <button className="btn">
            Download
            <FontAwesomeIcon icon={faDownload} className="btn--icon" />
          </button>
          <button className="btn">
            Read
            <FontAwesomeIcon icon={faBookOpenReader} className="btn--icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
