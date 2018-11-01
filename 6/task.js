function sumArgs() {
  const args = [].slice.call(arguments);
  return args.reduce((a, b) => a + b);
}

console.log(sumArgs(1, 2, 3)); 
