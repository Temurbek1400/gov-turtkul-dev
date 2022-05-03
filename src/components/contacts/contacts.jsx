import { Grid } from "@mui/material";
import React from "react";
import { ContactsStyled } from "./contacts.styles";

const Contacts = () => {
  return (
    <ContactsStyled>
      <Grid container>
        <Grid lg={4} md={12} sm={12} sx={{border: "1px solid red"}}>
          helo contacts
        </Grid>
        <Grid lg={8} md={12} sm={12} sx={{border: "1px solid red"}}>
            halo maps
        </Grid>
      </Grid>
    </ContactsStyled>
  );
};

export default Contacts;
