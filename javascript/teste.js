class Singleton {

  constructor() {
    // const _instance = false;
    if(!Singleton._instance) {
      Singleton._instance = this;
    }

    return Singleton._instance
  }

  static getInstance() {
    return this._instance
  }
}

