const localStorageMock = (function () {
  let store: { [key: number]: string } = {};

  return {
    getItem(key: number) {
      return store[key];
    },

    setItem(key: number, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: number) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const setLocalStorage = (id: string, data: string) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

export default setLocalStorage;
