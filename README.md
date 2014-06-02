# Alert.js
###### A simple way to show nice alerts.

###### [Example here](http://jsfiddle.net/d7dvh/1/embedded/result/)

# Usage

```js

// Just text
Alert('Some message');


// With header
Alert({
    title    : 'This is a title',
    messsage : 'Hello world'
});
```
That being said, it is very easy to convert __all__ of your `alert()` calls into Alert.js instances
simply by using the Find and Replace function in your editor. Simply replace `alert(` for `Alert(`!

# To do

- Organize file structure
- Older browser support (I'm looking at you, Internet Explorer)
- Add support for an icon (either icon font or image)
- Add support for customized effects
- Theme support