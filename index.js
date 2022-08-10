function receivesAFunction(callback) {
    callback();
    return;
  }
  
  function returnsANamedFunction() {
    return function namedFn() {
      console.log(`a named function`);
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => console.log(`anonymous function`);
  }