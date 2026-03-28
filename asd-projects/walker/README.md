# 🚶‍♂️ Box Walker

Control a box with your arrow keys! It might seem simple, but this project will deepen your understanding of animation, keyboard input, and object-based game logic.

You’ll take what you learned in **Bouncing Box** and level it up by:

- Responding to real-time keyboard events
- Tracking and updating position using an object
- Moving and drawing with jQuery
- Adding game rules like screen boundaries
- Laying the groundwork for more interactive games

Whether you’re aiming to create your first multiplayer experience, explore tag mechanics, or build your own arcade-style game — this is where it starts.

🕹️ Time to move!

<img src="https://github.com/OperationSpark/images/blob/master/hs-curriculum/asd-projects/walker/walker-demo.gif?raw=true" alt="walker demo gif">

---

## What You'll Learn

- Detecting and handling key presses in JavaScript
- Creating and updating object properties to store game state
- Using helper functions to organize game logic
- Drawing elements dynamically with jQuery and CSS
- Adding limits and rules with boundary detection

**Table of Contents**

- [Overview](#overview)
- [Requirements and Grading](#requirements-and-grading)
- [TODO 0: Preview With Live Server](#todo-0-preview-your-site-with-live-server)
- [TODO 1: Update the Box ID and Style](#todo-1-update-the-box-id-and-style)
- [TODO 2: Register Keyboard Inputs](#todo-2-register-keyboard-inputs)
- [TODO 3: React to Specific Keys](#todo-3-react-to-specific-keys)
- [TODO 4: Declare `walker` Variable](#todo-4-declare-walker-variable)
- [TODO 5: Update the Walker's Position in Code](#todo-5-update-the-walkers-position-in-code)
- [TODO 6: Draw the Walker in the Correct Location](#todo-6-draw-the-walker-in-the-correct-location)
- [TODO 7: Update Speed When Arrow Keys Are Pressed](#todo-7-update-speed-when-arrow-keys-are-pressed)
- [TODO 8: Stop the Walker on Key Release](#todo-8-stop-the-walker-on-key-release)
- [TODO 9: Prevent the Walker from Leaving the Board](#todo-9-prevent-the-walker-from-leaving-the-board)
- [🌟 Extra Challenges](#-extra-challenges)
- [📤 Submit Your Work](#-submit-your-work)

# Overview

In this project we will be building a simple program that allows us to control the movement of a box with the arrow keys. As a challenge, try limiting the movement of the "walker" to the boundaries of the board. Then, add a second "walker" and turn the program into a game of tag!

## Learning Objectives

- Become familiar with the template repository
- Apply lesson on detecting keyboard inputs
- Make connections to the Bouncing Box program and recognize patterns
- Continue to practice using jQuery

## Push Reminder

To push to GitHub, enter the following commands in bash:

```
git add -A
git commit -m "saving walker"
git push
```

## **Requirements and Grading**

| Requirement                                  | Description                                                     | Points  |
| -------------------------------------------- | --------------------------------------------------------------- | ------- |
| **Follow coding best practices**             | Clear formatting, comments, and use of helper functions         | 15      |
| **Correctly update the walker ID and style** | Update HTML and CSS to rename and restyle the game box          | 5       |
| **Handle key press and release events**      | Use `keydown`/`keyup` with appropriate event handler functions  | 15      |
| **Create and update game state object**      | Store position and speed values in an object called `walker`    | 10      |
| **Use helper functions to manage movement**  | Implement `repositionGameItem` and `redrawGameItem`             | 10      |
| **Connect movement to key input**            | Change speed values using key codes and `KEY` constants         | 10      |
| **Stop movement with key release**           | Use `keyup` to reset speed values appropriately                 | 10      |
| **Add boundary logic**                       | Prevent the walker from escaping the board with `wallCollision` | 15      |
|                                              | **Total**                                                       | **100** |

# Lesson Steps

## **TODO 0: Preview Your Site with Live Server**

🎯 **Goal:** Preview your walker game in the browser to see how it looks and behaves as you make changes.

---

### Step-by-Step Instructions

There are two ways to open your project with **Live Server**:

#### **Option 1: Right-Click Method**

1. 📂 Find the `index.html` file in your file tree.
2. Right-click and choose **“Open with Live Server.”**

#### **Option 2: Bottom Panel Button**

1. 👀 Look at the bottom-right corner of your screen in VS Code.
2. Click the **“Go Live”** button to launch Live Server.

---

### ✅ **Check Your Work!**

- Access your walker project through the correct link on your Portfolio page.
- You should see your box (the "walker") appear on the screen.

<!-- 4 line breaks between TODOS -->

<br><br><br><br>

## **TODO 1: Update the Box ID and Style**

🎯 **Goal:** Rename the box in your HTML to `walker` and customize its appearance with CSS.

---

### Step-by-Step Instructions

1. **Update the HTML ID**
   - Open `index.html`.
   - Find the line that creates the game box:
     ```html
     <div id="gameItem"></div>
     ```
   - Change the `id` from `gameItem` to `walker`.

2. **Update the CSS Styles**
   - Open `style.css`.
   - Either modify the existing `#gameItem` styles, or create a new rule for `#walker`:
     ```css
     #walker {
       width: 50px;
       height: 50px;
       background-color: green;
     }
     ```
   - 🎨 Try customizing the walker’s color, size, or shape to make it unique!

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>🔗 Matching IDs:</strong> The <code>id</code> you set in HTML must match the CSS selector used to apply styles. For example, an element with <code>id="walker"</code> should be styled using <code>#walker</code> in your CSS.<br><br>
      <strong>🎨 Custom Styling:</strong> CSS allows you to change the walker’s size, color, and shape. Get creative and give your walker a unique appearance!<br><br>
      <strong>💡 jQuery is Coming:</strong> In future steps, you’ll begin using <code>jQuery</code> to select and modify HTML elements using their IDs — just like in CSS. For example:  
      <code>$("#walker")</code> selects the same element that <code>#walker</code> styles in CSS.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Your walker should now appear on the screen with your custom style.
- If the walker disappears:
  - Check that the ID in your HTML matches the selector in your CSS (`#walker`)
  - Make sure your style changes were saved

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 2: Register Keyboard Inputs**

🎯 **Goal:** Set up an event listener that runs a function whenever a key is pressed on the keyboard.

---

### Step-by-Step Instructions

1. **Find the Setup Code**
   - 🔍 Open `index.js`.
   - Locate the **SETUP** section where jQuery is used to listen for events with this pattern:
     ```js
     $(document).on("...", handleEvent);
     ```

2. **Update the Event Type**
   - Replace the event type with `"keydown"` so that it listens for key presses.

3. **Update the Handler Function Name**
   - Replace `handleEvent` with a new function name: `handleKeyDown`.
   - This is the function that will run when a key is pressed.

4. **Rename the Function**
   - Find the existing `handleEvent` function definition in the **CORE LOGIC** section.
   - Change the function name to `handleKeyDown`.

5. **Log the Key Code**
   - Inside `handleKeyDown`, use `console.log()` to print the numeric key code:
     ```js
     console.log(event.which);
     ```
   - This will help you confirm that key presses are being registered correctly.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>🎮 Keyboard Events:</strong> You can detect key presses with jQuery using <code>$(document).on("keydown", callback)</code>.<br><br>
      <strong>🔢 <code>event.which</code>:</strong> This gives you the numeric code of the key that was pressed (e.g. 37 for left arrow, 65 for "A"). You’ll use these codes later to control the walker’s movement.<br><br>
      <strong>🧪 Console Logging:</strong> Always log values you don’t understand! Use <code>console.log(event.which)</code> to confirm your handler is working correctly.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Preview your game using **Live Server**, then open your browser’s **Console**.
- Press keys and make sure numeric codes (like `37`, `38`, `40`, or `87`) show up in the console.
- If nothing appears:
  - Double-check that your event type is `"keydown"`
  - Make sure the handler function is named `handleKeyDown` and used in both places

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 3: React to Specific Keys**

🎯 **Goal:** Create a `KEY` object to store key codes and use `if` statements to react to arrow key presses.

---

### Step-by-Step Instructions

1. **Create a `KEY` Object**
   - 🔍 In the **SETUP** section of `index.js`, create a constant called `KEY` that maps key names (like `LEFT`, `UP`, `RIGHT`, `DOWN`) to their numeric key codes.
   - We'll give you the code for the **Enter** key, but you'll need to figure out the others on your own:
     ```js
     const KEY = {
       ENTER: 13,
       LEFT: ___,
       UP: ___,
       RIGHT: ___,
       DOWN: ___,
     };
     ```
   - 💡 Use the console from the last TODO or visit [keycode.info](https://keycode.info) to identify the correct values.

2. **Update `handleKeyDown`**
   - Inside the `handleKeyDown` function, write a series of `if` statements that respond to each arrow key.
   - Example:
     ```js
     if (event.which === KEY.LEFT) {
       console.log("left pressed");
     }
     ```
   - Repeat for `KEY.UP`, `KEY.RIGHT`, and `KEY.DOWN`.

3. **Test Your Key Bindings**
   - Open the console and press each arrow key.
   - You should see the appropriate direction printed for each one.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>🧪 Use Your Console:</strong> Add a <code>console.log(event.which)</code> inside your <code>handleKeyDown</code> function and press keys to discover their codes.<br><br>
      <strong>🔗 Need Help?</strong> Visit <a href="https://keycode.info" target="_blank">keycode.info</a> and press keys on your keyboard to see their numeric codes.<br><br>
      <strong>✅ Clean Code Tip:</strong> Using a <code>KEY</code> object with named properties makes your logic easier to understand and avoids “magic numbers.”
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Use Live Server and open the **Console**.
- Press each arrow key. You should see:
  - `"left pressed"` for ←
  - `"up pressed"` for ↑
  - `"right pressed"` for →
  - `"down pressed"` for ↓
- If not:
  - Check your `KEY` values and spelling
  - Confirm your `if` statements are using `event.which`

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 4: Declare `walker` Variable**

🎯 **Goal:** Create an object to store the walker's position and speed on the screen.

---

### Step-by-Step Instructions

1. **Create a Global `walker` Variable**
   - 🔍 Scroll to the **SETUP** section in `index.js`.
   - Declare a variable named `walker`.

2. **Assign an Object to `walker`**
   - The `walker` variable should store an object.
   - This object will represent the current state of your game character and should include the following properties:
     - `x` — horizontal position (left/right)
     - `y` — vertical position (up/down)
     - `speedX` — horizontal speed
     - `speedY` — vertical speed

3. **Initialize All Values to `0`**
   - Each property in the object should start with a value of `0`.
   - ✅ If you’re not sure about syntax, think back to how objects were created in the data shapes project.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>🧱 Game State Objects:</strong> In JavaScript, objects are used to group related data together. Here, the <code>walker</code> object stores position and movement information.<br><br>
      <strong>📍 <code>x</code> and <code>y</code>:</strong> These represent the walker’s current location in pixels from the top-left corner of the screen.<br><br>
      <strong>💨 <code>speedX</code> and <code>speedY</code>:</strong> These represent how much to change the walker’s position on each update. They will eventually be adjusted by keyboard input.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Make sure you’ve declared a global variable called `walker` and assigned it an object with **four properties**: `x`, `y`, `speedX`, and `speedY`.
- Each of these should start with a value of `0`.
- Your program won’t crash yet if this is missing — but future steps **depend** on this structure being present and correct.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 5: Update the Walker's Position in Code**

🎯 **Goal:** Write a helper function that updates the walker’s location based on its current speed.

---

### 🔍 Preview: Updating Object Properties

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💭 Updating Object Values
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      In the <strong>Bouncing Box</strong> project, you moved the box like this:<br><br>
      <code>positionX = positionX + speed;</code><br><br>
      That worked because each value was stored in its own variable.<br><br>
      In this project, we’re storing all of that data in a single object called <code>walker</code>.<br><br>
      So instead of <code>positionX</code>, we now update <code>walker.x</code>.<br>
      And instead of <code>speed</code>, we use <code>walker.speedX</code>.<br><br>
      🧠 It’s the same pattern — we’re just working inside an object.
    </td>
  </tr>
</table>

---

### Step-by-Step Instructions

1. **Define the Function**
   - 🔍 Scroll to the **HELPER FUNCTIONS** section in `index.js`.
   - Create a function called `repositionGameItem()`.

2. **Update the Walker’s `x` and `y` Properties**
   - Inside your function, add the horizontal speed to the x-position.
   - Then add the vertical speed to the y-position.
   - Be sure to use **dot notation** to update both values within the `walker` object.

3. **Call the Function from `newFrame`**
   - Inside the `newFrame` function, call `repositionGameItem()` so that the position updates continuously as the game runs.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>🧱 Object Access:</strong> To update a value inside an object, use dot notation — for example, change a property like <code>walker.x</code> based on its current value and speed.<br><br>
      <strong>📦 Stored State:</strong> The object <code>walker</code> stores the character’s position and speed. You’re not moving anything on screen yet — just updating the stored data.<br><br>
      <strong>🔄 Real-Time Updates:</strong> Since <code>newFrame()</code> runs many times per second, calling this function there means your walker’s position will change continuously over time.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- You should now have:
  - A new function called `repositionGameItem()`
  - A call to that function inside `newFrame()`
- Try temporarily assigning a number to `walker.speedX` or `walker.speedY` and use:
  ```js
  console.log(walker.x, walker.y);
  ```
  to check if the values are changing correctly each frame.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 6: Draw the Walker in the Correct Location**

🎯 **Goal:** Write a helper function that visually moves the walker using its `x` and `y` values.

---

### 🔍 Preview: Connecting Code to Visual Movement

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💭 Connecting Code to Visual Movement
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      In the last TODO, you updated the walker's position using <code>walker.x</code> and <code>walker.y</code>.<br><br>
      Now, you’ll use those values to move the walker <strong>on screen</strong> using jQuery:<br><br>
      <code>$("#walker").css("left", walker.x);</code><br>
      <code>$("#walker").css("top", walker.y);</code><br><br>
      🧠 Think of this step as when your code takes what’s happening "in memory" and "copies" it onto the screen.
    </td>
  </tr>
</table>

---

### Step-by-Step Instructions

1. **Define the `redrawGameItem()` Function**
   - 🔍 In the **HELPER FUNCTIONS** section of `index.js`, create a new function named `redrawGameItem()`.

2. **Use jQuery to Draw the Walker**
   - Inside your function, use jQuery’s `.css()` method to update the position of the walker element:
     - Use the `"left"` CSS property to set the horizontal (x) position.
     - Use the `"top"` CSS property to set the vertical (y) position.
   - You’ll need to use the values stored in the `walker` object’s `x` and `y` properties.

3. **Call the Function from `newFrame()`**
   - At the bottom of the `newFrame()` function (after `repositionGameItem()`), call `redrawGameItem()`.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>🎨 Using <code>.css()</code> to Move Elements:</strong> The <code>.css()</code> function in jQuery lets you change a style property on an element, like its position on the screen.<br><br>
      <strong>↔️ <code>"left"</code> and <code>"top"</code>:</strong> These CSS properties control how far an element is from the top-left corner of the page, in pixels.<br><br>
      <strong>🧠 Remember:</strong> You’re now updating the screen based on the walker’s <code>x</code> and <code>y</code> values — which are changing every frame.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- If you set `walker.speedX` or `walker.speedY` to a non-zero value, the walker should now move on screen when the page refreshes.
- Try logging the position inside the function:
  ```js
  console.log("Walker position:", walker.x, walker.y);
  ```
- Confirm that you are:
  - Setting the `"left"` property based on `walker.x`
  - Setting the `"top"` property based on `walker.y`

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 7: Update Speed When Arrow Keys Are Pressed**

🎯 **Goal:** Change the walker’s speed when the player presses an arrow key so it starts moving in that direction.

---

### Step-by-Step Instructions

1. **Edit the `handleKeyDown` Function**
   - 🔍 Scroll to your `handleKeyDown` function in the CORE LOGIC section of `index.js`.

2. **Set Speed for Arrow Keys**
   - Use `if` statements to check which arrow key was pressed.
   - When the LEFT arrow is pressed, update `walker.speedX` to `-5` to move left.
   - 🔄 Use your understanding from Bouncing Box and earlier TODOs to handle the other three arrow keys yourself.

3. **Test Movement**
   - Open your project with Live Server and press an arrow key.
   - You should see the walker begin to move in that direction.
   - Try refreshing the page between tests — the walker will continue moving after the first key press unless you reset the speed manually.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>🎮 Real-Time Control:</strong> When a key is pressed, the program updates <code>walker.speedX</code> or <code>walker.speedY</code>. These values affect how much <code>x</code> and <code>y</code> change on each frame.<br><br>
      <strong>↔️ Direction = Sign:</strong> Negative values move the walker left or up; positive values move the walker right or down.<br><br>
      <strong>📍 Persistent Movement:</strong> Because the speed stays set until changed again, the walker will keep moving in the last direction — even after the key is released.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Open your Live Server preview and press the arrow keys one at a time.
- The walker should move in the correct direction.
- **Refresh between tests** — your speed is not reset unless you manually set it back to `0`.
- Ask yourself:
  - Do all four directions work?
  - Do you understand why diagonal movement occurs if you press two keys in a row?

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 8: Stop the Walker on Key Release**

🎯 **Goal:** Use a new event listener to reset the walker’s speed when a key is released.

---

### Step-by-Step Instructions

1. **Register a New Event Listener**
   - 🔍 Scroll to the SETUP section of your code.
   - Add another line to register a second key event — this one should listen for `"keyup"` events.
   - Just like `"keydown"`, you’ll need to write:
     - **what** event you're listening for (`"keyup"`),
     - and **what function** should handle it (e.g., `handleKeyUp`).
   - ✅ Make sure this line matches the structure of your existing `"keydown"` registration — but don’t reuse the same handler function!

2. **Create the `handleKeyUp()` Function**
   - 🔍 Add a new function below `handleKeyDown()` and name it `handleKeyUp`.
   - Make sure to include the `event` parameter in the function definition.
   - Inside the function:
     - Use `if` statements to check if the released key is one of the arrow keys.
     - Set the appropriate speed property (either `speedX` or `speedY`) to `0` based on which key was released.

3. **Test Each Key**
   - Open your game in Live Server.
   - Try holding down the arrow keys, then releasing them.
   - The walker should **start moving** when a key is pressed, and **stop** when the key is released.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>🧠 Two Listeners, Two Handlers:</strong> You now need two separate event listeners — one for <code>"keydown"</code> and one for <code>"keyup"</code>. Each should point to a separate function (<code>handleKeyDown</code> and <code>handleKeyUp</code>).<br><br>
      <strong>🔁 Resetting Speed:</strong> When a key is released, setting <code>speedX</code> or <code>speedY</code> to <code>0</code> tells the game to stop updating the position along that axis.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Try holding down and releasing each arrow key.
- The walker should:
  - Start moving when the key is pressed,
  - Stop moving when the key is released.
- Refresh your game and test each direction again to make sure both speed values are reset.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 9: Prevent the Walker from Leaving the Board**

🎯 **Goal:** Stop the walker from leaving the visible game board by creating a boundary detection function.

---

### Step-by-Step Instructions

1. **Create a Helper Function**
   - 🔍 In the HELPER FUNCTIONS section, create a function named `wallCollision()`.

2. **Write Boundary Conditions**
   - Inside the `wallCollision()` function:
     - Use `if` statements to check if the `walker` object is moving the object beyond the game board edges.
     - Recall that the walker’s `x` and `y` properties represent its position on the screen.
     - Use `0` as the minimum (left/top) value for each direction.
     - Use `$("#board").width()` for the maximum horizontal boundary, and `$("#board").height()` for the maximum vertical boundary.
     - If a boundary is crossed, subtract the walker’s speed in that direction to "undo" the movement.

3. **Call the Function in `newFrame()`**
   - Inside your `newFrame()` function:
     - Call `wallCollision()` after `repositionGameItem()`, but before `redrawGameItem()`.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>🧱 Borders of the Game Board:</strong><br>
      - The left and top borders are at <code>0</code>.<br>
      - The right border is <code>$("#board").width()</code>.<br>
      - The bottom border is <code>$("#board").height()</code>.<br><br>
      <strong>🚫 Preventing Escape:</strong><br>
      Instead of reversing the speed (which would cause bouncing), "undo" the last movement by subtracting the speed:<br>
      <code>walker.x -= walker.speedX;</code><br>
      <code>walker.y -= walker.speedY;</code><br><br>
      <strong>📐 Make sure:</strong><br>
      You are checking <em>both</em> edges on each axis: left/right for x, top/bottom for y.
    </td>

  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Open Live Server and try moving the walker in all directions.
- Confirm the walker:
  - **Stops** at the left, right, top, and bottom edges of the board.
  - No longer escapes off-screen or gets stuck.
- If the walker bounces back or jitters at the edge, revisit the logic for "undoing" movement (don't reverse speed).

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## 🌟 Extra Challenges

These challenges are optional — but they’ll push your coding skills further and help you become more comfortable with JavaScript game logic. Try them out if you finish early or want to extend your project!

---

### 🧍 Add a Second Player Controlled with WASD

- Create a new walker object with its own position and speed properties.
- Register a new set of keys (`W`, `A`, `S`, `D`) in your `KEY` object.
- Create a second set of event handlers and movement logic.
- Can both players move independently? How will you keep track of their positions?

---

### 🎨 Make the Player(s) Change Color on Click

Use jQuery’s `.css()` function and an event listener to change a walker’s color when it is clicked.

To generate a random color, you can use:

```js
var randomColor = "#000000".replace(/0/g, function () {
  return (~~(Math.random() * 16)).toString(16);
});
```

> 🔎 Not a fan of that one-liner? Try experimenting with simpler random RGB values!

---

### 🏷️ Create a “Tag” Game with Collision Detection

- Detect when the two players overlap on the board.
- Use conditional logic to detect collision (hint: compare their `x` and `y` positions).
- Make the "it" player turn red when tagging the other.
- Add game reset logic and tweak player speeds to create balance.

> 💡 Want to go even further? Add scorekeeping, countdown timers, or a shrinking playfield!

---

<br>

## 📤 Submit Your Work

Make sure you save and submit your work regularly. These files are already being tracked by your GitHub repo, so you can commit and push with the following commands:

```bash
git commit -a -m "Finished Walker project"
git push
```

✅ Once you’ve pushed your changes, check GitHub to confirm your updates appear in the repository.

🎉 Congratulations on finishing the Walker project!
