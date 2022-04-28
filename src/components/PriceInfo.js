import { Grid, Paper, Typography, Box } from "@mui/material"

const PriceInfo = () => {
 return (
  <>
    <Grid item xs={8}>
      <Paper elevation={10} style={{
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
              color: "red"
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
              color: "red"
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
              color: "red"
            }}>
              Daily ROI
            </Typography>
            <Typography variant="h3" component="h2" style={{
              fontWeight: 700
            }}>
              1.7173%
            </Typography>
            <Typography variant="subtitle1" component="h2" style={{
              color: "yellow"
            }}>
              Next Rebase: 0.03548%
            </Typography>
            <Typography variant="subtitle1" component="h2" style={{
              color: "yellow"
            }}>
              5-day: 0.1774%
            </Typography>
            <Typography variant="subtitle1" component="h2" style={{
              color: "yellow"
            }}>
              Annual Rebase: 50019.28%
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  </>
 )
}

export default PriceInfo;