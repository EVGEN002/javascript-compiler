export default function generateCode(node) {
  switch (node.type) {
    case "Program":
      return node.body.map(generateCode).join("\n");

    case "ExpressionStatement":
      return `${generateCode(node.expression)}`;

    case "CallExpression":
      return `${generateCode(node.callee)}(${node.arguments
        .map(generateCode)
        .join(", ")})`;

    case "Identifier":
      return node.name;

    case "NumberLiteral":
      return node.value;

    case "StringLiteral":
      return `"${node.value}"`;

    default:
      throw new TypeError(`Неизвестный тип узла: ${node.type}`);
  }
}
