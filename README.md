# my-Exercise on MindArc

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### reference
* AOS scrolling animation 
https://github.com/michalsnik/aos#easing-functions

* bootstrap-vue-3
https://cdmoro.github.io/bootstrap-vue-3/

* sweetalert2
https://www.npmjs.com/package/vue-sweetalert2
https://sweetalert2.github.io/#download




### Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana
+'a' resolves to NaN ("Not a Number") because it coerces a string to a number, while the character a cannot be parsed as a number.
So adding NaN to "ba" turns NaN into the string "NaN" due to type conversion, gives baNaN. And then there is an a behind, giving baNaNa.






