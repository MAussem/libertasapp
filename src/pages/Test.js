import { Container } from "@mui/system";
import { useAccount } from "wagmi";
import { Paper, Typography, Box, Button } from "@mui/material";

export default function Test() {
  const { address } = useAccount();
  return (
    <Container>
      <Typography>{address || "Not connected"}</Typography>
    </Container>
  );
}
