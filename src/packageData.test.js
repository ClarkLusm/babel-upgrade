const { updatePackageJSON } = require('./');
const upgradeDeps = require('./upgradeDeps');
const depsFixture = require('./fixtures-deps');
const depsFixtureEarlierBeta = require('./fixtures-deps-earlier-beta.json');
const scriptsFixture = require('./fixtures-script');
const babelCoreFixture = require('./fixtures-babel-core');

test('packages', () => {
  expect(upgradeDeps(depsFixture, "7.0.0-beta.39")).toMatchSnapshot();
});

test('scripts', () => {
  expect(updatePackageJSON(scriptsFixture)).toMatchSnapshot();
});

test('@babel/core peerDep', () => {
  expect(updatePackageJSON(babelCoreFixture)).toMatchSnapshot();
});

test.only('packages - earlier v7', () => {
  expect(upgradeDeps(depsFixtureEarlierBeta, "7.0.0-beta.39")).toMatchSnapshot();
});
