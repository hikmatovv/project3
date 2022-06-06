
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import logo from '../../../assets/images.png'
import Button from '@mui/material/Button'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaFacebookF ,FaLinkedinIn } from "react-icons/fa";
import { AiOutlineLinkedin } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function AutoGrid() {
  const navigatetwo = useNavigate("");
  const handlel = () => {
    navigatetwo("/account");
  }

  const handlell = () => {
    navigatetwo("/login");
  }
  const handlelll = () => {
    navigatetwo("/shirt");
  }
  const handlew = () => {
    navigatetwo("/wishlist");
  }
  return (
    <Grid mt='10%'  pb='5%' sx={{  backgroundColor: '#393E46' }}>

      <Container maxWidth="lg">

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>


            <Grid item xs={12} sm={6} md={6}>
              <Grid mt='10%' sx={{ display: 'flex', flexDirection: 'row' }}>

                <img src={logo} width='40px' />
                <Typography


                  sx={{
                    ml: 1,
                    mt: 1,
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    color: "white",
                    fontSize: "14px",
                    fontStyle: "normal",
                    textDecoration: "none",

                  }}
                >
                  mangcoding Store
                </Typography>

              </Grid>
              <Typography mt='5%' color='#F4F4F4' pr='9%'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus. </Typography>
              <Button onClick={handlell} variant='contained' sx={{ marginTop: '5%', color: '#7D89FF', backgroundColor: 'white', borderRadius: '0px' }}>
                Login now
              </Button>
            </Grid>

            <Grid mt='5%' container item xs={12} sm={6} md={6} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Grid xs={12} sm={6} md={3}>
                <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Poppins' }}>
                  Home</Typography>

                  <Typography  sx={{marginTop:'6%', fontStyle: 'normal', color: '#F4F4F4', fontSize: '14px', fontWeight: 400, fontFamily: 'Poppins' }}>
                    Product
                  </Typography>

                  <Typography sx={{ color: '#F4F4F4', fontSize: '14px', fontWeight: 400, fontFamily: 'Poppins' }}>
                    Categories
                  </Typography>

                  <Typography sx={{ color: '#F4F4F4', fontSize: '14px', fontWeight: 400, fontFamily: 'Poppins' }}>
                    Shop
                  </Typography>

                  <Typography onClick={handlel} sx={{ color: '#F4F4F4', fontSize: '14px', fontWeight: 400, fontFamily: 'Poppins' }}>
                    My account
                  </Typography>
              </Grid>

              <Grid xs={12} sm={6} md={3}>
                <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Poppins' }}>
                  Shop </Typography>

                  <Typography onClick={handlelll} sx={{marginTop:'6%', fontStyle: 'normal', color: '#F4F4F4', fontSize: '14px', fontWeight: 400, fontFamily: 'Poppins' }}>
                    T-shirt
                  </Typography>

                  <Typography onClick={handlew} sx={{ color: '#F4F4F4', fontSize: '14px', fontWeight: 400, fontFamily: 'Poppins' }}>
                    Wishlist
                  </Typography>

                  <Typography sx={{ color: '#F4F4F4', fontSize: '14px', fontWeight: 400, fontFamily: 'Poppins' }}>
                    Shirt
                  </Typography>

                  <Typography sx={{ color: '#F4F4F4', fontSize: '14px', fontWeight: 400, fontFamily: 'Poppins' }}>
                    Jeans
                  </Typography>
              </Grid>

              <Grid xs={12} sm={6} md={3}>
                <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Poppins' }}>
                  Categories
                </Typography>

                <Typography  sx={{marginTop:'6%', fontStyle: 'normal', color: '#F4F4F4', fontSize: '14px', fontWeight: 400, fontFamily: 'Poppins' }}>
                    Men
                  </Typography>

                  <Typography sx={{ color: '#F4F4F4', fontSize: '14px', fontWeight: 400, fontFamily: 'Poppins' }}>
                    Children
                  </Typography>

                  <Typography sx={{ color: '#F4F4F4', fontSize: '14px', fontWeight: 400, fontFamily: 'Poppins' }}>
                    Women  
                  </Typography>
              </Grid>

              <Grid xs={12} sm={6} md={3} >
                <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 700, fontFamily: 'Poppins' }}>
                  Contact</Typography>

                  <Typography sx={{ marginTop:'6%', color: '#F4F4F4', fontSize: '14px', fontWeight: 400, fontFamily: 'Poppins' }}>
                    margocng@gmail.com  
                  </Typography>

                  <Grid mt='5%'>
                    <FaFacebookF style={{ fontSize:'18px',border:'1px solid white',color:'white',padding:'2%'}}/>
                    <TwitterIcon sx={{ fontSize:'18px',marginLeft:'5%',border:'1px solid white',color:'white',padding:'2%'}}/>
                    <FaLinkedinIn style={{ marginLeft:'5%', fontSize:'18px',border:'1px solid white',color:'white',padding:'2%'}}/>
                    <InstagramIcon sx={{ fontSize:'18px',marginLeft:'5%',border:'1px solid white',color:'white',padding:'2%'}}/>
                  </Grid>
              </Grid>
            </Grid>


          </Grid>
        </Box>

      </Container>

    </Grid>);
}
