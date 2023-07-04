/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  DeployerDiscoverableMetaV1,
  DeployerDiscoverableMetaV1Interface,
} from "../../../../../lib/rain.interpreter/src/abstract/DeployerDiscoverableMetaV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "unmeta",
        type: "bytes",
      },
    ],
    name: "NotRainMetaV1",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "expectedHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "actualHash",
        type: "bytes32",
      },
    ],
    name: "UnexpectedMetaHash",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "subject",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "meta",
        type: "bytes",
      },
    ],
    name: "MetaV1",
    type: "event",
  },
] as const;

export class DeployerDiscoverableMetaV1__factory {
  static readonly abi = _abi;
  static createInterface(): DeployerDiscoverableMetaV1Interface {
    return new utils.Interface(_abi) as DeployerDiscoverableMetaV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeployerDiscoverableMetaV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DeployerDiscoverableMetaV1;
  }
}
