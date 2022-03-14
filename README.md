# Input Auto Resize
The [InputAutoResize.js](https://github.com/andremalveira/InputAutoResize/InputAutoResize.js) script causes your inputs to be extended as you type.
## Usage
```html
  <!--page.html -->

  <input type="text" autoresize >
```

```html
  <!--page.html -->

  <script src="InputAutoResize.js"></script> 
  <script>
    InputAutoResize()
  </script>
```

## Tag Options

| Attributes    | Description          | Type            | Default     |
| ------------- | -------------------- | --------------- | ----------- |
| width=""      | Initial input size   | Number          | 200px       |
| maxWidth=""   | Maximum input size   | Number / String | auto        |

### Example
```html
  <input autoresize type="text" width="150" maxWidth="450">
```
<br/>

> ⚠️ Note: In `maxWidth` you can also add the `#id` of the container, parent div or form that wraps the inputs, so the maximum size of the input will be based on its parent div. 

### Example
```html
  <form id="form">
    <div class="row">
      <input autoresize type="text" width="150" maxWidth="#form">
    </div>
  </form>
```
<br/>

## Function Options

| Option        | Description      | Type      | Default   |
| ------------- | ---------------- | --------- | --------- |
| fontFamily:   | Font style       | String    | auto      |
| fontSize:     | Font size        | Number    | initial   |
| padding:      | Input padding    | Number    | null      |
### Example
```js
  InputAutoResize({
    fontSize: 16,
    padding: 5
  })
```
<br/>

#

<p align="center">
Created by <a href="https://github.com/andremalveira">André Malveira</a>
</p>