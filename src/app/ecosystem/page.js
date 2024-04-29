"use client";

import { Component, useEffect, useState } from "react";
import { CovalentClient } from "@covalenthq/client-sdk";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import NavBar from "@/app/components/NavBar";
import SocialLinkBar from "@/app/components/SocialLinkBar";

export default function Dashboard() {
  const client = new CovalentClient("cqt_rQq7bWWFXtXppQXD8BbphKrdpJcQ")
  const [walletAddress, setWalletAddress] = useState('');
  const [walletAddressSubmit, setWalletAddressSubmit] = useState('');
  const [countToken, setCountToken] = useState('');
  const [myWallet, setMyWallet] = useState('');
  const [lido, setLido] = useState([]);
  const [aave, setAave] = useState([]);
  const [compound, setCompound] = useState([]);
  const stakings =[
    {name: 'AAVE', chain:'https://etherscan.io/address/0xf301805bE1Df81102C957f6d4Ce29d2B8c056B2a', TVL:'$10,929,659,170', app_link:'https://app.aave.com/markets/?marketName=proto_scroll_v3'},
    {name: 'Compound Finance', chain:'https://compound.finance/', TVL:'$2,378,725,183', app_link:'https://app.compound.finance'},
    {name: 'Lido Finance', chain:'https://etherscan.io/token/0xf610a9dfb7c89644979b4a0f27063e9e7d7cda32', TVL:'$29,457,334,334', app_link:'https://lido.fi/'}
  ]

  useEffect(() => {
  }, [myWallet]);

  useEffect(() => {
  }, [lido]);

  useEffect(() => {
  }, [aave]);

  useEffect(() => {
  }, [compound]);

  const handleShowAll = () => {
    setShowAll(true);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setWalletAddress(e.target.value)
    console.log(walletAddress)
  }

  const handleSubmit = async (e) => {

    console.log(walletAddress)
    setMyWallet(walletAddress.toLowerCase());
    console.log("myWallet ", myWallet);
    let resp = await client.BalanceService
      .getTokenBalancesForWalletAddress("scroll-mainnet", walletAddress);
    let totalBalance = 0;
    console.log(resp)
    if (resp === null || resp.data === null || resp.data.items === null) return;
    let items = resp.data.items.filter(item => item.pretty_quote !== "$0.00")
    setCountToken(items.length + ' Tokens')
    console.log(items)
    resp.data.items.forEach(item => {
      totalBalance += parseFloat(item.pretty_quote.replace("$", ""))
    })
    setWalletAddressSubmit('$' + totalBalance.toFixed(2))
    console.log(walletAddressSubmit)

    let headers = new Headers();
    headers.set('Authorization', "Bearer cqt_rQq7bWWFXtXppQXD8BbphKrdpJcQ")

    let lidoItems = [];
    await fetch("https://api.covalenthq.com/v1/cq/covalent/app/lido/balances/?address=" + walletAddress, {method: 'GET', headers: headers})
        .then((resp) => resp.json())
        .then((data) => {
          console.log("data == " + data.data)
          data.data.items.forEach(item => lidoItems.push(item))
        });
    setLido(lidoItems)

    let aaveItems = [];
    headers.set('Authorization', "Bearer cqt_rQq7bWWFXtXppQXD8BbphKrdpJcQ")
    await fetch("https://api.covalenthq.com/v1/cq/covalent/app/aave/balances/?address=" + walletAddress, {method: 'GET', headers: headers})
        .then((resp) => resp.json())
        .then((data) => {
          console.log("data == " + data.data)
          data.data.items.forEach(item => aaveItems.push(item))
        });
    setAave(aaveItems)

    let compoundItems = [];
    headers.set('Authorization', "Bearer cqt_rQq7bWWFXtXppQXD8BbphKrdpJcQ")
    await fetch("https://api.covalenthq.com/v1/cq/covalent/app/compound/balances/?address=" + walletAddress, {method: 'GET', headers: headers})
        .then((resp) => resp.json())
        .then((data) => {
          console.log("data == " + data.data)
          data.data.items.forEach(item => compoundItems.push(item))
        });
    setCompound(compoundItems)

    setWalletAddress('')
  }

  return (
      <>
        <div className="">

          <NavBar/>


          <div className="container mx-auto">
            <div className="mt-16 p-8 rounded-lg  border-gray-400 border-2 justify-between flex">
              <div className="flex">
                <Input type="text" placeholder="Wallet adress..."
                       value={walletAddress}
                       onChange={handleChange}
                       className="input-dashboard focus-visible:ring-offset-0 focus-visible:ring-0"/>
                <button className="text-black rounded-l-lg"
                        onClick={handleSubmit}><Image src="/static/submitButton.svg" height={50} width={50} alt=""/>
                </button>
              </div>
              {walletAddressSubmit !== '' && <div className="text-white flex space-x-4">
                <div>
                  <div className="text-2xl">Total value</div>
                  <div className="text-gray-400 items-end">{countToken}</div>
                </div>
                <div className="text-6xl items-center">{walletAddressSubmit}</div>
              </div>}
            </div>
            {stakings.length > 0 && <div className="">
              <div className="w-max rounded-tl-lg rounded-tr-lg mt-12 px-12 py-4 text-black bg-gray-400">
                dApps
              </div>
              <div
                  className="grid grid-cols-5 items-center rounded-tr-lg rounded-bl-lg rounded-br-lg border border-gray-400">
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Name</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Chain</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Category</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Total Value Locked(TVL)</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">App</span>


                {stakings.map((item, index) => (<>
                      <div>
                        <p className="text-muted-foreground px-4 pt-2 text-sm">Liquidity Protocol</p>
                        <p className="text-white px-4 text-xl pb-2">{item.name}</p>
                      </div>
                      <span className="content-center flex justify-center px-4 py-2">
                        <Link href={item.chain} target="_blank">
                          <Image src="/static/eth.svg" className="" width={30} height={30}/>
                        </Link>
                      </span>
                      <span className="text-center px-4 py-2">DeFi</span>
                      <span className="text-center px-4 py-2">{item.TVL}</span>
                      <span className="text-center px-4 py-2">
                              <Link href={item.app_link} target="_blank">
                                <Badge className="w-max bg-gray-400">
                                  APP
                                </Badge>
                              </Link>
                            </span>
                    </>
                ))}
              </div>
            </div>}

            <div className="flex justify-between">
              <div className="mt-16 p-8 pr-4 rounded-lg border-gray-400 border-2 justify-between text-lg">
                <Image className="content-center flex justify-center pl-16 pr-16 pb-4" src="/static/aave.svg" alt=""
                       width={335} height={325}/>
                <p>AAVE is a DeFi Protocol that offers lending</p>
                <p>and borrowing services akin to a Web3 </p>
                <p>bank. It allows users to supply assets and </p>
                <p>earn passive income featuring a user-</p>
                <p>friendly interface.</p>
              </div>

              <div className="mt-16 p-8 pr-4 rounded-lg border-gray-400 border-2 justify-between text-lg">
                <Image className="content-center flex justify-center pl-16 pr-16 pb-4" src="/static/compound.svg" alt=""
                       width={335} height={325}/>
                <p>Compound Finance is a DeFi Protocol that</p>
                <p>allows users to lend and borrow assets. It</p>
                <p>operates as an autonomous interest rate </p>
                <p>protocol designed for developers, offering </p>
                <p>a user-friendly interface.</p>
              </div>


              <div className="mt-16 p-8 pr-4 rounded-lg border-gray-400 border-2 justify-between text-lg">
                <Image className="content-center flex justify-center pl-16 pr-16 pb-4" src="/static/lido.svg" alt=""
                       width={335} height={325}/>
                <p>Lido Finance is a DeFi Protocol backed by </p>
                <p>industry-leading staking providers that </p>
                <p>supports staking for Ethereum and </p>
                <p>Polygon. Lido lets users stake their tokens </p>
                <p>without locking tokens.</p>
              </div>
            </div>

            {aave.length > 0 && <>
              <div className="w-max rounded-tl-lg rounded-tr-lg mt-12 py-4 text-black bg-gray-400">
                AAVE
              </div>
              <div
                  className="grid grid-cols-4 items-center rounded-tr-lg rounded-bl-lg rounded-br-lg border border-gray-400">
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Asset</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Chain</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Price</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Total Amount Staked</span>


                {aave.map((item, index) => (<>
                      <div>
                        <p className="text-muted-foreground px-4 pt-2 text-sm">{item.contract_ticker_symbol}</p>
                        <p className="text-white px-4 text-xl pb-2">{item.contract_name}</p>
                      </div>
                      <span className="content-center flex justify-center px-4 py-2">
                        <Link className="" target="_blank"
                              href={`https://etherscan.io/address/${item.contract_address}`}>
                         <Image src="/static/eth.svg" className="" width={30} height={30}/>
                        </Link>
                      </span>
                      <span className="text-center px-4 py-2">{parseFloat(item.quote_rate).toFixed(4)}</span>
                      <span className="text-center px-4 py-2">{parseFloat(item.quote).toFixed(4)}</span>
                    </>
                ))}
              </div>
            </>}

            {compound.length > 0 && <>
              <div className="w-max rounded-tl-lg rounded-tr-lg mt-12 px-12 py-4 text-black bg-gray-400">
                COMPOUND
              </div>
              <div
                  className="grid grid-cols-4 items-center rounded-tr-lg rounded-bl-lg rounded-br-lg border border-gray-400">
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Asset</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Chain</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Price</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Total Amount Staked</span>


                {compound.map((item, index) => (<>
                      <div>
                        <p className="text-muted-foreground px-4 pt-2 text-sm">{item.contract_ticker_symbol}</p>
                        <p className="text-white px-4 text-xl pb-2">{item.contract_name}</p>
                      </div>
                      <span className="content-center flex justify-center px-4 py-2">
                        <Link className="" target="_blank"
                              href={`https://etherscan.io/address/${item.contract_address}`}>
                         <Image src="/static/eth.svg" className="" width={30} height={30}/>
                        </Link>
                      </span>
                      <span
                          className="text-center px-4 py-2">{parseFloat(item.quote_rate > 0 ? item.quote_rate : item.debt_quote_rate).toFixed(4)}</span>
                      <span
                          className="text-center px-4 py-2">{parseFloat(item.quote > 0 ? item.quote : item.debt_quote).toFixed(4)}</span>
                    </>
                ))}
              </div>
            </>}

            {lido.length > 0 && <>
              <div className="w-max rounded-tl-lg rounded-tr-lg mt-12 px-12 py-4 text-black bg-gray-400">
                LIDO
              </div>
              <div
                  className="grid grid-cols-4 items-center rounded-tr-lg rounded-bl-lg rounded-br-lg border border-gray-400">
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Asset</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Chain</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Price</span>
                <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Total Amount Staked</span>


                {lido.map((item, index) => (<>
                      <div>
                        <p className="text-muted-foreground px-4 pt-2 text-sm">{item.contract_ticker_symbol}</p>
                        <p className="text-white px-4 text-xl pb-2">{item.contract_name}</p>
                      </div>
                      <span className="content-center flex justify-center px-4 py-2">
                        <Link className="" target="_blank"
                              href={`https://etherscan.io/address/${item.contract_address}`}>
                         <Image src="/static/eth.svg" className="" width={30} height={30}/>
                        </Link>
                      </span>
                      <span className="text-center px-4 py-2">{parseFloat(item.quote_rate).toFixed(4)}</span>
                      <span className="text-center px-4 py-2">{item.balance}</span>
                    </>
                ))}
              </div>
            </>}

          </div>
        <SocialLinkBar/>
        </div>

      </>


  );
}

