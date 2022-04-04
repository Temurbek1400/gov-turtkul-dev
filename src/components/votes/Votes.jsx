import { Title } from "components/services/services.style";
import React from "react";
import { VoteData } from "./votes-data";
import {
  IconsWrapper,
  Like,
  Vote,
  VoteBody,
  VoteCard,
  Wrapper,
} from "./votes.style";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { BiDislike, BiLike } from "react-icons/bi";

const Votes = () => {
  return (
    <div style={{ padding: "0 30px" }}>
      <Title>Ovoz berish</Title>
      <Wrapper>
        {VoteData.map((item, id) => {
          return (
            <VoteCard key={id}>
              <h4>{item.title}</h4>
              <VoteBody>{item.body}</VoteBody>
              <Progress percent={item.voted} />
              <IconsWrapper>
                <Like>
                  <Vote>
                    Rozi
                    <BiLike style={{ color: "green" }} />
                  </Vote>
                  <Vote>
                    <BiDislike style={{ color: "red" }} />
                    Qarshi
                  </Vote>
                </Like>
              </IconsWrapper>
            </VoteCard>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default Votes;
