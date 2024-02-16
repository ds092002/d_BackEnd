// OS => Operating System

const os =  require('os');

// console.log(os.arch());                   // Returns the architecture of the operating system - x32 or x64
// console.log(os.availableParallelism()); 
// console.log(os.cpus());                    // Returns information about each CPU/core installed on the machine // Returns the number of logical CPUs available to Node.js. It does not consider physical CPU
console.log(os.endianness());               // Returns endianness of the CPU (Big Endian / Little Endian)