// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Proposal {
        uint id;
        string description;
        uint voteCount;
        bool isActive;
        address proposer;
    }

    mapping(uint => Proposal) public proposals;
    uint public proposalCount;
    address public owner;

    event ProposalCreated(uint id, string description, address proposer);
    event ProposalStatusChanged(uint id, bool isActive);
    event VoteCountChanged(uint id, uint voteCount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createProposal(string memory _description) public {
        proposalCount++;
        proposals[proposalCount] = Proposal(proposalCount, _description, 0, true, msg.sender);
        emit ProposalCreated(proposalCount, _description, msg.sender);
    }

    function changeProposalStatus(uint _id, bool _isActive) public onlyOwner {
        require(_id > 0 && _id <= proposalCount, "Proposal does not exist");
        Proposal storage proposal = proposals[_id];
        proposal.isActive = _isActive;
        emit ProposalStatusChanged(_id, _isActive);
    }

    function changeVoteCount(uint _id, bool _add) public {
        require(_id > 0 && _id <= proposalCount, "Proposal does not exist");
        Proposal storage proposal = proposals[_id];
        if (_add) {
            proposal.voteCount++;
        } else {
            require(proposal.voteCount > 0, "Vote count cannot be negative");
            proposal.voteCount--;
        }
        emit VoteCountChanged(_id, proposal.voteCount);
    }

    function getProposal(uint _id) public view returns (Proposal memory) {
        require(_id > 0 && _id <= proposalCount, "Proposal does not exist");
        return proposals[_id];
    }
}
