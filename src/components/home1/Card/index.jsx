import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Card1 from "../../../assets/rasm1.png";
import Card2 from "../../../assets/rasm2.png";
import Card3 from "../../../assets/rasm3.png";
import Card4 from "../../../assets/rasm4.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "black",
    boxShadow:"none"
  }));
  

export default () => {
  const [data2, setData2] = useState([
    {
      img: Card1,
      name: "Smart T-Shirt",
      price: "40$",
      des: "Best quality",
      veiws: "1k",
    },
    {
      img: Card2,
      name: "Smart T-Shirt",
      price: "40$",
      des: "Best quality",
      veiws: "1k",
    },
    {
      img: Card3,
      name: "Smart T-Shirt",
      price: "40$",
      des: "Best quality",
      veiws: "1k",
    },
    {
      img: Card4,
      name: "Smart T-Shirt",
      price: "40$",
      des: "Best quality",
      veiws: "1k",
    },
  ]);
  return (
    <div>
      <Container>
        <Grid
          container
          sx={{ textAligin: "center", marginTop: "30px" }}
          justifyContent="center"
          spacing={4}
        >
          <Grid item md={12} sm={12} xs={12} sx={{ textAlign: "center" }}>
              <Typography sx={{ textTransform: "uppercase", color: "#5463FF" }}>choose from the best products</Typography>
            <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
              Our Best Seller Products
            </Typography>
            <Item sx={{wordSpacing:"30px"}} > <span style={{color:'blue',borderBottom:'2px solid blue',fontWeight:'bold'}}>T-Shirt</span>  Jacket Shirt Jens </Item>

          </Grid>
          {data2.map((val) => {
            return (
              <Grid item md={3} sm={6} xs={12} lg={3}>
                <Card sx={{ maxWidth: 345, height: "376px" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="248"
                    image={val.img}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: "700",
                        display: "flex",
                        fontSize: "14px",
                        textAlign:'start'
                      }}
                    >
                      {val.name}{" "}
                      <Box
                        sx={{
                          display: "inline-block",
                          fontSize: "18px",
                          marginLeft: "112px",
                        }}
                      >
                        {val.price}
                      </Box>
                      {/* <Typography >{val.price}</Typography> */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: "start"}}>
                      {val.des}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <StarIcon sx={{ color: "gold" }} />
                    <StarIcon sx={{ color: "gold", marginLeft: "4px" }} />
                    <StarIcon sx={{ color: "gold", marginLeft: "4px" }} />
                    <StarIcon sx={{ color: "gold", marginLeft: "4px" }} />
                    <StarIcon sx={{ color: "gold", marginLeft: "4px" }} />

                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#969696",
                        fontWeight: "400",
                        marginLeft: "9px",
                      }}
                    >
                      ({val.veiws})
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Grid
          container
          sx={{ textAligin: "center", marginTop: "20px" }}
          justifyContent="center"
          spacing={4}
        >
          {data2.map((val) => {
            return (
              <Grid item md={3} sm={6} xs={12} lg={3}>
                <Card sx={{ maxWidth: 345, height: "376px" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="248"
                    image={val.img}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: "700",
                        display: "flex",
                        fontSize: "14px",
                        textAlign:'start'
                      }}
                    >
                      {val.name}{" "}
                      <Box
                        sx={{
                          display: "inline-block",
                          fontSize: "18px",
                          marginLeft: "112px",
                        }}
                      >
                        {val.price}
                      </Box>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: "start"}}>
                      {val.des}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <StarIcon sx={{ color: "gold" }} />
                    <StarIcon sx={{ color: "gold", marginLeft: "4px" }} />
                    <StarIcon sx={{ color: "gold", marginLeft: "4px" }} />
                    <StarIcon sx={{ color: "gold", marginLeft: "4px" }} />
                    <StarIcon sx={{ color: "gold", marginLeft: "4px" }} />

                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#969696",
                        fontWeight: "400",
                        marginLeft: "9px",
                      }}
                    >
                      ({val.veiws})
                    </Typography> 
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>

      </Container>
    </div>
  );
};
