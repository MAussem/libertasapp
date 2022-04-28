import { Paper, Typography, Box, Button } from "@mui/material"

const TopBar = () => {
 return (
  <>
    <Paper elevation={10} style={{
        background:"rgba(0, 21, 66, 0.651)"
      }}>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}>
        <img 
        src="../flame.png" 
        className="imgT"
        />
        <Typography style={{
            fontSize: 30,
            fontWeight: 700,
        }}>
          Libertas
        </Typography>
        <Typography className="title" style={{
            fontSize: 30,
            fontWeight: 700,
          color: "rgba(0, 21, 66, 0.651)"
        }}>
          Finance
        </Typography>
        </Box>
        <Typography className="dash">
          Dashboard
        </Typography>
        <Typography className="dash">
          Calculator
        </Typography>
        <a href="https://app.yuzu-swap.com/#/swap" target="_blank">
          <Typography className="dash">
            Swap
          </Typography>
        </a>
        <Box sx={{
          display: "flex",
          flexDirection: "column"
        }}>
        <Typography className="dash">
          Launch Pad
        </Typography>
        <Typography variant="body3" className="dash" style={{
          marginLeft: 2,
          color: "red"
        }}>
          coming soon
        </Typography>
        </Box>
        <a href="https://www.gitbook.com/" target="_blank">
          <Typography className="dash">
           Docs
          </Typography>
        </a>
        <Button variant="outlined">
          Connect Wallet
        </Button>
      </Box>
    </Paper>

  </>
 )
}

export default TopBar;