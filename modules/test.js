module.exports.init = function(bot) {};

module.exports.name = "sirc-test";

module.exports.command = "test";


module.exports.commands = ['test2', 'test3'];
module.exports.run = function(remainder, parts, reply, command, from, to, text, raw) {
  reply("One of my test commands were called!", "In fact it was", command);
};

module.exports.runTest4 = function(r, p, reply) {
  reply("I was called with test4");
};
module.exports.runTest5 = function(r, p, reply) {
  reply("My parts are:", p.join(', '));
};
module.exports.run_test6 = function(r,p,reply) {
  reply("My name is " + this.name);
};
