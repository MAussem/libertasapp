import { Grid, Paper, Typography, Box } from "@mui/material"

const Burned = () => {
 return (
  <>
      <Grid item xs={8}>
      <Paper elevation={10} style={{
        marginTop: -70,
        marginBottom: 50,
        background:"rgba(0, 21, 66, 0.651)"
      }}>
        <Box sx={{
          padding: 3,
          textAlign: 'center'
        }}>
          <Typography variant="h5" component="h2" style={{
            color: "red"
          }}>
            &#128293; Total Tokens Burned To Date &#128293;
          </Typography>
          <Typography variant="h2" component="h2" style={{
            fontWeight: 700
          }}>
            1,567,341,009,876
          </Typography>
        </Box>
      </Paper>
    </Grid>
  </>
 )
}

export default Burned;