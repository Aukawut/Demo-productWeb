import { create } from "zustand"

export const useLanguageStore = create((set) => ({
  language: localStorage.getItem("L"),
  changeL: () =>
    set((state) => ({
      language:
        state.language == "TH"
          ? (state.language = "CHN")
          : (state.language = "TH"),
    })),
}))
