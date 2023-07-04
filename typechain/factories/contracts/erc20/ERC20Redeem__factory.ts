/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20Redeem,
  ERC20RedeemInterface,
} from "../../../contracts/erc20/ERC20Redeem";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
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
        internalType: "address",
        name: "treasuryAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
    ],
    name: "Redeem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "TreasuryAsset",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newTreasuryAsset_",
        type: "address",
      },
    ],
    name: "newTreasuryAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d97806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806342966c681161008c57806395d89b411161006657806395d89b41146101e8578063a457c2d7146101f0578063a9059cbb14610203578063dd62ed3e1461021657600080fd5b806342966c681461018c57806370a082311461019f57806379cc6790146101d557600080fd5b806318160ddd116100c857806318160ddd1461014557806323b872dd14610157578063313ce5671461016a578063395093511461017957600080fd5b8063038ef03e146100ef57806306fdde0314610104578063095ea7b314610122575b600080fd5b6101026100fd366004610bca565b61025c565b005b61010c6102ad565b6040516101199190610bec565b60405180910390f35b610135610130366004610c58565b61033f565b6040519015158152602001610119565b6035545b604051908152602001610119565b610135610165366004610c82565b610359565b60405160128152602001610119565b610135610187366004610c58565b61037d565b61010261019a366004610cbe565b6103c9565b6101496101ad366004610bca565b73ffffffffffffffffffffffffffffffffffffffff1660009081526033602052604090205490565b6101026101e3366004610c58565b6103d6565b61010c6103ef565b6101356101fe366004610c58565b6103fe565b610135610211366004610c58565b6104d4565b610149610224366004610cd7565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260346020908152604080832093909416825291909152205490565b6040805133815273ffffffffffffffffffffffffffffffffffffffff831660208201527f2ab01e95cf254bfe2f3e7e2a70a40262c15f0c753a586568529e3b109c567d56910160405180910390a150565b6060603680546102bc90610d0a565b80601f01602080910402602001604051908101604052809291908181526020018280546102e890610d0a565b80156103355780601f1061030a57610100808354040283529160200191610335565b820191906000526020600020905b81548152906001019060200180831161031857829003601f168201915b5050505050905090565b60003361034d8185856104e2565b60019150505b92915050565b600033610367858285610696565b61037285858561076d565b506001949350505050565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061034d90829086906103c4908790610d5d565b6104e2565b6103d333826109e3565b50565b6103e1823383610696565b6103eb82826109e3565b5050565b6060603780546102bc90610d0a565b33600081815260346020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156104c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61037282868684036104e2565b60003361034d81858561076d565b73ffffffffffffffffffffffffffffffffffffffff8316610584576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016104be565b73ffffffffffffffffffffffffffffffffffffffff8216610627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016104be565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152603460209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610767578181101561075a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104be565b61076784848484036104e2565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610810576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016104be565b73ffffffffffffffffffffffffffffffffffffffff82166108b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016104be565b73ffffffffffffffffffffffffffffffffffffffff831660009081526033602052604090205481811015610969576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016104be565b73ffffffffffffffffffffffffffffffffffffffff80851660008181526033602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906109d69086815260200190565b60405180910390a3610767565b73ffffffffffffffffffffffffffffffffffffffff8216610a86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016104be565b73ffffffffffffffffffffffffffffffffffffffff821660009081526033602052604090205481811015610b3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016104be565b73ffffffffffffffffffffffffffffffffffffffff831660008181526033602090815260408083208686039055603580548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610689565b803573ffffffffffffffffffffffffffffffffffffffff81168114610bc557600080fd5b919050565b600060208284031215610bdc57600080fd5b610be582610ba1565b9392505050565b600060208083528351808285015260005b81811015610c1957858101830151858201604001528201610bfd565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b60008060408385031215610c6b57600080fd5b610c7483610ba1565b946020939093013593505050565b600080600060608486031215610c9757600080fd5b610ca084610ba1565b9250610cae60208501610ba1565b9150604084013590509250925092565b600060208284031215610cd057600080fd5b5035919050565b60008060408385031215610cea57600080fd5b610cf383610ba1565b9150610d0160208401610ba1565b90509250929050565b600181811c90821680610d1e57607f821691505b602082108103610d57577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b80820180821115610353577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd";

type ERC20RedeemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20RedeemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Redeem__factory extends ContractFactory {
  constructor(...args: ERC20RedeemConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Redeem> {
    return super.deploy(overrides || {}) as Promise<ERC20Redeem>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20Redeem {
    return super.attach(address) as ERC20Redeem;
  }
  override connect(signer: Signer): ERC20Redeem__factory {
    return super.connect(signer) as ERC20Redeem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20RedeemInterface {
    return new utils.Interface(_abi) as ERC20RedeemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Redeem {
    return new Contract(address, _abi, signerOrProvider) as ERC20Redeem;
  }
}
