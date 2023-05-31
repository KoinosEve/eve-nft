import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Eve NFT"
  export const SYMBOL: string = "EveNFT";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 101;
  export const URI: string = "https://bafybeibc6e3ku2upxm5zi4armxicjuonadjqwlwldwkjke5ugi7bwatycy.ipfs.nftstorage.link/ipfs/bafybeibc6e3ku2upxm5zi4armxicjuonadjqwlwldwkjke5ugi7bwatycy/";
  export const OWNER: Uint8Array = Base58.decode("15ouFhmcE2wcK5poiSa2T8U9EoqzqMC6Qw");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("");
}
