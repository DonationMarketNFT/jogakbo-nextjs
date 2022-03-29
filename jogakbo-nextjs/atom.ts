import { atom } from "recoil";

const showSignInModalState = atom<boolean>({
  key: "sign_in",
  default: false,
});

const showConnectWalletModalState = atom<boolean>({
  key: "connect_wallet",
  default: false,
});

const isLoginedState = atom<boolean>({
  key: "log_in",
  default: false,
});

const myAddressState = atom<string>({
  key: "my_address",
  // default: "0xD216a6beBdDECa9b862c1423b31CFA5188E5cB3C",
  default: "0x00",
});

const myBalanceState = atom<string>({
  key: "my_balance",
  default: "0",
});

const qrValueState = atom<string>({
  key: "qrcode",
  default: "DEFAULT",
});

interface IModalPropsState {
  title: string;
  onConfirm: Function;
}

const modalPropsState = atom<IModalPropsState>({
  key: "modal_props",
  default: { title: "MODAL", onConfirm: () => {} },
});

export {
  showSignInModalState,
  showConnectWalletModalState,
  isLoginedState,
  myAddressState,
  myBalanceState,
  qrValueState,
  modalPropsState,
};
