import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Rasm1 from "../../assets/rasm11.png";
import Rasm2 from "../../assets/rasm12.png";
import Carusel from "../../components/home1/Carusel/index";
import StarIcon from "@mui/icons-material/Star";
import img4 from "../../assets/public/img/img4.png";
import img3 from "../../assets/public/img/img3.png";
import img1 from "../../assets/public/img/img1.png";
import img from "../../assets/public/img/img.png";
import Logo1 from "../../assets/1.png";
import Logo2 from "../../assets/2.png";
import Logo3 from "../../assets/3.png";
import Logo4 from "../../assets/4.png";
import Logo5 from "../../assets/5.png";
import Card1 from "../../components/home1/Card/index";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import ReactDOM from "react-dom";
import { Carousel } from "@trendyol-js/react-carousel";
import Item1 from "../../assets/01.png";
import Item2 from "../../assets/02.png";
import Item3 from "../../assets/03.png";
import Item4 from "../../assets/04.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Rating } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

// import Last from './Last/index'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "#F4F4F4" ? "#F4F4F4" : "#F4F4F4",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const value = 5;
  return (
    <div>
      <Box sx={{ flexGrow: 1, bgcolor: "#7D89FF", pt: 5, pb: 5 }}>
        <Grid container spacing={0.5}>
          <Grid item xs={12} sm={7} md={5} lg={5}>
            <Container>
              <>
                <Typography
                  color="white"
                  sx={{ textAlign: "start", pt: 10, pb: 10 }}
                >
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    Get the Latest Dress <br /> Models From Us
                  </Typography>
                  <Typography sx={{ textAlign: "start", pt: 4, pb: 4 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    pariatur culpa voluptatibus dolores qui quibusdam ipsa
                    incidunt eius optio porro!
                  </Typography>
                  <Typography
                    color="#7D89FF"
                    variant="button"
                    sx={{
                      border: "2px solid white",
                      bgcolor: "white",
                      padding: "4%",
                    }}
                  >
                    shop now
                  </Typography>
                </Typography>
              </>
            </Container>
          </Grid>
          <Grid item xs={12} sm={5} md={2} lg={2}>
            <Box>
              <Typography sx={{ textAlign: "center" }}>
                <Typography>
                  <img src={Rasm1} alt="rasm" />
                </Typography>
                <Typography>
                  <img src={Rasm2} alt="rasm2" />
                </Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Box sx={{ ml: "8%" }}>
              <Typography>
                <Carusel />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ bgcolor: "#F4F4F4", pb: 3 }}>
        <Container>
          <Grid container spacing={0.5} sx={{ alignItems: "center" }}>
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <Item>
                <img src={Logo1} alt="" width="100%" />
              </Item>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <Item>
                <img src={Logo2} alt="logolar" width="100%" />
              </Item>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <Item>
                <img src={Logo3} alt="logolar" width="100%" />
              </Item>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <Item>
                <img src={Logo4} alt="logolar" width="100%" />
              </Item>
            </Grid>
            <Grid item xs={6} sm={4} md={2} lg={2}>
              <Item>
                <img src={Logo5} alt="logolar" width="100%" />
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ paddingTop: "3%", pb: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <>
              <Typography sx={{ pt: 5, textAlign: "start", pl: "5%" }}>
                <Typography
                  sx={{ textTransform: "uppercase", color: "#5463FF" }}
                >
                  Choose your category
                </Typography>{" "}
                <br />
                <Typography
                  variant="h4"
                  color="black"
                  sx={{ fontWeight: "bold" }}
                >
                  Catigories Style
                </Typography>{" "}
                <br />
                <Typography>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusantium, fugit dolor nihil in tempore molestias
                  repudiandae architecto, voluptatem sapiente, veritatis
                  consectetur ex praesentium dolorum laborum amet sed iste a
                  cum?
                </Typography>
              </Typography>
            </>
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={6}>
            <Item sx={{ bgcolor: "white", borderRadius: "none" }}>
              <Typography sx={{ display: "flex", gap: "2%" }}>
                <ChevronLeftIcon
                  sx={{
                    border: "1px solid blue",
                    mt: "10%",
                    bgcolor: "blue",
                    padding: "2%",
                    color: "white",
                  }}
                />
                <img src={Item1} alt="12" width="50%" />
                <ChevronRightIcon
                  sx={{
                    border: "1px solid blue",
                    mt: "10%",
                    bgcolor: "blue",
                    padding: "2%",
                    color: "white",
                  }}
                />
                <img
                  src={Item4}
                  alt="sdkw"
                  width="20%"
                  height="50px"
                  style={{ marginTop: "10%" }}
                />
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ pb: 10 }}>
        <Card1 />
      </Box>

      <Box sx={{ pb: 8 }}>
        <Grid container spacing={2} sx={{ bgcolor: "#7D89FF", pb: 10 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Item sx={{ bgcolor: "#7D89FF", borderRadius: "none" }}>
              <Typography
                sx={{ display: "flex", gap: "2%", position: "relative" }}
              >
                <img
                  src={img1}
                  alt="sdkw"
                  width="20%"
                  height="80%"
                  style={{ marginTop: "6%" }}
                />
                <div
                  style={{
                    width: "30%",
                    borderRadius: "50%",
                    height: "10px",
                    backgroundColor: "white",
                    position: "absolute",
                    top: "90%",
                    left: "-10%",
                  }}
                ></div>
                <ChevronLeftIcon
                  sx={{
                    border: "1px solid blue",
                    mt: "30%",
                    bgcolor: "white",
                    padding: "2%",
                    color: "blue",
                  }}
                />
                <img src={img} alt="12" width="50%" />
                <ChevronRightIcon
                  sx={{
                    border: "1px solid blue",
                    mt: "30%",
                    bgcolor: "white",
                    padding: "2%",
                    color: "blue",
                  }}
                />
                <div
                  style={{
                    width: "50%",
                    borderRadius: "50%",
                    height: "10px",
                    backgroundColor: "white",
                    position: "absolute",
                    top: "100%",
                    right: "19%",
                  }}
                ></div>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Container>
              <>
                <Typography sx={{ pt: "10%" }}>
                  <Typography
                    variant="h3"
                    color="white"
                    sx={{ fontWeight: "bold", textAlign: "start" }}
                  >
                    The Oblongers T-Shirt
                  </Typography>{" "}
                  <br />
                  <Typography sx={{ display: "flex", gap: "30%" }}>
                    <Typography
                      color="white"
                      sx={{ fontWeight: "bold", fontSize: "20px" }}
                    >
                      Color
                    </Typography>
                    <Typography sx={{ textAlign: "end" }}>
                      <Typography sx={{ display: "flex" }}>
                        <StarIcon sx={{ color: "gold" }} />
                        <StarIcon sx={{ color: "gold", marginLeft: "4px" }} />
                        <StarIcon sx={{ color: "gold", marginLeft: "4px" }} />
                        <StarIcon sx={{ color: "gold", marginLeft: "4px" }} />
                        <StarIcon sx={{ color: "gold", marginLeft: "4px" }} />
                        <Typography>(20k)</Typography>
                      </Typography>
                    </Typography>
                  </Typography>{" "}
                  <br />
                  <Typography sx={{ display: "flex", gap: "2%" }}>
                    <Typography
                      sx={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        bgcolor: "black",
                      }}
                    ></Typography>
                    <Typography
                      sx={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        bgcolor: "white",
                      }}
                    ></Typography>
                    <Typography
                      sx={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "50%",
                        bgcolor: "green",
                      }}
                    ></Typography>
                  </Typography>
                </Typography>{" "}
                <br />
                <Typography sx={{ display: "flex", gap: "40%" }}>
                  <Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: "20px",
                        textAlign: "start",
                      }}
                    >
                      Size
                    </Typography>{" "}
                    <br />
                    <Typography sx={{ display: "flex", gap: "3%" }}>
                      <Typography
                        sx={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          bgcolor: "white",
                          color: "green",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        S
                      </Typography>
                      <Typography
                        sx={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          bgcolor: "white",
                          color: "green",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        M
                      </Typography>
                      <Typography
                        sx={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          bgcolor: "white",
                          color: "green",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        L
                      </Typography>
                      <Typography
                        sx={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          bgcolor: "white",
                          color: "green",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        XL
                      </Typography>
                    </Typography>
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "50px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    50$
                  </Typography>
                </Typography>{" "}
                <br />
                <Typography color="white" sx={{ textAlign: "start" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  vitae cupiditate doloremque repellendus iusto, laborum
                  accusamus totam quo magnam minus.
                </Typography>{" "}
                <br />
                <br />
                <Typography sx={{ textAlign: "start", pb: 5 }}>
                  <Typography
                    variant="button"
                    sx={{
                      border: "2px solid white",
                      padding: "3%",
                      bgcolor: "white",
                    }}
                  >
                    Order Now
                  </Typography>
                </Typography>
              </>
            </Container>
          </Grid>
        </Grid>
      </Box>


      <Box sx={{pb: 10}}>
        <Container>
      <Box style={{ textAlign: "center" }}>
            <Typography variant="h4">Testimonials</Typography>
          </Box>
          <br/><br/><br/>
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}lg={6}>
              <>
              <Paper
                elevation={4}
                sx={{
                  borderTopRightRadius: "100px",
                  padding: "7%",
                }}
              >
                <Stack direction="row" spacing={1}>
                  <Avatar src={img3} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Friskidia
                  </Typography>
                </Stack>
                <Box style={{ paddingLeft: "8%" }}>
                  <Typography body="2" sx={{ textAlign: "start" }}>
                    Client
                  </Typography>
                </Box>
                <Typography sx={{ textAlign: "start" }}>
                  <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Typography>
                <Typography style={{ minWidth: "50px", textAlign: "start" }}>
                  lorem ipsum dolor sit amet itracado spam billu strart itracado
                  spam billu strart
                </Typography>
              </Paper>
            
              </>
            </Grid>
            <Grid item xs={12} sm={6} md={6}lg={6}>
              <>
              <Paper
                elevation={4}
                sx={{
                  borderTopRightRadius: "100px",
                  padding: "7%",
                }}
              >
                <Stack direction="row" spacing={1}>
                  <Avatar src={img3} />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Friskidia
                  </Typography>
                </Stack>
                <Box style={{ paddingLeft: "8%" }}>
                  <Typography body="2" sx={{ textAlign: "start" }}>
                    Client
                  </Typography>
                </Box>
                <Typography sx={{ textAlign: "start" }}>
                  <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Typography>
                <Typography style={{ minWidth: "50px", textAlign: "start" }}>
                  lorem ipsum dolor sit amet itracado spam billu strart itracado
                  spam billu strart
                </Typography>
              </Paper>
            </>
            </Grid>
            <Grid item xs={12} sm={6} md={6}lg={6}>
              <>
                <Typography sx={{textAlign:'start'}}> <br/>
                  <Typography variant='h4'sx={{fontWeight:'bold',color:'black'}}>Look For Models Now</Typography> <br/>
                  <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non repellendus quae laudantium in repellat ratione natus.</Typography> <br/> <br/>
                  <Typography variant='button'sx={{color:'white',bgcolor:'#7D89FF',padding:'3%'}}>Log in Now</Typography> <br/>
                </Typography> <br/><br/>
              </>
            </Grid>
            <Grid item xs={12} sm={6} md={6}lg={6}>
              <>
                <img src={img4} alt="dcs" width='100%'/>
              </>
            </Grid>
          </Grid>

        </>
        </Container>
      </Box>
    </div>
  );
}
