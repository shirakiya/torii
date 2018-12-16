export default class LocalStorage {

  constructor() {
    try {
      this.localStorage = window.localStorage;
    } catch (e) {
      this.localStorage = {};
    }
  }

  _enabled() {
    return Boolean(this.localStorage);
  }

  setItem(key, value) {
    const valueStr = JSON.stringify(value);
    if (this._enabled()) {
      this.localStorage.setItem(key, valueStr);
    }
  }

  getItem(key) {
    if (this._enabled()) {
      const item = this.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
      return item;
    }
  }
}
