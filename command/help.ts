// @ts-check

import * as packagesjson from "../package.json";

/**
 * @name Help
 * @param {string} x - res.args
 * @description get help
*/

export const help = (x: string) => {
    console.log(`\x1b[1m${packagesjson?.name}\x1b[0m - \x1b[1mv${packagesjson?.version}\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32minit\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mcreate\x1b[0m
├─ \x1b[2mmonra\x1b[0m \x1b[32mlist\x1b[0m
└─ \x1b[2mmonra\x1b[0m \x1b[32mpublish\x1b[0m`)
};