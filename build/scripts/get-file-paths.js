'use strict';
function getFiles(dir) {
    var filesList = [];
 
    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        console.log(name);
        if (!fs.statSync(name).isDirectory()){
            filesList.push(name);
        }
    }
    return fileList;
}