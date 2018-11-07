function work(a) {
  return `${a}!`;
}
const log = [];
function makeLogging(f, logArg) {
  // log.push(arguments);
  function wrapper(a) {
    logArg.push(a);
    return f.call(this, a);
  }
  return wrapper;
}

work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (let i = 0; i < log.length; i += 1) {
  console.log(`Лог:${log[i]}`); // "Лог:1", затем "Лог:5"
}

console.log(log.length);
