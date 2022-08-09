import { Paper, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useState, useMemo } from "react";
import { CgClose } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

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

  const [open, setOpen] = useState(false);

  const handleClickD = () => {
    setIsActiveD(true);
    setIsActiveC(false);
  };

  const handleClickC = () => {
    setIsActiveC(true);
    setIsActiveD(false);
  };

  const buttonStyles = {
    fontWeight: 800,
    background: "linear-gradient(red, yellow);",
  };

  const hamburger = (
    <CgMenu
      size="40px"
      color="rgb(167, 230, 255)"
      onClick={() => setOpen(!open)}
    />
  );

  const closeButton = (
    <CgClose
      size="40px"
      color="rgb(167, 230, 255)"
      onClick={() => setOpen(!open)}
    />
  );

  // const closeMobileMenu = () => setOpen(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
            <img src="../flame.png" className="imgT" alt="" />
            <Typography
              style={{
                fontSize: 30,
                fontWeight: 700,
                marginLeft: 10,
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
            }}
          >
            <Box>
              <img src="../flame.svg" className="imgT" alt="" />
            </Box>
            <Link to="/">
              <Typography
                className="dash1"
                style={{
                  textDecoration: isActiveD ? "underline" : "none",
                  color: isActiveD ? "rgb(167, 230, 255)" : "white",
                }}
                onClick={handleClickD}
              >
                Dashboard
              </Typography>
            </Link>
            <Link to="/calc">
              <Typography
                className="dash"
                style={{
                  textDecoration: isActiveC ? "underline" : "none",
                  color: isActiveC ? "rgb(167, 230, 255)" : "white",
                }}
                onClick={handleClickC}
              >
                Calculator
              </Typography>
            </Link>
            <a
              href="https://lib-dex.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Typography className="dash">Swap</Typography>
            </a>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography className="dash">Launch Pad</Typography>
              <Typography
                variant="body3"
                className="dash"
                style={{
                  marginTop: -10,
                  marginLeft: 2,
                  color: "rgb(167, 230, 255)",
                }}
              >
                coming soon
              </Typography>
            </Box>
            <a
              href="https://libertas-finance.gitbook.io/libertasfinance/"
              target="_blank"
              rel="noreferrer"
            >
              <Typography className="dash">Whitepaper</Typography>
            </a>
            {isConnected ? (
              <Button variant="contained" onClick={disconnect}>
                Disconnect
              </Button>
            ) : (
              <Button variant="contained" onClick={connect} sx={buttonStyles}>
                Connect Wallet
              </Button>
            )}
            {isConnected ? (
              <div className="privatize">{addressFormatted}</div>
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
              <Typography className="dash1" onClick={() => setOpen(!open)}>
                Dashboard
              </Typography>
            </Link>
            {/* <Link to='/calc'>
        <Typography className="dash" onClick={() => setOpen(!open)}>
          Calculator
        </Typography>
        </Link>
        <a href="https://app.yuzu-swap.com/#/swap" target="_blank" rel="noreferrer">
          <Typography className="dash" onClick={() => setOpen(!open)}>
            Swap
          </Typography>
        </a> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography onClick={() => setOpen(!open)}>Calculator</Typography>
              <Typography
                variant="body3"
                className="dashl"
                style={{
                  marginLeft: -2,
                  color: "rgb(167, 230, 255)",
                }}
              >
                coming soon
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography onClick={() => setOpen(!open)}>Launch Pad</Typography>
              <Typography
                variant="body3"
                className="dashl"
                style={{
                  marginLeft: 2,
                  color: "rgb(167, 230, 255)",
                }}
              >
                coming soon
              </Typography>
            </Box>
            <a
              href="https://libertas-finance.gitbook.io/libertasfinance/"
              target="_blank"
              rel="noreferrer"
            >
              <Typography className="dash" onClick={() => setOpen(!open)}>
                Whitepaper
              </Typography>
            </a>
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
            {isConnected ? <div>{addressFormatted}</div> : <></>}
          </Box>
        )}
      </Paper>
    </>
  );
};

export default TopBar;
