import React from "react";
import { Link, useParams } from "react-router-dom";

const Navigation = () => {
  const 아무변수 = useParams();
  return (
    <div>
      <div className="navbar">
        <div className="nav-header">Title</div>
        <div className="nav-content">
          <Link to="/out">
            <nav className={아무변수.title === "out" ? "bg-gray" : ""}>
              소개
            </nav>
          </Link>
          <a href="/ceo">
            <nav className={아무변수.title === "ceo" ? "bg-gray" : ""}>
              경력
            </nav>
          </a>
          <nav>주소</nav>
          <nav>연락처</nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
