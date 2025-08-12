interface Token {
  tokenName: string;
  value: string;
  type: string;
  description: string;
}

interface CategoryOutput {
  category: string;
  tokens: Token[];
}

/**
 * Flattens the tokens object into a list of tokens.
 * @param obj - The tokens object to flatten.
 * @param prefix - The prefix to add to the token name.
 * @returns A list of tokens.
 */
function flattenTokens(
  obj: Record<string, any>,
  prefix: string[] = []
): Token[] {
  let tokens: Token[] = [];
  for (const key in obj) {
    const value = obj[key];
    if (value && typeof value === "object" && "$value" in value) {
      tokens.push({
        tokenName: `—${[...prefix, key].join("-")}`,
        value: value["$value"],
        type: value["$type"],
        description: value["$description"],
      });
    } else if (typeof value === "object" && value !== null) {
      tokens = tokens.concat(flattenTokens(value, [...prefix, key]));
    }
  }
  return tokens;
}

export default function transform(data: Record<string, any>): CategoryOutput[] {
  return Object.keys(data).map((category) => ({
    category,
    tokens: flattenTokens(data[category], [category]),
  }));
}

export type { Token, CategoryOutput };
