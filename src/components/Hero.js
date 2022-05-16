import { Grid, Paper, Typography, Box, Button } from "@mui/material"
import { makeStyles } from "@material-ui/core"
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"
import Rebase from "./Rebase";

const fontStyles = makeStyles((theme) => ({
  hTitle: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      fontSize: [13, "!important"]
    }
  },
}));

const buttonSty = makeStyles((theme) => ({
  buttonS: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      fontSize: [10, "!important"]
    }
  },
}));


const Hero = () => {

  const buttonStyles = {
    fontWeight: 800,
    background: "linear-gradient(red, yellow);" 
  }

  const classe = buttonSty();
  const classes = fontStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return ( 
    <>
    <Grid item xs={12} className={classes.hTitle}>
      <Paper elevation={10} style={{
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background: "rgba(0, 21, 66, 0.651)",
        marginTop: 40,
        paddingTop: 30,
        paddingBottom: 30,
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
          }}
          padding={1}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <Typography className={classes.hTitle} variant="h5" component="h2" >
              Portfolio
            </Typography>
              <Box paddingX={4} paddingY={1}>
                <img 
                  src="../flame.png"
                  alt=""
                  className="img" />
              </Box>
              {/* {active ? <div className='privatize2'>{account}</div> : <Typography variant="subtitle1" component="h2" style={{
                marginBottom: 10,
                color: "grey"
              }}> 
                Not Connected
              </Typography>} */}
              <a href="https://app.yuzu-swap.com/#/swap" target="_blank" rel="noreferrer">
                <Button className={classe.buttonS} variant="contained"
                sx={buttonStyles}>
                  Buy XLB
                </Button>
              </a>
              <br />
              {/* {active ? 
              <Button variant="outlined" onClick={disconnectMeta} 
              sx={buttonStyles}> 
                Disconnect 
              </Button> :
              <Button variant="contained" onClick={connectMeta}
              sx={buttonStyles}>
                Connect Wallet
              </Button>
              } */}
              <a href="https://www.dextools.io/" target="_blank" rel="noreferrer">
                <Button className={classe.buttonS} variant="contained" 
                sx={buttonStyles}>
                  View Chart
                </Button>
              </a>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}>
            <Typography className={classes.hTitle} variant="h5" component="h2" style={{
              color: "rgb(167, 230, 255)"
            }}>
              Holdings
            </Typography>
            <Typography className={classes.hTitle} variant="h2" component="h2" style={{
              fontWeight: 700
            }}>
              $88,888
            </Typography>
            <Box paddingY={2}>
              <Typography className={classes.hTitle} variant="subtitle1" component="h2" style={{
                color: "rgb(167, 230, 255)"
              }}>
                14,562,317 XLB
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <Typography className={classes.hTitle} variant="h5" component="h2" style={{
              color: "rgb(167, 230, 255)"
            }}>
              Daily Earnings
            </Typography>
            <Typography className={classes.hTitle} variant="h2" component="h2" style={{
              fontWeight: 700
            }}>
              $8,888
            </Typography>
            <Box paddingY={2}>
              <Typography className={classes.hTitle} variant="subtitle1" component="h2" style={{
                color: "rgb(167, 230, 255)"
              }}>
                145,317 XLB
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column"
            }}>
              {!matches && <Rebase />}
            </Box>
        </Box>
      </Paper> 
    </Grid>

    </>
  )   
}

export default Hero;