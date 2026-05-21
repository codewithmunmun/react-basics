# React API Calling

This project demonstrates API calling in React using:

- fetch()
- Axios
- async/await
- React useState

It also explains:

- Promises
- Asynchronous operations
- response.json()
- Object destructuring
- Rendering API data using map()

---

# Project Setup

## Create React App using Vite

```bash
npm create vite@latest
```

Select:

```bash
React
JavaScript
```

---

## Install Dependencies

### Install Axios

```bash
npm i axios
```

---

# API Calling using fetch()

## Basic fetch() Example

```javascript
import React from 'react'

const App = () => {

  function getData() {

    const response = fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    )

    console.log(response)
  }

  return (
    <div>
      <button onClick={getData}>
        Get data
      </button>
    </div>
  )
}

export default App
```

---

# Why Promise {<pending>} is shown?

`fetch()` is asynchronous.

It immediately returns a Promise before actual data arrives.

So:

```javascript
console.log(response)
```

prints:

```bash
Promise {<pending>}
```

---

# Internal Working of fetch()

When button is clicked:

1. Browser sends request to API
2. API takes some time to respond
3. Meanwhile JavaScript continues running
4. `console.log(response)` executes immediately
5. Promise is still pending

---

# Using async/await

## Code

```javascript
import React from 'react'

const App = () => {

  async function getData() {

    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    )

    console.log(response)
  }

  return (
    <div>
      <button onClick={getData}>
        Get data
      </button>
    </div>
  )
}

export default App
```

---

# What async does

`async` makes a function asynchronous.

It allows usage of `await` inside the function.

Example:

```javascript
async function demo() {

}
```

---

# What await does

`await` pauses execution until Promise is resolved.

Example:

```javascript
const response = await fetch(url)
```

Meaning:

```text
Wait until API response arrives
```

---

# Execution Flow

1. Button clicked
2. `getData()` starts
3. `fetch()` sends API request
4. `await` pauses function
5. JavaScript waits for server response
6. Response arrives
7. `response` variable gets data
8. `console.log(response)` runs

---

# response.json()

## Code

```javascript
const getData = async () => {

  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  )

  const data = await response.json()

  console.log(data)
}
```

---

# Why response.json() is asynchronous?

API response comes as raw response stream.

JavaScript still needs to:

1. Read response body
2. Convert JSON text into JavaScript object

This takes time.

So:

```javascript
response.json()
```

also returns a Promise.

---

# Internally What Happens

```text
fetch()
   ↓
returns Promise
   ↓
await waits
   ↓
Response object received
   ↓
response.json()
   ↓
returns Promise again
   ↓
await waits
   ↓
Actual JS object received
```

---

# Output

```javascript
{
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
}
```

---

# API Calling using Axios

## Install Axios

```bash
npm i axios
```

---

# Axios Example

```javascript
import axios from 'axios'

const App = () => {

  const getData = async() => {

    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )

    console.log(data)

  }

  return (
    <div>
      <button onClick={getData}>
        Get data
      </button>
    </div>
  )
}

export default App
```

---

# What Happens Internally

When button is clicked:

1. `getData()` runs
2. Axios sends API request
3. `await` waits for response
4. Response arrives
5. Data is extracted
6. `console.log(data)` prints users

---

# Understanding This Line

```javascript
const {data} = await axios.get(url)
```

This line performs:

1. API calling
2. Waiting for response
3. Object destructuring

---

# Axios Response Object

Axios returns:

```javascript
{
  data: [...],
  status: 200,
  headers: {},
  config: {}
}
```

---

# Object Destructuring

Instead of writing:

```javascript
const response = await axios.get(url)

console.log(response.data)
```

we directly extract data:

```javascript
const {data} = response
```

This is called:

```text
Object Destructuring
```

---

# Equivalent Code

```javascript
const response = await axios.get(url)

const data = response.data
```

---

# Why Axios Feels Easier than fetch()

## fetch()

```javascript
const response = await fetch(url)

const data = await response.json()
```

Needs:

- 2 awaits
- manual JSON conversion

---

## Axios

```javascript
const {data} = await axios.get(url)
```

Needs:

- only 1 await
- automatic JSON conversion

---

# fetch vs Axios

| fetch() | Axios |
|----------|--------|
| Built into browser | External library |
| Need response.json() | Automatic JSON conversion |
| More manual work | Cleaner syntax |
| Basic features | More features |

---

# Rendering API Data using useState

## Example

```javascript
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async() => {

    const response = await axios.get(
      'https://picsum.photos/v2/list'
    )

    setData(response.data)
  }

  return (
    <div>

      <button onClick={getData}>
        Get data
      </button>

      <div>

        {data.map(function(elem, idx){

          return (
            <h3 key={idx}>
              {idx + 1}. Hello {elem.author}
            </h3>
          )

        })}

      </div>

    </div>
  )
}

export default App
```

---

# What Happens Here

1. Button clicked
2. API request sent
3. Axios receives data
4. `setData()` updates state
5. React re-renders component
6. `map()` loops through array
7. Data appears on UI

---

## Project Screenshot

# List of users displayed
![Screenshot](./src/assets/List_of_users.png)

---

# Concepts Used

| Concept | Purpose |
|----------|----------|
| useState | Store API data |
| async/await | Handle asynchronous operations |
| fetch() | API calling |
| Axios | API calling library |
| response.json() | Convert JSON into JS object |
| map() | Render array data |
| setState | Update UI |

---

# Final Learning Summary

After completing this project, you will understand:

- What APIs are
- How frontend communicates with backend
- What Promises are
- Why async/await is needed
- Difference between fetch and Axios
- How response.json() works
- How to store API data in state
- How to render API data in React