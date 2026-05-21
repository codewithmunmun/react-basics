# React Local Storage Demo

A simple React project demonstrating how to use `localStorage` for storing, retrieving, removing, and handling objects using `JSON.stringify()` and `JSON.parse()`.

---

## Features

- Store data in localStorage
- Retrieve data from localStorage
- Remove data from localStorage
- Store objects using `JSON.stringify()`
- Convert stored strings back into objects using `JSON.parse()`

---

## Code Overview

### Store Data
```javascript
localStorage.setItem('user', 'John')
localStorage.setItem('age', 21)