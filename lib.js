const pacote = require("pacote");
const semver = require("semver");
const sortJson = require("sort-json");

module.exports = {
  getPackage,
};

async function getPackage(name = "", fullMetadata = true) {
  const [manifest, packument] = await Promise.all([
    pacote.manifest(name, { fullMetadata }),
    pacote.packument(name, { fullMetadata }),
  ]);

  const res = sortJson(Object.assign({}, manifest, packument));
  // `time` and `versions` can be `undefined` if `fullMetadata` is `false`.
  if (res.time) {
    res.time = sortTimes(res.time);
  }
  if (res.versions) {
    res.versions = sortVersions(res.versions);
  }
  return res;
}

// Sort the `times` object by semver, not date.
function sortTimes(times = {}) {
  return Object.keys(times)
    .sort((a, b) => {
      if (semver.valid(a) && semver.valid(b)) {
        return semver.rcompare(a, b);
      }
      // `time` is probably "created" or "modified".
      return 0;
    })
    // Convert from sorted Array to Object.
    .reduce((coll = {}, version = "") => Object.assign(coll, {
      [version]: times[version]
    }), {});
}

// Sort the `versions` object by semver, not date.
function sortVersions(versions = {}) {
  return Object.values(versions)
    .sort((a, b) => semver.rcompare(a.version, b.version))
    // Convert from sorted Array to Object.
    .reduce((coll = {}, item = {}) => Object.assign(coll, {
      [item.version]: item
    }), {});
}
