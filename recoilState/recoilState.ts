import { atom } from "recoil";

export const testState = atom<boolean>({
    key:"testState",
    default:false
})