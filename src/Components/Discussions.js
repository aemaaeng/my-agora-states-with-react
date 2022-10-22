import React, { useEffect, useState } from "react";
import "../Styles/Discussions.css";
import Discussion from "./Discussion";
import { getDiscussions } from "../Api/DiscussionDataApi";

const Discussions = () => {
  // 변하는 값들은 어떤 것들이 있나?
  // 배열의 상태. 폼에 입력되는 값(작성자, 제목, 내용)
  // 버튼을 눌렀을 때 배열에 추가되는 이벤트 핸들러도 필요함
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    getDiscussions().then((data) => setDiscussions(data));
  }, []);

  return (
    <section className="discussion__wrapper">
      <ul className="discussions__container">
        {discussions.map((el) => (
          <Discussion key={el.id} discussion={el} />
        ))}
      </ul>
    </section>
  );
};

export default Discussions;
