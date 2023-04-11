import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { DUMMY } from "../store/index";
import { Link } from "react-router-dom";
import DataList from "../components/DataList";

const Home = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="container">
        {DUMMY.map((item) => (
          <Link to={`/data/${item.id}`} key={item.id}>
            <DataList
              id={item.id}
              title={item.title}
              content={item.content}
              created_at={item.created_at}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
