'use strict';

const generator = require("../app/readerImprover");
const industrialProtocol = require("../app/industrialProtocol");


describe("Reader improver", () => {
  const callBackTest = (data) => {
    console.log('Data: ', data)
  }

  fit("Should call once original reader", () => {
    SpyOn(industrialProtocol, 'read');

    const tuples = [
      getTuple(3, 5, callBackTest),
      getTuple(5, 7, callBackTest)
    ];

    generator.getData(tuples);

    expect(industrialProtocol.read).toHaveBeenCalledTimes(1);
  });



  function getTuple(start, length, callback) {
    return {
      start: start,
      length: length,
      callback: callback
    }
  }
});