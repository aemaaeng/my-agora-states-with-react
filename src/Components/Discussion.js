import React from "react";
import "../Styles/Discussion.css";

// 디스커션 하나
const Discussion = ({ discussion }) => {
  // 답변이 존재하면 체크박스 바꾸는 것 구현하기
  // 트위틀러 김코딩 필터링 참고
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
        <i className="fa-circle-check fa-regular"></i>
      </div>
    </li>
  );
};

export default Discussion;
