let response = {
  get body() {
    return this._body // get 时返回body该方法
  },
  set body(value) {
    this.res.statusCode = 200
    this._body = value // set修改时先保存该方法
  }
}

module.exports = response