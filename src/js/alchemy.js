import { fetchHelper } from 'hx-lib';

// Exports -------------------------------------------------------

export async function getOwnersForCollection(addr, withTokenBalances, apiKey) {
  const url = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getOwnersForCollection?contractAddress=${addr}&withTokenBalances=${withTokenBalances}`;
  //console.log(url);
  const result = await fetchHelper(url);
  //console.log(result);
  return result?.data;
}
