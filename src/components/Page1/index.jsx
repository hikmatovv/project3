import React from 'react';
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

import Bg from "../../assets/Bg.png"
import Img1 from "../../assets/Img1.png"
import Img2 from "../../assets/Img2.png"
import Img3 from "../../assets/Img3.png"

export default () => {
    return (
        <Box mt='2%' pb='5%'>
            <Box sx={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)",backgroundColor:"#A14FFF", width: "100%", height: "100%",zIndex:"0",position:"relative" }}>
                <Container>
                    <Grid container spacing={1} sx={{ display: "flex", flexDirection: "row"}}>
                        <Grid xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", flexDirection: "column", paddingTop: "6%" }}>
                            <Grid xs={12} sm={12} lg={12} md={12} sx={{ display: "flex", flexDirection: "row"}}>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "16px", color: "white", paddingRight: "4%" }}>
                                    Home
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "16px", color: "white", paddingRight: "4%" }}>
                                    /
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "16px", color: "white", paddingRight: "4%" }}>
                                    About US
                                </Typography>
                            </Grid>
                            <Grid xs={12} sm={12} lg={12} md={12} sx={{ display: "flex", flexDirection: "column", paddingTop: "8%"}}>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "38px", color: "white", fontWeight: "700" }}>
                                    About US
                                </Typography>
                                <Typography sx={{ width: "95%", fontFamily: "sans-serif", fontSize: "17px", color: "white", fontWeight: "600", paddingTop: "17%", paddingBottom: "7.9%" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid xs={12} sm={12} md={6} lg={6}>
                            <img src={Img1} alt="" style={{ width: "65%", height: "60%", backgroundSize: "100%", paddingTop: "13%", paddingLeft: "10%", borderRadius: "3px 3px 3px px " ,zIndex:"1",position:"relative"}} />
                        </Grid>
                    </Grid>

                </Container>
            </Box>
            <Box sx={{ display: "flex", paddingTop: "10%", width: "100%", height: "100%" }}>
                <Container>
                    <Grid container spacing={1} sx={{ display: "flex", flexDirection: "row"}}>
                        <Grid xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", flexDirection: "column", paddingTop: "8%" }}>
                            <Container maxWidth="md">
                            <Typography sx={{ fontFamily: "sans-serif", fontSize: "38px", color: "#0D1222", fontWeight: "700" }}>
                                Profile
                            </Typography>
                            <Typography sx={{ width: "95%", fontFamily: "sans-serif", fontSize: "17px", color: "#646464", fontWeight: "600", paddingTop: "5%",}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                            </Typography>
                            <Typography sx={{ width: "95%", fontFamily: "sans-serif", fontSize: "17px", color: "#646464", fontWeight: "600", paddingTop: "5%",paddingBottom:"5%"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                            </Typography>
                            </Container>
                        </Grid>
                        <Grid xs={12} sm={12} md={6} lg={6} sx={{  backgroundImage: `url(${Img2})`,backgroundRepeat:"no-repeat" }}>
                            <Box sx={{ display: "flex", backgroundColor: "white", width: "90%",marginLeft:"10%",marginTop:"45%" }}>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "18px", color: "#7D89FF", padding: "2%"}}>
                                    Mangcoding Store
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{ display: "flex", paddingTop: "10%", width: "100%", height: "100%" }}>
                <Container>
                    <Grid container spacing={1} sx={{ display: "flex", flexDirection: "row"}}>
                        <Grid xs={12} sm={12} md={6} lg={6} sx={{ backgroundImage: `url(${Img3})`, backgroundSize: "100%" }}>
                            <Box sx={{ display: "flex", backgroundColor: "white", width: "90%",marginTop:"50%" }}>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "18px", color: "#7D89FF", padding: "2%"}}>
                                Mangcoding Store
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", flexDirection: "column", paddingTop: "8%" }}>
                            <Container>
                            <Typography sx={{ fontFamily: "sans-serif", fontSize: "38px", color: "#0D1222", fontWeight: "700" }}>
                            Our Mission
                            </Typography>
                            <Typography sx={{ width: "95%", fontFamily: "sans-serif", fontSize: "17px", color: "#646464", fontWeight: "600", paddingTop: "5%",}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                            </Typography>
                            <Typography sx={{ width: "95%", fontFamily: "sans-serif", fontSize: "17px", color: "#646464", fontWeight: "600", paddingTop: "5%",paddingBottom:"5%"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                            </Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

