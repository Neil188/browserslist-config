# Browserslist config

Brrowerslist rules for my personal projects.

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
