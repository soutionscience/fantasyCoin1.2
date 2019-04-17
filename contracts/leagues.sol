pragma solidity ^0.5.0;


contract League {
address public manager;
    //restrictor
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    struct Competition{
        address manager;
        bool complete;
        uint prizeMoney;
        uint maxPlayers;
        uint playerNo;
        mapping(address=> bool) competitor;
    }
    
    Competition[] public competitions;
    
    //constructor
   constructor(address creator ) public{
        manager = creator;
        
    }
    //create Competition
    function createCompetition(uint max) public payable{
        
        Competition memory newCompetition = Competition({
            manager: msg.sender,
            complete: false,
            maxPlayers: max,
            playerNo: 0,
            prizeMoney: msg.value
        });
        
        competitions.push(newCompetition);
        
    }
    
    //join competitions using competion inde
    function joinCompetition(uint index) public{
        //check if joining twice
        require(!competitions[index].competitor[msg.sender]);
        // add msg sender to competition
        competitions[index].competitor[msg.sender]= true;
        competitions[index].playerNo+=1;
    }
    
    //award winner using winner address
    function awardWinner(uint index, address payable winner) public restricted{
         //check if address is in competition
        require(competitions[index].competitor[winner]);
        // send winner the cash
        winner.transfer(competitions[index].prizeMoney);
        
        
    }
    function getCompetitionCount() public view returns(uint){
        return competitions.length;
    }
    // function getAllCompetitions() public view returns(Competition [] memory){
    //     return competitions;
    // }
        
    
}
