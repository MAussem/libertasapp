import { Grid, Paper, Typography, Box } from "@mui/material";
import { useAddresses } from "../hooks/libertas";
import { useMemo } from "react";
import { useBalance } from "wagmi";

const TreasuryInfo = () => {
  const addresses = useAddresses();
  const { data: balance } = useBalance({
    addressOrName: addresses.treasury,
    token: addresses.WROSE,
  });
  console.log(balance);

  const balanceFormatted = useMemo(
    () => (balance ? balance.formatted.split(".")[0] + " ROSE" : "n/a"),
    [balance]
  );

  return (
    <>
      <Grid item xs={4}>
        <Paper
          elevation={10}
          style={{
            borderStyle: "double",
            borderColor: "#fa8128",
            marginTop: -90,
            background: "rgba(0, 21, 66, 0.651)",
          }}
        >
          <Box
            sx={{
              padding: 3,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              style={{
                color: "rgb(167, 230, 255)",
              }}
            >
              Total Supply
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              style={{
                fontWeight: 700,
              }}
            >
              13,000,000
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper
          elevation={10}
          style={{
            borderStyle: "double",
            borderColor: "#fa8128",
            marginTop: -90,
            background: "rgba(0, 21, 66, 0.651)",
          }}
        >
          <Box
            sx={{
              padding: 3,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              style={{
                color: "rgb(167, 230, 255)",
              }}
            >
              Total Wallets
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              style={{
                fontWeight: 700,
              }}
            >
              5,000
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default TreasuryInfo;
