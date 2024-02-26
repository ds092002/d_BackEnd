//  Path Module
// const path = require('path');

const path = require("path");

console.log(path.basename('D:/nodejs/hello.js'));            // path.basename() returns the last portion of a path.It is similar to the Unix "basename" command or the Windows "filename
console.log(path.dirname('D:/nodejs/hello.js'));             // path.dirname() returns the last portion of a path. In this case, it will return 'D:\nodejs'
console.log(path.extname('D:/nodejs/hello.js'));             // path.extname() returns the last portion of a path that includes the extension - it gets the file name or file number//  Express Server Setup will return
console.log(path.isAbsolute('D:/nodejs/hello.js'));          // path.isAbsolute() returns true if the specified path is absolute, false otherwise.
console.log(path.normalize('D:/nodejs/hello.js'));           // path.normalize() returns the normalized version of a path, meaning it resolves all but the last part of a path
console.log(path.parse('D:/nodejs/hello.js'));               // path.parse() returns the normalized version of a path, with symbolic links resolved if they are present. The returned object will contain the following properties:
console.log(path.format({
    root: 'D:',
    dir: 'D:/nodejs',
    base: 'hello.js',
    ext: '.c'
}));                                                         // path.format() returns the normalized version of the path (e.g., converts backslashes to forward slashes on Windows) and converts backslashes to forward slashes on Windows
console.log(path.posix);                                     // path.posix returns the normalized version of the path module, it is used to make sure that all paths are in Unix-style format with forward slash// }));
console.log(path.delimiter);                                 // : or ; depending on the operating system.
console.log(path.sep);                                       // path.sep returns the platform-specific directory separator: '/' or '\'.
console.log(path.relative("D:/nodejs/","hello.js"));         // path.relative("D:/nodejs", "D:/nodejs/world.js") returns 'world.js'. If path.relative(" D:/nodejs/hello.js ", "D:/nodejs/world.js ", "D:/nodejs/hello.js ") returns 'hello.js '.
console.log(path.resolve('D:/nodejs/world.c'));              // path.resolve('D:/nodejs','./world.c') returns 'world.c'.
console.log(path.toNamespacedPath('D:/nodejs/hello.js'));    // path.toNamespacedPath() method converts a file path into a namespaced path, if necessary. In POSenvironment, this function returns a string representation of the path as a string 

console.log(path.join("D:","NodeJS","Hello.js","abc"));      // path.join("D:","NodeJS","Hello.js","abc") will be returned as "D:\NodeJS\Hello.js\abc" in windows
console.log(path.basename(__filename));                      // path.basename(__filename) will be returned as hello.js because this script is named hello.js.
console.log(path.basename(__dirname));                       // path.basename(__dirname) will be returned as "path" because this is the name of the current module.
console.log(__dirname,"Hello.js","abc");

console.log(path.join(__filename, "Hello.js"));
console.log(path.basename(__filename));                      // path.basename filename will be returned as a string.