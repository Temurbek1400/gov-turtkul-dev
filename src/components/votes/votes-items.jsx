import React from "react";
import Button from "@mui/material/Button";
import { Progress } from "react-sweet-progress";
import {
  IconsWrapper,
  Like,
  Vote,
  VoteBody,
  VoteCard,
  Wrapper,
} from "./votes.style";
import { BiDislike, BiLike } from "react-icons/bi";

const VotesItems = ({ votes = [], onVote }) => {
  if (votes.length === 0) {
    return "Loading...";
  }
  let disabledVotes = localStorage.getItem("disabledVotes");
  disabledVotes = JSON.parse(disabledVotes);

  return (
    <Wrapper>
      {votes.map((item) => {
        return (
          <VoteCard key={item.id}>
            <h4>{item.title}</h4>
            <VoteBody>{item.text}</VoteBody>
            <Progress
              percent={
                Math.floor(
                  (item.sumagree / (item.sumagree + item.sumdisagree)) * 100
                ) || 0
              }
            />
            <IconsWrapper>
              <Like>
                <Vote>
                  <Button
                    variant="outlined"
                    color="success"
                    size="small"
                    disabled={disabledVotes?.includes(item.id)}
                    onClick={() => onVote(true, item.id)}
                  >
                    Like
                    {/* {votes.votes.yes} */}
                    <BiLike style={{ color: "green" }} />
                  </Button>
                </Vote>
                <Vote>
                  <Button
                    color="error"
                    variant="outlined"
                    disabled={disabledVotes?.includes(item.id)}
                    onClick={() => onVote(false, item.id)}
                  >
                    <BiDislike style={{ color: "red" }} />
                    {/* {votes.votes.no} */}
                    Dislike
                  </Button>
                </Vote>
              </Like>
            </IconsWrapper>
          </VoteCard>
        );
      })}
    </Wrapper>
  );
};

export default VotesItems;
