import { defineStore } from "pinia";

interface AppStoreState {
  motto: string;
}

export const useAppStore = defineStore("app", {
  state(): AppStoreState {
    return {
      motto: "Hello Uni",
    };
  },
});
