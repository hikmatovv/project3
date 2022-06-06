import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Background from "../../assets/myAcountHeader.png";
import Card from "@mui/material/Card";
import Avatars from "../../assets/avatar.png";
import Avatar from "@mui/material/Avatar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "Black",
  background: "none",
  boxShadow: "none",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "Black",
  background: "none",
  boxShadow: "none",
}));

export default () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container spacing={0} sx={{ width: "90%", marginLeft: "10%" }}>
          <Grid item md={6} sm={12} xs={12}>
            <Item
              sx={{ padding: "25px 0px", textAlign: "left", color: "white" }}
            >
              <b style={{ wordSpacing: "20px", paddingLeft: "1%" }}>
                Home / My Account
              </b>
            </Item>
            <Item sx={{ fontSize: "40px", textAlign: "left", color: "white" }}>
              <b> My Account</b>
            </Item>
            <Grid item xs={9}>
              <Item
                sx={{
                  fontSize: "18px",
                  color: "white",
                  textAlign: "left",
                  marginTop: "6%",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </Item>
            </Grid>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Item>
              <Item sx={{ padding: "25px 0px", width: "90%", color: "white" }}>
                <Card
                  sx={{
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      marginLeft: "35%",
                      marginTop: "10%",
                      width: "150px",
                      height: "150px",
                    }}
                    alt="Remy Sharp"
                    src={Avatars}
                  />
                  <Item sx={{ fontSize: "24px" }}>
                    <b>Alexanderdrostact12</b>
                  </Item>
                  <Item sx={{ fontSize: "14px", color: "gray" }}>
                    Alexanderrostact567@gmail.com
                  </Item>
                  <Item sx={{ marginTop: "3%" }}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#7A70E9" }}
                    >
                      Update
                    </Button>
                  </Item>
                </Card>
              </Item>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid mb='5%' container sx={{ width: "90%", marginLeft: "10%" }}>
          <Grid item xs={12} md={6} sm={12}>
            <Item sx={{ textAlign: "left" }}>
              <b>Name</b>
              <p>
                <input
                  style={{
                    height: "28px",
                    width: "90%",
                    border: "solid 1px #C4C4C4",
                    paddingLeft: "10px",
                  }}
                  placeholder="Alexanderdrostact12"
                  type="text"
                  multiline
                  name=""
                  id="outlined-multiline-static"
                />
              </p>
            </Item>
            <Item sx={{ textAlign: "left" }}>
              <b>Street</b>
              <p>
                <input
                  style={{
                    height: "28px",
                    width: "90%",
                    border: "solid 1px #C4C4C4",
                    paddingLeft: "10px",
                  }}
                  placeholder="jl.karadenan no 100"
                  id="outlined-multiline-static"
                  multiline
                  type="text"
                  name=""
                />
              </p>
            </Item>
            <Item sx={{ textAlign: "left" }}>
              <b>address</b>
              <p>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  placeholder="Perum Mulya Sari, Jl. Candi Mendut No.36, RT 011/RW 005 (Belakang Polsek Lowokwaru), Kel. Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur, 65142"
                  sx={{ width: "92%", fontSize: "18px" }}
                />
              </p>
            </Item>
            <Item sx={{textAlign:"left"}}>
                <Button variant="contained" sx={{backgroundColor:"#906AFF"}}>
                    update
                </Button>
            </Item>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Item2
              sx={{ textAlign: "left", marginTop: { md: "16%", sm: "0px" } }}
            >
              <b>no. Phone</b>
              <p>
                <input
                  style={{
                    height: "28px",
                    width: "90%",
                    border: "solid 1px #C4C4C4",
                    paddingLeft: "10px",
                  }}
                  placeholder="1234 1234 1234 1234"
                  id="outlined-multiline-static"
                  multiline
                  type="text"
                  name=""
                />
              </p>
            </Item2>
            <Item2 sx={{ textAlign: "left" }}>
              <b>Gender</b>
              <p>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </p>
            </Item2>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
