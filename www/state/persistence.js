import * as localForage from "localforage";

export const appStore =
  typeof window === "undefined"
    ? null
    : localForage.createInstance({
        user: { name: "", emai: "", tokenValid: false },
        cart: [],
      });

const driver = [
  localForage.INDEXEDDB,
  localForage.LOCALSTORAGE,
  localForage.WEBSQL,
];

if (appStore) {
  appStore.config({
    driver,
    name: "App Sorage",
    version: 1.0,
    storeName: "app_storage",
    description: "Persisted app storage",
  });
}
