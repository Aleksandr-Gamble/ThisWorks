// This is how you import stuff
// Take a look at nginx.conf
// Including 'include mime.types;' in the server block is necessary so browsers 'trust' s2.js to be a script
import {addNode} from './childScript.js';
import { UnrealBloomPass } from 'https://cdn.skypack.dev/three/examples/jsm/postprocessing/UnrealBloomPass.js';

    const Graph = ForceGraph3D()
      (document.getElementById('3d-graph'))
        .jsonUrl('http://127.0.0.1:80/datasets/miserables.json')
        .nodeLabel('id')
        .nodeAutoColorBy('group');

    const bloomPass = new UnrealBloomPass();
    bloomPass.strength = 3;
    bloomPass.radius = 1;
    bloomPass.threshold = 0.1;
    Graph.postProcessingComposer().addPass(bloomPass);


for(var i = 1; i <= 50; i++) {
    // spit a new particle out every 60 seconds
    (function(index) {
        setTimeout(function() { addNode(Graph, {id: i}); }, i*500);
    })(i);
}