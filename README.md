# Heart Trail Animation

This project creates a visually appealing heart trail effect that follows the cursor on a webpage. By leveraging simple DOM manipulation and JavaScript, this project is an excellent demonstration of creativity, interactive web design, and fundamental programming concepts.

## Features

- **Dynamic Heart Creation**: Hearts of random sizes are generated dynamically as the mouse moves.
- **Smooth Animation**: Each heart animates gracefully, enhancing user interaction.
- **Efficient Cleanup**: Hearts disappear automatically after a set duration to maintain performance.

## How It Works

1. **Event Listener**: The project uses a `mousemove` event listener to detect cursor movement.
2. **Heart Generation**: When the mouse moves, a new `<span>` element is created at the cursor's position.
3. **Styling**: The heart's size and position are randomized for a unique trail effect.
4. **Automatic Cleanup**: Each heart is removed from the DOM after 3 seconds to prevent clutter and optimize performance.

### Key Code Snippet
```javascript
const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
```

## Why This Project?

This project is an excellent representation of:

- **Problem-Solving**: Creating a smooth, interactive effect while ensuring optimal performance.
- **Creativity**: Demonstrating an eye for design and user experience.
- **Technical Skill**: Showcasing proficiency in JavaScript, DOM manipulation, and event handling.



## Potential Improvements

- **Custom Shapes**: Allow users to switch between different shapes (e.g., stars, circles).
- **Color Themes**: Add a feature to change the heart's color dynamically.
- **Optimized Performance**: Implement throttling or debouncing to further optimize performance.




https://github.com/user-attachments/assets/ff4addec-ea87-4c64-a6ac-0c0c40ffe620

