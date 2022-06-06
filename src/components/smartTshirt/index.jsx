import React, { useState } from "react";
import { statesData } from "./data/Data";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import shirt1 from "../../assets/Shirt1.png";
import shirt2 from "../../assets/Shirt2.png";
import shirt3 from "../../assets/Shirt3.png";
import shirt4 from "../../assets/Shirt4.png";
import Black from "../../assets/black.png";
import Blue from "../../assets/Blue.png";
import green from "../../assets/Green.png";
import Savat from "../../assets/savat.png";
import shopICon from "../../assets/Shop.png";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "Black",
  boxShadow: "none",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "Black",
  boxShadow: "none",
  background: "none",
}));

export default () => {
  const [count, setCount] = useState(1);
  const [dollor, setDollor] = useState(40);

  const Plus = () => {
    if (count != 0) {
      setCount(count + 1);
      setDollor(dollor + 40);
    }
  };
  const Minus = () => {
    if (count > 1) {
      setCount(count - 1);
      setDollor(dollor - 40);
    }
  };

  return (
    <div style={{ width: "94%", marginLeft: "3%" }}>
      <Box  sx={{ flexGrow: 1 }}>
        <Item sx={{ margin: "25px 0px", textAlign: "left" }}>
          {" "}
          <b style={{ wordSpacing: "20px", paddingLeft: "1%" }}>
            Home / Shope /
          </b>
          <b> Smart T-Shirt</b>
        </Item>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>
            <Item>
              <Grid container spacing={0}>
                <Grid item md={12} sm={12}>
                  <Item>
                    <img style={{ width: "100%" }} src={shirt1} alt="" />
                  </Item>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <Item>
                    <img style={{ width: "100%" }} src={shirt2} alt="" />
                  </Item>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <Item>
                    <img style={{ width: "100%" }} src={shirt3} alt="" />
                  </Item>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <Item>
                    <img style={{ width: "100%" }} src={shirt4} alt="" />
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item md={6} sm={12}>
            <Item>
              <Grid container spacing={0}>
                <Grid item md={12} sm={12}>
                  <Item sx={{ fontSize: "40px", textAlign: "left" }}>
                    <b> Smart T-Shirt</b>
                  </Item>
                </Grid>
                <Grid item md={10}>
                  <Item
                    sx={{ fontSize: "18px", color: "gray", textAlign: "left" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem
                    finibus ullamcorper.
                  </Item>
                  <Item
                    sx={{
                      textAlign: "left",
                      display: "flex",
                      aligmItem: "center",
                      color: "gray",
                      wordSpacing: "0px",
                    }}
                  >
                    <Rating name="size-small" defaultValue={5} size="small" />{" "}
                    (2k)
                  </Item>
                </Grid>
                <Grid item md={6} sm={6} xs={6}>
                  <Item sx={{ textAlign: "left" }}>
                    <b style={{ marginLeft: "10px" }}>Color</b>
                    <Item sx={{ textAlign: "left", wordSpacing: "20px" }}>
                      <button style={{ border: "none", background: "none" }}>
                        <img src={Black} alt="" />
                      </button>
                      <button style={{ border: "none", background: "none" }}>
                        <img src={Blue} alt="" />
                      </button>
                      <button style={{ border: "none", background: "none" }}>
                        <img src={green} alt="" />
                      </button>
                    </Item>
                  </Item>
                </Grid>
                <Grid item md={6} sm={6} xs={6}>
                  <Item sx={{ textAlign: "right" }}>
                    <b style={{ marginRight: "50px" }}>Stoct</b>
                    <Item
                      sx={{
                        textAlign: "right",
                        color: "gray",
                        fontSize: "18px",
                      }}
                    >
                      (1233) <img src={Savat} alt="" />{" "}
                    </Item>
                  </Item>
                </Grid>
                <Grid item md={12} sm={12}>
                  <Item sx={{ fontSize: "18px", textAlign: "left" }}>
                    <b> Size</b>
                  </Item>
                  <Item sx={{ textAlign: "left" }}>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      sx={{
                        backgroundColor: "#4551D1",
                        color: "white",
                        borderRadius: "360px",
                        padding: "0px 5px",
                        margin: "5px",
                      }}
                    >
                      S
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      sx={{
                        color: "black",
                        borderRadius: "360px",
                        padding: "0px 5px",
                        margin: "5px",
                      }}
                    >
                      M
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      sx={{
                        color: "black",
                        borderRadius: "360px",
                        padding: "0px 5px",
                        margin: "5px",
                      }}
                    >
                      L
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      sx={{
                        color: "black",
                        borderRadius: "360px",
                        padding: "0px 5px",
                        margin: "5px",
                      }}
                    >
                      XL
                    </IconButton>
                  </Item>
                </Grid>
              </Grid>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Item
                    sx={{
                      color: "black",
                      fontSize: "18px",
                      textAlign: "left",
                    }}
                  >
                    <b>Quantity</b>
                    <Grid container spacing={0}>
                      <Grid item xs={9}>
                        <Item sx={{ textAlign: "left" }}>
                          <span
                            style={{
                              border: "1px solid gray",
                              padding: "15px",
                            }}
                          >
                            <Button sx={{ color: "black" }} onClick={Minus}>
                              -
                            </Button>
                            <span style={{ fontSize: "20px" }}>{count}</span>
                            <Button sx={{ color: "black" }} onClick={Plus}>
                              +
                            </Button>
                          </span>
                        </Item>
                      </Grid>
                      <Grid item xs={3}>
                        <Item>
                          {" "}
                          <span style={{ color: "black", fontSize: "20px" }}>
                            $ {dollor}
                          </span>{" "}
                        </Item>
                      </Grid>
                      <Grid item xs={12}>
                        <Item>
                          <span style={{ marginRight: "20px" }}>
                            <Button
                              variant="contained"
                              sx={{
                                borderRadius: "0px",
                                backgroundColor: "#7A70E9",
                                width: "50%",
                                padding: "10px 0px",
                              }}
                            >
                              Checkout
                            </Button>
                          </span>
                          <Button
                            variant="contained"
                            sx={{
                              borderRadius: "0px",
                              backgroundColor: "#7A70E9",
                            }}
                          >
                            {" "}
                            <img
                              style={{ width: "100%" }}
                              src={shopICon}
                              alt=""
                            />{" "}
                          </Button>
                        </Item>
                      </Grid>
                    </Grid>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: "#F4F4F4", marginTop: "10%" }}>
        <Grid container spacing={0}>
          <Grid item md={6}>
            <Item2 sx={{ textAlign: "right" }}>
              {" "}
              <span
                style={{
                  color: "#5463FF",
                  borderBottom: "3px solid #5463FF",
                  paddingBottom: "10px",
                }}
              >
                {" "}
                <b> Desciption</b>
              </span>
            </Item2>
          </Grid>
          <Grid item md={6}>
            <Item2 sx={{ textAlign: "left", color: "gray" }}>
              {" "}
              <b> Reviews ( 5 )</b>
            </Item2>
          </Grid>
          <Grid item md={12}>
            <Item2 sx={{ textAlign: "left" }}>
              <b> Detail Product</b>
            </Item2>
          </Grid>
          <Grid item md={12}>
            <Item2 sx={{ textAlign: "left" }}>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </Item2>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: "5%" }}>
        <Grid container spacing={0}>
          <Grid item md={12}>
            <Item2 sx={{ fontSize: "40px" }}>
              <b>
                <b>Same Product</b>
              </b>
            </Item2>
          </Grid>
        </Grid>
        <Grid container spacing={0} sx={{ marginTop: "2%" }}>
          {statesData.features.map((state) => {
            return (
              <Grid item md={3}>
                <Item2>
                  <Card
                    sx={{
                      textAlign: "left",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      boxShadow: " 2px 4px 6px gray",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      image={state.img}
                      sx={{ borderRadius: "0px" }}
                    />
                    <Grid container>
                      <Grid item xs={8}>
                        <Item2 sx={{ textAlign: "left" }}>
                          <b>{state.name}</b>
                        </Item2>
                      </Grid>
                      <Grid item xs={4}>
                        <Item2 sx={{ textAlign: "right" }}>
                          {" "}
                          <b> {state.sum}</b>
                        </Item2>
                      </Grid>
                      <Grid item sx={12}>
                        <Item2 sx={{ textAlign: "left" }}>{state.title}</Item2>
                        <Item2
                          sx={{
                            color: "gray",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Rating
                            name="size-small"
                            defaultValue={5}
                            size="small"
                          />{" "}
                          <span>(1k)</span>{" "}
                        </Item2>
                      </Grid>
                    </Grid>
                  </Card>
                </Item2>
              </Grid>
            );
          })}
        </Grid>
        <Grid mb='5%' container>
          <Grid item xs={12}>
            <Item2>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "0px",
                  backgroundColor: "#7A70E9",
                  marginTop: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  See more
                </span>
              </Button>
            </Item2>{" "}
          </Grid>{" "}
        </Grid>
      </Box>
    </div>
  );
};
