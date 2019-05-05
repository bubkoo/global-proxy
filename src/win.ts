import { execSync } from './exec-sync'

// tslint:disable-next-line
const REG_PATH = `reg add "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" /v`

export function enable(hostname: string, port: number) {
  return execSync(
    // set proxy
    `${REG_PATH} ProxyServer /t REG_SZ /d ${hostname}:${port} /f & ` +
    // enable proxy
    `${REG_PATH} ProxyEnable /t REG_DWORD /d 1 /f`)
}

export function disable() {
  return execSync(`${REG_PATH} /v ProxyEnable /t REG_DWORD /d 0 /f`)
}

export function status() { }
