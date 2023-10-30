import { appStore } from "@/app/appStore";

declare global {
  interface Window {
    store: typeof appStore;
  }
}
