{ console.log('%c arrow functions', 'font-weight:bold');

console.log(`
arrow functions and anonymous functions are practically the same 
when thinking about recursive calls. 

the big differences between the two types of function are not
important for this use case

`);

  let recurse = (a) => {
    if (a === false) {
      return 'base case';
    } else {
      return recurse(false);
    }
  };
  console.log('recurse: ', recurse.toString());
  console.log('recurse(true) -> ', recurse(true));

console.log('%c\n  other functions can call the anonymous function', 'font-style:italic')
  
  let other_func = function() {return recurse(true) };
  console.log('other_func: ', other_func.toString());
  console.log('other_func() -> ', other_func());  


console.log('%c\n  the name can not be reused in global scope', 'font-style:italic')

console.log('%c\n     exhibit a:', 'font-style:italic');

  const other_var = recurse;
  recurse = 88943;
  console.log('recurse: ', recurse);
  try {
    console.log('recurse(true) -> ', recurse(true));
  } catch(err) {
    console.log('recurse(true) -> ');
    console.error(err, '\n');
  }

console.log('%c\n     exhibit b:', 'font-style:italic');

  console.log('other_func: ', other_func.toString());
  try {
    console.log('other_func() -> ', other_func());  
  } catch(err) {
    console.log('other_func() -> ');  
    console.error(err, '\n');
  }
}