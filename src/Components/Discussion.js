import React from "react";
import "../Styles/Discussion.css";

// 디스커션 하나
const Discussion = ({ discussion }) => {
  const isAnswered = discussion.answer
    ? "fa-circle-check fa-solid"
    : "fa-circle-check fa-regular";
  return (
    <li className="discussion__container" id={discussion.id}>
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={discussion.avatarUrl}
          alt={`avatar of ${discussion.author}`}
        />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={discussion.url} target="_blank">
            {discussion.title}
          </a>
        </h2>
        <div className="discussion__information">
          {`${discussion.author} | ${new Date(
            discussion.createdAt
          ).toLocaleString()}`}
        </div>
      </div>
      <div className="discussion__answered">
        <i className={isAnswered}></i>
      </div>
    </li>
  );
};

export default Discussion;
