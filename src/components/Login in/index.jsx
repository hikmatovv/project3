import React from "react";
import Grid from "@mui/material/Grid";
import Bg from "../../assets/Login_in_Bg.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Google from "../../assets/Google.png";
import Facebook from "../../assets/f.png";
import Container from "@mui/material/Container";
import InputBase from '@mui/material/InputBase';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export default function index() {
  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        paddingBottom: "80px ",
        paddingTop: "40px",
        background: `linear-gradient(90deg, rgba(107, 120, 255, 0.99) 0%, #8609E9 48.55%, rgba(134, 9, 233, 0) 97.4%)`,
      }}
    >
      <Container>
        <Grid container sx={{ color: "white" }}>
          <Grid item md={6} sm={12} xs={12}>
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  display: "inline-block",
                }}
              >
                Home
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  display: "inline-block",
                  marginLeft: "24px",
                }}
              >
                /
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  display: "inline-block",
                  marginLeft: "24px",
                }}
              >
                My Account
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "700", marginTop: "24px" }}
            >
              My Account
            </Typography>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "700", marginTop: "45px" }}
            >
              Login
            </Typography>
            <Box sx={{ marginTop: "24px" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  display: "inline-block",
                }}
              >
                Don’t have accout ?
              </Typography>

              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  display: "inline-block",
                  marginLeft: "5px",
                }}
              >
                Sign Up
              </Typography>
            </Box>
            <Grid container sx={{ marginTop: "23px" }} spacing={1}>
              <Grid item md={6} sm={6} xs={12}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    border: "none",
                    width: "180px",
                    height: "48px",
                    backgroundColor: "white",
                    borderRadius: "0px",
                    fontSize: "18px",
                    fontWeight: "400",
                    cursor:"pointer"
                  }}
                >
                  <img
                    src={Google}
                    alt=""
                    style={{ marginTop: "-3px", marginRight: "24px" }}
                  />{" "}
                  Google
                </Button>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    border: "none",
                    width: "180px",
                    height: "48px",
                    backgroundColor: "white",
                    borderRadius: "0px",
                    fontSize: "18px",
                    fontWeight: "400",
                    cursor:"pointer"

                  }}
                >
                  <img
                    src={Facebook}
                    alt=""
                    style={{ marginTop: "-3px", marginRight: "24px" }}
                  />{" "}
                  FaceBook
                </Button>
              </Grid>
            </Grid>
            <Box sx={{marginTop:"40px"}}>
                  <Typography sx={{fontSize:"18px",fontWeigth:"700"}}>
                      Email
                  </Typography>
            <InputBase
        sx={{ ml: 1, flex: 1,backgroundColor:"white",width:"100%",height:"48px",fontSize:"18px",paddingLeft:"24px",marginTop:"8px",marginLeft:"-1px" }}
        placeholder="Email"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
            </Box>
            <Box sx={{marginTop:"16px"}}>
                  <Typography sx={{fontSize:"18px",fontWeigth:"700"}}>
                      Password
                  </Typography>
            <InputBase
        sx={{ ml: 1, flex: 1,backgroundColor:"white",width:"100%",height:"48px",fontSize:"18px",paddingLeft:"24px",marginTop:"12px",marginLeft:"-1px" }}
        placeholder="Password"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
            </Box>
            <Grid container sx={{marginTop:"25px"}}>
                  <Grid item md={6} sm={6} xs={12}>
                <FormControlLabel control={<Checkbox defaultChecked sx={{border:"none",color:"white"}}/>} label="Remember Me" sx={{color:"white",fontWeight:"700"}} />
                </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <Typography sx={{FontSize:"14px",fontWeight:"700",marginTop:"10px"}}>Forget Password ?</Typography>
                  </Grid>
                </Grid>
                <Grid container sx={{marginTop:"27px"}}>
                    <Grid item md={6} sm={6} xs={12}></Grid>
                    <Grid item md={6} sm={6} xs={12}>
                      <button style={{border:"none",fontSize:"18px",fontWeight:"700",color:`#7D89FF`,width:"180px",height:"48px",backgroundColor:"white",cursor:"pointer"}}>Login</button>
                    </Grid>
          </Grid>
          </Grid>
         
        </Grid>
      </Container>
    </div>
  );
}
