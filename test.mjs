import { inspect } from "util";
import { getPackage } from "./lib.js";

const pkg = await getPackage("@11ty/eleventy");
console.log(inspect(pkg, {depth: 1}));
