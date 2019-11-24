## HTML Fundamentals and Practice.

### Notes:
#### Intro:
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
    * hx (h1, h2, ...) = Heading.
    * p = Paragraph.
    * input = open box for text inputs. Self-closing tag.
    * a = Anchor. A link to somewhere else. <a href="www.github.com/s1dequest">My Profile</a>
    * div = Division. Like a cardboard box - defined by what is inside of it. A generic container for grouping other things.
      * Example: A blog would have each post in its own div.
    * span = A container for small bits of text. A ziplock bag. With CSS this division allows us to make the span text different than the rest.
    * ol = ordered list, ul = unordered list, li = list item.
    * button = A button. Used in conjunction with JS.
    * img = An image. Use to load images to a page. Can also use css for this, but css images are more designed for use as background images. IMG tags are more for content relevant to text.
    * textarea = More text than an input tag.
    * form = For gathering data from users. Like a survey. A collection of input, textarea, and select tags.
    * table = Like excel. tr = table row. td = a cell in the table.
    * And many more!