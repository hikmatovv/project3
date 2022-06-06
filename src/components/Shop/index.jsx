import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Img1 from "../../assets/c1.png";
import Img2 from "../../assets/c2.png";
import Img3 from "../../assets/c3.png";
import Img4 from "../../assets/c4.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
import Settings from "../../assets/Setings.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import Slider from '@mui/material/Slider';
import Img5 from "../../assets/Green.png";
import Img6 from "../../assets/Yellow.png";
import Img7 from "../../assets/Red.png";
import Img8 from "../../assets/Blue.png";
import Card1 from "../../assets/Card-1.png"
import Card2 from "../../assets/Card-2.png"
import Card3 from "../../assets/Card-3.png"
import Card4 from "../../assets/Card4.png"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
export default () => {
  const [data1, setData1] = useState([
   {
     img:Card1,
     name:"Smart T-Shirt",
     price:"40$",
     des:"Best quality",
     veiws:"1k"
   },
   {
    img:Card2,
    name:"Smart T-Shirt",
    price:"40$",
    des:"Best quality",
    veiws:"1k"
  },
  {
    img:Card3,
    name:"Smart T-Shirt",
    price:"40$",
    des:"Best quality",
    veiws:"1k"
  }, {
    img:Card1,
    name:"Smart T-Shirt",
    price:"40$",
    des:"Best quality",
    veiws:"1k"
  },
  {
   img:Card2,
   name:"Smart T-Shirt",
   price:"40$",
   des:"Best quality",
   veiws:"1k"
 },
 {
   img:Card3,
   name:"Smart T-Shirt",
   price:"40$",
   des:"Best quality",
   veiws:"1k"
 },   {
  img:Card1,
  name:"Smart T-Shirt",
  price:"40$",
  des:"Best quality",
  veiws:"1k"
},
{
 img:Card2,
 name:"Smart T-Shirt",
 price:"40$",
 des:"Best quality",
 veiws:"1k"
},
{
 img:Card3,
 name:"Smart T-Shirt",
 price:"40$",
 des:"Best quality",
 veiws:"1k"
}, {
 img:Card1,
 name:"Smart T-Shirt",
 price:"40$",
 des:"Best quality",
 veiws:"1k"
},
{
img:Card2,
name:"Smart T-Shirt",
price:"40$",
des:"Best quality",
veiws:"1k"
},
{
img:Card3,
name:"Smart T-Shirt",
price:"40$",
des:"Best quality",
veiws:"1k"
},

   
  ]);
  const [data2, setData2] = useState([
    {
      img:Card1,
      name:"Smart T-Shirt",
      price:"40$",
      des:"Best quality",
      veiws:"1k"
    },
    {
     img:Card2,
     name:"Smart T-Shirt",
     price:"40$",
     des:"Best quality",
     veiws:"1k"
   },
   {
     img:Card3,
     name:"Smart T-Shirt",
     price:"40$",
     des:"Best quality",
     veiws:"1k"
   }, {
     img:Card4,
     name:"Smart T-Shirt",
     price:"40$",
     des:"Best quality",
     veiws:"1k"
   },
  ])
  return (
    <div>
      <Box
        sx={{
          background: `linear-gradient(180deg, #7D89FF 0%, #AB40FF 66.67%)`,
          width: "auto",
          padding: "40px 0px",
        }}
      >
        <Container>
          <Box sx={{ display: "inline-block" }}>
            <Box
              sx={{ color: "white", display: "inline-block", fontSize: "18px" }}
            >
              Home
            </Box>
            <Box
              sx={{
                marginLeft: "24px",
                color: "white",
                display: "inline-block",
                fontSize: "18px",
                fontWeight: "400",
              }}
            >
              /
            </Box>
            <Box
              sx={{
                marginLeft: "24px",
                color: "white",
                display: "inline-block",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              Shop
            </Box>
          </Box>
          <Grid container sx={{ marginTop: "55px" }} justifyContent="center">
            <Grid item md={6} lg={6} sm={12} xs={12}>
              <Box
                sx={{
                  color: "white",
                  display: "inline-block",
                  fontSize: "40px",
                }}
              >
                Shop
              </Box>
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12}>
              <Grid
                container
                direction="row"
                justifyContent="Center"
                alignItems="center"
              >
                <Grid item>
                  <button
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "none",
                      padding: "0px",
                    }}
                  >
                    <KeyboardArrowLeftIcon sx={{ color: "#5463FF" }} />
                  </button>
                </Grid>
                <Grid item>
                  <Box>
                    <Box
                      sx={{
                        display: "inline-block",
                        textAlign: "center",
                        width: "80px",
                        marginLeft: "16px",
                      }}
                    >
                      <img
                        src={Img1}
                        alt=""
                        style={{ display: "inline-block" }}
                      />
                      <Box
                        sx={{
                          display: "inline-block",
                          color: "white",
                          fontWeight: "700",
                        }}
                      >
                        T-Shirt
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "inline-block",
                        textAlign: "center",
                        width: "80px",
                        marginLeft: "16px",
                      }}
                    >
                      <img
                        src={Img2}
                        alt=""
                        style={{ display: "inline-block" }}
                      />
                      <Box
                        sx={{
                          display: "inline-block",
                          color: "white",
                          fontWeight: "700",
                        }}
                      >
                        Jecket{" "}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "inline-block",
                        textAlign: "center",
                        width: "80px",
                        marginLeft: "16px",
                      }}
                    >
                      <img
                        src={Img3}
                        alt=""
                        style={{ display: "inline-block" }}
                      />
                      <Box
                        sx={{
                          display: "inline-block",
                          color: "white",
                          fontWeight: "700",
                        }}
                      >
                        Shirt{" "}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "inline-block",
                        textAlign: "center",
                        width: "80px",
                        marginLeft: "16px",
                      }}
                    >
                      <img
                        src={Img4}
                        alt=""
                        style={{ display: "inline-block" }}
                      />
                      <Box
                        sx={{
                          display: "inline-block",
                          color: "white",
                          fontWeight: "700",
                        }}
                      >
                        Jeans{" "}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item>
                  <button
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "none",
                      padding: "0px",
                      marginLeft: "16px",
                    }}
                  >
                    <ChevronRightIcon sx={{ color: "#5463FF" }} />
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={3} sm={12} xs={12} sx={{ marginTop: "80px" }}>
            <Typography sx={{ fontSize: "40px", fontWeight: "700" }}>
              T - Shirt
            </Typography>
            <Typography
              sx={{ fontSize: "24px", fontWeight: "400", marginTop: "24px" }}
            >
              Filter{" "}
              <img src={Settings} style={{ marginLeft: "18px" }} alt="" />{" "}
            </Typography>
            <Accordion sx={{ background: "none", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ padding: "0px" }}
              >
                <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
                  Categorise
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Box>
              <button style={{color:"white",backgroundColor:"#5463FF",border:"none",width:"60px",height:"35px",fontSize:"18px"}}>Man</button>
              <button style={{color:"black",border:"1px solid #DDDDDD",background:"none",height:"35px",fontSize:"18px",fontWeight:"400",marginLeft:"15px"}}>Waman</button>
              <button style={{color:"black",border:"1px solid #DDDDDD",background:"none",height:"35px",fontSize:"18px",fontWeight:"400",marginLeft:"15px"}}>Children</button>
            
            </Box>
            <Accordion sx={{ background: "none", boxShadow: "none",marginTop:"24px"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ padding: "0px" }}
              >
                <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
                  Price
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
             
              </AccordionDetails>
            </Accordion>
            <Slider defaultValue={40} aria-label="Default"  />
          
            <Box>
              <Typography sx={{fontWeight:"700",display:"inline-block"}}>
                $ 40
              </Typography>
              <Typography sx={{fontWeight:"400",display:"inline-block",marginLeft:"191px"}}>
                $ 500
              </Typography>
           
            </Box>
            <Accordion sx={{ background: "none", boxShadow: "none",marginTop:"24px"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ padding: "0px" }}
              >
                <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
                  Color
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
             
              </AccordionDetails>
            </Accordion>
            <img src={Img5} alt="" style={{display:"inline-block"}} />
            <img src={Img6} alt="" style={{display:"inline-block",marginLeft:"8px"}} />
            <img src={Img7} alt="" style={{display:"inline-block",marginLeft:"8px"}} />
            <img src={Img8} alt="" style={{display:"inline-block",marginLeft:"8px"}} />

          </Grid>
          <Grid item md={9}  sm={12} xs={12} >
            <Grid   container spacing={3}  direction="row"
  justifyContent="center"
  alignItems="center">
              {data1.map(val=>{
                return(
                  <Grid item md={4} sm={6} xs={12}>
                    <Card sx={{ maxWidth: 345,}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="248"
        image={val.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"700",display:"inline-block",fontSize:"14px"}}>
         {val.name} <Box sx={{display:"inline-block",fontSize:"18px",marginLeft:"102px"}}>
         {val.price}

         </Box>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.des}
        </Typography>
      </CardContent>
      <CardActions>
        <StarIcon sx={{color:'gold'}}/>
        <StarIcon sx={{color:'gold',marginLeft:"4px"}}/>
        <StarIcon sx={{color:'gold',marginLeft:"4px"}}/>
        <StarIcon sx={{color:'gold',marginLeft:"4px"}}/>
        <StarIcon sx={{color:'gold',marginLeft:"4px"}}/>

        <Typography sx={{fontSize:"14px",color:"#969696",fontWeight:"400",marginLeft:"9px"}}>
          ({val.veiws})
        </Typography>
      </CardActions>
    </Card>
                  </Grid>
                )
              })}
              <Grid item>
                <button style={{width:"180px",height:"48px",color:"white",fontSize:"18px",fontWeight:"700",border:"none",background:`linear-gradient(180deg, #7D89FF 0%, #AB40FF 66.67%)`}}>Load More</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid  container sx={{textAlign:"center",marginBottom:'50px'}} justifyContent="center" spacing={4}>
             <Grid item md={12} sm={12} xs={12} sx={{textAlign:"center"}}>
              <Typography sx={{fontSize:"40px",fontWeight:"400"}}>
              Recommend Product
              </Typography>
              </Grid>
              {data2.map(val=>{
                return(
                  <Grid  item md={3} sm={6} xs={12}>
                    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        // height="248px"
        image={val.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"700",display:"inline-block",fontSize:"14px"}}>
         {val.name} <Box sx={{display:"inline-block",fontSize:"18px",marginLeft:"102px"}}>
         {val.price}

         </Box>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.des}
        </Typography>
      </CardContent>
      <CardActions sx={{paddingBottom:"24px"}}>
        <StarIcon sx={{color:'gold'}}/>
        <StarIcon sx={{color:'gold',marginLeft:"4px"}}/>
        <StarIcon sx={{color:'gold',marginLeft:"4px"}}/>
        <StarIcon sx={{color:'gold',marginLeft:"4px"}}/>
        <StarIcon sx={{color:'gold',marginLeft:"4px"}}/>

        <Typography sx={{fontSize:"14px",color:"#969696",fontWeight:"400",marginLeft:"9px"}}>
          ({val.veiws})
        </Typography>
      </CardActions>
    </Card>
                  </Grid>
                )
              })}
        </Grid>
      </Container>
    </div>
  );
};
