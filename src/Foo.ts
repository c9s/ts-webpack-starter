import assign from "object-assign";

export default class Foo {

  private config: any;

  constructor(config) {
    this.config = assign({}, config);
  }

}
