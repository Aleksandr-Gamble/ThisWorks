// This is how you import stuff
// Take a look at nginx.conf
// Including 'include mime.types;' in the server block is necessary so browsers 'trust' s2.js to be a script
import {echoS2} from './s2.js';


document.getElementById("p1").addEventListener('click', echoS2);