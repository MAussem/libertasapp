import { Paper, Typography, Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import './InterestCalc.css'

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
        <Paper elevation={10} style={{
          marginTop:50,
          marginBottom:50,
          display: "flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          borderStyle: "double",
          borderColor: "rgb(167, 230, 255, 0.2)",
          background:"rgba(0, 21, 66, 0.651)"
        }}>
        <Typography className="hTitle" variant="h5" component="h2" style={{
          textDecoration:"underline",
          marginTop:50,
          textAlign:"center",
          color: "rgb(167, 230, 255)"
        }}>
          Estimate Your Returns
        </Typography>
          
        <Paper elevation={10} style={{
          width: "300px",
          textAlign:"center",
          marginTop:50,
          borderStyle: "double",
          borderColor: "rgb(167, 230, 255, 0.2)",
          background:"rgba(0, 21, 66, 0.651)"
        }}>
            <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
                $XLB Amount Balance:
            </Typography>
          <form style={{
            textAlign:"center"
          }}>
            <input type="text" defaultValue={balance} onChange={(e) => (e.target.value)} 
            style={{
              textAlign:"center",
              borderStyle: "double",
              borderColor: "rgb(167, 230, 255, 0.2)",
              background:"rgba(0, 21, 66, 0.651)"
            }}></input>
        </form>
            </Paper>
          
        <Paper elevation={10} style={{
          width: "300px",
          textAlign:"center",
          marginTop:50,
          borderStyle: "double",
          borderColor: "rgb(167, 230, 255, 0.2)",
          background:"rgba(0, 21, 66, 0.651)"
        }}>
        <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
          Purchase Price:
        </Typography>
        <form style={{
            textAlign:"center"
          }}>
            <input type="text" defaultValue="0.0" style={{
              textAlign:"center",
              borderStyle: "double",
              borderColor: "rgb(167, 230, 255, 0.2)",
              background:"rgba(0, 21, 66, 0.651)"
            }}></input>
        </form>
            </Paper>
          
        <Paper elevation={10} style={{
          width: "300px",
          textAlign:"center",
          marginTop:50,
          borderStyle: "double",
          borderColor: "rgb(167, 230, 255, 0.2)",
          background:"rgba(0, 21, 66, 0.651)"
        }}>
                <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
                Future Price:
        </Typography>
        <form style={{
            textAlign:"center"
          }}>
            <input type="text" defaultValue="0.0" style={{
              textAlign:"center",
              borderStyle: "double",
              borderColor: "rgb(167, 230, 255, 0.2)",
              background:"rgba(0, 21, 66, 0.651)"
            }}></input>
        </form>
            </Paper> 
          
        <Paper elevation={10} style={{
          width: "300px",
          textAlign:"center",
          marginTop:50,
          display: "flex",
          flexDirection:"column",
          justifyContent: "space-between",
          borderStyle: "double",
          borderColor: "rgb(167, 230, 255, 0.2)",
          background:"rgba(0, 21, 66, 0.651)"
        }}>
  
        <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
          How Many Days From Current? 
        </Typography>
        <form style={{
            textAlign:"center"
          }}>
            <input type="text" defaultValue={daysFromCurrent} onChange={(e) => setDaysFromCurrent(e.target.value)} style={{
              textAlign:"center",
              borderStyle: "double",
              borderColor: "rgb(167, 230, 255, 0.2)",
              background:"rgba(0, 21, 66, 0.651)"
            }}></input>
        </form>
            </Paper> 
          
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems:"flex-end"
          }}
            padding={1}
        >
        <Paper elevation={10} style={{
          width: "300px",
          textAlign:"center",
          marginTop:50,
          borderStyle: "double",
          borderColor: "rgb(167, 230, 255, 0.2)",
          background:"rgba(0, 21, 66, 0.651)"
        }}>
        <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
          APY 
        </Typography>
        <Typography className="hTitle" variant="h5" component="h2" >
          20009.07%
        </Typography>
            </Paper> 
        <Paper elevation={10} style={{
          width: "300px",
          textAlign:"center",
          marginTop:50,
          borderStyle: "double",
          borderColor: "rgb(167, 230, 255, 0.2)",
          background:"rgba(0, 21, 66, 0.651)"
        }}>
        <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
          Initial Investment
        </Typography>
        <Typography className="hTitle" variant="h5" component="h2">
          $0.00 USD
        </Typography>
            </Paper> 
  
        <Paper elevation={10} style={{
          width: "300px",
          textAlign:"center",
          marginTop:50,
          borderStyle: "double",
          borderColor: "rgb(167, 230, 255, 0.2)",
          background:"rgba(0, 21, 66, 0.651)"
        }}>
        <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
          Estimated Rewards
        </Typography>
        <Typography className="hTitle" variant="h5" component="h2">
          {dailyRoi * daysFromCurrent} XLB
        </Typography>
            </Paper> 
        <Paper elevation={10} style={{
          width: "300px",
          textAlign:"center",
          marginTop:50,
          borderStyle: "double",
          borderColor: "rgb(167, 230, 255, 0.2)",
          background:"rgba(0, 21, 66, 0.651)"
        }}>
        <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
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
      <Paper elevation={10} style={{
        marginTop:110,
        display: "flex",
        flexDirection:"column",
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
      <Typography className="hTitle" variant="h5" component="h2" style={{
        textDecoration:"underline",
        marginTop:50,
        textAlign:"center",
        color: "rgb(167, 230, 255)"
      }}>
        Estimate Your Returns
      </Typography>
        
      <Paper elevation={10} style={{
        width: "400px",
        textAlign:"center",
        marginTop:50,
        marginLeft:210,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
          <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
              $XLB Amount Balance:
          </Typography>
        <form style={{
          textAlign:"center"
        }}>
          <input type="text" defaultValue={balance} onChange={(e) => (e.target.value)} 
          style={{
            textAlign:"center",
            borderStyle: "double",
            borderColor: "rgb(167, 230, 255, 0.2)",
            background:"rgba(0, 21, 66, 0.651)"
          }}></input>
      </form>
          </Paper>
        
      <Paper elevation={10} style={{
        width: "400px",
        textAlign:"center",
        marginTop:50,
        marginLeft:210,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
      <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
        Purchase Price:
      </Typography>
      <form style={{
          textAlign:"center"
        }}>
          <input type="text" defaultValue="0.0" style={{
            textAlign:"center",
            borderStyle: "double",
            borderColor: "rgb(167, 230, 255, 0.2)",
            background:"rgba(0, 21, 66, 0.651)"
          }}></input>
      </form>
          </Paper>
        
      <Paper elevation={10} style={{
        width: "400px",
        textAlign:"center",
        marginTop:50,
        marginLeft:210,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
              <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
              Future Price:
      </Typography>
      <form style={{
          textAlign:"center"
        }}>
          <input type="text" defaultValue="0.0" style={{
            textAlign:"center",
            borderStyle: "double",
            borderColor: "rgb(167, 230, 255, 0.2)",
            background:"rgba(0, 21, 66, 0.651)"
          }}></input>
      </form>
          </Paper> 
        
      <Paper elevation={10} style={{
        width: "400px",
        textAlign:"center",
        marginTop:50,
        marginLeft:210,
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-between",
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>

      <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
        How Many Days From Current? 
      </Typography>
      <form style={{
          textAlign:"center"
        }}>
          <input type="text" defaultValue={daysFromCurrent} onChange={(e) => setDaysFromCurrent(e.target.value)} style={{
            textAlign:"center",
            borderStyle: "double",
            borderColor: "rgb(167, 230, 255, 0.2)",
            background:"rgba(0, 21, 66, 0.651)"
          }}></input>
      </form>
          </Paper> 
        
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems:"flex-end"
        }}
          padding={1}
      >
      <Paper elevation={10} style={{
        marginTop:-395,
        marginRight:210,
        marginBottom:36,
        width: "400px",
        textAlign:"center",
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
      <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
        APY 
      </Typography>
      <Typography className="hTitle" variant="h5" component="h2" >
        20009.07%
      </Typography>
          </Paper> 
      <Paper elevation={10} style={{
        marginRight:210,
        marginBottom:36,
        width: "400px",
        textAlign:"center",
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
      <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
        Initial Investment
      </Typography>
      <Typography className="hTitle" variant="h5" component="h2">
        $0.00 USD
      </Typography>
          </Paper> 

      <Paper elevation={10} style={{
        marginRight:210,
        marginBottom:36,
        width: "400px",
        textAlign:"center",
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
      <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
        Estimated Rewards
      </Typography>
      <Typography className="hTitle" variant="h5" component="h2">
        {dailyRoi * daysFromCurrent} XLB
      </Typography>
          </Paper> 
      <Paper elevation={10} style={{
        marginRight:210,
        marginBottom:36,
        width: "400px",
        textAlign:"center",
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
      <Typography className="hTitle" variant="h5" component="h2" style={{color: "rgb(167, 230, 255)"}}>
        Potential Return 
      </Typography>
      <Typography className="hTitle" variant="h5" component="h2">
        $0.00 USD
      </Typography>
          </Paper> 
          </Box>
    </Paper>
    )}
    </Grid>
  </>
  )
}

export default Calculator;