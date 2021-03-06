import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'bscBNB-ONE',
    lpAddresses: {
      1666600000: '0xD45c14BDf45B4bd05325A7dc253fFCb0d205204D',
      1666700000: '',
    },
    token: tokens.bscbnb,
    quoteToken: tokens.wone,
  },
  {
    pid: 1,
    lpSymbol: 'bscBUSD-ONE',
    lpAddresses: {
      1666600000: '0xd2D94cDa8c29f96d879fc8c0cd09a6f224bEeB9e',
      1666700000: '',
    },
    token: tokens.wone,
    quoteToken: tokens.bscbusd,
  },
  {
    pid: 2,
    lpSymbol: '1ETH-ONE',
    lpAddresses: {
      1666600000: '0xd08F349774bcd447599AABDC72DF2a34145b7Ff9',
      1666700000: '',
    },
    token: tokens.ether,
    quoteToken: tokens.wone,
  },
  // skipped 3,
  {
    pid: 4,
    lpSymbol: '1WBTC-ONE',
    lpAddresses: {
      1666600000: '0xA8455021989Ce3530118E0d6229219Cc9bBCCA2b',
      1666700000: '',
    },
    token: tokens.wbtc,
    quoteToken: tokens.wone,
  },
  {
    pid: 5,
    lpSymbol: 'LOOT-ONE',
    lpAddresses: {
      1666600000: '0xa2DEBc3Cbe088Fff2bEdE17aC67eF5f285845038',
      1666700000: '',
    },
    token: tokens.wone,
    quoteToken: tokens.loot,
  },
  {
    pid: 6,
    lpSymbol: 'LOOT-bscWISB',
    lpAddresses: {
      1666600000: '0x97143dAF10e33f091673e1d0cbad294486eC08D9',
      1666700000: '',
    },
    token: tokens.bscwisb,
    quoteToken: tokens.loot,
    isCommunity: true,
  },
  {
    pid: 7,
    lpSymbol: 'LOOT-XYA',
    lpAddresses: {
      1666600000: '0xF6938ABb05F01D6089561FBF14121E3223ab43ba',
      1666700000: '',
    },
    token: tokens.xya,
    quoteToken: tokens.loot,
    isCommunity: true,
  },
  {
    pid: 8,
    lpSymbol: 'ONE-bscMatic',
    lpAddresses: {
      1666600000: '0xa1e2AE67A7Bf888AA8F702a6f07FC1196BFEEe33',
      1666700000: '',
    },
    token: tokens.bscmatic,
    quoteToken: tokens.wone,
    isCommunity: true,
  },
  {
    pid: 9,
    lpSymbol: 'LOOT-BUSD',
    lpAddresses: {
      1666600000: '0x50127657bD440E4158949c9C7CAe96EB3d0566f9',
      1666700000: '',
    },
    token: tokens.loot,
    quoteToken: tokens.busd,
  },
  {
    pid: 10,
    lpSymbol: '1ETH-1UNI',
    lpAddresses: {
      1666600000: '0xb8ce0515381009932020d359edA6263353De63B1',
      1666700000: '',
    },
    token: tokens.uni,
    quoteToken: tokens.ether,
    isCommunity: true,
  },
  {
    pid: 11,
    lpSymbol: 'bscBNB-bscCAKE',
    lpAddresses: {
      1666600000: '0x986Fdc9948b185d61941384acF196399F12eb756',
      1666700000: '',
    },
    token: tokens.bsccake,
    quoteToken: tokens.bscbnb,
    isCommunity: true,
  },
  {
    pid: 12,
    lpSymbol: 'LOOT-TROLL',
    lpAddresses: {
      1666600000: '0xa1808a54AeA27609ad55d58a0e1836Cb35fe872d',
      1666700000: '',
    },
    token: tokens.troll,
    quoteToken: tokens.loot,
    isCommunity: true,
  },
  {
    pid: 13,
    lpSymbol: 'LOOT-NECRO',
    lpAddresses: {
      1666600000: '0x9D29476f95a18AF6999555bfD3134Fc442695C07',
      1666700000: '',
    },
    token: tokens.necro,
    quoteToken: tokens.loot,
    isCommunity: true,
  },
  {
    pid: 14,
    lpSymbol: 'LOOT-ARB',
    lpAddresses: {
      1666600000: '0x1B17730dcefAEcA706421f81A4A0D33Fc2c8b72F',
      1666700000: '',
    },
    token: tokens.arb,
    quoteToken: tokens.loot,
    isCommunity: true,
  },
  {
    pid: 15,
    lpSymbol: 'LOOT-BARD',
    lpAddresses: {
      1666600000: '0x7Fa2eD0c31F2c0d155469850cb01537726a1a541',
      1666700000: '',
    },
    token: tokens.bard,
    quoteToken: tokens.loot,
    isCommunity: true,
  },
  {
    pid: 16,
    lpSymbol: 'VINCI-ONE',
    lpAddresses: {
      1666600000: '0x75903f7343918058525EBA1fc26595D174ef5D44',
      1666700000: '',
    },
    token: tokens.vinci,
    quoteToken: tokens.wone,
    isCommunity: true,
  },
  {
    pid: 17,
    lpSymbol: 'LOOT-GG',
    lpAddresses: {
      1666600000: '0x0499761c54812Fd8084d75D3674097b1232B89C7',
      1666700000: '',
    },
    token: tokens.gg,
    quoteToken: tokens.loot,
    isCommunity: true,
  },
  {
    pid: 18,
    lpSymbol: 'LOOT-$LIFE',
    lpAddresses: {
      1666600000: '0xD2016CEb116Dc5ed67650b70719D1F235Aec1d4a',
      1666700000: '',
    },
    token: tokens.extralife,
    quoteToken: tokens.loot,
    isCommunity: true,
  },
  {
    pid: 19,
    lpSymbol: 'LOOT-LBLOX',
    lpAddresses: {
      1666600000: '0xbb158bD7B266a468e3514370Ac56B0b2f2E9b9aa',
      1666700000: '',
    },
    token: tokens.loblox,
    quoteToken: tokens.loot,
    isCommunity: true,
  },
  {
    pid: 20,
    lpSymbol: 'ONE-$LIFE',
    lpAddresses: {
      1666600000: '0xD1A3b76E7A8d660c19B225932d1A9D985D51BE8A',
      1666700000: '',
    },
    token: tokens.extralife,
    quoteToken: tokens.wone,
    isCommunity: true,
  },
  {
    pid: 21,
    lpSymbol: 'ONE-LBLOX',
    lpAddresses: {
      1666600000: '0x983AcE35211012aC9Fe8cafDB451A5D6A8a22Fe5',
      1666700000: '',
    },
    token: tokens.loblox,
    quoteToken: tokens.wone,
    isCommunity: true,
  },
  {
    pid: 22,
    lpSymbol: 'ONE-CGS',
    lpAddresses: {
      1666600000: '0xdb832406e2e71b68c877bbb853f86d3b6e475c47',
      1666700000: '',
    },
    token: tokens.cgs,
    quoteToken: tokens.wone,
    isCommunity: true,
  },
  {
    pid: 23,
    lpSymbol: 'LOOT-FOOL',
    lpAddresses: {
      1666600000: '0xE62946772ccD43F9859a8b22182B957797cc2d3f',
      1666700000: '',
    },
    token: tokens.fool,
    quoteToken: tokens.loot,
    isCommunity: true,
  },
]

export default farms
