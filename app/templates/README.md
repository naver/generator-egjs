# egjs-<%= componentName.toLowerCase() %>

<%= options.description %>

## Documentation

* API Documentation

## Supported Browsers

The following table shows browsers supported by eg.Visible

|Internet Explorer|Chrome|Firefox|Safari|iOS|Android|
|---|---|---|---|---|---|
|||||||


<% if(options.extendsComponent){ %>## Dependency

egjs-<%= componentName.toLowerCase() %> has the dependencies for the following libraries:

|[egjs-component](http://github.com/naver/egjs/egjs-component)|
|----|
|2.0.0+|<% } %>


## How to Use

### 1. Load visible.pkgd.min.js

```html
<script src="../dist/<%= componentName.toLowerCase() %>.js"></script>
```

### 2. Use eg.<%= componentName.toLowerCase() %>
```javascript
// create eg.<%= componentName.toLowerCase() %>
var <%= componentName.toLowerCase() %> = new eg.<%= upperFirst(componentName) %>();
```

## Bug Report

If you find a bug, please report it to us using the [Issues](https://github.com/youre/repository) page on GitHub.


## License

<%= options.license %> © <%= options.author %>
