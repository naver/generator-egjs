# eg.<%= capitalize(componentName) %>

## requirement

```
// dependencies
npm install
```

## build

```
npm run build //or webpack
```

## test

```
npm run test //or karma start
```

## documentation

```
npm run jsdoc //or jsdoc -c jsdoc.json
```

## dev server

```
npm run dev-server //or webpack-dev-server
```

checkout http://localhost:8080/demo/

## directories

```
eg.<%= componentName %>
  ├─ dist/
  │   └─ eg.<%= componentName %>.js
  │   └─ eg.<%= componentName %>.min.js
  │   └─ eg.<%= componentName %>.js.map
  │   └─ eg.<%= componentName %>.min.js.map
  ├─ src/
  │   └─ index.js
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
