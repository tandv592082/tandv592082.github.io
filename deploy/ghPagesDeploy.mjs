/**
 * pnpm install gh-pages -D
 * https://yarnpkg.com/package/gh-pages
 *
 * pnpm run build
 *
 * make sure this file is run as root
 *
 */
 const dir = 'dist';//or from env variable? perhaps or from args
 import * as ghpages from 'gh-pages'
 import {execCmdOnController} from "./SpawnExecOnController.mjs";
 import fs from 'node:fs';
 // process.env.NUXT_APP_BASE_URL="/nuxt3-generate/"//if .env doesnt exist
 //build
 {
   // const {cmd,stdout,stderr,code,signal} = await execCmdOnController('pnpm run build')//vite
   const {cmd,stdout,stderr,code,signal} = await execCmdOnController('yarn generate')//nuxt3 static
   console.log(stdout);
   if(stderr || code !== 0){
     console.error(stderr);
 
   }
   if(code !==0){process.exit()}
 
 }
 /* add nojekyl */
 fs.writeFileSync(dir+"/.nojekyll","");
 
 const options = {
   dotfiles:true,
 }
 await ghpages.publish(dir, options, function(err) {
   if(err){
     console.error('publish error',err);
   }else{
     console.log('Pushed')
   }
 });