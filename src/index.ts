import * as mac from './mac'
import * as win from './win'

export type ProxyType = 'http' | 'https'

const agent = /^win/.test(process.platform) ? win : mac

function execute(fn: string, ...args: any[]) {
  return new Promise((resolve, reject) => {
    const ret = ((agent as any)[fn] as Function)(...args)
    if (ret.status) {
      reject(ret.stdout)
    } else {
      resolve(ret.stdout)
    }
  })
}

export function enable(hostname: string, port: number, protocol?: ProxyType) {
  return execute('enable', hostname, port, protocol)
}

export function disable() {
  return execute('disable')
}

export function status() {
  return execute('status')
}

export default {
  status,
  enable,
  disable,
}
