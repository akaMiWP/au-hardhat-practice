//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ModifyVariable {
    uint public x;
    string public message;

    constructor(uint _x) {
        x = _x;
    }

    function modifyToLeet() public {
        x = 1337;
    }

    function setMessage(string memory _message) external {
        message = _message;
    }
}
