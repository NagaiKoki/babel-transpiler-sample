const { parse } = require("@babel/parser");
const { default: traverse } = require("@babel/traverse");
const { default: generate } = require("@babel/generator");
const log = require("babel-log");
const fs = require("fs");

const code = fs.readFileSync(__dirname + "/code.js", "utf-8");
const ast = parse(code, {});

traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "hoge" })) {
      path.node.name = "koki";
    }
  },
});

const newCode = generate(ast);

fs.writeFileSync(__dirname + "/result.js", newCode.code);
