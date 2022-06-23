import Caver from "caver-js";
import {atom} from "recoil";

// interface Klaytn {
//   on: (eventName: string, callback: () => void) => void;
//   enable: () => Promise<Array<string>>;
//   selectedAddress: string;
//   networkVersion: number;
//   publicConfigStore: Store;
// }

// interface State {
//   isEnabled: boolean;
//   isUnlocked: boolean;
//   networkVersion: number;
//   onboardingcomplete: boolean;
// }

// interface Store {
//   subscribe: (callback: () => void) => void;
//   getState: () => State;
// }

// declare global {
//   interface Window {
//     klaytn: any;
//   }
// }

// let kly;
// if (typeof window !== "undefined") {
//   kly = window.klaytn;
// }

// const caverState = atom<any>({
//   key: "caver",
//   default: kly,
// });

const showSignInModalState = atom<boolean>({
  key: "signInKey",
  default: false,
});

const showConnectWalletModalState = atom<boolean>({
  key: "connectWalletKey",
  default: false,
});

const showCategoryModalState = atom<boolean>({
  key: "showCategoryModalState",
  default: false,
});

const isLoginedState = atom<boolean>({
  key: "loginKey",
  default: false,
});

const myAddressState = atom<string>({
  key: "myAddressKey",
  // default: "0xD216a6beBdDECa9b862c1423b31CFA5188E5cB3C",
  default: "0x00",
});

const myBalanceState = atom<string>({
  key: "myBalanceKey",
  default: "0",
});

const qrValueState = atom<string>({
  key: "qrcodeKey",
  default: "DEFAULT",
});

interface IModalPropsState {
  title: string;
  onConfirm: Function;
}

const modalPropsState = atom<IModalPropsState>({
  key: "modalPropsKey",
  default: {title: "MODAL", onConfirm: () => {}},
});

const subMenuState = atom<boolean>({
  key: "subMenuState",
  default: false,
});

const VerifyModalState = atom<boolean>({
  key: "verifyModalState",
  default: false,
});

const loginPlatformState = atom<string>({
  key: "loginPlatformState",
  default: "None",
});

export {
  showSignInModalState,
  showConnectWalletModalState,
  showCategoryModalState,
  isLoginedState,
  myAddressState,
  myBalanceState,
  qrValueState,
  modalPropsState,
  subMenuState,
  VerifyModalState,
  loginPlatformState,
};
