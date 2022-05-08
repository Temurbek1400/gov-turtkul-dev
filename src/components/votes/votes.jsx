import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVotes,
  postVote,
} from "store/reducer-and-action/votes/votesSlice";
let ip;

const Votes = ({ votes }) => {
  const dispatch = useDispatch();
  const [disableBtn, setDisableBtn] = useState(false);
  const data = useSelector((state) => state.votes.votes);
  useEffect(() => {
    dispatch(fetchVotes());
    getIp();
  }, [dispatch]);

  const getIp = async () => {
    await fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => (ip = data.ip));
  };

  const voted = async (voting, itemID) => {
    let vote;
    if (voting === "agree")
      vote = {
        id: itemID,
        ip: ip + itemID,
        tr: true,
        fl: false,
        vote: itemID,
      };
    else
      vote = {
        id: itemID,
        ip: ip + itemID,
        tr: false,
        fl: true,
        vote: itemID,
      };

    await dispatch(postVote(vote));
    alert("You successfully voted");
    setDisableBtn(true);
    dispatch(fetchVotes());
  };
  return (
    <>
      <Title text={votes.title} />
      <Wrapper>
        {data.map((item) => {
          return (
            <VoteCard key={item.id}>
              <h4>{item.title}</h4>
              <VoteBody>{item.text}</VoteBody>
              <Progress
                percent={Math.floor(
                  (item.sumagree / (item.sumagree + item.sumdisagree)) * 100
                )}
              />
              <IconsWrapper>
                <Like>
                  <Button
                    disabled={disableBtn}
                    variant="outlined"
                    color="success"
                    size="small"
                  >
                    <Vote onClick={() => voted("agree", item.id)}>
                      {votes.votes.yes}
                      <BiLike style={{ color: "green" }} />
                    </Vote>
                  </Button>
                  <Button
                    disabled={disableBtn}
                    color="error"
                    variant="outlined"
                  >
                    <Vote onClick={() => voted("disAgree", item.id)}>
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
