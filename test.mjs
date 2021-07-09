const { getPackage } = await import("./lib.js");

const pkg = await getPackage("@11ty/eleventy");
console.log(pkg);
