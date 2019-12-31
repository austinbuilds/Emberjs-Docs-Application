# :fire: Emberjs Documentation Application

Emberjs application built by following along with the official documentation. Currently includes project setup, routes, templates, components, interactive components, acceptance and component testing. The project will be adapted to its own site after completion of the documentation guide to further solidify the understanding of concepts.

## :floppy_disk: Install

Dependencies:

- ember
- ember-cli

Recommended:

```sh
npm i ember-cli
```

Init:

```sh
./node_modules/.bin/ember init
```

NPM Scripts:

> package.json

```json
  "scripts": {
    "build": "ember build",
    "lint:hbs": "ember-template-lint .",
    "lint:js": "eslint .",
    "start": "ember serve",
    "test": "ember test",
    "ember": "ember"
  },
```

Example:

```sh
npm run ember generate component name
```

Run:

- npm start

:pushpin: Serving on localhost:4200

:pushpin: Serving testing on localhost:4200/tests

## Topics Covered - Tutorial Part One

View the official guide [here](https://guides.emberjs.com/release/tutorial/part-1/).

### Chapter 1

- Installing Ember CLI
- Creating a new Ember app with Ember CLI
- Starting and stopping the development server
- Editing files and live reload
- Working with HTML, CSS and assets in an Ember app

### Chapter 2

- Defining routes
- Using route templates
- Customizing URLs
- Linking pages with the `<LinkTo>` component
- Passing arguments and attributes to components

### Chapter 3

- The purpose of automated testing
- Writing acceptance tests
- Using generators in Ember CLI
- Testing with the QUnit test framework
- Working with Ember's test helpers
- Practicing the testing workflow

### Chapter 4

- Extracting markup into components
- Invoking components
- Passing content to components
- Yielding content with the `{{yield}}` keyword
- Refactoring existing code
- Writing component tests
- Using the application template and `{{outlet}}`s

### Chapter 5

- Generating components
- Organizing code with namespaced components
- Forwarding HTML attributes with `...attributes`
- Determining the appropriate amount of test coverage

### Chapter 6

- Adding behavior to components with classes
- Accessing instance states from templates
- Managing state with tracked properties
- Using conditionals syntaxes in templates
- Responding to user interaction with actions
- Invoking element modifiers
- Testing user interactions

### Chapter 7

- Managing application-level configurations
- Parameterizing components with arguments
- Accessing component arguments
- Interpolating values in templates
- Overriding HTML attributes in `...attributes`
- Refactoring with getters and auto-track
- Getting JavaScript values into the test context

:pushpin: Map API omitted, replaced with GitHub logo placeholder.

### Chapter 8

- Working with route files
- Returning local data from the model hook
- Accessing route models from templates
- Mocking server data with static JSON files
- Fetching remote data from the model hook
- Adapting server data
- Loops and local variables in templates with `{{#each}}`

## :computer: Technologies Demonstrated

- HTML
- CSS
- JavaScript
- Emberjs

## :man_technologist: Author

- **Austin** - [austinbuilds](https://github.com/austinbuilds)
