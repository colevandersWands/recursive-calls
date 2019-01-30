{ console.log('%c variables referencing named functions', 'font-weight:bold');

  let public_name = function private_name(a) {
    if (a === false) {
      return 'base case';
    } else {
      return private_name(false);
    }
  };
  console.log('public_name: ', public_name.toString());
  console.log('public_name(true) ->', public_name(true));
 

console.log('%c\n  private name is not available in global scope', 'font-style:italic')

  try {
    console.log('private_name(true) ->', private_name(true));
  } catch(err) {
    console.log('private_name(true) ->');
    console.error(err, '\n');
  }

console.log('%c\n  private name still works when public var is reassigned', 'font-style:italic')

  const other_var = public_name;
  console.log('other_var: ', other_var.toString());
  public_name = 88943;
  console.log('public_name: ', public_name.toString())

  try {
    console.log('other_var(true) ->', other_var(true));
  } catch(err) {
    console.log('other_var(true) ->');
    console.error(err, '\n');
  };


console.log('%c\n  but the public var longer references the function when its reassigned', 'font-style:italic')
  
  console.log('public_name: ', public_name.toString())
  try {
    console.log('public_name(true) ->', public_name(true));
  } catch(err) {
    console.log('public_name(true) ->');
    console.error(err, '\n');
  };


console.log('%c\n  the private name can be reused at the global scope and still be available internally', 'font-style:italic')

  const private_name = 88943;
  console.log('private_name: ', private_name.toString());
  console.log('other_var: ', other_var.toString());

  try {
    console.log('other_var(true) ->', other_var(true));
  } catch(err) {
    console.log('other_var(true) ->');
    console.error(err, '\n');
  };
}