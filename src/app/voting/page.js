"use client"

import Navbar from "@/app/components/NavBar";
import SocialLinkBar from "@/app/components/SocialLinkBar";
import {Badge} from "@/components/ui/badge";
import {useEffect, useState} from "react";
import { ethers } from 'ethers';
import contractABI from '/contracts/abi.json' assert {type: 'json'};



const Docs = () => {
    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);
    const [description, setDescription] = useState('');
    const [proposalId, setProposalId] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [voteChange, setVoteChange] = useState(true);
    const [proposals, setProposals] = useState([]);


    useEffect(() => {
        const init = async () => {
            const provider = new ethers.BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract("0x8b2323cb8aa3e265e403a73d7af7f0640f544ca1", contractABI, signer);
            setProvider(provider);
            setSigner(signer);
            setContract(contract);
        };
        init();
    }, []);

    async function connectWallet() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
                setAccount(accounts[0]);
            } catch (error) {
                console.error("User denied account access");
            }
        } else {
            console.error("MetaMask not detected");
        }
    }

    const increaseVoteCount = async () => {
        await changeVoteCount(true);
    }

    const decreaseVoteCount = async () => {
        await changeVoteCount(false);
    }

    const changeVoteCount = async (isIncrease) => {
        if (contract) {
            const tx = await contract.changeVoteCount(1, isIncrease);
            await tx.wait();
            alert('Vote count changed!');
        }
    };

    const fetchProposals = async () => {
        if (contract) {
            try {
                const proposals = [];
                const count = await contract.proposalCount();
                console.log(`Total Proposals: ${count}`);
                for (let i = 1; i <= count; i++) {
                    try {
                        const proposalFromContract = await contract.getProposal(i);
                        console.log(proposalFromContract);
                        proposals.push(proposalFromContract);
                    } catch (error) {
                        console.error(`Error fetching proposal with ID ${i}:`, error);
                    }
                }
                setProposals(proposals);
            } catch (error) {
                console.error("Error fetching proposals:", error);
            }
        }
    };

    useEffect(() => {
        fetchProposals();
    }, [contract]);

    return (
        <>
            <Navbar/>
            <div className="container mx-auto px-8">
                <div className="pt-16 flex justify-between">
                    <div>
                        <h1 className="text-3xl">Vote Proposals - Community</h1>
                        <p className="text-base text-gray-400 pt-2">Immerse yourself in managing through Community Votes
                            to build EngeLayer’s future.</p>
                    </div>
                    <button onClick={connectWallet}
                            className=" text-white  text-center py-4 m-4 pr-8 pl-8 rounded-2xl border-2 border-gray-400 rounded">
                        {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect wallet'}
                    </button>
                </div>
                <div className="w-max rounded-tl-lg rounded-tr-lg mt-12 px-12 py-4 text-black bg-gray-400">
                    Proposals
                </div>
                <div
                    className="grid grid-cols-4 items-center rounded-tr-lg rounded-bl-lg rounded-br-lg border border-gray-400">
                    <span
                        className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Proposer</span>
                    <span
                        className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Description</span>
                    <span
                        className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Status</span>
                    <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Cast your vote</span>


                    {proposals.map((item, index) => (<>
                            <span
                                className="text-center">{item.proposer.slice(0, 4) + "..." + item.proposer.slice(-4)}</span>
                            <span className="text-center">{item.description}</span>
                            <div className="flex justify-center">
                                <Badge
                                    className="align-items-center flex justify-center items-center w-max bg-gray-400">
                                    {item.isActive ? 'ACTIVE' : 'GONE'}
                                </Badge></div>
                            <div className="flex items-center gap-10 justify-center m-2">
                                <button
                                    className="text-black bg-white rounded justify-center flex pt-2 pb-2 pl-6 pr-6 rounded-2xl"
                                    onClick={increaseVoteCount}><p>FOR</p>
                                </button>
                                <button
                                    className="text-black bg-white rounded  justify-center  pt-2 pb-2 pl-2 pr-2 rounded-2xl"
                                    onClick={decreaseVoteCount}><p>AGAINST</p>
                                </button>
                            </div>
                        </>
                    ))}
                </div>
            </div>

            <SocialLinkBar/>
        </>

    );
};

export default Docs;
