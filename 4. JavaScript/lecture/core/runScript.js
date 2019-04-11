import childProcess from 'child_process';

export async function runScript(scriptPath) {
  // keep track of whether callback has been invoked to prevent multiple invocations
  let invoked = false;

  let process = childProcess.fork(scriptPath);
  return new Promise((resolve, reject) => {
    process.on('error', function (err) {
      if (invoked) {
        resolve();
        return
      }
      invoked = true;
      reject(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
      if (invoked) {
        resolve();
        return
      }
      invoked = true;
      resolve();
    });
  })
  // listen for errors as they may prevent the exit event from firing


}
