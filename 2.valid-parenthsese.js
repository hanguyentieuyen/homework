// Input : '{)}' => Outout: false
// Input : '[(){[]()}]'
// Ago: stack 
function validParetheses(a) {
  const stack = [];

  for (let i = 0; i < a.length; i++) {
    let currentChar = a[i];

    switch (currentChar) {
      case "{":
        stack.push("}");
        break;
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if(currentChar !== stack.pop()) return false
    }
  }
  return stack.length === 0;
}

const test = validParetheses('[(){[]()}]')
console.log(test)
