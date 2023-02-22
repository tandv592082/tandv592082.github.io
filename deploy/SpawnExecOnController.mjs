/**
 * https://nodejs.org/api/child_process.html#child_processspawncommand-args-options
 *
 * spawn for executing commands on controller. make it SSH2Pool like?
 * future add support for abort / signal
 */
 import { spawn } from 'node:child_process'
 export function execCmdOnController(cmd){
   return new Promise((resolve, reject) => {
     let code, stdouts = [], stderrs = [], signal;
 
     let spawnCmd = spawn(cmd,[],{shell:true});
 
     //i think on error need to double check
     spawnCmd.on('error',(err)=>{
       reject(err);
     });
     spawnCmd.stdout.on('data', (data) => {
       // console.log(`stdout: ${data}`);
       stdouts.push(data);
     });
 
     spawnCmd.stderr.on('data', (data) => {
       // console.error(`stderr: ${data}`);
       stderrs.push(data);
     });
     //close after exit
     spawnCmd.on('close', (_code,_signal) => {
       // console.log(`child process exited with code ${code} ${signal}`);
       code=_code;
       signal=_signal;
       let stdout,stderr;
       if(stdouts.length > 0) stdout = stdouts.join('\n')
       if(stderrs.length > 0) stderr = stderrs.join('\n')
 
       return resolve({cmd,stdout,stderr,code,signal})
 
     });
   });
 }
 export default {execCmdOnController}