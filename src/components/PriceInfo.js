import { Grid, Paper, Typography, Box } from "@mui/material"

const PriceInfo = () => {
 return (
  <>
    <Grid item xs={8}>
      <Paper elevation={10} style={{
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
        <Box sx={{
          padding: 3,
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center"
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column"
          }}>
            <Typography variant="h5" component="h2" style={{
              color: "rgb(167, 230, 255)"
            }}>
              XLB PRICE
            </Typography>
            <Typography variant="h3" component="h2" style={{
              fontWeight: 700
            }}>
              $0.8888
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column"
          }}>
            <Typography variant="h5" component="h2" style={{
              color: "rgb(167, 230, 255)"
            }}>
              Market Cap
            </Typography>
            <Typography variant="h3" component="h2" style={{
              fontWeight: 700
            }}>
              $78.21M
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column"
          }}>
            <Typography variant="h5" component="h2" style={{
              color: "rgb(167, 230, 255)"
            }}>
              Daily ROI
            </Typography>
            <Typography variant="h3" component="h2" style={{
              fontWeight: 700
            }}>
              1.9106%
            </Typography>
            <Typography variant="subtitle1" component="h2" style={{
              color: "rgb(167, 230, 255)"
            }}>
              Next Rebase: 0.03943%
            </Typography>
            {/* <Typography variant="subtitle1" component="h2" style={{
              color: "rgb(167, 230, 255)"
            }}>
              5-day: 0.1774%
            </Typography> */}
            <Typography variant="subtitle1" component="h2" style={{
              color: "rgb(167, 230, 255)"
            }}>
              Annual Rebase: 100016.63%
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  </>
 )
}

export default PriceInfo;