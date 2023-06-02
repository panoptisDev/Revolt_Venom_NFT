const indexAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"collection","type":"address"}],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"collection","type":"address"},{"name":"owner","type":"address"},{"name":"nft","type":"address"}]},{"name":"destruct","inputs":[{"name":"gasReceiver","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"_nft","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_nft","type":"address"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"}]} as const
const indexBasisAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"collection","type":"address"}]},{"name":"destruct","inputs":[{"name":"gasReceiver","type":"address"}],"outputs":[]}],"data":[{"key":1,"name":"_collection","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_collection","type":"address"}]} as const
const revoltNftAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"owner","type":"address"},{"name":"sendGasTo","type":"address"},{"name":"remainOnNft","type":"uint128"},{"name":"json","type":"string"},{"name":"indexDeployValue","type":"uint128"},{"name":"indexDestroyValue","type":"uint128"},{"name":"codeIndex","type":"cell"}],"outputs":[]},{"name":"indexCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"resolveIndex","inputs":[{"name":"answerId","type":"uint32"},{"name":"collection","type":"address"},{"name":"owner","type":"address"}],"outputs":[{"name":"index","type":"address"}]},{"name":"getJson","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"json","type":"string"}]},{"name":"transfer","inputs":[{"name":"to","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"changeOwner","inputs":[{"name":"newOwner","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"changeManager","inputs":[{"name":"newManager","type":"address"},{"name":"sendGasTo","type":"address"},{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}],"outputs":[]},{"name":"getInfo","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]}],"data":[{"key":1,"name":"_id","type":"uint256"}],"events":[{"name":"NftCreated","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}],"outputs":[]},{"name":"OwnerChanged","inputs":[{"name":"oldOwner","type":"address"},{"name":"newOwner","type":"address"}],"outputs":[]},{"name":"ManagerChanged","inputs":[{"name":"oldManager","type":"address"},{"name":"newManager","type":"address"}],"outputs":[]},{"name":"NftBurned","inputs":[{"name":"id","type":"uint256"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"collection","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_id","type":"uint256"},{"name":"_collection","type":"address"},{"name":"_owner","type":"address"},{"name":"_manager","type":"address"},{"name":"_json","type":"string"},{"name":"_indexDeployValue","type":"uint128"},{"name":"_indexDestroyValue","type":"uint128"},{"name":"_codeIndex","type":"cell"}]} as const
const revoltNftCollectionAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"codeNft","type":"cell"},{"name":"codeIndex","type":"cell"},{"name":"codeIndexBasis","type":"cell"},{"name":"json","type":"string"}],"outputs":[]},{"name":"mint","inputs":[],"outputs":[]},{"name":"indexBasisCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexBasisCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"resolveIndexBasis","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"indexBasis","type":"address"}]},{"name":"indexCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"indexCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"hash","type":"uint256"}]},{"name":"getJson","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"json","type":"string"}]},{"name":"totalSupply","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"count","type":"uint128"}]},{"name":"nftCode","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"code","type":"cell"}]},{"name":"nftCodeHash","inputs":[{"name":"answerId","type":"uint32"}],"outputs":[{"name":"codeHash","type":"uint256"}]},{"name":"nftAddress","inputs":[{"name":"answerId","type":"uint32"},{"name":"id","type":"uint256"}],"outputs":[{"name":"nft","type":"address"}]},{"name":"supportsInterface","inputs":[{"name":"answerId","type":"uint32"},{"name":"interfaceID","type":"uint32"}],"outputs":[{"name":"value0","type":"bool"}]}],"data":[],"events":[{"name":"NftCreated","inputs":[{"name":"id","type":"uint256"},{"name":"nft","type":"address"},{"name":"owner","type":"address"},{"name":"manager","type":"address"},{"name":"creator","type":"address"}],"outputs":[]},{"name":"NftBurned","inputs":[{"name":"id","type":"uint256"},{"name":"nft","type":"address"},{"name":"owner","type":"address"},{"name":"manager","type":"address"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_supportedInterfaces","type":"optional(cell)"},{"name":"_codeNft","type":"cell"},{"name":"_totalSupply","type":"uint128"},{"name":"_json","type":"string"},{"name":"_codeIndex","type":"cell"},{"name":"_codeIndexBasis","type":"cell"},{"name":"_indexDeployValue","type":"uint128"},{"name":"_indexDestroyValue","type":"uint128"},{"name":"_deployIndexBasisValue","type":"uint128"},{"name":"_remainOnNft","type":"uint128"}]} as const

export const factorySource = {
    Index: indexAbi,
    IndexBasis: indexBasisAbi,
    RevoltNft: revoltNftAbi,
    RevoltNftCollection: revoltNftCollectionAbi
} as const

export type FactorySource = typeof factorySource
export type IndexAbi = typeof indexAbi
export type IndexBasisAbi = typeof indexBasisAbi
export type RevoltNftAbi = typeof revoltNftAbi
export type RevoltNftCollectionAbi = typeof revoltNftCollectionAbi
