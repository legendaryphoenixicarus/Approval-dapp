/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { BurnableToken } from "../BurnableToken";

export class BurnableToken__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BurnableToken {
    return new Contract(address, _abi, signerOrProvider) as BurnableToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];