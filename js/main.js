#!/usr/bin/env /usr/bin/node

/**
 * Examples:
 *  1.  $ ./main.js "./m1.js" "howdy jroll"
        f1: howdy jroll
        $

    2.  $ ./main.js "./generic.js" "howdy jroll"
        Hello, howdy jroll
        $
 *
 **/

'use strict';

import process from 'node:process';
import impfunc from './modules/impfunc.js';

function disp(d){
    console.log(d);
}
function main(a){
    if(a[2]){
        impfunc(a[2]).then((f)=>{ disp(f.gen(a[3])); });
    }
}

main(process.argv);