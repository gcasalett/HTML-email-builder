How to use this template:

1. Add your content to the source.html file. If you want to change the structure (add tables, columns, etc.), make sure you refer to the documentation for the Ink framework (http://www.zurb.com/ink), which is what this template is built on.
2. Edit the styles as needed. You need to do this by editing the .scss files in the sass/includes folder. Touch the other files at your own risk!
3. Open a terminal window and navigate to the root folder for this project.
4. On the terminal, type $ grunt

Grunt will run once and then watch for changes. If you change source.html or any of the .scss files, it will run again when you save, and overwrite all the files it previously created. To quit Grunt, enter Ctrl + c.

Grunt will do the following:
1. Compile .scss files and create /css/ink.css
2. Remove all unused styles and create a new stylesheet: /dist/css/tidy.css
3. Take the styles from tidy.css and inline them
4. Save your final file, /dist/email-inline.html. Use this file for production.
