import './App.css';
import * as React from 'react';
import {Container,Toolbar,AppBar,Typography,IconButton,Badge,Button,Card,CardActions,CardContent,CardMedia} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function App() {
  return (
    <div className="App">
      <Shopingcart/>
    </div>
  );
}
function Shopingcart(){
  return(
    <div className='main'>
      <div>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
              >
                <b>BOOTSTRAP</b>
                <Button>Home</Button>
                <Button>About</Button>
                <Button></Button>
              </Typography>
              <IconButton aria-label="cart">
                <Badge color="secondary" badgeContent={0} showZero>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <div className='header'>
        <h1 style={{fontSize:"60px",marginBottom:"5px",color:"white"}}>Shop in style</h1>
        <p style={{fontSize:"26px",marginTop:"5px",color:"white",opacity:"0.3"}}>With this shop homepage template</p>
      </div>
      <div>
        <div className='card-flex'>
          <Card sx={{ maxWidth: 300}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://m.media-amazon.com/images/I/51qSnKMJ6RL._SX300_SY300_QL70_FMwebp_.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 300}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://m.media-amazon.com/images/I/51qSnKMJ6RL._SX300_SY300_QL70_FMwebp_.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 300}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://m.media-amazon.com/images/I/51qSnKMJ6RL._SX300_SY300_QL70_FMwebp_.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 300}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://m.media-amazon.com/images/I/51qSnKMJ6RL._SX300_SY300_QL70_FMwebp_.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 300}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://m.media-amazon.com/images/I/51qSnKMJ6RL._SX300_SY300_QL70_FMwebp_.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 300}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://m.media-amazon.com/images/I/51qSnKMJ6RL._SX300_SY300_QL70_FMwebp_.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 300}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://m.media-amazon.com/images/I/51qSnKMJ6RL._SX300_SY300_QL70_FMwebp_.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 300}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://m.media-amazon.com/images/I/51qSnKMJ6RL._SX300_SY300_QL70_FMwebp_.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default App;
