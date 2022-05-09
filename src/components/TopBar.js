import { Paper, Typography, Box, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { injected } from './connectors'
import { useWeb3React } from '@web3-react/core'




const TopBar = () => {

  const { active, account, activate, deactivate } = useWeb3React()

  const connectMeta = async () => {
      try {
          await activate(injected)
      } catch (ex) {
          console.log(ex)
      }
  }

  const disconnectMeta = async () => {
      try {
          deactivate(injected)
      } catch (ex) {
          console.log(ex)
      }
  }

  const buttonStyles = {
    fontWeight: 800,
    background: "linear-gradient(red, yellow);" 
  }

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
        alt=""
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
        <Link to='/'>
        <Typography className="dash">
          Dashboard
        </Typography>
        </Link>
        <Link to='/calc'>
        <Typography className="dash">
          Calculator
        </Typography>
        </Link>
        <a href="https://app.yuzu-swap.com/#/swap" target="_blank" rel="noreferrer">
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
          color: "rgb(167, 230, 255)"
        }}>
          coming soon
        </Typography>
        </Box>
        <a href="https://libertas-finance.gitbook.io/libertasfinance/" target="_blank" rel="noreferrer">
          <Typography className="dash">
           Whitepaper
          </Typography>
        </a>
        {active ? 
          <Button variant="contained" onClick={disconnectMeta}> 
            Disconnect 
          </Button> : 
          <Button variant="contained" onClick={connectMeta}
          sx={buttonStyles}>
            Connect Wallet
          </Button>
        }
        {active ? <div className='privatize'>{account}</div> : <></>}
      </Box>
    </Paper>

  </>
 )
}

export default TopBar;