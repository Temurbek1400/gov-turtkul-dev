import React from "react";
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
import { Button } from "@mui/material";
import Title from "components/title";

const Votes = ({ votes }) => {
  return (
    <>
      <Title text={votes.title} />
      <Wrapper>
        {votes.cards.map((item, id) => {
          return (
            <VoteCard key={id}>
              <h4>{item.title}</h4>
              <VoteBody>{item.body}</VoteBody>
              <Progress percent={item.voted} />
              <IconsWrapper>
                <Like>
                  <Button variant="outlined" color="success" size="small">
                    <Vote>
                      {votes.votes.yes}
                      <BiLike style={{ color: "green" }} />
                    </Vote>
                  </Button>
                  <Button color="error" variant="outlined">
                    <Vote>
                      <BiDislike style={{ color: "red" }} />
                      {votes.votes.no}
                    </Vote>
                  </Button>
                </Like>
              </IconsWrapper>
            </VoteCard>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Votes;
