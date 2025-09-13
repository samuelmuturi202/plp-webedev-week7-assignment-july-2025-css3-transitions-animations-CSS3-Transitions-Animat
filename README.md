✅ Overview
This project demonstrates core front-end development concepts from PLP Web Development Week 7, including:

CSS3 Transitions & Keyframe Animations
JavaScript Function Design: Scope, parameters, return values
DOM Manipulation via event listeners
Integration of JS with CSS Animations (e.g., flipping cards, modals, loading indicators)
Responsive Design for mobile devices
All functionality is built using vanilla HTML, CSS, and JavaScript — no external libraries.

🚀 Features
🔹 Part 1: CSS Transitions & Animations
Hover Button
Smooth scale + lift animation on hover with gradient shift
Rotating Box
Continuous 360° rotation using
@keyframes
Fade Toggle
Element fades in/out using
opacity
transition and
classList.toggle()

🔹 Part 2: JavaScript Functions
Counter
Global variable tracked; incremented/reset via functions with return values
Color Generator
Generates random hex colors (
#FFFFFF
) and applies to box
Calculator
Takes two numbers and an operation (
add
,
subtract
, etc.) → returns result or error
Logging System
Reusable
logMessage()
function logs actions with timestamps and color-coded types

🔹 Part 3: JS + CSS Integration
Card Flip
JavaScript toggles
.flipped
class → triggers CSS 3D transform animation
Animated Modal
JS controls display + slide-in/fade-in/out animations with timing delays
Loading Spinner
Toggleable animated spinner using
display
and
.active
class

🔹 Bonus: UX & Responsiveness
Clean, modern UI with glass-morphism (backdrop-filter)
Fully responsive layout for mobile (≤768px)
Smooth scrolling log container
Semantic HTML structure and accessible interactions
💻 Technologies Used
HTML5
Semantic structure and content
CSS3
Styling, transitions, keyframe animations, gradients, flexbox
JavaScript (ES6+)
Logic, DOM manipulation, functions, event handling
No Frameworks
Pure vanilla code — no jQuery, React, or Bootstrap

📂 Project Structure


1
2
3
4
5
bringing-web-pages-to-life/
├── index.html          # Main HTML structure
├── styles.css          # All CSS animations and styling
├── script.js           # JavaScript functions and event listeners
└── README.md           # This documentation
▶️ How to Run
Clone or download this repository.
Open index.html in any modern browser (Chrome, Firefox, Edge).
Interact with buttons, toggles, and inputs to see the magic!
✅ No server required — works perfectly as a local file. 

🧠 Key Learning Outcomes (PLP Week 7)
Function Scope
counter
(global),
incrementValue
(local)
Parameters & Return Values
calculate(num1, num2, operation)
→ returns result
Event Listeners
Click handlers for all interactive elements
DOM Manipulation
getElementById
,
classList.add/remove/toggle
,
textContent
CSS + JS Synergy
Triggering animations via class changes (
flipped
,
show
,
active
)
Responsive Design
Media queries for mobile optimization

🛠️ Challenges & Solutions
Modal closing animation not triggering
Used
setTimeout
to delay
display: none
until animation ends
Loading spinner not appearing
Used
display: none/block
+
.active
class for toggle control
Color generator needed randomness
Used
Math.random()
with base-16 hex string generation
Log container overflow
Added
overflow-y: auto
+ auto-scroll on new entry

📸 Screenshots (Optional)
Add real screenshots here if submitting to platform 

Desktop View: Clean layout with all components visible
Mobile View: Responsive collapse, readable text, touch-friendly buttons
Modal Open: Slide-in effect with backdrop overlay
Card Flip: 3D flip animation triggered by click
✅ Conclusion
This assignment showcases a complete, polished web application that bridges the gap between static design and interactive functionality. By combining CSS’s visual power with JavaScript’s logic, I’ve created a cohesive, engaging user experience — exactly what modern web development demands.

Final Note: This project proves you don’t need frameworks to build beautiful, functional interfaces — just clean code and thoughtful design.

👨‍💻 Author
[Your Full Name]
PLP Web Development – Week 7 Assignment
Date: April 2025

