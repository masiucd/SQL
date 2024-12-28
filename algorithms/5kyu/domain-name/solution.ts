/**
 * Extracts the domain name from a given URL.
 *
 * This function removes the protocol (http or https) and the "www" prefix from the URL,
 * then splits the remaining string by the dot character and returns the first segment,
 * which is the domain name.
 *
 * @param url - The URL string from which to extract the domain name.
 * @returns The extracted domain name.
 */
export function domainName(url: string) {
  let domain = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
  return domain;
}
