import React, { Component } from "react";
import BuyForm from "../components/exchange/BuyForm";
import SellForm from "../components/exchange/SellForm";
import { Box, Button } from "@mui/material";

class Exchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: "buy",
    };
  }

  render() {
    let content;
    if (this.state.currentForm === "buy") {
      content = (
        <BuyForm
          ethBalance={this.props.ethBalance}
          tokenBalance={this.props.tokenBalance}
          buyTokens={this.props.buyTokens}
        />
      );
    } else {
      content = (
        <SellForm
          ethBalance={this.props.ethBalance}
          tokenBalance={this.props.tokenBalance}
          sellTokens={this.props.sellTokens}
        />
      );
    }

    return (
      <Box>
        <Box
          style={{
            marginTop: "75px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={(event) => {
              this.setState({ currentForm: "buy" });
            }}
            style={{
              color: "black",
              width: "10%",
              fontWeight: 800,
              background: "linear-gradient(to right, #fa8128, #C8E9E9)",
              margin: "20px",
              borderRadius: "10px",
            }}
          >
            Buy
          </Button>
          <Button
            onClick={(event) => {
              this.setState({ currentForm: "sell" });
            }}
            style={{
              color: "black",
              width: "10%",
              fontWeight: 800,
              backgroundImage: "linear-gradient(to right, #fa8128, #C8E9E9)",
              margin: "20px",
              borderRadius: "10px",
            }}
          >
            Sell
          </Button>
        </Box>

        <div
          className="card mb-4"
          style={{
            marginTop: 55,
          }}
        >
          <div className="card-body">{content}</div>
        </div>
      </Box>
    );
  }
}

export default Exchange;
