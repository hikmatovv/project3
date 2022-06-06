import React from 'react';
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import Bg from "../../assets/Bg2.png"
import Img from "../../assets/Img.png"
import Button from "../../assets/But3.png"

export default () => {
    const navigatetwo = useNavigate("");
  const handlec = () => {
    navigatetwo("/cart");
  }
    return (
        <Box>
            <Box sx={{ backgroundImage: `url(${Bg})`, width: "100%", height: "100%" }}>
                <Grid container spacing={1} sx={{ display: "flex", flexDirection: "row",}}>
                    <Grid xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", flexDirection: "column", paddingTop: "6%" }}>
                        <Container maxWidth="sm">
                            <Grid xs={12} sm={12} lg={12} md={12} sx={{ display: "flex", flexDirection: "row"}}>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "16px", color: "white", paddingRight: "4%" }}>
                                    Wishlist
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "16px", color: "white", paddingRight: "4%" }}>
                                    /
                                </Typography>
                                <Typography onClick={handlec} sx={{ fontFamily: "sans-serif", fontSize: "16px", color: "white", paddingRight: "4%" }}>
                                    Cart
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={12} lg={12} md={12} sx={{ display: "flex", flexDirection: "column", paddingTop: "8%" }}>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "38px", color: "white", fontWeight: "700" }}>
                                    Wishlist
                                </Typography>
                                <Typography sx={{ width: "95%", fontFamily: "sans-serif", fontSize: "18px", color: "white", fontWeight: "700", paddingTop: "10%", paddingBottom: "10%" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                                </Typography>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ marginTop: "5%" }}>
                <Container>
                    <Box sx={{display:"flex",flexDirection:"row"}}>
                    <Typography sx={{ color: "#0D1222", fontFamily: "sans-serif", fontSize: "34px", fontWeight: "700" }}>
                        Cart Product
                    </Typography>
                    <Typography sx={{ color: "#0D1222", fontFamily: "sans-serif", fontSize: "34px", fontWeight: "700" ,paddingLeft:"10%"}}>
                        Cart Product
                    </Typography>
                    <Typography sx={{ color: "#0D1222", fontFamily: "sans-serif", fontSize: "34px", fontWeight: "700",paddingLeft:"5%" }}>
                        Cart Product
                    </Typography>
                    </Box>
                    <Box sx={{ width: "100%", height: "100%", paddingTop: "5%" }}>
                        <Grid container spacing={3} sx={{ display: "flex", flexDirection: "row", }}>
                            <Grid xs={12} sm={12} md={12} lg={12} sx={{ display: "flex", flexDirection: "column", marginTop: "2%",paddingBottom:"5%" }}>
                                <Grid xs={12} md={12} sm={12} lg={12} sx={{ backgroundColor: "#F4F4F4", display: "flex", flexDirection: "column" }}>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ padding: "2%", display: "flex", flexDirection: "row", backgroundColor: "#F4F4F4", marginTop: "2%" }}>
                                        <Grid xs={1} sm={1} md={1} lg={1}>
                                            <DeleteIcon sx={{ display: "flex", width: "40%", height: "40%",paddingTop:"30%" }} />
                                        </Grid>
                                        <Grid xs={2} sm={2} md={2} lg={2}>
                                            <img src={Img} alt="" style={{ width: "70%", height: "90%", backgroundSize: "100%" }} />
                                        </Grid>
                                        <Grid xs={3} sm={3} md={3} lg={3} sx={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}>
                                            <Typography sx={{ fontSize: "24px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                Smart T-Shirt
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
                                                Color : White
                                            </Typography>
                                        </Grid>
                                        <Grid xs={2} sm={2} md={2} lg={2}>
                                            <Typography sx={{ fontSize: "22px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                $ 40 USD
                                            </Typography>
                                            <Typography sx={{ fontSize: "17px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
                                                Price
                                            </Typography>
                                        </Grid>
                                        <Grid xs={2} sm={2} md={2} lg={2} sx={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}>
                                            <Typography sx={{ fontSize: "24px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                1305
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
                                                In Stock
                                            </Typography>
                                        </Grid>
                                        <Grid xs={2} sm={2} md={2} lg={2}>
                                            <img src={Button} alt="" style={{ width: "100%", height: "60%",paddingTop:"25%" }} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid xs={12} md={12} sm={12} lg={12}>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ padding: "2%", display: "flex", flexDirection: "row", backgroundColor: "#F4F4F4", marginTop: "2%" }}>
                                        <Grid xs={1} sm={1} md={1} lg={1}>
                                            <DeleteIcon sx={{ display: "flex", width: "40%", height: "40%",paddingTop:"30%" }} />
                                        </Grid>
                                        <Grid xs={2} sm={2} md={2} lg={2}>
                                            <img src={Img} alt="" style={{ width: "70%", height: "90%", backgroundSize: "100%" }} />
                                        </Grid>
                                        <Grid xs={3} sm={3} md={3} lg={3} sx={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}>
                                            <Typography sx={{ fontSize: "24px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                Smart T-Shirt
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
                                                Color : White
                                            </Typography>
                                        </Grid>
                                        <Grid xs={2} sm={2} md={2} lg={2}>
                                            <Typography sx={{ fontSize: "22px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                $ 40 USD
                                            </Typography>
                                            <Typography sx={{ fontSize: "17px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
                                                Price
                                            </Typography>
                                        </Grid>
                                        <Grid xs={2} sm={2} md={2} lg={2} sx={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}>
                                            <Typography sx={{ fontSize: "24px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                1305
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
                                                In Stock
                                            </Typography>
                                        </Grid>
                                        <Grid xs={2} sm={2} md={2} lg={2}>
                                            <img src={Button} alt="" style={{ width: "100%", height: "60%",paddingTop:"25%" }} />
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid xs={12} md={12} sm={12} lg={12}>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ padding: "2%", display: "flex", flexDirection: "row", backgroundColor: "#F4F4F4", marginTop: "2%" }}>
                                        <Grid xs={1} sm={1} md={1} lg={1}>
                                            <DeleteIcon sx={{ display: "flex", width: "40%", height: "40%",paddingTop:"30%" }} />
                                        </Grid>
                                        <Grid xs={2} sm={2} md={2} lg={2}>
                                            <img src={Img} alt="" style={{ width: "70%", height: "90%", backgroundSize: "100%" }} />
                                        </Grid>
                                        <Grid xs={3} sm={3} md={3} lg={3} sx={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}>
                                            <Typography sx={{ fontSize: "24px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                Smart T-Shirt
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
                                                Color : White
                                            </Typography>
                                        </Grid>
                                        <Grid xs={2} sm={2} md={2} lg={2}>
                                            <Typography sx={{ fontSize: "22px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                $ 40 USD
                                            </Typography>
                                            <Typography sx={{ fontSize: "17px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
                                                Price
                                            </Typography>
                                        </Grid>
                                        <Grid xs={2} sm={2} md={2} lg={2} sx={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}>
                                            <Typography sx={{ fontSize: "24px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                1305
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
                                                In Stock
                                            </Typography>
                                        </Grid>
                                        <Grid xs={2} sm={2} md={2} lg={2}>
                                            <img src={Button} alt="" style={{ width: "100%", height: "60%" ,paddingTop:"25%"}} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
