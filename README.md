# Project: Video Store Kiosk
__Project Goals:__ Create an Ember single-page application that allows the user to interact with a library of movies. The final product will be something like the interface used at a RedBox kiosk or on Netflix.

__Project API:__ I've provided a [Node/Express app to act as the project's backend API](https://github.com/Ada-C5/video-store-kiosk-api). You'll recognize some of it as it's based on the _Video Store API_ project. Use it to provide data to your Ember app. See the project's [README](https://github.com/Ada-C5/video-store-kiosk-api/blob/master/README.md) for installation and startup instructions.

## Project Requirements
- Create a new Ember application using the `ember` command line tool ![heartDone](http://www.greenamericatoday.org/images/icon-tiny-heart.jpg)
- All data presented to the user must be sourced from the Node/Express API via AJAX ![heartDone](http://www.greenamericatoday.org/images/icon-tiny-heart.jpg)
- Create this as a Single Page Application; no unnecessary page reloads or redirections ![heartDone](http://www.greenamericatoday.org/images/icon-tiny-heart.jpg)

### Primary View
- Show a paginated collection of Movies, __10 per page__ ![heartDone](http://www.greenamericatoday.org/images/icon-tiny-heart.jpg)
- Allow a user to interact/select a Movie via click, touch, or some other event
  - when selected, a Movie shows more information
  - when deselected, a Movie returns to its default state
  - only 1 movie can be selected at a time
  - selecting a second movie deselects the first
- When a Movie is selected, it can be added to the Queue
- Changing pages deselects all Movies
- Changing pages does not clear the Queue ![heartDone](http://www.greenamericatoday.org/images/icon-tiny-heart.jpg)

### Queue View
- Uses a smaller section of the screen ![heartDone](http://www.greenamericatoday.org/images/icon-tiny-heart.jpg)
- Shows a list of Movies the user has added to the Queue ![heartDone](http://www.greenamericatoday.org/images/icon-tiny-heart.jpg)
- Exists only in the browser's memory; reloading the page will clear the Queue ![heartDone](http://www.greenamericatoday.org/images/icon-tiny-heart.jpg)
- Allows a user to remove a Movie from the Queue ![heartDone](http://www.greenamericatoday.org/images/icon-tiny-heart.jpg)
- Allows a user to rest/clear their Queue ![heartDone](http://www.greenamericatoday.org/images/icon-tiny-heart.jpg)
- When a user pages through Movies, the Queue remains in place and does not change ![heartDone](http://www.greenamericatoday.org/images/icon-tiny-heart.jpg)

### User Experience
What makes for a good kiosk user experience?

- Prioritize finger-friendliness in page design and controls
- Ensure text is clear, legible from a distance of 18 inches
- Control the structure of the page at all times; appearing elements that disrupt/change the flow of the page makes for a jarring experience

### Bonus Fun
- Sorting
  - Add a `/sort` endpoint to the Node/Express API that allows users to sort the Movies for display
  - Add appropriate controls to the Ember app to let a user change how Movies are sorted
- Page Size
  - Alter the Node/Express API to allow more control over how many Movies are returned per page
  - Show the appropriate number of Movies per page _based on the user's device_ (user agent)
- Queue Sorting
  - Allow a user to sort their Queue by implmenting drag-and-drop controls
