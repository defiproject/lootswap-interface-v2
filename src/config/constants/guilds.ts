import tokens from './tokens'
import { GuildConfig } from './types'
// CHORE: GUILD SETTINGS
const farms: GuildConfig[] = [
  {
    pid: 0,
    lpSymbol: 'LOOT-GG',
    lpAddresses: {
      1666600000: '0x0499761c54812Fd8084d75D3674097b1232B89C7',
      1666700000: '',
    },
    token: tokens.gg,
    quoteToken: tokens.loot,
    guildSlug: 'gg',
  },
  {
    pid: 1,
    lpSymbol: 'GG-ONE',
    lpAddresses: {
      1666600000: '0xb6B627662f924c66E36eDa1F2eEB2D13661337a2',
      1666700000: '',
    },
    token: tokens.gg,
    quoteToken: tokens.wone,
    guildSlug: 'gg',
  },
  {
    pid: 0,
    lpSymbol: 'TROLL-LOOT',
    lpAddresses: {
      1666600000: '0xa1808a54AeA27609ad55d58a0e1836Cb35fe872d',
      1666700000: '',
    },
    token: tokens.troll,
    quoteToken: tokens.loot,
    guildSlug: 'troll',
  },
  {
    pid: 1,
    lpSymbol: 'TROLL-ONE',
    lpAddresses: {
      1666600000: '0x20704b4e7C98eF18f05aFe0bDED99eb4D7ffE062',
      1666700000: '',
    },
    token: tokens.troll,
    quoteToken: tokens.wone,
    guildSlug: 'troll',
  },
  {
    pid: 2,
    lpSymbol: 'TROLL-bscUSDC',
    lpAddresses: {
      1666600000: '0xB8B9CF863b4F0f053E47EaB7b29F7F9f31D8ffAD',
      1666700000: '',
    },
    token: tokens.troll,
    quoteToken: tokens.bscusdc,
    guildSlug: 'troll',
  },
  {
    pid: 3,
    lpSymbol: 'bscBTCB-1WBTC',
    lpAddresses: {
      1666600000: '0x28C9AaD81cfd38Ca0f332fed9eAA1Ea2628d8A9B',
      1666700000: '',
    },
    token: tokens.bscbtbb,
    quoteToken: tokens.wbtc,
    guildSlug: 'troll',
  },
  {
    pid: 4,
    lpSymbol: 'bscETH-1ETH',
    lpAddresses: {
      1666600000: '0xAeBB1a861194fe6aD90B6ff24dF98E204A968984',
      1666700000: '',
    },
    token: tokens.bsceth,
    quoteToken: tokens.ether,
    guildSlug: 'troll',
  },
  {
    pid: 5,
    lpSymbol: '1renDOGE-bscDOGE',
    lpAddresses: {
      1666600000: '0xF5702714b266DB6e121445839d5ff5490E74eCef',
      1666700000: '',
    },
    token: tokens.bscdoge,
    quoteToken: tokens.onerendoge,
    guildSlug: 'troll',
  },
  {
    pid: 6,
    lpSymbol: 'bscBUSD-BUSD',
    lpAddresses: {
      1666600000: '0x63D75d38B7428A6C7a72Df9b74A14ae974B80410',
      1666700000: '',
    },
    token: tokens.bscbusd,
    quoteToken: tokens.busd,
    guildSlug: 'troll',
  },
  {
    pid: 7,
    lpSymbol: 'bscUSDC-1USDC',
    lpAddresses: {
      1666600000: '0x1Cb2F8e969d5e4C26596bE0E76fF9D47F2C666D4',
      1666700000: '',
    },
    token: tokens.bscusdc,
    quoteToken: tokens.oneusdc,
    guildSlug: 'troll',
  },
  {
    pid: 8,
    lpSymbol: 'bscDAI-1DAI',
    lpAddresses: {
      1666600000: '0x3852734Da9749f8d8899f7Bb21d68E300363a6f1',
      1666700000: '',
    },
    token: tokens.bscdai,
    quoteToken: tokens.onedai,
    guildSlug: 'troll',
  },
  {
    pid: 9,
    lpSymbol: 'bscUSDT-1USDT',
    lpAddresses: {
      1666600000: '0x2b0E0D76C0fdB830B81C3A52D895d55d852DE4D5',
      1666700000: '',
    },
    token: tokens.bscusdt,
    quoteToken: tokens.oneusdt,
    guildSlug: 'troll',
  },
  {
    pid: 10,
    lpSymbol: 'TROLL-ARB',
    lpAddresses: {
      1666600000: '0x39d4928b67C8948dbe43344312Baf5fe80961f2D',
      1666700000: '',
    },
    token: tokens.arb,
    quoteToken: tokens.troll,
    guildSlug: 'troll',
  },
  {
    pid: 11,
    lpSymbol: 'TROLL-MAGIC',
    lpAddresses: {
      1666600000: '0xAd245a78D895136798A5e3fd41f0c872c95d3c8b',
      1666700000: '',
    },
    token: tokens.magic,
    quoteToken: tokens.troll,
    guildSlug: 'troll',
  },
  {
    pid: 12,
    lpSymbol: 'TROLL-$LIFE',
    lpAddresses: {
      1666600000: '0x9C7030A0084cd68d044815400C34a7B6115c42b9',
      1666700000: '',
    },
    token: tokens.extralife,
    quoteToken: tokens.troll,
    guildSlug: 'troll',
  },
  {
    pid: 13,
    lpSymbol: 'TROLL-BARD',
    lpAddresses: {
      1666600000: '0x2F3077AD0286B51925Ec751C3c7E5811f9F14D43',
      1666700000: '',
    },
    token: tokens.bard,
    quoteToken: tokens.troll,
    guildSlug: 'troll',
  },
  {
    pid: 14,
    lpSymbol: 'TROLL-1WBTC',
    lpAddresses: {
      1666600000: '0x7C543E63BC4b287C35C3048Dac7f2AC7A11C97D6',
      1666700000: '',
    },
    token: tokens.troll,
    quoteToken: tokens.wbtc,
    guildSlug: 'troll',
  },
  {
    pid: 15,
    lpSymbol: 'TROLL-1ETH',
    lpAddresses: {
      1666600000: '0x9Ac61d94F8202Ff2709870922A0A876f6e0a0837',
      1666700000: '',
    },
    token: tokens.troll,
    quoteToken: tokens.ether,
    guildSlug: 'troll',
  },
  {
    pid: 16,
    lpSymbol: 'TROLL-BUSD',
    lpAddresses: {
      1666600000: '0x3FC49Bf12037f28F7B27236C1BCCb2C0657Dd4D0',
      1666700000: '',
    },
    token: tokens.troll,
    quoteToken: tokens.busd,
    guildSlug: 'troll',
  },
  {
    pid: 17,
    lpSymbol: 'TROLL-BOOM',
    lpAddresses: {
      1666600000: '0x1310f38E8746C3A997637f7ed5c5b23f9D06Cd2E',
      1666700000: '',
    },
    token: tokens.boom,
    quoteToken: tokens.troll,
    guildSlug: 'troll',
  },
  {
    pid: 18,
    lpSymbol: 'TROLL-LAZR',
    lpAddresses: {
      1666600000: '0x50af18f06A26E7590Cd127931ff9506b41f2C1c9',
      1666700000: '',
    },
    token: tokens.lazr,
    quoteToken: tokens.troll,
    guildSlug: 'troll',
  },
  {
    pid: 0,
    lpSymbol: 'ARB-LOOT',
    lpAddresses: {
      1666600000: '0x1B17730dcefAEcA706421f81A4A0D33Fc2c8b72F',
      1666700000: '',
    },
    token: tokens.arb,
    quoteToken: tokens.loot,
    guildSlug: 'arb',
  },
  {
    pid: 1,
    lpSymbol: 'ARB-ONE',
    lpAddresses: {
      1666600000: '0x055C1e5A46caD9662E0410acC29F9889e66aAF59',
      1666700000: '',
    },
    token: tokens.arb,
    quoteToken: tokens.wone,
    guildSlug: 'arb',
  },
  {
    pid: 2,
    lpSymbol: 'ARB-VIPER',
    lpAddresses: {
      1666600000: '0x684B52cC6d7288aEA7f2304c2aA3e24285A71ad0',
      1666700000: '',
    },
    token: tokens.viper,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
  },
  {
    pid: 3,
    lpSymbol: 'ARB-hMOCHI',
    lpAddresses: {
      1666600000: '0x32ea6Fe9D0A65CC8B893dFa4fd7C914c3261c21c',
      1666700000: '',
    },
    token: tokens.hmochi,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
  },
  {
    pid: 4,
    lpSymbol: 'ARB-1SUSHI',
    lpAddresses: {
      1666600000: '0x16C977EaB0C780b44B6000a2dc6D62Ac641AdF75',
      1666700000: '',
    },
    token: tokens.onesushi,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
  },
  {
    pid: 5,
    lpSymbol: 'ARB-MOONI',
    lpAddresses: {
      1666600000: '0x53b0E89038eCA50f23Fc2009e294B461a77510B2',
      1666700000: '',
    },
    token: tokens.mooni,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
    isCommunity: true,
  },
  {
    pid: 6,
    lpSymbol: 'ARB-JENN',
    lpAddresses: {
      1666600000: '0x5d4Fe962fbE20E0444f42912125265E7b28F79AA',
      1666700000: '',
    },
    token: tokens.jenn,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
    isCommunity: true,
  },
  {
    pid: 7,
    lpSymbol: 'ARB-XYA',
    lpAddresses: {
      1666600000: '0x83ED8b4A78c777a684B5E647cF2fF65391FA0fc7',
      1666700000: '',
    },
    token: tokens.xya,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
    isCommunity: true,
  },
  {
    pid: 8,
    lpSymbol: 'ARB-COINK',
    lpAddresses: {
      1666600000: '0x505533f35799107cBf2Eb7bD16901AF7b9d348A1',
      1666700000: '',
    },
    token: tokens.coink,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
    isCommunity: true,
  },
  {
    pid: 9,
    lpSymbol: 'ARB-TROLL',
    lpAddresses: {
      1666600000: '0x39d4928b67C8948dbe43344312Baf5fe80961f2D',
      1666700000: '',
    },
    token: tokens.troll,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
    isCommunity: true,
  },
  {
    pid: 10,
    lpSymbol: 'ARB-GG',
    lpAddresses: {
      1666600000: '0x7CBaDA1C97e788ea244BD2c9DD30a2E81456c6d5',
      1666700000: '',
    },
    token: tokens.gg,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
    isCommunity: true,
  },
  {
    pid: 11,
    lpSymbol: 'ARB-BARD',
    lpAddresses: {
      1666600000: '0x49DFc242F9ef6FEF6D621D3003336FF07234AF43',
      1666700000: '',
    },
    token: tokens.bard,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
    isCommunity: true,
  },
  {
    pid: 12,
    lpSymbol: 'ARB-NECRO',
    lpAddresses: {
      1666600000: '0xbAF7D2C29DC640fD342aB9Df072495272B15192a',
      1666700000: '',
    },
    token: tokens.necro,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
    isCommunity: true,
  },
  {
    pid: 13,
    lpSymbol: 'ARB-VINCI',
    lpAddresses: {
      1666600000: '0x38445429BBd3533B2cdDe5eF35830046884fd2D0',
      1666700000: '',
    },
    token: tokens.vinci,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
    isCommunity: true,
  },
  {
    pid: 14,
    lpSymbol: 'ARB-MAGIC',
    lpAddresses: {
      1666600000: '0x1f8768540d3220eed954ec35aa03d1d8397b8a11',
      1666700000: '',
    },
    token: tokens.magic,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
    isCommunity: true,
  },
  {
    pid: 15,
    lpSymbol: 'ARB-oSWAP',
    lpAddresses: {
      1666600000: '0xb47df31d1e7a3a925e0c938472a1895c5688276c',
      1666700000: '',
    },
    token: tokens.oswap,
    quoteToken: tokens.arb,
    guildSlug: 'arb',
    isCommunity: true,
  },
  {
    pid: 0,
    lpSymbol: 'BARD-LOOT',
    lpAddresses: {
      1666600000: '0x7Fa2eD0c31F2c0d155469850cb01537726a1a541',
      1666700000: '',
    },
    token: tokens.bard,
    quoteToken: tokens.loot,
    guildSlug: 'bard',
    isCommunity: true,
  },
  {
    pid: 1,
    lpSymbol: 'BARD-ONE',
    lpAddresses: {
      1666600000: '0x32ea67B14a542cD58c1267badba566E5e1e8f9fa',
      1666700000: '',
    },
    token: tokens.bard,
    quoteToken: tokens.wone,
    guildSlug: 'bard',
    isCommunity: true,
  },
  {
    pid: 2,
    lpSymbol: 'ONE-bscETH',
    lpAddresses: {
      1666600000: '0xe30B387D41077A2DFebEf0a2dF0df55C755BB7f7',
      1666700000: '',
    },
    token: tokens.bsceth,
    quoteToken: tokens.wone,
    guildSlug: 'bard',
  },
  {
    pid: 3,
    lpSymbol: 'ONE-1renDOGE',
    lpAddresses: {
      1666600000: '0x32931EA9E2C36b44EE8010d3840F07c704C6d4f6',
      1666700000: '',
    },
    token: tokens.onerendoge,
    quoteToken: tokens.wone,
    guildSlug: 'bard',
  },
  {
    pid: 4,
    lpSymbol: 'ONE-bscDAI',
    lpAddresses: {
      1666600000: '0x2c005Cff953B0a1EA709be47b7ea806E425e9df5',
      1666700000: '',
    },
    token: tokens.wone,
    quoteToken: tokens.bscdai,
    guildSlug: 'bard',
  },
  {
    pid: 0,
    lpSymbol: 'MAGIC-LOOT',
    lpAddresses: {
      1666600000: '0x86097830F2379300D77F047365CD11D95498cc70',
      1666700000: '',
    },
    token: tokens.magic,
    quoteToken: tokens.loot,
    guildSlug: 'cosmic',
  },
  {
    pid: 1,
    lpSymbol: 'MAGIC-ONE',
    lpAddresses: {
      1666600000: '0x7629a8782192a5b87eFd40d2eEf366E865A984ae',
      1666700000: '',
    },
    token: tokens.magic,
    quoteToken: tokens.wone,
    guildSlug: 'cosmic',
  },
  {
    pid: 2,
    lpSymbol: 'COSMIC-ONE',
    lpAddresses: {
      1666600000: '0x98c2B8f03f8200FE5EaEBB8FF4CCe6718c8a4134',
      1666700000: '',
    },
    token: tokens.cosmic,
    quoteToken: tokens.wone,
    isCommunity: true,
    guildSlug: 'cosmic',
  },
  {
    pid: 3,
    lpSymbol: 'MAGIC-COSMIC',
    lpAddresses: {
      1666600000: '0x5b40F3f160e0804c5353a0b516e65De5e421f493',
      1666700000: '',
    },
    token: tokens.cosmic,
    quoteToken: tokens.magic,
    guildSlug: 'cosmic',
  },
  {
    pid: 4,
    lpSymbol: 'MAGIC-bscBUSD',
    lpAddresses: {
      1666600000: '0x1014A04edd25e213598e653a3B7b658B229D3864',
      1666700000: '',
    },
    token: tokens.magic,
    quoteToken: tokens.bscbusd,
    guildSlug: 'cosmic',
  },
  // {
  //   pid: 5,
  //   lpSymbol: 'bscBTCB-1WBTC',
  //   lpAddresses: {
  //     1666600000: '0x28C9AaD81cfd38Ca0f332fed9eAA1Ea2628d8A9B',
  //     1666700000: '',
  //   },
  //   token: tokens.bscbtbb,
  //   quoteToken: tokens.wbtc,
  //   isCommunity: true,
  //   guildSlug: 'cosmic'
  // },
  {
    pid: 6,
    lpSymbol: 'bscETH-1ETH',
    lpAddresses: {
      1666600000: '0xAeBB1a861194fe6aD90B6ff24dF98E204A968984',
      1666700000: '',
    },
    token: tokens.bsceth,
    quoteToken: tokens.ether,
    isCommunity: true,
    guildSlug: 'cosmic',
  },
  {
    pid: 7,
    lpSymbol: 'ONE-bscETH',
    lpAddresses: {
      1666600000: '0xe30B387D41077A2DFebEf0a2dF0df55C755BB7f7',
      1666700000: '',
    },
    token: tokens.wone,
    quoteToken: tokens.bsceth,
    isCommunity: true,
    guildSlug: 'cosmic',
  },
  {
    pid: 8,
    lpSymbol: 'ONE-BUSD',
    lpAddresses: {
      1666600000: '0xaa781Dc33e968A58640b27Fcd0a536A65AaEFF71',
      1666700000: '',
    },
    token: tokens.wone,
    quoteToken: tokens.busd,
    isCommunity: true,
    guildSlug: 'cosmic',
  },
  {
    pid: 0,
    lpSymbol: 'FOOL-ONE',
    lpAddresses: {
      1666600000: '0x67367E49EcEe9477c2Db11D81999fbA2551B37Cf',
      1666700000: '',
    },
    token: tokens.fool,
    quoteToken: tokens.wone,
    isCommunity: true,
    guildSlug: 'fool',
  },
  {
    pid: 1,
    lpSymbol: 'bscBUSD-BUSD',
    lpAddresses: {
      1666600000: '0x63D75d38B7428A6C7a72Df9b74A14ae974B80410',
      1666700000: '',
    },
    token: tokens.bscbusd,
    quoteToken: tokens.busd,
    isCommunity: true,
    guildSlug: 'fool',
  },
  {
    pid: 2,
    lpSymbol: 'bscUSDC-1USDC',
    lpAddresses: {
      1666600000: '0x1Cb2F8e969d5e4C26596bE0E76fF9D47F2C666D4',
      1666700000: '',
    },
    token: tokens.bscusdc,
    quoteToken: tokens.oneusdc,
    isCommunity: true,
    guildSlug: 'fool',
  },
  {
    pid: 3,
    lpSymbol: 'FOOL-1CRV',
    lpAddresses: {
      1666600000: '0x7e0bf98f6aB2475fc826fBA5ebc11ab5aB646aF4',
      1666700000: '',
    },
    token: tokens.crv,
    quoteToken: tokens.fool,
    isCommunity: true,
    guildSlug: 'fool',
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-1USDC',
    lpAddresses: {
      1666600000: '0x62f2Bbfd172eCF132a269926ae8A893f9cEE1992',
      1666700000: '',
    },
    token: tokens.oneusdc,
    quoteToken: tokens.busd,
    isCommunity: true,
    guildSlug: 'fool',
  },
  {
    pid: 5,
    lpSymbol: 'FOOL-APE',
    lpAddresses: {
      1666600000: '0x44BE00be3FDf0ea36242Cb0606801B776Cd98Cf1',
      1666700000: '',
    },
    token: tokens.harmonape,
    quoteToken: tokens.fool,
    isCommunity: true,
    guildSlug: 'fool',
  },
  {
    pid: 6,
    lpSymbol: 'APE-ONE',
    lpAddresses: {
      1666600000: '0x8a898f58BC82985eDcBAe2Bede0D7C812a85a1Ee',
      1666700000: '',
    },
    token: tokens.harmonape,
    quoteToken: tokens.wone,
    isCommunity: true,
    guildSlug: 'fool',
  },
]

export default farms
