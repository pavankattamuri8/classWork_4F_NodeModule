const path=require('path')
const pathFile="C:\\Users\\User\\Desktop\\x\\NODE\\path.js";
console.log(path.dirname(pathFile))
console.log(path.basename(pathFile))
console.log(path.extname(pathFile))
const NewPathFile=path.join(path.dirname(pathFile),'os.js')
console.log(NewPathFile)
