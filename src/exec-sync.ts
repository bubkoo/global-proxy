import childProcess from 'child_process'

export function execSync(cmd: string) {

  let stdout
  let status = 0

  try {
    stdout = childProcess.execSync(cmd)
  } catch (err) {
    stdout = err.stdout
    status = err.status
  }

  return {
    status,
    stdout: stdout.toString(),
  }
}
