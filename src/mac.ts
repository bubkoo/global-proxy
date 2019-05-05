import { execSync } from './exec-sync'
import { ProxyType } from './index'

let networkType: string

function getNetworkType() {
  if (networkType) {
    return networkType
  }

  const networkTypes = [
    'Ethernet',
    'Thunderbolt Ethernet',
    'Wi-Fi',
  ]

  for (const type of networkTypes) {
    const result = execSync(`networksetup -getwebproxy ${type}`)
    if (result.status === 0) {
      networkType = type
      return networkType
    }
  }

  throw new Error('Unknown network type')
}

export function status() {
  const networkType = getNetworkType()
  return execSync(`networksetup -getwebproxy ${networkType}`)
}

export function enable(hostname: string, port: number, proxyType: ProxyType = 'http') {

  const networkType = getNetworkType()
  const cmd = proxyType === 'https'
    ? 'setsecurewebproxy'
    : 'setwebproxy'

  const bypass = `networksetup -setproxybypassdomains ${networkType} 127.0.0.1 localhost`

  return execSync(`networksetup -${cmd} ${networkType} ${hostname} ${port} && ${bypass}`)
}

export function disable(proxyType: ProxyType = 'http') {
  const networkType = getNetworkType()
  const cmd = proxyType === 'https'
    ? 'setsecurewebproxystate'
    : 'setwebproxystate'

  return execSync(`networksetup -${cmd} ${networkType} off`)
}
