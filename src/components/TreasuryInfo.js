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
            marginTop: -175,
            borderStyle: "double",
            borderColor: "#fa8128",
            borderRadius: "10px",
            background: "rgba(255,255,255, 0.5)",
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
                color: "#C8E9E9",
              }}
            >
              Treasury Balance
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              style={{
                fontWeight: 700,
                color: "#000",
              }}
            >
              {balanceFormatted}
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper
          elevation={10}
          style={{
            marginTop: -175,
            borderStyle: "double",
            borderColor: "#fa8128",
            borderRadius: "10px",
            background: "rgba(255,255,255, 0.5)",
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
                color: "#C8E9E9",
              }}
            >
              Total Wallets
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              style={{
                fontWeight: 700,
                color: "#000",
              }}
            >
              0
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default TreasuryInfo;
