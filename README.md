# cms-esque
A menu app

### Build a content management system for things.

Create a menu app. You should be able to add items and view the menu. **Your application should include two different 'views'** (not actual html files, but different DOMs being displayed). You don't need to worry about styling.

[ x ] You should have a pair of links at the top of your page that allow you to navigate between the views (see hint below).

[ x ] The first view should allow users to **add new foods**. Foods should have at least a name, a description, and a price.

[ x ] The second view should allow users to **view the whole menu**. You should display all foods as well as their name, description, and price. Add a text box at the top of the menu view and filter down the list of foods to those that include the search string in the name.

[ x ] You should have a main `app.js` and at least one other JS file. I'd suggest making a separate one to include

## Approaching this

Tackle it, like all things, *piece by piece*. You do not have to use map and filter, but you can if you want to. You don't have to use callbacks, but it'd be good to practice if you can. You're practicing writing a full app here, so think about the problem holistically and then break it into pieces.

You do not need to use Ajax.

* Tackle one view at a time.
* Create fake data to start with and replace it with real data later.
* Think of the functionality you'll need and how you could organize it to make it easier on yourself.

## Hint: multiple views

It's common these days to have your app run on a single HTML page, and have JS change the content; the 'old' way is to refresh the page completely whenever you want to go to another page, but (like AJAX) that feels a lot slower and less fluid from a user perspective.

**You can change which 'page' shows up by modifying which of your DIVs has the `hidden` class applied.**

## Hard mode

[ ] Give users a way to delete items.

## Steps:

* ~~Create a bit of HTML to serve as a guidline for the structure to help visualize the project (which will later be stripped in favor of rendering in JS).~~

* ~~Add a header to navigate to the 'add' section~~

* ~~Create the addItem 'section' which will have 3 inputs and a button to submit a new menu item.~~

* ~~Clicking on either header will add 'hide' class to the view opposite to the one represented and remove it from t'other.~~

* ~~Create a function that takes the info in each input box, creates an object from it, and ~~pushes it into the "food" array~~ appends it to the 'menu' class. The inputs should then be cleared.~~

* Perhaps include a message indicating that the menu has been updated.