interface Token {
  tokenName: string;
  value: string;
  type: string;
  description: string;
  mode: string;
}

interface CategoryOutput {
  category: string;
  tokens: Token[];
}

/**
 * Flattens the tokens object into a list of tokens.
 * @param obj - The tokens object to flatten.
 * @param prefix - The prefix to add to the token name.
 * @param mode - The mode to assign to each token.
 * @returns A list of tokens.
 */
function flattenTokens(
  obj: Record<string, any>,
  prefix: string[] = [],
  mode: string = "default"
): Token[] {
  let tokens: Token[] = [];
  for (const key in obj) {
    const value = obj[key];
    if (value && typeof value === "object" && "$value" in value) {
      tokens.push({
        tokenName: `—${[...prefix, key].join("-")}`,
        value: value["$value"].replace(/[{}]/g, "").replace(/\./g, "/"),
        type: value["$type"],
        description: value["$description"],
        mode: mode,
      });
    } else if (typeof value === "object" && value !== null) {
      tokens = tokens.concat(flattenTokens(value, [...prefix, key], mode));
    }
  }
  return tokens;
}

export default function transform(
  data: Record<string, any>,
  mode: string = "default"
): CategoryOutput[] {
  return Object.keys(data).map((category) => ({
    category,
    tokens: flattenTokens(data[category], [category], mode),
  }));
}

export type { Token, CategoryOutput };
