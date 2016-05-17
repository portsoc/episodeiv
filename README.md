# Star Wars in CSS
## Summary

The introductory crawl from Star Wars is defined in `index.txt`.  This is marked up in `index.html`.  To see the development of a style sheet, edit the stylesheet definition changing the style from `style0` through to `style7`.

e.g.
```html
<link href="style/style0.css" rel="stylesheet">
```
becomes
```html
<link href="style/style1.css" rel="stylesheet">
```

Add a starfield, logo and score with the script below, note that for copyright reasons you'll have to source your own copy of the soundtrack and save it as `score.ogg` in order to enjoy the synchronised music.

```html
<script src="stars.js"></script>
```

# Files
## From TXT to HTML

We have added...
* a doctype
* an html element, defining the default language for all sub elements in this page
* a head section contianing:
    * declaration of the character set to be used
    * the page title (a requirement)
    * a link to the stylesheet to be used

* a body section
    * that contains an article, that contains a section, that contains all the content.
* a header that groups the two heading elements
* h1 elements arount the main title
* strong emphasis to the words First Order, Republic and Resistance.

## Style0 to Style1
* Flip the background and foreground colours
```css
body {
    background: black;
    color: white;
}
```

## Style1 to Style2
* Use the correct star wars colour
```css
    color: #ffd23e;
```

## Style2 to Style3
* Switched to a sans-serif font
```css
    font-family: arial;
```

* Styled the article so that it is justified and centered
```css
article {
    text-align: justify;
    margin: auto;
    width: 15em;
}
```

## Style3 to Style4

* Centre-aligned the all heading text
```css
article>section>header {
    text-align: center;
}
```

* Forced the main heading to be uppercase.
```css
article>section>header>h1 {
    text-transform: uppercase;
}
```
* Changed the default styling for strong text to be uppercase rather than bold.
```css
article>section strong {
    text-transform: uppercase;
    font-weight: normal;
}
```


## Style4 to Style5

* Made articel font size to be 6.66 hundredths of the width of the viewport.  The width is 15ems, and 100/15 is 6.66, so this scales the font so that 15ems fills the base of the screen.
```css
    font-size: 6.666vw;
```

## Style5 to Style6

* Set the screen perspective view-point to be half the height of the screen (rather than the default of infinity with infinite zoom, which would just give us squashed text, rather than text going into the distance).

```css
body {
  perspective: 50vh;
  overflow: hidden;
  height: 100vh;
}
```

* Anchor the base of the article to the bottom of the viewport.
* This baseline is then the origin of rotation when the article is tilted back (rotated around the x-axiz by 45 degrees).  

```
article {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  transform-origin: center bottom;
  transform: rotate3d(1, 0, 0, 45deg);
}
```


## Style6 to Style7

* Add keyframe animation to scroll and fade the text

```css
article {
  animation: crawler 72s linear;
  animation-fill-mode: forwards;
}

@keyframes crawler {
0%
  {
    transform:  rotate3d(1, 0, 0, 45deg) translateY(100%);
    opacity: 1;
  }

90% {
    opacity: 1;
}
100%
  {
    transform:  rotate3d(1, 0, 0, 45deg) translateY(-50%);
    opacity: 0;
  }
}
```

## Style7 to Style8

* Our first change to index.html
* Add a JS-generated star field
* Adds the *STAR WARS* logo into the document, and a new keyframe animation to the css to shrink it
* Adjust the timings so the scrolling text waits for the logo to shrink.
* Adds the score

```html
<script src="stars.js"></script>
```
