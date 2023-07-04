/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  RedeemableERC20ClaimEscrowWrapper,
  RedeemableERC20ClaimEscrowWrapperInterface,
} from "../../../../../contracts/test/escrow/RedeemableERC20ClaimEscrow/RedeemableERC20ClaimEscrowWrapper";

const _abi = [
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
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
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
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PendingDeposit",
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
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Sweep",
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
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Undeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "depositPending",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trust_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositor_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256",
      },
    ],
    name: "getDeposits",
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
        name: "trust_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositor_",
        type: "address",
      },
    ],
    name: "getPendingDeposits",
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
        name: "trust_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256",
      },
    ],
    name: "getTotalDeposits",
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
        name: "trust_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "withdrawer_",
        type: "address",
      },
    ],
    name: "getWithdrawals",
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
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositor_",
        type: "address",
      },
    ],
    name: "sweepPending",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "undeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061190f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80637e56cda8116100765780639bfeb1191161005b5780639bfeb1191461012e578063d9caed121461017e578063fa5839ab1461019157600080fd5b80637e56cda8146101085780638340f5491461011b57600080fd5b8063248a8572146100a85780634facc0b4146100bd5780635fc85b7d146100e257806370a9eeee146100f5575b600080fd5b6100bb6100b63660046115dc565b6101ea565b005b6100d06100cb366004611622565b610479565b60405190815260200160405180910390f35b6100bb6100f0366004611663565b6104bc565b6100d06101033660046116ae565b610586565b6100bb610116366004611622565b6105d4565b6100bb610129366004611622565b6107a9565b6100d061013c366004611663565b73ffffffffffffffffffffffffffffffffffffffff92831660009081526004602090815260408083209486168352938152838220929094168152925290205490565b6100bb61018c366004611622565b6107dc565b6100d061019f3660046116ff565b73ffffffffffffffffffffffffffffffffffffffff93841660009081526003602090815260408083209587168352948152848220938252928352838120919094168452905290205490565b60016101f585610ace565b600281111561020657610206611752565b14610272576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4e4f545f4641494c00000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600081116102dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5a45524f5f414d4f554e540000000000000000000000000000000000000000006044820152606401610269565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260056020908152604080832093871683529281528282203383528152828220858352905290812080548392906103309084906117b0565b909155505073ffffffffffffffffffffffffffffffffffffffff80851660009081526006602090815260408083209387168352928152828220858352905290812080548392906103819084906117b0565b909155505073ffffffffffffffffffffffffffffffffffffffff80851660009081526007602090815260408083209387168352928152828220858352905290812080548392906103d29084906117b0565b909155507f6b7ec092a62c7445c02d988d0c1c01a2da7d8778d62a625accdf18de5efca3b69050338561040481610c70565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815292841660208401529083169082015290851660608201526080810184905260a0810183905260c00160405180910390a161047373ffffffffffffffffffffffffffffffffffffffff84163383610deb565b50505050565b73ffffffffffffffffffffffffffffffffffffffff80841660009081526006602090815260408083209386168352928152828220848352905220545b9392505050565b73ffffffffffffffffffffffffffffffffffffffff838116600090815260046020908152604080832086851684528252808320938516835292905290812080549190557ff1c3618947be77b086aba11baa9d1e07d2df15de2c0e620f295ffd4ddd550e1f33838661052c81610c70565b6040805173ffffffffffffffffffffffffffffffffffffffff958616815293851660208501529184168383015283166060830152918616608082015260a0810184905290519081900360c00190a161047384848484610ebf565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600560209081526040808320878516845282528083209386168352928152828220848352905220545b949350505050565b6000811161063e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f4445504f53495400000000000000000000000000000000000000006044820152606401610269565b600061064984610ace565b600281111561065a5761065a611752565b146106c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e4f545f50454e44494e470000000000000000000000000000000000000000006044820152606401610269565b73ffffffffffffffffffffffffffffffffffffffff808416600090815260046020908152604080832093861683529281528282203383529052908120805483929061070d9084906117c3565b909155506000905061071e84610c70565b6040805133815273ffffffffffffffffffffffffffffffffffffffff878116602083015283811682840152861660608201526080810185905290519192507feabec77378d088e5df884cdb5fb2b55858355c2f6284148d4a30177eb54b52e6919081900360a00190a161047373ffffffffffffffffffffffffffffffffffffffff841633308561120f565b6107b583833384610ebf565b6107d773ffffffffffffffffffffffffffffffffffffffff831633308461120f565b505050565b60026107e784610ace565b60028111156107f8576107f8611752565b1461085f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e4f545f535543434553530000000000000000000000000000000000000000006044820152606401610269565b73ffffffffffffffffffffffffffffffffffffffff8381166000818152600660209081526040808320948716808452948252808320868452825280832054938352600382528083209483529381528382208583528152838220338352905291822080549082905590916108d186610c70565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015290915060009061097b9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610945573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096991906117d6565b8661097486886117b0565b919061126d565b73ffffffffffffffffffffffffffffffffffffffff8089166000908152600760209081526040808320938b1683529281528282208983529052908120805492935083929091906109cc9084906117b0565b909155505080610a38576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f5a45524f5f5749544844524157000000000000000000000000000000000000006044820152606401610269565b6040805133815273ffffffffffffffffffffffffffffffffffffffff898116602083015284811682840152881660608201526080810187905260a0810183905290517f16976c9767f5174e5289de7594402a1e174ebd2a9622aa3ebafd14e5af4e2ab99181900360c00190a1610ac573ffffffffffffffffffffffffffffffffffffffff87163383610deb565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604081205460ff1681816002811115610b0a57610b0a611752565b1115610b165792915050565b60008373ffffffffffffffffffffffffffffffffffffffff1663f9020e336040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8791906117ef565b90506002816003811115610b9d57610b9d611752565b03610bf75750505073ffffffffffffffffffffffffffffffffffffffff16600090815260026020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168217905590565b6003816003811115610c0b57610c0b611752565b03610c665750505073ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915590565b5060009392505050565b73ffffffffffffffffffffffffffffffffffffffff80821660009081526001602052604081205490911680610de55760008373ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d109190611810565b905073ffffffffffffffffffffffffffffffffffffffff8116610d8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f305f544f4b454e000000000000000000000000000000000000000000000000006044820152606401610269565b73ffffffffffffffffffffffffffffffffffffffff848116600090815260016020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001691831691909117905590505b92915050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107d79084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261133a565b6000610eca85610ace565b6002811115610edb57610edb611752565b11610f42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50454e44494e47000000000000000000000000000000000000000000000000006044820152606401610269565b60008111610fac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f4445504f53495400000000000000000000000000000000000000006044820152606401610269565b6000610fb785610c70565b905060008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611006573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061102a91906117d6565b905060008111611096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5a45524f5f535550504c590000000000000000000000000000000000000000006044820152606401610269565b73ffffffffffffffffffffffffffffffffffffffff8087166000908152600560209081526040808320898516845282528083209388168352928152828220848352905290812080548592906110ec9084906117c3565b909155505073ffffffffffffffffffffffffffffffffffffffff808716600090815260066020908152604080832093891683529281528282208483529052908120805485929061113d9084906117c3565b909155505073ffffffffffffffffffffffffffffffffffffffff808716600090815260076020908152604080832093891683529281528282208483529052908120805485929061118e9084906117c3565b90915550506040805133815273ffffffffffffffffffffffffffffffffffffffff86811660208301528881168284015284811660608301528716608082015260a0810183905260c0810185905290517f53591a88ac47bfe3130a7de575c6a6a8c22f7604cbba61b8390fbff773ed40499181900360e00190a1505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526104739085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610e3d565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff858709858702925082811083820303915050806000036112c5578382816112bb576112bb61182d565b04925050506104b5565b8084116112d157600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b600061139c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114469092919063ffffffff16565b8051909150156107d757808060200190518101906113ba919061185c565b6107d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610269565b60606105cc8484600085856000808673ffffffffffffffffffffffffffffffffffffffff16858760405161147a91906118a2565b60006040518083038185875af1925050503d80600081146114b7576040519150601f19603f3d011682016040523d82523d6000602084013e6114bc565b606091505b50915091506114cd878383876114d8565b979650505050505050565b6060831561156e5782516000036115675773ffffffffffffffffffffffffffffffffffffffff85163b611567576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610269565b50816105cc565b6105cc83838151156115835781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026991906118be565b73ffffffffffffffffffffffffffffffffffffffff811681146115d957600080fd5b50565b600080600080608085870312156115f257600080fd5b84356115fd816115b7565b9350602085013561160d816115b7565b93969395505050506040820135916060013590565b60008060006060848603121561163757600080fd5b8335611642816115b7565b92506020840135611652816115b7565b929592945050506040919091013590565b60008060006060848603121561167857600080fd5b8335611683816115b7565b92506020840135611693816115b7565b915060408401356116a3816115b7565b809150509250925092565b600080600080608085870312156116c457600080fd5b84356116cf816115b7565b935060208501356116df816115b7565b925060408501356116ef816115b7565b9396929550929360600135925050565b6000806000806080858703121561171557600080fd5b8435611720816115b7565b93506020850135611730816115b7565b9250604085013591506060850135611747816115b7565b939692955090935050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610de557610de5611781565b80820180821115610de557610de5611781565b6000602082840312156117e857600080fd5b5051919050565b60006020828403121561180157600080fd5b8151600481106104b557600080fd5b60006020828403121561182257600080fd5b81516104b5816115b7565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006020828403121561186e57600080fd5b815180151581146104b557600080fd5b60005b83811015611899578181015183820152602001611881565b50506000910152565b600082516118b481846020870161187e565b9190910192915050565b60208152600082518060208401526118dd81604085016020870161187e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056";

type RedeemableERC20ClaimEscrowWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RedeemableERC20ClaimEscrowWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RedeemableERC20ClaimEscrowWrapper__factory extends ContractFactory {
  constructor(...args: RedeemableERC20ClaimEscrowWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RedeemableERC20ClaimEscrowWrapper> {
    return super.deploy(
      overrides || {}
    ) as Promise<RedeemableERC20ClaimEscrowWrapper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RedeemableERC20ClaimEscrowWrapper {
    return super.attach(address) as RedeemableERC20ClaimEscrowWrapper;
  }
  override connect(signer: Signer): RedeemableERC20ClaimEscrowWrapper__factory {
    return super.connect(signer) as RedeemableERC20ClaimEscrowWrapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedeemableERC20ClaimEscrowWrapperInterface {
    return new utils.Interface(
      _abi
    ) as RedeemableERC20ClaimEscrowWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RedeemableERC20ClaimEscrowWrapper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RedeemableERC20ClaimEscrowWrapper;
  }
}
