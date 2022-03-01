/* eslint-disable no-underscore-dangle */
module.exports = class Interface {
  constructor(id) {
    this._id = id;
  }

  get createdAt() {
    return Math.floor(this.id / 4194304) + 14200704e5;
  }
};
