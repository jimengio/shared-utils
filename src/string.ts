import fuzzysearch from "fuzzysearch";

export let foundText = (content: string, query: string): boolean => {
  if (query == null) {
    return true;
  }
  if (content == null) {
    return false;
  }

  return content.toLowerCase().includes(query.toLowerCase());
};

/**
 * 模糊搜索, 不区分大小写
 * @param content
 * @param query
 */
export let fuzzyFoundText = (content: string, query: string): boolean => {
  if (query == null) {
    return true;
  }
  if (content == null) {
    return false;
  }

  return fuzzysearch(query, content.toLocaleLowerCase());
};
