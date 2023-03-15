import { Paper, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useState, useMemo } from "react";
import { CgClose } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const TopBar = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const addressFormatted = useMemo(
    () =>
      address
        ? address.substring(0, 2) +
          "..." +
          address.substring(address.length - 4, address.length)
        : null,
    [address]
  );

  const [isActiveD, setIsActiveD] = useState(true);
  const [isActiveC, setIsActiveC] = useState(false);
  const [isActiveS, setIsActiveS] = useState(false);
  const [isActiveI, setIsActiveI] = useState(false);
  const [isActiveG, setIsActiveG] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClickD = () => {
    setIsActiveD(true);
    setIsActiveC(false);
    setIsActiveS(false);
    setIsActiveI(false);
    setIsActiveG(false);
  };

  const handleClickC = () => {
    setIsActiveC(true);
    setIsActiveD(false);
    setIsActiveS(false);
    setIsActiveI(false);
    setIsActiveG(false);
  };

  const handleClickS = () => {
    setIsActiveS(true);
    setIsActiveD(false);
    setIsActiveC(false);
    setIsActiveI(false);
    setIsActiveG(false);
  };

  const handleClickI = () => {
    setIsActiveI(true);
    setIsActiveD(false);
    setIsActiveC(false);
    setIsActiveS(false);
    setIsActiveG(false);
  };

  const handleClickG = () => {
    setIsActiveG(true);
    setIsActiveD(false);
    setIsActiveC(false);
    setIsActiveS(false);
    setIsActiveI(false);
  };
  const buttonStyles = {
    fontWeight: 800,
    color: "black",
    borderRadius: "10px",
    background: "linear-gradient(to right, #fa8128, #C8E9E9);",
    "&:hover": {
      background: "linear-gradient(to right, #C8E9E9, #fa8128);",
      transition: ".4s",
      boxShadow: "0 8px 24px 0 rgba(0, 0, 0, 0.26)",
      borderRadius: "15px",
    },
  };

  const hamburger = (
    <CgMenu size="40px" color="#C8E9E9" onClick={() => setOpen(!open)} />
  );

  const closeButton = (
    <CgClose size="40px" color="#C8E9E9" onClick={() => setOpen(!open)} />
  );

  // const closeMobileMenu = () => setOpen(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const tokenAddress = "0xE33c8c9A563714Cab40f090748e3eBD8a218D556";
  const tokenSymbol = "XLB";
  const tokenDecimals = 18;
  const tokenImage = "https://i.postimg.cc/4N1vYmjT/libertas-torch.png";

  async function addTokenFunction() {
    try {
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("XLB has not been added");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Paper
        elevation={10}
        style={{
          background: "rgba(0, 21, 66, 0.651)",
        }}
      >
        {matches && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginLeft: "5px", marginTop: "5px" }}
              src="../flame.svg"
              className="imgT"
              alt=""
            />
            <Typography
              style={{
                fontSize: 30,
                fontWeight: 700,
                marginRight: -40,
              }}
            >
              Libertas
            </Typography>
            <Typography
              className="title"
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: "rgba(0, 21, 66, 0.651)",
              }}
            >
              Finance
            </Typography>
            {open ? closeButton : hamburger}
          </Box>
        )}
        {!matches && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginRight: 1,
            }}
          >
            <Box sx={{ margin: "10px" }}>
              <img src="../flame.svg" className="imgM" alt="" />
            </Box>
            <Link to="/">
              <Typography
                className="dash"
                style={{
                  marginLeft: -100,
                  textDecoration: isActiveD ? "underline" : "none",
                  color: isActiveD ? "#C8E9E9" : "white",
                  fontWeight: 700,
                }}
                onClick={handleClickD}
              >
                Dashboard
              </Typography>
            </Link>
            {/* change this back to swap */}
            <Link to="./tokenfaucet">
              <Typography
                className="dash"
                onClick={handleClickS}
                style={{
                  textDecoration: isActiveS ? "underline" : "none",
                  color: isActiveS ? "#C8E9E9" : "white",
                  fontWeight: 700,
                }}
              >
                Token Faucet
              </Typography>
            </Link>
            <Link to="/pools">
              <Typography
                className="dash"
                style={{
                  textDecoration: isActiveC ? "underline" : "none",
                  color: isActiveC ? "#C8E9E9" : "white",
                  fontWeight: 700,
                }}
                onClick={handleClickC}
              >
                Pools
              </Typography>
            </Link>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link to="./dip">
                <Typography
                  className="dash"
                  onClick={handleClickI}
                  style={{
                    textDecoration: isActiveI ? "underline" : "none",
                    color: isActiveI ? "#C8E9E9" : "white",
                    fontWeight: 700,
                  }}
                >
                  Investments
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link to="./governance">
                <Typography
                  className="dash"
                  onClick={handleClickG}
                  style={{
                    textDecoration: isActiveG ? "underline" : "none",
                    color: isActiveG ? "#C8E9E9" : "white",
                    fontWeight: 700,
                  }}
                >
                  Governance
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button onClick={addTokenFunction} sx={buttonStyles}>
                Import Token
              </Button>
            </Box>
            {isConnected ? (
              <Button
                variant="contained"
                onClick={disconnect}
                sx={buttonStyles}
              >
                Disconnect
              </Button>
            ) : (
              <Button variant="contained" onClick={connect} sx={buttonStyles}>
                Connect Wallet
              </Button>
            )}
            {isConnected ? (
              <div
                className="privatize"
                style={{
                  fontWeight: 700,
                }}
              >
                {addressFormatted}
              </div>
            ) : (
              <></>
            )}
          </Box>
        )}

        {open && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-end",
              padding: 2,
            }}
          >
            <Link to="/">
              <Typography
                className="dash1"
                onClick={handleClickD}
                style={{
                  textDecoration: isActiveD ? "underline" : "none",
                  color: isActiveD ? "rgb(167, 230, 255)" : "white",
                }}
              >
                Dashboard
              </Typography>
            </Link>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* change this back to swap */}
              <Link to="./">
                <Typography
                  onClick={handleClickC}
                  style={{
                    textDecoration: isActiveC ? "underline" : "none",
                    color: isActiveC ? "rgb(167, 230, 255)" : "white",
                  }}
                >
                  Swap
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link to="./dip">
                <Typography
                  className="dash"
                  onClick={handleClickI}
                  style={{
                    textDecoration: isActiveI ? "underline" : "none",
                    color: isActiveI ? "#C8E9E9" : "white",
                  }}
                >
                  Investments
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link to="./governance">
                <Typography
                  className="dash"
                  onClick={handleClickG}
                  style={{
                    textDecoration: isActiveG ? "underline" : "none",
                    color: isActiveG ? "#C8E9E9" : "white",
                  }}
                >
                  Governance
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                onClick={addTokenFunction}
                sx={buttonStyles}
                style={{
                  marginTop: "2%",
                  marginBottom: "5%",
                }}
              >
                Import Token
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {isConnected ? (
                <div style={{ marginRight: "20px" }}>{addressFormatted}</div>
              ) : (
                <></>
              )}
              {isConnected ? (
                <Button
                  variant="contained"
                  onClick={disconnect}
                  sx={buttonStyles}
                >
                  Disconnect
                </Button>
              ) : (
                <Button variant="contained" onClick={connect} sx={buttonStyles}>
                  Connect Wallet
                </Button>
              )}
            </Box>
          </Box>
        )}
      </Paper>
    </>
  );
};

export default TopBar;