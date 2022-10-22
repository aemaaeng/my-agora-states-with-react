import React, { useEffect, useState } from "react";
import "../Styles/Discussions.css";
import Discussion from "./Discussion";
import { getDiscussions } from "../Api/DiscussionDataApi";

const Discussions = () => {
  // 변하는 값들은 어떤 것들이 있나?
  // 배열의 상태. 폼에 입력되는 값(작성자, 제목, 내용)
  // state를 공유하고 있으므로 입력 폼도 여기에 작성하는 것이 맞아보임.

  // 변하는 값들 상태 저장하기
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [discussions, addDiscussion] = useState([]);

  // fetch로 데이터 불러오기
  useEffect(() => {
    getDiscussions().then((data) => addDiscussion(data));
  }, []);

  // 작성자 저장
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  // 질문 제목 저장
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  // 버튼을 눌렀을 때 배열에 추가되는 이벤트 핸들러
  const handleButtonClick = (event) => {
    // 추가할 질문
    const discussion = {
      id: discussions.length,
      createdAt: new Date(),
      updatedAt: new Date(),
      title: title,
      url: "#",
      author: username,
      bodyHTML:
        '<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/87750478/166213290-bd67dcb6-13c3-41d5-afc9-2326b3c22a82.png"><img src="https://user-images.githubusercontent.com/87750478/166213290-bd67dcb6-13c3-41d5-afc9-2326b3c22a82.png" alt="image" style="max-width: 100%;"></a></p>\n<p dir="auto">문제를 보면 content-box높이의 올바른 계산법을 구하라고 되어있습니다.<br>\n그런데 content-box는 box-sizing의 attribute value이고, 제시된 그림에는 Content로 되어 있기에 문제를 풀기 모호한 부분이 있다고 생각합니다.</p>\n<p dir="auto">문제를 <strong>"box-sizing을 content-box로 선택했을 경우 아래 Content 높이의 올바른 계산법을 고르시오. "</strong> 혹은<br>\n<strong>"box-sizing을 boder-box로 선택했을 경우 아래 Content 높이의 올바른 계산법을 고르시오."</strong> 로 표기하는게 적합하다고 판단되는데, 확인 부탁드립니다.</p>\n<p dir="auto">감사합니다.</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/101170012?s=64&v=4",
    };

    addDiscussion([discussion, ...discussions]);
  };

  return (
    <React.Fragment>
      <section className="form__container">
        <form action="" method="get" className="form">
          <div className="form__input--wrapper">
            <div className="form__input--name">
              <label for="name">작성자: </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form__input--title">
              <label for="name">질문 제목: </label>
              <input type="text" name="title" id="title" required />
            </div>
            <div className="form__textbox">
              <label for="story">질문 내용: </label>
              <textarea
                id="story"
                name="story"
                placeholder="질문을 작성하세요"
                required
              ></textarea>
            </div>
          </div>
          <div className="form__submit">
            <input type="submit" value="등록" id="submit" />
          </div>
        </form>
      </section>
      <section className="discussion__wrapper">
        <ul className="discussions__container">
          {discussions.map((el) => (
            <Discussion key={el.id} discussion={el} />
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
};

export default Discussions;
