import { MenuEntry } from '@lootswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { BASE_SWAP_URL, BASE_LIQUIDITY_POOL_URL } from 'config'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    type: 'svg',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'SwapOneIcon',
    type: 'svg',
    items: [
      {
        label: t('Exchange'),
        href: BASE_SWAP_URL,
      },
      {
        label: t('Liquidity'),
        href: BASE_LIQUIDITY_POOL_URL,
      },
      {
        label: t('AutoLooter'),
        href: 'https://legacy.lootswap.finance/#/autoLoot',
      },
    ],
  },
  {
    label: t('Quest Log'),
    icon: 'QuestLogsIcon',
    type: 'svg',
    href: '/questlog',
  },
  {
    label: t('Guilds'),
    icon: 'GuildIcon',
    type: 'svg',
    items: [
      {
        label: t('GG Guild'),
        href: '/guilds/gg',
      },
    ],
    calloutClass: 'rainbow',
  },
  {
    label: t('Analytics'),
    icon: 'InfoIcon',
    href: 'https://analytics.lootswap.finance/',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/LootSwap',
      },
      {
        label: t('Blog'),
        href: 'https://lootswapfinance.medium.com/',
      },
      {
        label: t('Reddit'),
        href: 'https://www.reddit.com/r/Lootswap/',
      },
    ],
  },
]

export default config
