# 🚀 DEVORA

DEVORA is a simple React-based technology stack management application. Users can explore different technologies and add their favorite technologies to their selected stack.

## 🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* JavaScript
* HTML5
* CSS3

## ✨ Features

* 📚 Browse different technologies from JSON data.
* ➕ Add technologies to your personal stack.
* 🚫 Prevent the same technology from being added twice.
* 🗑️ Remove technologies from the selected stack.
* 📱 Fully responsive design for mobile, tablet, and desktop.

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript. React uses JSX to make UI code easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component and can change when the user interacts with the application.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component.

In this project, I used `useState` to manage the selected technology stack and update it when technologies are added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders or when specific data changes.

I used `useEffect` to fetch the technology data from the local JSON file when the application loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React understand which items were added, removed, or changed and update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, when the selected stack is empty, I show an empty stack message:

```tsx
{selectedStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selectedStack.map((tech) => (
    <TechCard key={tech.id} technology={tech} />
  ))
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**.

A child can send information back to the parent by calling a function that the parent passes through props.

For example:

```tsx
<TechCard technology={tech} onAdd={handleAdd} />
```

Here, `technology` and `onAdd` are passed from the parent to the child.

---

## 👨‍💻 Author

**Parvez Mosharaf**

Built with ❤️ using React.
