# egjs-<%= componentName.toLowerCase() %>

## requirement

```
// dependencies
npm install
```

## start

```
// it will open browser
npm start // or webpack-dev-server --open
```

checkout http://localhost:8080/demo

## build

```
npm run build // or webpack
```

## test

```
npm run test // or karma start
```

## documentation

```
npm run jsdoc // or jsdoc -c jsdoc.json
```

## directories

```
egjs-<%= componentName.toLowerCase() %>
  ├─ config/
  │   ├─ webpack.config.development.js
  │   ├─ webpack.config.production.js
  │   └─ webpack.config.packaged.js
  ├─ dist/
  │   ├─ <%= componentName.toLowerCase() %>.js
  │   ├─ <%= componentName.toLowerCase() %>.min.js
  │   ├─ <%= componentName.toLowerCase() %>.js.map
  │   └─ <%= componentName.toLowerCase() %>.min.js.map
  ├─ src/
  │   ├─ index.js
  │   └─ <%= componentName.toLowerCase() %>.js
  ├─ demo/
  │   ├─ js
  │   │   └─ demo.js
  │   └─ index.html
  ├─ doc/
  ├─ test/
  │   ├─ manual/
  │   │   ├─ js
  │   │   │   └─ test.js
  │   │   └─ index.html
  │   └─ unit/
  │       ├─ js
  │       │   └─ test.js
  │       └─ index.html
  ├─ .editconfig
  ├─ .gitignore
  ├─ .npmignore
  ├─ bower.json
  ├─ karma.conf.js
  ├─ package.json
  ├─ README.md
  └─ webpack.config.js
```

## License

<%= options.license %> © <%= options.author %>
