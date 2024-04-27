"use client";

import { Component, useEffect, useState } from "react";
import { CovalentClient } from "@covalenthq/client-sdk";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// class TableFromArray extends Component {
//     renderTableData() {
//         return this.props.array.map((row, rowIndex) => {
//             const rows = [];
//             for (let i = 0; i < row.length; i += 4) {
//                 rows.push(
//                     <tr key={`${rowIndex}_${i}`}>
//                         {row.slice(i, i + 4).map((cell, cellIndex) => (
//                             <td key={`${rowIndex}_${i}_${cellIndex}`}>
//                                 <p>{row}</p>
//                             </td>
//                         ))}
//                     </tr>
//                 );
//             }
//             return rows;
//         });
//     }
//
//     render() {
//         return (
//             <table>
//                 <tbody>
//                 {this.renderTableData()}
//                 </tbody>
//             </table>
//         );
//     }
// }


export default function Dashboard() {
  const client = new CovalentClient("cqt_rQq7bWWFXtXppQXD8BbphKrdpJcQ")
  const [walletAddress, setWalletAddress] = useState('');
  const [walletAddressSubmit, setWalletAddressSubmit] = useState('');
  const [countToken, setCountToken] = useState('');
  const [tokens, setTokens] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [myWallet, setMyWallet] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log(images)
  }, [images])

  useEffect(() => {
    console.log("myWallet: ", myWallet);
  }, [myWallet]);


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
    setShowAll(false)
    let resp = await client.BalanceService
      .getTokenBalancesForWalletAddress("scroll-mainnet", walletAddress);
    let totalBalance = 0;
    console.log(resp)
    if (resp === null || resp.data === null || resp.data.items === null) return;
    let items = resp.data.items.filter(item => item.pretty_quote !== "$0.00")
    setCountToken(items.length + ' Tokens')
    setTokens(items)
    console.log(items)
    resp.data.items.forEach(item => {
      totalBalance += parseFloat(item.pretty_quote.replace("$", ""))
    })
    setWalletAddressSubmit('$' + totalBalance.toFixed(2))
    console.log(walletAddressSubmit)
    let trns = []
    try {
      for await (const trans of client.TransactionService.getAllTransactionsForAddress("scroll-mainnet", walletAddress)) {
        if (trans.to_address !== null) trns.push(trans);
      }
    } catch (error) {
      console.log(error.message);
    }

    const nft =
      await client.NftService
        .getNftsForAddress("eth-mainnet",
          walletAddress);
    console.log(nft)
    console.log(nft.data)
    console.log(nft.data.items)
    let nfts = [];
    nft.data.items.forEach(item => {
      nfts.push(item)
    })
    console.log("nfts " + nfts)
    setImages(nfts)
    console.log(images)

    console.log(trns)
    setTransactions(trns)
    setWalletAddress('')
  }

  return (
    <div className="bg-black min-h-screen mx-auto">
      <div className="mt-16 p-8 rounded-lg  border-gray-400 border-2 justify-between flex">
        <div className="flex">
          <Input type="text" placeholder="Wallet adress..."
            value={walletAddress}
            onChange={handleChange}
            className="border rounded-md p-2 ml-2" />
          <button className="bg-white text-black px-4 py-2 rounded-md ml-4"
            onClick={handleSubmit}>Analyze
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
      {tokens.length > 0 &&
        <>
          <div className="w-max  rounded-tl-lg rounded-tr-lg mt-12 px-12 py-4 text-black bg-gray-400">
            Holdings
          </div>
          <div className="grid grid-cols-5 items-center rounded-tr-lg rounded-bl-lg rounded-br-lg border border-gray-400">
            <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Token</span>
            <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Chain</span>
            <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Price</span>
            <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">Balance</span>
            <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Value</span>

            {tokens.map((item, index) => (
              <>
                <div>
                  <p className="text-muted-foreground px-4 pt-2 text-sm">{item.contract_ticker_symbol}</p>
                  <p className="text-white px-4 text-xl pb-2">{item.contract_display_name}</p>
                </div>
                <span className="content-center flex justify-center px-4 py-2">
                  <Link className="" target="_blank"
                    href={`https://scrollscan.com/address/${item.contract_address}`}>
                    <Image src="/static/scroll.svg" className="" width={30} height={30} />
                  </Link>
                </span>
                <span className="text-center px-4 py-2">${item.quote_rate}</span>
                <span className="text-center px-4 py-2">
                  {(parseFloat(item.pretty_quote.replace("$", "")) / item.quote_rate).toFixed(4)} {item.contract_ticker_symbol}
                </span>
                <span className="text-center px-4 py-2">{item.pretty_quote}</span>
              </>
            ))}
          </div>
        </>
      }

      {/*{images.length > 0 && <div>*/}
      {/*    <table className="min-w-full text-white border-collapse border border-gray-300">*/}
      {/*        <thead>*/}
      {/*        <tr>*/}
      {/*            <th className="border border-gray-300 px-4 py-2">Nft</th>*/}
      {/*        </tr>*/}
      {/*        </thead>*/}
      {/*        <tbody>*/}
      {/*        {tokens.map((item, index) => (*/}
      {/*            <tr key={index}>*/}
      {/*                <Image src={item.nft_data.external_data.image_256} alt=""></Image>*/}
      {/*            </tr>*/}
      {/*            ))}*/}
      {/*        </tbody>*/}
      {/*    </table>*/}
      {/*</div>}*/}


      {transactions.length > 0 &&
        <>
          <div className="w-max  rounded-tl-lg rounded-tr-lg mt-12 px-12 py-4 text-black bg-gray-400">
            Recent Activity
          </div>
          <div className="grid grid-cols-5 items-center rounded-tr-lg  border border-gray-400">
            <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Hash</span>
            <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">From</span>
            <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Out</span>
            <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b ">In/Out</span>
            <span className="px-4 py-7 text-muted-foreground text-center border-gray-400 border-b">Value</span>

            {transactions.slice(0, showAll ? transactions.length : 5).map((item, index) => (
              <>
                <div>

                  <Link className="text-center px-4 pt-2 text-gray-400" target="_blank" href={`https://scrollscan.com/tx/${item.tx_hash}`}>
                    {item.tx_hash.substring(0, 4) + '...' + item.tx_hash.substring(item.tx_hash.length - 4)}</Link>
                </div>
                <span className="text-center px-4 py-2">
                  {item.from_address.substring(0, 4) + '...' + item.from_address.substring(item.from_address.length - 4)}
                </span>
                {/* <span className="text-center px-4 py-2">${item.quote_rate}</span> */}
                {/* <span className="text-center px-4 py-2"> */}
                {/*   {(parseFloat(item.pretty_quote.replace("$", "")) / item.quote_rate).toFixed(4)} {item.contract_ticker_symbol} */}
                {/* </span> */}

                <span className="text-center px-4 py-2">
                  {item.to_address.substring(0, 4) + '...' + item.to_address.substring(item.to_address.length - 4)}
                </span>
                <Badge className="w-max bg-gray-400">
                  {myWallet === item.from_address ? 'IN' : 'OUT'}
                </Badge>
                <span className="text-center px-4 py-2">{item.pretty_value_quote}</span>
              </>
            ))}
          </div>
          {!showAll &&
            <div className="flex justify-center border-b border-r border-l rounded-br-lg border-gray-400 rounded-bl-lg">
              <button onClick={handleShowAll}
                className=" w-full text-white font-bold text-center py-2 px-4rounded hover:bg-gray-400/10  transition-colors">View all txs</button>
            </div>
          }
        </>
      }

    </div >


  );
}

