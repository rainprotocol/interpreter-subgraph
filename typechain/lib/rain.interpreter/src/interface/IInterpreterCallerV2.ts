/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface IInterpreterCallerV2Interface extends utils.Interface {
  functions: {};

  events: {
    "Context(address,uint256[][])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Context"): EventFragment;
}

export interface ContextEventObject {
  sender: string;
  context: BigNumber[][];
}
export type ContextEvent = TypedEvent<
  [string, BigNumber[][]],
  ContextEventObject
>;

export type ContextEventFilter = TypedEventFilter<ContextEvent>;

export interface IInterpreterCallerV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IInterpreterCallerV2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "Context(address,uint256[][])"(
      sender?: null,
      context?: null
    ): ContextEventFilter;
    Context(sender?: null, context?: null): ContextEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}