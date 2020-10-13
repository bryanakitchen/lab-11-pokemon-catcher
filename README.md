# lab-11-pokemon-catcher

- Manage complex app state over time, tracking and displaying:
    - Number of total pokemon caught so far in this session
    - How many of _each pokemon_ you've caught so far in this session
    - How many times the user has encountered a given pokemon in this session
- Use a `while` loop to pick random pokemon _with no duplicates_
- Use `window.location` to navigate the user to another page

HTML:
    - labels that include the image and radio buttons
    - Radio buttons (sharing same name)
    - img tags
    - a `Catch` button
    - div to display how many caught
    - a `clear/reset` button (on results page)

Initial State + Grab DOM Elements
    - raw JSON data
    - encountered counters for each pokemon
    - captured counter for each pokemon
    - let click counter = 0
    - grab DOM elements from HTML

Event Listener
    - onClick event listener for Catch Button:
        - refresh radio buttons
            - remove display hidden?
        - increment encountered pokemon
        - increment captured pokemon
        - generate three new pokemon
            - FUNCTION
            - must be different
        - upon reaching 10, go to results page
    
Results Page
    - List of encountered pokemon and how many times they were caught
    - Total?
    - Reset button - event listener
        - return state to 0


## Pokecatcher Page
1) First, you will select three random photos from the available pokemon and display them side-by-side-by-side in the browser window.
1) Then, you'll want to be able to receive clicks on those displayed pokemon images, and track those clicks for each pokemon. You'll also want to track how many times each pokemon is displayed and each time each pokemon is clicked. Do this for:
    * A single, individual user session (which the user can click a clear button to play again)
    * STRETCH: Add the session to an array of all sessions stored in local storage. This can be used to report on all-time results. This will be an _array of arrays_.

1) When the user clicks on a pokemon, three new non-duplicating random pokemon images need to be automatically displayed. The three pokemon images that are displayed should contain no duplicates.
    - [AS A PRETTY FREAKING HARD STRETCH GOAL: nor should they duplicate with any pokemon images that we displayed immediately before (you may want to layer in this second requirement after the first is working)].
    - Additional stretch: Below each image, show how many of this kind of pokemon the user has encountered already, and how many they'ver already captured.
1)  At the top of the page, it should tell the user how many total pokemon they've caught so far.

## Results page
1) After 10 total pokemon have been captured, navigate the user to a `/results` page and display a list of the pokemon with *times encountered* and *times captured*. Also display pokemon who were encountered, but never captured.
1) You'll need a button that clears local storage for the current user session so that a new user can play with the site.


1) WHAT IS YOUR APP STATE? How will you represent it as a view?
1) When will your state change? In response to what user action?
1) What pages will need to be created?
1) What data will need to be saved, updated, and when?
1) What variables will need to be used to track data?
1) What data will need to be saved to local storage?

Data Model Example:
[
    {
        pokemon: 'magikarp',
        encountered: 1,
        captured: 1,
    },
        {
        pokemon: 'charizard',
        encountered: 3,
        captured: 1,
    }
        {
        pokemon: 'squirtle',
        encountered: 2,
        captured: 0,
    },
    {
        pokemon: 'weedle',
        encountered: 1,
        captured: 1,
    }
]