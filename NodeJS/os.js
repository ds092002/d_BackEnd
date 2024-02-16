// OS => Operating System

const os =  require('os');

// console.log(os.arch());                       // Returns the architecture of the operating system - x32 or x64
// console.log(os.availableParallelism());          // Returns the number of logical processors available to this process.
// console.log(os.cpus());                       // Returns information about each CPU/core installed on the machine // Returns the number of logical CPUs available to Node.js. It does not consider physical CPU
// console.log(os.freemem());                    // Returns information about free memory in bytes
// console.log(os.totalmem());                   // Returns information about total memory available to this process in bytes
// console.log(os.networkInterfaces());          // Returns information about network interfaces
// console.log(os.getPriority());                // Returns information about the priority of the process
// console.log(os.homedir());                    // Returns information about the homedir of the process
// console.log(os.hostname());                   // Returns information about the hostname of the process

// console.log(os.devNull);                      // Returns a file descriptor that is the equivalent of /dev/null
// console.log(os.setPriority(1));               // Sets the priority of the process. Returns 0 if the priority was successfully
// console.log(os.tmpdir());                     // Returns information about temporary directory for the user
// console.log(os.release());                    // Returns the release version of the operating system
// console.log(os.machine());                    // Returns information about the machine type
// console.log(os.uptime());                     // Returns information about the uptime of the process
// console.log(os.loadavg());                    // Returns information about load average
// **console.log(os.setPriority());              // Sets the priority of the process, returns undefined if it was successful
// console.log(os.version());                    // Returns information about the version of the operating system
// console.log(os.type());                       // Returns information about the type of operating system - ex: Linux, Windows
// console.log(os.userInfo().username);          // Returns information about the user of the process
// console.log(os.endianness());                 // Returns endianness of the CPU (Big Endian / Little Endian)
// console.log(os.userInfo().username);          // Return complete info about the user of the process
