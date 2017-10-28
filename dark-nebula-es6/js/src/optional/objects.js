alterContext = (fn, obj) => {
  return fn.bind(obj)();
  //.bind(obj), passes the obj to the function fn, as the this object.
};

alterObjects = (obj, greeting) => {
  obj.prototype.greeting = greeting;
  //.prototype adds attributes or functions to an object
};

iterate = (obj) => {
    let propertiesNames = Object.getOwnPropertyNames(obj);
    let propertiesValues = Object.values(obj);
    let results = [];
    for (i = 0; i < propertiesNames.length; i++) {
      results.push(`${propertiesNames[i]}` + ": " + `${propertiesValues[i]}`);
    }
    return results;
};
