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
import { Button } from "@mui/material";

const Votes = () => {
  return (
    <>
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
                  <Button variant="outlined" color="success" size="small">
                    <Vote>
                      Rozi
                      <BiLike style={{ color: "green" }} />
                    </Vote>
                  </Button>
                  <Button color="error" variant="outlined">
                    <Vote>
                      <BiDislike style={{ color: "red" }} />
                      Qarshi
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
