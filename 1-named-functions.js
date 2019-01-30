{ console.log('%c named functions', 'font-weight:bold');

console.log(`
the name in a named function is available inside the function
  even if the function is assigned to a new variable at global scope

reusing the function's name at global scope breaks things
  the function's name no longer calls itself within itself
  
`);

  function recurse(a) {
    if (a === false) {
      return 'base case';
    } else {
      return recurse(false);
    }
  };
  console.log(recurse.toString());
  console.log('recurse(true) ->', recurse(true));


console.log('%c\n  the function can be assigned to new variables', 'font-style:italic')

  const other_var = recurse;
  console.log('other_var:', other_var.toString());

  try {
    console.log('other_var ->', other_var(true));
  } catch(err) {
    console.log('other_var ->');
    console.error(err, '\n');
  }

console.log('%c\n  using the name for a global variable overrides the internal name globally ...', 'font-style:italic')

  recurse = function(arg) { return arg };
  console.log('recurse:', recurse.toString());
  try {
    console.log('recurse(true) ->', recurse(true));
  } catch(err) {
    console.log('recurse(true) ->');
    console.error(err, '\n');
  }

console.log('%c\n  ... but not within the function', 'font-style:italic')

  console.log('other_var:', other_var.toString());
  try {
    console.log('other_var ->', other_var(true));
  } catch(err) {
    console.log('other_var ->');
    console.error(err, '\n');
  }



}