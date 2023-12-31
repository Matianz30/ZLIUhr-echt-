Clock Project
This project is a simple clock created with HTML, CSS, and JavaScript.

CSS:

Features
Clock Hands: Three clock hands indicating hours, minutes, and seconds.
Hover Effect: The clock face scales up when hovered over.
Background Transition: The background color of the page undergoes a smooth transition.
Getting Started
To use this clock in your project, follow these steps:

Clone the repository: git clone https://github.com/your-username/clock-project.git
Open index.html in your web browser.
Usage
The clock is designed to be a visually appealing element that you can integrate into your web projects. The hover effect and background transition add a touch of interactivity.

html
Copy code
<!-- Example usage in HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clock Project</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="clock">
        <div class="outer-clock-face">
            <!-- Clock hands are generated dynamically with JavaScript -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

Styles and Customization
Global Styles: The * selector in CSS resets margin, padding, and uses the border-box model.
Clock Styling: The .clock class centers the clock on the page with flexbox. .outer-clock-face contains the clock face with a background image, border, and shadow.

Javascript:

Features
Real-time Clock Movement:

The setInterval function is used to update the clock hands every second, providing a real-time representation of the current time.
Clock Hand Rotation:

The code calculates the rotation angles for the second, minute, and hour hands based on the current time, applying the corresponding transformations to the elements in the DOM.
Background Color Change on Hover:

The script listens for mouseover and mouseout events on the clock face and changes the background color of the entire page accordingly.
Usage
To integrate this JavaScript code into your project, follow these steps:

Include the JavaScript file in your HTML document:

html
Copy code
<script src="your-path/clock-script.js"></script>
Ensure that your HTML contains elements with the classes min-hand, hour-hand, second-hand, and outer-clock-face to represent the clock hands and the clock face.

The script will dynamically rotate the clock hands and respond to hover events on the clock face.

Code Explanation
javascript
Copy code
const min = document.querySelector(".min-hand");
const hour = document.querySelector(".hour-hand");
const sec = document.querySelector(".second-hand");

setInterval(() => {
  // Update the clock hands based on the current time
  const date = new Date();
  const secondDeg = (date.getSeconds() / 60) * 360 - 90;
  const minuteDeg = (date.getMinutes() / 60) * 360 - 90;
  const hourDeg = (date.getHours() / 12) * 360 - 90;

  // Apply rotations to the clock hands
  sec.style.transform = `rotate(${secondDeg}deg)`;
  min.style.transform = `rotate(${minuteDeg}deg)`;
  hour.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);

document.querySelector(".outer-clock-face").addEventListener("mouseover", () => {
  // Change the background color of the body on hover
  document.querySelector("body").style.backgroundColor = "white";
});

document.querySelector(".outer-clock-face").addEventListener("mouseout", () => {
  // Restore the original background color on mouseout
  document.querySelector("body").style.backgroundColor = "rgb(225, 195, 156)";
});
Customization
Class Names:
Ensure that the class names in the JavaScript code match the corresponding HTML elements in your project.
Background Colors:
Adjust the background colors in the mouseover and mouseout event listeners to suit your design preferences.






Contributors
Matian Dauti
Cyril Tobler(helper)

License
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to customize this template to better suit your project's specifics. Add or remove sections as needed.
