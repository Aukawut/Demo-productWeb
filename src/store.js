import { create } from "zustand"

export const useLanguageStore = create((set) => ({
  language: "TH",
  changeL: () =>
    set((state) => ({
      language:
        state.language == "TH"
          ? (state.language = "CHN")
          : (state.language = "TH"),
    })),
}))
