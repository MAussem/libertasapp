import { Paper, Typography, Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import "./InterestCalc.css";

import { useAccount } from "wagmi";
import { useContractXLBRead } from "../hooks/libertas";
import { useMemo, useState } from "react";
import { ethers } from "ethers";

const Calculator = () => {
  const [daysFromCurrent, setDaysFromCurrent] = useState("0.0");

  const { address } = useAccount();
  const { data: balanceRaw } = useContractXLBRead("balanceOf", address);

  const balance = useMemo(
    () =>
      balanceRaw
        ? ethers.utils.formatEther(balanceRaw.sub(balanceRaw.mod(1e14))) +
          " XLB"
        : "0.0",
    [balanceRaw]
  );

  const dailyRoi = useMemo(() => {
    if (!balanceRaw) return "n/a";
    const daily = balanceRaw
      .div(ethers.BigNumber.from("100000000000"))
      .mul(ethers.BigNumber.from("1462306651"));
    return ethers.utils.formatEther(daily.sub(daily.mod(1e14)));
  }, [balanceRaw]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid item xs={12}>
        {matches && (
          <Paper
            elevation={10}
            style={{
              marginTop: 50,
              marginBottom: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
            }}
          >
            <Typography
              className="hTitle"
              variant="h5"
              component="h2"
              style={{ color: "#000", marginTop: "7%" }}
            >
              $XLB Amount Balance:
            </Typography>
            <form
              style={{
                textAlign: "center",
              }}
            >
              <input
                type="text"
                defaultValue={balance}
                onChange={(e) => e.target.value}
                style={{
                  marginTop: "2%",
                  color: "black",
                  width: "400px",
                  height: "45px",
                  fontSize: "20px",
                  textAlign: "center",
                  borderStyle: "double",
                  borderColor: "#fa8128",
                  background: "white",
                  borderRadius: "10px",
                }}
              ></input>
            </form>

            <Typography
              className="hTitle"
              variant="h5"
              component="h2"
              style={{ color: "#000", marginTop: "3%" }}
            >
              Purchase Price:
            </Typography>
            <form
              style={{
                textAlign: "center",
              }}
            >
              <input
                type="text"
                defaultValue="0.0"
                style={{
                  marginTop: "2%",
                  color: "black",
                  width: "400px",
                  height: "45px",
                  fontSize: "20px",
                  textAlign: "center",
                  borderStyle: "double",
                  borderColor: "#fa8128",
                  background: "white",
                  borderRadius: "10px",
                }}
              ></input>
            </form>

            <Typography
              className="hTitle"
              variant="h5"
              component="h2"
              style={{ color: "#000", marginTop: "3%" }}
            >
              Future Price:
            </Typography>
            <form
              style={{
                textAlign: "center",
              }}
            >
              <input
                type="text"
                defaultValue="0.0"
                style={{
                  marginTop: "2%",
                  color: "black",
                  width: "400px",
                  height: "45px",
                  fontSize: "20px",
                  textAlign: "center",
                  borderStyle: "double",
                  borderColor: "#fa8128",
                  background: "white",
                  borderRadius: "10px",
                }}
              ></input>
            </form>

            <Typography
              className="hTitle"
              variant="h5"
              component="h2"
              style={{ color: "#000", marginTop: "3%" }}
            >
              How Many Days From Current?
            </Typography>
            <form
              style={{
                textAlign: "center",
              }}
            >
              <input
                type="text"
                defaultValue={daysFromCurrent}
                onChange={(e) => setDaysFromCurrent(e.target.value)}
                style={{
                  marginTop: "2%",
                  color: "black",
                  width: "400px",
                  height: "45px",
                  fontSize: "20px",
                  textAlign: "center",
                  borderStyle: "double",
                  borderColor: "#fa8128",
                  background: "white",
                  borderRadius: "10px",
                }}
              ></input>
            </form>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "flex-end",
              }}
              padding={1}
            >
              <Paper
                elevation={10}
                style={{
                  width: "300px",
                  textAlign: "center",
                  marginTop: 50,
                  borderStyle: "double",
                  borderColor: "#fa8128",
                  borderRadius: "10px",
                  background: "rgba(255,255,255, 0.5)",
                }}
              >
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000" }}
                >
                  APY
                </Typography>
                <Typography className="hTitle" variant="h5" component="h2">
                  20009.07%
                </Typography>
              </Paper>
              <Paper
                elevation={10}
                style={{
                  width: "300px",
                  textAlign: "center",
                  marginTop: 50,
                  borderStyle: "double",
                  borderColor: "#fa8128",
                  borderRadius: "10px",
                  background: "rgba(255,255,255, 0.5)",
                }}
              >
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000" }}
                >
                  Initial Investment
                </Typography>
                <Typography className="hTitle" variant="h5" component="h2">
                  $0.00 USD
                </Typography>
              </Paper>

              <Paper
                elevation={10}
                style={{
                  width: "300px",
                  textAlign: "center",
                  marginTop: 50,
                  borderStyle: "double",
                  borderColor: "#fa8128",
                  borderRadius: "10px",
                  background: "rgba(255,255,255, 0.5)",
                }}
              >
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000" }}
                >
                  Estimated Rewards
                </Typography>
                <Typography className="hTitle" variant="h5" component="h2">
                  {dailyRoi * daysFromCurrent} XLB
                </Typography>
              </Paper>
              <Paper
                elevation={10}
                style={{
                  width: "300px",
                  textAlign: "center",
                  marginTop: 50,
                  borderStyle: "double",
                  borderColor: "#fa8128",
                  borderRadius: "10px",
                  background: "rgba(255,255,255, 0.5)",
                }}
              >
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000" }}
                >
                  Potential Return
                </Typography>
                <Typography className="hTitle" variant="h5" component="h2">
                  $0.00 USD
                </Typography>
              </Paper>
            </Box>
          </Paper>
        )}

        {!matches && (
          <Paper
            elevation={10}
            style={{
              marginTop: 110,
              display: "flex",
              flexDirection: "column",
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
            }}
          >
            <Typography
              className="hTitle"
              variant="h5"
              component="h2"
              style={{
                textDecoration: "underline",
                marginTop: 50,
                textAlign: "center",
                color: "#000",
              }}
            >
              Estimate Your Returns
            </Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: 100,
              }}
            >
              <form
                style={{
                  textAlign: "center",
                }}
              >
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000", marginTop: "5%" }}
                >
                  $XLB Amount Balance:
                </Typography>
                <input
                  type="text"
                  defaultValue={balance}
                  onChange={(e) => e.target.value}
                  style={{
                    marginTop: "2%",
                    color: "black",
                    width: "400px",
                    height: "45px",
                    fontSize: "20px",
                    textAlign: "center",
                    borderStyle: "double",
                    borderColor: "#fa8128",
                    background: "white",
                    borderRadius: "10px",
                  }}
                ></input>
              </form>
              <form
                style={{
                  textAlign: "center",
                }}
              >
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000", marginTop: "2%" }}
                >
                  Purchase Price:
                </Typography>
                <input
                  type="text"
                  defaultValue="$0.0"
                  style={{
                    marginTop: "2%",
                    color: "black",
                    width: "400px",
                    height: "45px",
                    fontSize: "20px",
                    textAlign: "center",
                    borderStyle: "double",
                    borderColor: "#fa8128",
                    background: "white",
                    borderRadius: "10px",
                  }}
                ></input>
              </form>

              <form
                style={{
                  textAlign: "center",
                }}
              >
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000", marginTop: "2%" }}
                >
                  Future Price:
                </Typography>
                <input
                  type="text"
                  defaultValue="$0.0"
                  style={{
                    marginTop: "2%",
                    color: "black",
                    width: "400px",
                    height: "45px",
                    fontSize: "20px",
                    textAlign: "center",
                    borderStyle: "double",
                    borderColor: "#fa8128",
                    background: "white",
                    borderRadius: "10px",
                  }}
                ></input>
              </form>

              <form
                style={{
                  textAlign: "center",
                }}
              >
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000", marginTop: "2%" }}
                >
                  How Many Days From Current?
                </Typography>
                <input
                  type="text"
                  defaultValue={daysFromCurrent}
                  onChange={(e) => setDaysFromCurrent(e.target.value)}
                  style={{
                    marginTop: "2%",
                    color: "black",
                    width: "400px",
                    height: "45px",
                    fontSize: "20px",
                    textAlign: "center",
                    borderStyle: "double",
                    borderColor: "#fa8128",
                    background: "white",
                    borderRadius: "10px",
                  }}
                ></input>
              </form>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "flex-end",
              }}
              padding={1}
            >
              <Paper
                elevation={10}
                style={{
                  marginTop: -365,
                  marginRight: 100,
                  marginBottom: 36,
                  width: "400px",
                  textAlign: "center",
                  borderStyle: "double",
                  borderColor: "#fa8128",
                  borderRadius: "10px",
                  background: "rgba(255,255,255, 0.5)",
                }}
              >
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{
                    color: "#000",
                    textDecoration: "underline",
                  }}
                >
                  APY
                </Typography>
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000" }}
                >
                  20009.07%
                </Typography>
              </Paper>
              <Paper
                elevation={10}
                style={{
                  marginRight: 100,
                  marginBottom: 36,
                  width: "400px",
                  textAlign: "center",
                  borderStyle: "double",
                  borderColor: "#fa8128",
                  borderRadius: "10px",
                  background: "rgba(255,255,255, 0.5)",
                }}
              >
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000", textDecoration: "underline" }}
                >
                  Initial Investment
                </Typography>
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000" }}
                >
                  $0.00 USD
                </Typography>
              </Paper>

              <Paper
                elevation={10}
                style={{
                  marginRight: 100,
                  marginBottom: 36,
                  width: "400px",
                  textAlign: "center",
                  borderStyle: "double",
                  borderColor: "#fa8128",
                  borderRadius: "10px",
                  background: "rgba(255,255,255, 0.5)",
                }}
              >
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000", textDecoration: "underline" }}
                >
                  Estimated Rewards
                </Typography>
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000" }}
                >
                  {dailyRoi * daysFromCurrent} XLB
                </Typography>
              </Paper>
              <Paper
                elevation={10}
                style={{
                  marginRight: 100,
                  marginBottom: 36,
                  width: "400px",
                  textAlign: "center",
                  borderStyle: "double",
                  borderColor: "#fa8128",
                  borderRadius: "10px",
                  background: "rgba(255,255,255, 0.5)",
                }}
              >
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000", textDecoration: "underline" }}
                >
                  Potential Return
                </Typography>
                <Typography
                  className="hTitle"
                  variant="h5"
                  component="h2"
                  style={{ color: "#000" }}
                >
                  $0.00 USD
                </Typography>
              </Paper>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "-430px",
                marginBottom: "50px",
              }}
            >
              <img
                src="../flame.svg"
                alt=""
                style={{
                  width: "8%",
                  opacity: "0.7",
                  zIndex: 100,
                  cursor: "pointer",
                }}
              />
            </Box>
          </Paper>
        )}
      </Grid>
    </>
  );
};

export default Calculator;
