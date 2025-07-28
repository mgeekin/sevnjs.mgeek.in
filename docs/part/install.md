# Install

## Method 1: Clone starter project from Github

```bash
git clone https://github.com/SevnJS/sevn-init.git
```



## Method 2:  Add script tag in html and write app logic in script.js

```html
<script src="https://sevnjs.github.io/cdn/latest/sevn.min.js"></script>
```
#### Or use fixed version as
```html
<script src="https://sevnjs.github.io/cdn/v0.8.3/sevn.min.js"></script>
```

And create a `script.js` file in same directory as `index.html`. **sevn** will load `script.js` . 

##### Example index.html and script.js

`index.html`
```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://sevnjs.github.io/cdn/latest/sevn.min.js"></script>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
```

`script.js`
```javascript
//Write your app logic
//load(["./yourscript.js","./yourstyle.scss"]) //script.js is loaded automatically.
append(app, "", "over") /* reset app */
append(app, gen(header, "appheader", 'Header content', 'header'));
append(app, gen(main, "appmain", 'Main content', 'appmain container'));
append(app, gen(footer, "appfooter", "Footer content", 'container'));
```


> By default it will try to load `script.js` from dir where `index.html` is located, so you can write code in `script.js` and place it with `index.html`

