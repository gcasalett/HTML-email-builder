# HTML-email-builder

To do: 
- Figure out how to better organize files. Thinking about images that may be included in the template, how to move those to dist?
- Add a "how this all works" section 

This is a very simple Grunt task to compile HTML emails from a HTML file and CSS stylesheet. Using [Zurb's Ink framework](http://zurb.com/ink/) as a base. 

### Usage

1. Unzip files in your working directory. On the command line (or terminal), run `$ npm install`. This will install Grunt and all its dependencies.
2. Create your email template. Using source.html. Put all your styles in ink.css. Preferably, add them at the bottom of the file and don't mess too much with their styles, if possible.
3. Once you're ready, go to the command line and run `$ grunt`. Grunt will generate a new folder called "dist" and a new html file in there (email-inline.html). This is your final html file.
4. Grunt will then continue to watch for changes to source.html and ink.css. Make your changes and every time you save either one of those files, Grunt will automagically update email-inline.html.

