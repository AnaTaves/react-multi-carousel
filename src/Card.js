import React from "react";

import * as S from "./Card-styles";

const Card = ({ data, index }) => {
  return (
    <div>
      {data[index].map((item) => (
        <S.Container>
          <h1>{item.title}</h1>
          <h1>{item.desc}</h1>
          <img src={item.pic} />
        </S.Container>
      ))}
    </div>
  );
};

export default Card;
