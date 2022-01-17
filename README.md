# TypeScript-OOP-Like-Functionality
Apply TypeScript and Object-oriented Programming Fundamentals to implement the Facebook "Like" functionality

### The Facebook "Like" Component

This component is a TypeScript class that encapsulates the data for rendering the like button (eg: the number of likes, and whether the button is in the on/off state).

It also responds to user actions. So, when the user clicks the "Like" button, the number of likes should be increased and the button should be in the "selected/on" state.

If the user clicks the button again, the number of likes should be decreased and the button should be in the "unselected" state.

### How to run in terminal

Tell the typescript compiler to target a version specifically to ECMAScript 5

```shell
tsc -t ES5 *.ts && node main.js
```
