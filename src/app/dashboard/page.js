"use client";

import { Component, useEffect, useState } from "react";
import { CovalentClient } from "@covalenthq/client-sdk";
import Image from "next/image";
import Link from "next/link";

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
      <div className="mt-16 p-8 rounded-md ml-32 mr-32 border-gray-400 border-2 justify-between flex">
        <div>
          <input type="text" placeholder="Wallet adress..."
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
      {tokens.length > 0 && <div className="overflow-x-auto mt-16 ml-32 mr-32">
        <table className="min-w-full text-white border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Token</th>
              <th className="border border-gray-300 px-4 py-2">Chain</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Balance</th>
              <th className="border border-gray-300 px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((item, index) => (
              <tr key={index}>
                <td className="border text-center text-white px-4 py-2">{item.contract_ticker_symbol}</td>
                <td className="border content-center justify-items-center justify-center px-4 py-2">
                  <Link className="" target="_blank"
                    href={`https://scrollscan.com/address/${item.contract_address}`}>
                    <Image src="/static/scroll.svg" className="" width={30} height={30} />
                  </Link>
                </td>
                <td className="border text-center px-4 py-2">${item.quote_rate}</td>
                <td className="border text-center px-4 py-2">
                  {parseFloat(item.pretty_quote.replace("$", "")) / item.quote_rate} {item.contract_ticker_symbol}
                </td>
                <td className="border text-center px-4 py-2">{item.pretty_quote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}

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

      {transactions.length > 0 && <div className="overflow-x-auto mt-16 ml-32 mr-32">
        <table className="min-w-full text-white border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border-t border-b border-gray-300 text-gray-400 px-4 py-2">Hash</th>
              <th className="border-t border-b border-gray-300 text-gray-400 px-4 py-2">From</th>
              <th className="border-t border-b border-gray-300 text-gray-400 px-4 py-2">Out</th>
              <th className="border-t border-b border-gray-300 text-gray-400 px-4 py-2">In/Out</th>
              <th className="border-t border-b border-gray-300 text-gray-400 px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, showAll ? transactions.length : 5).map((item, index) => (
              <tr key={index}>
                <td className="border-t border-b border-gray-300 text-center text-gray-400 px-4 py-2">
                  <Link target="_blank" href={`https://scrollscan.com/tx/${item.tx_hash}`}>
                    {item.tx_hash.substring(0, 4) + '...' + item.tx_hash.substring(item.tx_hash.length - 4)}
                  </Link>
                </td>
                <td className="border-t border-b border-gray-300 text-center text-white px-4 py-2">
                  {item.from_address.substring(0, 4) + '...' + item.from_address.substring(item.from_address.length - 4)}
                </td>
                <td className="border-t border-b border-gray-300 text-center px-4 py-2">
                  {item.to_address.substring(0, 4) + '...' + item.to_address.substring(item.to_address.length - 4)}
                </td>
                <td className="border-t border-b border-gray-300 text-center px-4 py-2">
                  {myWallet === item.from_address ? (
                    <span className="bg-gray-400 rounded px-2 text-black p-1">{"In"}</span>
                  ) : (
                    <span className="bg-gray-400 rounded px-2 text-black p-1">{"Out"}</span>
                  )}                            </td>
                <td className="border-t border-b border-gray-300 text-center px-4 py-2">{item.pretty_value_quote}</td>
              </tr>
            ))}
            {!showAll &&
              <div className="flex justify-center mt-4">
                <button onClick={handleShowAll}
                  className="mt-4 text-white font-bold text-center py-2 px-4rounded">View all txs</button>
              </div>
            }
          </tbody>
        </table>
      </div>}
    </div>


  );
}

