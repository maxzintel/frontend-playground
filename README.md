## Frontend Fundamentals and Practice.

#### HTML Intro:
* **HTML = The Structure.** Contains text, images tied to the text, and, in general, groups things together.
* **CSS = The Blueprint.** The rules of what goes where, the colors, sizes, fonts, backgrounds, etc...
  * Like HTML, it doesn't actually _do_ anything, it is just a set of rules to determine how things work/look.
* **Frontend/Client Javascript = The Smart Home.** Pre-programmed stuff you can tell your house to do.
* **Backend Javascript = The Pizza Place.** Where we can request things and get what we ask for.

#### HTML:
* Static, like an essay.
* Tags - a building block. Describes what is inside of it.
  * Using best practices for tags is especially useful for accessibility on your websites.
  * Types:
    * `hx` (h1, h2, ...) = Heading.
    * `p` = Paragraph.
    * `input` = open box for text inputs. Self-closing tag.
    * `a` = Anchor. A link to somewhere else. <a href="https://www.github.com/s1dequest">My Profile</a>
    * `div` = Division. Like a cardboard box - defined by what is inside of it. A generic container for grouping other things.
      * Example: A blog would have each post in its own div.
    * `span` = A container for small bits of text. A ziplock bag. With CSS this division allows us to make the span text different than the rest.
    * `ol` = ordered list, ul = unordered list, li = list item.
    * `button` = A button. Used in conjunction with JS.
    * `img` = An image. Use to load images to a page. Can also use css for this, but css images are more designed for use as background images. IMG tags are more for content relevant to text.
      * `<img src="www.randomimage.com/100/100" alt="a random image"/>`
      * Each image tag will look like this, with a source referring to the image link and an alt that displays when the image cannot be (for accessibility, for example).
    * `textarea` = More text than an input tag.
    * `form` = For gathering data from users. Like a survey. A collection of input, textarea, and select tags.
    * `table` = Like excel. tr = table row. td = a cell in the table.
      * Think of td's as columns. Each td you add to a given tr adds another column to the row.
        * Though, I guess this would not be the case if you had rows that had different amounts of td's.
      * Was used to layout websites back in the day. Nowadays, you probably only want it to display something you'd display in excel.
    * And many more!
  * Attributes - Basically, subvalues you can add to a tag that allow you to do a bit more with the default tags.
    * Inputs:
      * `type="checkbox"`
      * `type="color"`
      * `type="file"`
      * `value`
      * `placeholder`
    * Classes:
      * Can go on any tag. Does nothing by itself.
      * Basically, you add a class to a tag to identify it later with CSS or JS.
      * Useful for CSS. Ex: Apply a class name of 'blog' to all divs containing blogs. Then, we can identify the class and apply CSS rules to _only_ that class.
      * **divs can (and often should) have multiple classes.**
    * ID's:
      * Way less useful than a Class.
      * Where we can reuse a class, recycling that code over and over, with ID's we are saying that this tag is unique.
    * Note: Name things semantically; name them about what they _DO_, not what they look like.
    * Use kebab-case, as HTML is not case sensitive.
* Meta HTML (doesn't produce visual things)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Some Title</title>
  </head>
  <body>
    <h1>A Header</h1>
    <!--- Some Great HTML --->
  </body>
</html>
```
  * DOCTYPE - declare html or version of html. Always just use html.
  * html tag - everything goes in here, beginning and end of doc
  * lang attribute - let the browser know its an english doc
  * head - all the meta info about your document. The title shown on a google result/tab/etc.
    * can also add things like viewport which allows you to shrink the page to fit on mobile.
    * css links
    * anything not shown to the user but used to configure the website.
  * body - stuff people _DO_ see.
  * script - for JS => how you link javascript files to your html.
  * style - for CSS => not typically used in html, generally in the css.
  * link - for CSS => how you bring in all your css.

### CSS INTRO (Cascading Style Sheets):
What if you want your html headers to look different? Let's say you want them to be red.
* Spoiler alert: you do that with css, by creating rules that dictate how the html is displayed.
```css
h1 {
  color: limegreen;
  font-size: 60px;
  font-weight: normal;
  text-decoration: underline;
  text-transform: uppercase;
  border: 3px solid pink;
}
```
* `h1` = the **selector**. Every h1 on the page, apply every rule within the curly braces.
* `color` = a **property**. There are a bunch of properties you can use. You won't use most properties.
* `red` = a **value**. A value that css understands. In this case, it would also understand hex and rgb values.
* `px` = literal value. `em` is also a measure of size, but it is the relative size based on font. Useful when you may change fonts.

*  **The Cascade:**
  * The Cascade settles potential conflicts between CSS Rules. Maybe you want different paragraphs to be different colors, for example. But setting `p {...}` wouldn't do that because it applies the rules within to all paragraph elements.
  * Classes!
```css
.branding {
  color: red;
}
.blog-post {
  color: green;
}
```
```html
<h1 class="branding">This is a red branding header</h1>
<h1 class="blog-post">This is a green blog post header</h1>
```
* Cascade continued...
  * Period before the selector means class.
  * Always use classes for styling. The one exception is if you want literally all types of an element to look the same. Think a table of contents that all have anchors. Something like that.
  * When two things are considered = in css, the one that occurs last (lower on the page) wins.
* example:
```css
.branding {
  border: 1px solid black;
  color: red;
}
.blog-post {
  color: green;
}
```
```html
<h1 class="branding blog-post">I am green AND have a black border.</h1>
```
  * In the above, since the color green comes last, it wins. Since the second class has no border though, it keeps the same border as the first class styling declares.
  * This is called **specificity**.
  * Styling becomes more **specific** if, for example, it has more than one class attached to the styling.
```css
.branding.title-3 {
  color: red;
}
.title-3 {
  color: green;
}
```
```html
<h1 class="branding title-3">This is a red branding header</h1>
```
  * Classes are also more specific than tags. So in the above example, if we had `h1` styling saying it should be yellow, it would still be red.
  * **ID's in Cascades:** they are wrecking balls and override like 10 classes. Basically, dont use them 99% of the time. Same with **!important**. Definitely dont use that.

* **Psuedo Classes:**
  * Associates CSS rules based on certain special events that happen within the markup or user action.
  * Ex: If you want the look of something to change upon hovering over it with your mouse, for example...
```css
.hover-example {
  color: limegreen;
  font-size: 60px;
  font-weight: normal;
  text-decoration: underline;
  text-transform: uppercase;
  border: 3px solid pink;
}
.hover-example:hover {
  background-color: crimson
}
```
  * There are a lot of these. `:focus`, `:active`, `:first-child`, `:last-child`, `:nth-child()`, to name a few.
  * Wildcard Selector:
    * `<style> * { font-weight: bold; } </style>`
      * In this example, everything on our page would become bold.

Note: CSS SpeciFISHity is a great chart for seeing the CSS hierarchy.

### Layout CSS:
CSS can also be used to layout a page differently (rather than just style it). Without it, you could not have two boxes next to eachother.
  * Float - the idea is basically to float something left or right in the css for a class (or whatever). If we say float left the class elements will start appearing as far left as possible. Each additional element will appear next to the prior one, just to the right of it (but still as left as the border allows).

  * **The Box Model**: V important. Should invest some time into understanding this a lot.
    * Display
      * Every tag in CSS has a `display` property associated with it by default.
      * `div`, for example, is `display: block` by default. Meaning it will take up all the width it possibly can, but respects height, width, padding, margins. In other words, by default a block will take up the whole line unless otherwise specified.
      * `span` is `display: inline` by default. It will NOT LET YOU CHANGE height, width, padding, margins. This is a common pitfall. If stuff wont change the way you want, you likely have the wrong `display`.
      * `inline-block` is a hybrid between the above two. It will make the browser try to place your tag inline, but still allows you to control the height, width, padding and margins of it.
      * `flex` and `inline-flex` are similar to blocks in that they can affect the tags around it, but gain a new superpower in how its interior tags are laid out.
      * `grid` and `inline-grid` are more advanced and allow you more power to layout tags inside of them. 
      * `table` is used to make something actu like a table. In general, we use the `<table></table>` tag instead of using CSS to make things act like tables.
      * From outside to inside, `margin` (distance between the element and any other elements), `border` (of the actual element), `padding` (distance between border and element content), `interior content`.
        * Margin = outside element, Padding = inside the element.
        * Box sizing, border-box is the holy grail. This is what we will use the wildcard selector with. It allows you to set width sizing that includes everything, border, padding, etc...
          * by default this is not the case.
```html
<style>
  * {
    box-sizing: border-box;
  }
</style>
```
^ Don't put anything else in that wildcard styling.

### CSS Floats and Flexbox:
* How to setup elements in relation to eachother.
Ex: Basics, without setting things up with floats/flex yet. Below examples will depict derivations from this.
```html
<style>
  .box-1 {
    border: 1px solid black;
    color: white;
    background-color: blue;
    height: 150px;
    width: 300px;
  }
  .box-2 {
    border: 1px solid black;
    color: white;
    background-color: red;
    height: 100px;
    width: 300px;
  }
  .box-3 {
    border: 1px solid black;
    color: white;
    background-color: green;
    height: 200px;
    width: 100px;
  }
</style>
<div class="box-1">1</div>
<div class="box-2">2</div>
<div class="box-3">3</div>
```
* **Floats!** The old way. Only really use this if for some reason you need to support Windows XP.
  * The idea is basically to push an element as far right or left as possible. As you add more elements, it will continue to do this next to the prior element until it needs to go onto a new line. 
```html
<style>
  .floated div { /* Space between the two means it is a Descendent. I.E. all the divs inside 'floated' */
    float: left; /* For above, could instead do .floated .box and add the box class below. */
  }
  .box-1 {
    border: 1px solid black;
    color: white;
    background-color: blue;
    height: 150px;
    width: 300px;
  }
  .box-2 {
    border: 1px solid black;
    color: white;
    background-color: red;
    height: 100px;
    width: 300px;
  }
  .box-3 {
    border: 1px solid black;
    color: white;
    background-color: green;
    height: 200px;
    width: 100px;
  }
</style>
<div class="floated">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```
* **Flex!** A display mode for css `display: flex;`. Above, we needed to tell float to act on all `div` or `class="box"` under the class `floated`. With flex this is not the case. When using `display: flex` on a parent container, it automatically applies to everything inside of it.
  * Will not wrap unless specified. It will squish the boxes proportionally to fit on one line.
```html
<style>
  .flex-container { 
    display: flex;
    width: 100%;
    border: 1px solid black;
  }
  .box-1 {
    border: 1px solid black;
    color: white;
    background-color: blue;
    height: 150px;
    width: 300px;
  }
  .box-2 {
    border: 1px solid black;
    color: white;
    background-color: red;
    height: 100px;
    width: 300px;
  }
  .box-3 {
    border: 1px solid black;
    color: white;
    background-color: green;
    height: 200px;
    width: 100px;
  }
</style>
<div class="flex-container">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```