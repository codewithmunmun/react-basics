# React Child to Parent Data Flow

This project demonstrates **Child-to-Parent Communication in React** using **props** and the **useState Hook**.

The parent component manages the state, while the child component updates that state using a function passed through props.

---

# Technologies Used

- React JS
- JavaScript (ES6)
- Vite

---

# Project Structure

```bash
src/
│
├── App.jsx
│
└── components/
    └── Navbar.jsx
```

---

# App.jsx

```jsx
import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div>
      <h1>Theme is {theme}</h1>

      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
```

---

# Navbar.jsx

```jsx
import React from 'react'

const Navbar = (props) => {

    function changeTheme(){
        props.setTheme('dark')
    }

    return (
        <div>
            <button onClick={changeTheme}>
                Change theme
            </button>
        </div>
    )
}

export default Navbar
```

---

# Concepts Used

## useState Hook

Used to create and manage state in React.

```jsx
const [theme, setTheme] = useState('light')
```

- `theme` stores the current value
- `setTheme` updates the value

---

## Props

Props are used to pass data and functions from parent component to child component.

```jsx
<Navbar theme={theme} setTheme={setTheme}/>
```

---

## Child-to-Parent Communication

The child component communicates with the parent by calling a function received through props.

```jsx
props.setTheme('dark')
```

This updates the parent state.

---

# Working Flow

1. Parent component creates state using `useState`
2. Parent passes state and updater function to child component
3. Child receives props
4. Button click triggers a function in child
5. Child calls parent’s updater function
6. Parent state updates
7. React re-renders the component

---

# Output

Initial Output:

```bash
Theme is light
```

After Button Click:

```bash
Theme is dark
```

---

# Key Points

- React follows one-way data flow
- State is owned by the parent component
- Child components cannot directly modify parent state
- Parent passes updater function as props
- Child calls that function to request state update

---

# Conclusion

This project helps in understanding:

- React state management
- Props
- Callback functions
- Child-to-Parent communication
- Component interaction in React

# Author

## Munmun Kumari