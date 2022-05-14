import React from "react";
import Button from "@mui/material/Button";
import { Progress } from "react-sweet-progress";
import { IconsWrapper, Like, Vote, VoteBody, VoteCard } from "./votes.style";
import { BiDislike, BiLike } from "react-icons/bi";

const VotesItems = ({ votes = [], onVote }) => {
  if (votes.length === 0) {
    return "Loading...";
  }

  return (
    <div>
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
                <Vote onClick={() => onVote(true, item.id)}>
                  <Button variant="outlined" color="success" size="small">
                    {/* {votes.votes.yes} */}
                    <BiLike style={{ color: "green" }} />
                  </Button>
                </Vote>
                <Vote onClick={() => onVote(false, item.id)}>
                  <Button color="error" variant="outlined">
                    <BiDislike style={{ color: "red" }} />
                    {/* {votes.votes.no} */}
                  </Button>
                </Vote>
              </Like>
            </IconsWrapper>
          </VoteCard>
        );
      })}
    </div>
  );
};

export default VotesItems;
