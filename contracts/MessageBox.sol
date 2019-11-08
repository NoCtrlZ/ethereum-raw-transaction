pragma solidity ^0.4.16;

contract MessageBox {

    string public message;
    address public sender;

    function MessageBox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
        sender = msg.sender;
    }
}