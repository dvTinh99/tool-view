import diana from '../cookie/diana.json' assert { type: "json" };
import awin from '../cookie/awin.json' assert { type: "json" };
import man from '../cookie/man.json' assert { type: "json" };
import nghia2 from '../cookie/nghia2.json' assert { type: "json" };
import nghia3 from '../cookie/nghia3.json' assert { type: "json" };
import main from '../test.js';

main(man.cookies, process.argv[2]);

// console.log(process.argv[2]); // arg1
// console.log(process.argv[3]); // arg2
