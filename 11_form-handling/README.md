# React Form Submission Example

A simple React project demonstrating how to handle form submission using the `onSubmit` event and `preventDefault()` method.

---

# 📌 Features

- React Functional Component
- Form Submission Handling
- Prevent Page Reload
- Event Handling in React
- Clean and Beginner-Friendly Code

---

## Flow of Execution

When you click the Submit button:

1. The <form> tries to submit.
2. `onSubmit` event runs.
3. React sends the event object e.
4. `submitHandler(e)` gets called.
5. `e.preventDefault()` stops page refresh.
6. "Form submitted" prints in console.

---

## Why preventDefault() is needed

Normally, HTML forms refresh the page after submission.

```
<form>
```

Default behavior = page reload.

But in React, we usually handle forms manually using JavaScript.

So:

`e.preventDefault()`

means:

"Stop the browser’s default form submission behavior."

---