import React from 'react';
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

import Bg from "../../assets/Bg2.png"
import Img from "../../assets/Img.png"
import Inp from "../../assets/Inp.png"
import But from "../../assets/But.png"
import But2 from "../../assets/But2.png"

export default () => {
    const navigatetwo = useNavigate("");
    const handlew = () => {
      navigatetwo("/wishlist");
    }
    return (
        <Box>
            <Box sx={{ backgroundImage: `url(${Bg})`, width: "100%", height: "100%" }}>
                <Grid container spacing={1} sx={{ display: "flex", flexDirection: "row" }}>
                    <Grid xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", flexDirection: "column", paddingTop: "6%" }}>
                        <Container maxWidth="sm">
                            <Grid xs={12} sm={12} lg={12} md={12} sx={{ display: "flex", flexDirection: "row" }}>
                                <Typography onClick={handlew} sx={{ fontFamily: "sans-serif", fontSize: "16px", color: "white", paddingRight: "4%" }}>
                                    Wishlist
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "16px", color: "white", paddingRight: "4%" }}>
                                    /
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "16px", color: "white", paddingRight: "4%" }}>
                                    Cart
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={12} lg={12} md={12} sx={{ display: "flex", flexDirection: "column", paddingTop: "8%"}}>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "38px", color: "white", fontWeight: "700" }}>
                                    Cart
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
                    <Typography sx={{ color: "#0D1222", fontFamily: "sans-serif", fontSize: "34px", fontWeight: "700" }}>
                        Cart Product
                    </Typography>
                    <Box sx={{ width: "100%", height: "100%", paddingTop: "5%" }}>
                        <Grid container spacing={3} sx={{ display: "flex", flexDirection: "row", }}>
                            <Grid xs={12} sm={12} md={7} lg={7} sx={{ display: "flex", flexDirection: "column", marginTop: "2%" }}>
                                <Grid xs={12} md={12} sm={12} lg={12} sx={{ backgroundColor: "#F4F4F4", display: "flex", flexDirection: "column" }}>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ padding: "2%", display: "flex", flexDirection: "row" }}>
                                        <Grid xs={2} sm={2} md={2} lg={2}>
                                            <img src={Img} alt="" style={{ width: "100%", height: "100%", backgroundSize: "100%" }} />
                                        </Grid>
                                        <Grid xs={3} sm={3} md={3} lg={3} sx={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}>
                                            <Typography sx={{ fontSize: "24px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                Smart T-Shirt
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
                                                Color : White
                                            </Typography>
                                        </Grid>
                                        <Grid xs={1} sm={1} md={1} lg={1}>
                                        </Grid>
                                        <Grid xs={3} sm={3} md={3} lg={3}>
                                            <Typography sx={{ fontSize: "24px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                $ 40 USD
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
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
                                        <Grid xs={1} sm={1} md={1} lg={1}>
                                            <DeleteIcon sx={{ display: "flex", width: "70%", height: "70%" }} />
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ display: "flex", flexDirection: "row", marginBottom: "4%", marginRight: "4%" ,paddingLeft:"2%"}}>
                                            <Grid xs={10} md={10} sm={10} lg={10}>
                                                <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", color: "#5463FF", fontWeight: "700" }}>
                                                    product notes ∨
                                                </Typography>
                                            </Grid>
                                            <Grid xs={2} md={2} sm={2} lg={2} sx={{ backgroundColor: "#FFFFFF", display: "flex", flexDirection: "row" }}>
                                                <Typography sx={{ fontSize: "22px", color: "black", fontWeight: "400", padding: "2%", marginLeft: "30%" }}>
                                                    -
                                                </Typography>
                                                <Typography sx={{ fontSize: "22px", color: "black", fontWeight: "400", paddingLeft: "5%", paddingTop: "3%" }}>
                                                    2
                                                </Typography>
                                                <Typography sx={{ fontSize: "22px", color: "black", fontWeight: "400", paddingLeft: "5%", paddingTop: "3%" }}>
                                                    +
                                                </Typography>
                                            </Grid>
                                    </Grid>
                                </Grid>
                                <Grid xs={12} md={12} sm={12} lg={12}>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ padding: "2%", display: "flex", flexDirection: "row", backgroundColor: "#F4F4F4", marginTop: "2%" }}>
                                        <Grid xs={2} sm={2} md={2} lg={2}>
                                            <img src={Img} alt="" style={{ width: "100%", height: "100%", backgroundSize: "100%" }} />
                                        </Grid>
                                        <Grid xs={3} sm={3} md={3} lg={3} sx={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}>
                                            <Typography sx={{ fontSize: "24px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                Smart T-Shirt
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
                                                Color : White
                                            </Typography>
                                        </Grid>
                                        <Grid xs={1} sm={1} md={1} lg={1}>
                                        </Grid>
                                        <Grid xs={3} sm={3} md={3} lg={3}>
                                            <Typography sx={{ fontSize: "24px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                $ 40 USD
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
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
                                        <Grid xs={1} sm={1} md={1} lg={1}>
                                            <DeleteIcon sx={{ display: "flex", width: "70%", height: "70%" }} />
                                        </Grid>
                                    </Grid>
                                    <Grid xs={12} md={12} sm={12} lg={12} sx={{ display: "flex", flexDirection: "row", marginBottom: "4%", marginRight: "4%" ,paddingLeft:"2%",backgroundColor:"#F4F4F4"}}>
                                            <Grid xs={10} md={10} sm={10} lg={10}>
                                                <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", color: "#5463FF", fontWeight: "700" }}>
                                                    product notes ∨
                                                </Typography>
                                            </Grid>
                                            <Grid xs={2} md={2} sm={2} lg={2} sx={{ backgroundColor: "#FFFFFF", display: "flex", flexDirection: "row" }}>
                                                <Typography sx={{ fontSize: "22px", color: "black", fontWeight: "400", padding: "2%", marginLeft: "30%" }}>
                                                    -
                                                </Typography>
                                                <Typography sx={{ fontSize: "22px", color: "black", fontWeight: "400", paddingLeft: "5%", paddingTop: "3%" }}>
                                                    1
                                                </Typography>
                                                <Typography sx={{ fontSize: "22px", color: "black", fontWeight: "400", paddingLeft: "5%", paddingTop: "3%" }}>
                                                    +
                                                </Typography>
                                            </Grid>
                                    </Grid>
                                </Grid>
                                <Grid  xs={12} md={12} sm={12} lg={12}>
                                    <Grid  xs={12} md={12} sm={12} lg={12} sx={{ padding: "2%", display: "flex", flexDirection: "row", backgroundColor: "#F4F4F4", marginTop: "2%" }}>
                                        <Grid xs={2} sm={2} md={2} lg={2}>
                                            <img src={Img} alt="" style={{ width: "100%", height: "100%", backgroundSize: "100%" }} />
                                        </Grid>
                                        <Grid xs={3} sm={3} md={3} lg={3} sx={{ display: "flex", flexDirection: "column", marginLeft: "2%" }}>
                                            <Typography sx={{ fontSize: "24px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                Smart T-Shirt
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
                                                Color : White
                                            </Typography>
                                        </Grid>
                                        <Grid xs={1} sm={1} md={1} lg={1}>
                                        </Grid>
                                        <Grid xs={3} sm={3} md={3} lg={3}>
                                            <Typography sx={{ fontSize: "24px", fontFamily: "sans-serif", fontWeight: "700", color: "#0D1222" }}>
                                                $ 40 USD
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", fontWeight: "400", color: "#969696" }}>
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
                                        <Grid xs={1} sm={1} md={1} lg={1}>
                                            <DeleteIcon sx={{ display: "flex", width: "70%", height: "70%" }} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid  xs={12} md={12} sm={12} lg={12} sx={{ display: "flex", flexDirection: "row", marginBottom: "4%", marginRight: "4%" ,paddingLeft:"2%",backgroundColor:"#F4F4F4"}}>
                                            <Grid   xs={10} md={10} sm={10} lg={10}>
                                                <Typography sx={{ fontSize: "18px", fontFamily: "sans-serif", color: "#5463FF", fontWeight: "700" }}>
                                                    product notes ∨
                                                </Typography>
                                            </Grid>
                                            <Grid xs={2} md={2} sm={2} lg={2} sx={{ backgroundColor: "#FFFFFF", display: "flex", flexDirection: "row" }}>
                                                <Typography sx={{ fontSize: "22px", color: "black", fontWeight: "400", padding: "2%", marginLeft: "30%" }}>
                                                    -
                                                </Typography>
                                                <Typography sx={{ fontSize: "22px", color: "black", fontWeight: "400", paddingLeft: "5%", paddingTop: "3%" }}>
                                                    1
                                                </Typography>
                                                <Typography sx={{ fontSize: "22px", color: "black", fontWeight: "400", paddingLeft: "5%", paddingTop: "3%" }}>
                                                    +
                                                </Typography>
                                            </Grid>
                                    </Grid>
                            </Grid>
                            <Grid mb='10%' xs={12} sm={12} md={4} lg={4} sx={{ display: "flex", flexDirection: "column", backgroundColor: "#F4F4F4", marginLeft: "2%", marginTop: "2%" }}>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "18px", color: "#0D1222", fontWeight: "700", padding: "2%" }}>
                                    Coupon Code
                                </Typography>

                                <img src={Inp} alt="" style={{ width: "95%", height: "40%", padding: "2%" }} />
                                <img src={But} alt="" style={{ width: "40%", height: "25%", display: "flex", padding: '2%', marginLeft: "58%" }} />
                                <Box sx={{ display: "flex", flexDirection: "row", padding: "2%" }}>
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        <Typography sx={{ fontSize: "18px", color: "#0D1222", fontFamily: "sans-serif", fontWeight: "700" }}>
                                            Subtotal
                                        </Typography>
                                        <Typography sx={{ fontSize: "18px", color: "#969696", fontFamily: "sans-serif", fontWeight: "400" }}>
                                            4 Product
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: "50%" }}>
                                        <Typography sx={{ fontSize: "18px", color: "#0D1222", fontFamily: "sans-serif", fontWeight: "400" }}>
                                            $ 160 USD
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", padding: "2%", marginTop: "5%" }}>
                                    <Box sx={{}}>
                                        <Typography sx={{ fontSize: "18px", color: "#0D1222", fontFamily: "sans-serif", fontWeight: "700" }}>
                                            Total
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: "60%" }}>
                                        <Typography sx={{ fontSize: "18px", color: "#0D1222", fontFamily: "sans-serif", fontWeight: "400" }}>
                                            $ 160 USD
                                        </Typography>
                                    </Box>
                                </Box>
                                <img src={But2} alt="" style={{ width: "40%", height: "25%", display: "flex", padding: '2%', marginLeft: "58%" }} />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
