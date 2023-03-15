// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LibStake is ERC20 {

  mapping(address => uint256) public staked;
  mapping(address => uint256) public stakedFromTS;

  constructor() ERC20("Libertas", "XLB") {
    _mint(msg.sender, 555000000000000000000000000);
  }

bool public isStaking = false;

function stake(uint256 amount) external {
    require(!isStaking, "Reentrancy guard: function is already executing");
    require(amount > 0, "Cannot stake 0");
    require(balanceOf(msg.sender) >= amount, "Not enough tokens");
    isStaking = true;
    _transfer(msg.sender, address(this), amount);
    if (staked[msg.sender] > 0) {
      claim();
    }
    stakedFromTS[msg.sender] = block.timestamp;
    staked[msg.sender] += amount;
    isStaking = false;
  }

function unstake (uint256 amount) external {
    require(amount > 0, "Cannot unstake 0");
    require(staked[msg.sender] >= amount, "Not enough staked tokens");
    uint256 secondsStaked = block.timestamp - stakedFromTS[msg.sender];
    require(secondsStaked >= 30 days, "Vesting period of 30 days not yet met");
    claim();
    staked[msg.sender] -= amount;
    _transfer(address(this), msg.sender, amount);
  }


  function claim() public {
    require(staked[msg.sender] > 0, "Nothing to claim");
    uint256 secondsStaked = block.timestamp - stakedFromTS[msg.sender];
    uint256 reward = (staked[msg.sender] * secondsStaked * 30) / 1000000000000000000;
    _mint(msg.sender, reward);
    stakedFromTS[msg.sender] = block.timestamp;
  }
}