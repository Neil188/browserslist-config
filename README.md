# Browserslist config

[![npm version](https://img.shields.io/npm/v/@neil188/browserslist-config.svg?style=popout)](https://www.npmjs.com/package/@neil188/browserslist-config)
[![Travis build](https://img.shields.io/travis/Neil188/browserslist-config/master.svg?style=popout)](https://travis-ci.org/Neil188/browserslist-config)
[![NpmLicense](https://img.shields.io/npm/l/@neil188/browserslist-config.svg?style=popout)](https://www.npmjs.com/package/@neil188/browserslist-config)
[![GitHub last commit (master)](https://img.shields.io/github/last-commit/neil188/browserslist-config/master.svg?style=popout)](https://github.com/Neil188/browserslist-config) [![Greenkeeper badge](https://badges.greenkeeper.io/Neil188/browserslist-config.svg)](https://greenkeeper.io/)

Browerslist rules for my personal projects.

## Usage

Install using:

```bash
npm install --save-dev @neil188/browserslist-config
```

Then create a browserslist entry in your package.json file

```json
  "browserslist": [
    "extends @neil188/browserslist-config"
  ]
```

plus any additional requirements such as:

```json
  "browserslist": [
    "extends @neil188/browserslist-config",
    "maintained node versions",
  ]
```

To list browser versions covered use command

```bash
npx browserslist
```

## LICENSE

MIT
