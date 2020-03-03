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

### CSS (Cascading Style Sheets):
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
