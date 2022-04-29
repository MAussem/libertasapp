import { Grid, Paper, Typography, Box, Button } from "@mui/material"
import Rebase from "./Rebase";

const Hero = () => {
  return ( 
    <>
    <Grid item xs={12}>
      <Paper elevation={10} style={{
        background: "rgba(0, 21, 66, 0.651)",
        marginTop: 40
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
            <Typography variant="h5" component="h2" style={{
              color: "red"
            }}>
              Portfolio
            </Typography>
              <Box paddingX={4}>
                <img 
                  src="../flame.png"
                  alt=""
                  className="img" />
              </Box>
              <Typography variant="subtitle1" component="h2" style={{
                marginBottom: 10,
                color: "grey"
                
              }}>
                Not Connected
              </Typography>
              <a href="https://app.yuzu-swap.com/#/swap" target="_blank" rel="noreferrer">
                <Button variant="contained">
                  Buy XLB
                </Button>
              </a>
              <br />
              <Button variant="contained">
                Connect Wallet
              </Button>
              <br />
              <a href="https://www.dextools.io/" target="_blank" rel="noreferrer">
                <Button variant="outlined">
                  View Chart
                </Button>
              </a>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}>
            <Typography variant="h5" component="h2" style={{
              color: "red"
            }}>
              Holdings
            </Typography>
            <Typography variant="h2" component="h2" style={{
              fontWeight: 700
            }}>
              $88,888
            </Typography>
            <Box paddingY={2}>
              <Typography variant="subtitle1" component="h2" style={{
                color: "yellow"
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
            <Typography variant="h5" component="h2" style={{
              color: "red"
            }}>
              Daily Earnings
            </Typography>
            <Typography variant="h2" component="h2" style={{
              fontWeight: 700
            }}>
              $8,888
            </Typography>
            <Box paddingY={2}>
              <Typography variant="subtitle1" component="h2" style={{
                color: "yellow"
              }}>
                145,317 XLB
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column"
            }}>
              <Rebase />
            </Box>
        </Box>
      </Paper> 
    </Grid>

    </>
  )   
}

export default Hero;