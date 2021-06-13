// start by node debug debug.js
// or by node inspect debug.js
console.log("start")
// one can add breakpoints by debugger; or runtime set sb('./debug.js', 5)
debugger;
// fast goto next bp by cont
console.log("into")
debugger;
console.log("end")

// when debugging, `repl` can execute at current context.
// sb('fn', line_no)
// sb(line_no_of_curfile)
// sb('fn', line_no, 'cond') set break only when cond is true
// cb() clears bp
// bt to see call trace
// r to restart/run
// list(num) to view current scope
// watch(var), watchers, unwatch(var) each next print out var val
// cannot debug worker threads yet, try ndb.
//
// more info about debug: https://nodejs.org/api/debugger.html
