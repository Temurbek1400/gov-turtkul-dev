import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MainFormWrapper, Textarea } from "./virtual-reception.styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import { useForm } from "react-hook-form";
import { Checkbox } from "@mui/material";
import SimpleModal from "./../common/modal";

const MainForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => console.log(data);

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <MainFormWrapper>
            <Grid container spacing={4}>
               <Grid item xs={12} sm={12} md={8} lg={6}>
                  <TextField
                     type="text"
                     id="firstName"
                     label="First Name"
                     required
                     sx={{ width: "100%", marginBottom: 5 }}
                     {...register("firstName", {
                        required: true,
                        maxLength: 30,
                     })}
                  />
                  <TextField
                     type="email"
                     id="email"
                     label="Email"
                     required
                     sx={{ width: "100%", marginBottom: 5 }}
                     {...register("email", { required: true, maxLength: 30 })}
                  />
                  <Textarea
                     aria-label="address"
                     minRows={3}
                     placeholder="Address"
                     style={{ width: "100%", marginBottom: 5 }}
                     required
                     id="address"
                     label="Address"
                     {...register("address", {
                        required: true,
                        maxLength: 100,
                     })}
                  />
               </Grid>
               <Grid item xs={12} sm={12} md={8} lg={6}>
                  <TextField
                     type="text"
                     id="lastName"
                     label="Last Name"
                     sx={{ width: "100%", marginBottom: 5 }}
                     required
                     {...register("lastName", {
                        required: true,
                        maxLength: 30,
                     })}
                  />
                  <Textarea
                     aria-label="Appeal"
                     minRows={3}
                     placeholder="Appeal"
                     style={{ width: "100%", marginBottom: 5 }}
                     required
                     id="appeal"
                     label="Appeal"
                     {...register("appeal", { required: true, maxLength: 200 })}
                  />
               </Grid>
            </Grid>
            <SimpleModal
               head={"FUQAROLARNI MUROJAATLARINI KO`RIB ChIQISh TARTIBI"}
               p={"loram..."}
               button={
                  "I got acquainted with the rules of procedure for consideration of appeals in the municipality."
               }
            />
            <Button type="submit" variant="outlined">
               Submit
            </Button>
         </MainFormWrapper>
      </form>
   );
};

export default MainForm;
