import tokenize from "./tokenizer.js";
import parse from "./parser.js";
import transform from "./transformer.js";
import generateCode from "./codeGenerator.js";

function compile(input) {
  const tokens = tokenize(input);
  const ast = parse(tokens);
  const newAst = transform(ast);
  const output = generateCode(newAst);

  return output;
}
