const {
    readdir,
    readFile,
    writeFile
} = require("fs");
const {
    join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
  
const reverseText = str =>
    str
    .split("")
    .reverse()
    .join("");

const { 
    promisify
} = require('util');

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

async function* getFiles() {
    try{
        const files = await readdirAsync(inbox);
        for(const file of files){
            yield file;
        }
    }catch (err){
        throw Error(err);
    }
}

async function run(){
    try{
        const files = await getFiles();
        for await (const file of files){
            const read = await readFileAsync(join(inbox,file), 'utf8');
            const reverse = await reverseText(read);
            await writeFileAsync(join(outbox, file),reverse);
            console.log(`${file} done`);
        }
    }catch(err){
        console.log(err);
    }finally{
        console.log('end');
    }
}

run();