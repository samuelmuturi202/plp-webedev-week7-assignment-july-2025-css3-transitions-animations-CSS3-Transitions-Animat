// Part 2: JavaScript Functions - Scope, Parameters & Return Values

// Global variables (demonstrating global scope)
let counter = 0;
let currentColor = '#3498db';

/**
 * Increment counter function
 * Demonstrates local scope and return values
 * @returns {number} The new counter value
 */
function incrementCounter() {
    // Local scope variable
    const incrementValue = 1;
    counter += incrementValue;
    
    // Update DOM
    document.getElementById('counterValue').textContent = counter;
    
    // Return the new value
    return counter;
}

/**
 * Reset counter function
 * Demonstrates function with no parameters but modifies global state
 * @returns {number} The reset counter value (0)
 */
function resetCounter() {
    counter = 0;
    document.getElementById('counterValue').textContent = counter;
    return counter;
}

/**
 * Generate random color function
 * Demonstrates parameter usage and return values
 * @param {string} baseColor - Optional base color for variation
 * @returns {string} A random color code
 */
function generateRandomColor(baseColor = '#3498db') {
    // Local scope variables
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    // Generate random color
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    // Return the generated color
    return color;
}

/**
 * Calculator function with parameters and return values
 * Demonstrates proper function design with parameters
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @param {string} operation - Operation to perform ('add', 'subtract', 'multiply', 'divide')
 * @returns {number|string} The result of the calculation or error message
 */
function calculate(num1, num2, operation) {
    // Validate inputs
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Error: Please enter valid numbers';
    }
    
    // Perform calculation based on operation
    let result;
    
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return 'Error: Division by zero';
            }
            result = num1 / num2;
            break;
        default:
            return 'Error: Invalid operation';
    }
    
    // Return the calculated result
    return result;
}

/**
 * Log message function
 * Demonstrates scope and reusable logging
 * @param {string} message - Message to log
 * @param {string} type - Type of message ('info', 'error', 'success')
 */
function logMessage(message, type = 'info') {
    const logContainer = document.getElementById('log');
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('p');
    
    // Set message based on type
    let prefix = '';
    let className = '';
    
    switch(type) {
        case 'error':
            prefix = '[ERROR] ';
            className = 'text-red-400';
            break;
        case 'success':
            prefix = '[SUCCESS] ';
            className = 'text-green-400';
            break;
        case 'warning':
            prefix = '[WARNING] ';
            className = 'text-yellow-400';
            break;
        default:
            prefix = '[INFO] ';
            className = 'text-blue-400';
    }
    
    logEntry.textContent = `${timestamp} ${prefix}${message}`;
    logEntry.className = className;
    logContainer.appendChild(logEntry);
    
    // Auto-scroll to bottom
    logContainer.scrollTop = logContainer.scrollHeight;
}

// Part 3: Combining CSS Animations with JavaScript

/**
 * Toggle card flip animation
 * Uses JavaScript to add/remove CSS classes to trigger animations
 * @returns {boolean} The new flip state
 */
function toggleCardFlip() {
    const card = document.getElementById('flipCard');
    const isFlipped = card.classList.contains('flipped');
    
    // Add or remove the flipped class to trigger CSS animation
    card.classList.toggle('flipped');
    
    // Log the action
    logMessage(`Card flipped: ${isFlipped ? 'to back' : 'to front'}`, 'success');
    
    return !isFlipped;
}

/**
 * Toggle modal visibility
 * Uses JavaScript to control CSS animation states
 * @returns {boolean} The new modal state
 */
function toggleModal() {
    const modal = document.getElementById('modal');
    const isOpen = modal.classList.contains('show');
    
    if (isOpen) {
        // Close modal with fade-out animation
        modal.classList.remove('show');
        modal.style.animation = 'slideOut 0.5s ease-out forwards';
        
        setTimeout(() => {
            modal.style.display = 'none';
            modal.style.animation = '';
        }, 500);
        
        logMessage('Modal closed', 'info');
    } else {
        // Open modal with fade-in animation
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show');
            logMessage('Modal opened', 'success');
        }, 10);
    }
    
    return !isOpen;
}

/**
 * Toggle loading animation
 * Uses JavaScript to add/remove CSS classes to control animation
 * @returns {boolean} The new loading state
 */
function toggleLoading() {
    const indicator = document.getElementById('loadingIndicator');
    const isActive = indicator.classList.contains('active');
    
    if (isActive) {
        indicator.classList.remove('active');
        logMessage('Loading animation stopped', 'info');
    } else {
        indicator.classList.add('active');
        logMessage('Loading animation started', 'success');
    }
    
    return !isActive;
}

// Event Listeners for Part 1: CSS Transitions and Animations
document.addEventListener('DOMContentLoaded', function() {
    // Button hover effect (CSS only, no JS needed)
    
    // Continuous animation (CSS only, no JS needed)
    
    // Fade element toggle
    document.getElementById('toggleFade').addEventListener('click', function() {
        const fadeElement = document.getElementById('fadeElement');
        fadeElement.classList.toggle('hidden');
        
        if (fadeElement.classList.contains('hidden')) {
            logMessage('Fade element hidden', 'info');
        } else {
            logMessage('Fade element shown', 'success');
        }
    });
    
    // Part 2: JavaScript Functions Events
    document.getElementById('incrementBtn').addEventListener('click', function() {
        const newValue = incrementCounter();
        logMessage(`Counter incremented to ${newValue}`, 'success');
    });
    
    document.getElementById('resetBtn').addEventListener('click', function() {
        const resetValue = resetCounter();
        logMessage(`Counter reset to ${resetValue}`, 'info');
    });
    
    document.getElementById('changeColorBtn').addEventListener('click', function() {
        const newColor = generateRandomColor();
        document.getElementById('colorBox').style.backgroundColor = newColor;
        currentColor = newColor;
        logMessage(`Color changed to ${newColor}`, 'success');
    });
    
    document.getElementById('calculateBtn').addEventListener('click', function() {
        const num1 = parseFloat(document.getElementById('num1').value) || 0;
        const num2 = parseFloat(document.getElementById('num2').value) || 0;
        const operation = document.getElementById('operation').value;
        
        const result = calculate(num1, num2, operation);
        document.getElementById('calcResult').textContent = `Result: ${result}`;
        
        if (typeof result === 'number') {
            logMessage(`Calculated ${num1} ${operation} ${num2} = ${result}`, 'success');
        } else {
            logMessage(result, 'error');
        }
    });
    
    // Part 3: Combining CSS Animations with JavaScript Events
    document.getElementById('flipBtn').addEventListener('click', function() {
        toggleCardFlip();
    });
    
    document.getElementById('openModalBtn').addEventListener('click', function() {
        toggleModal();
    });
    
    document.getElementById('closeModalBtn').addEventListener('click', function() {
        toggleModal();
    });
    
    document.querySelector('.close').addEventListener('click', function() {
        toggleModal();
    });
    
    document.getElementById('startLoadingBtn').addEventListener('click', function() {
        toggleLoading();
    });
    
    document.getElementById('stopLoadingBtn').addEventListener('click', function() {
        toggleLoading();
    });
    
    // Initialize log
    logMessage('Page loaded successfully! All animations and functions are ready.', 'success');
    
    // Initial setup
    document.getElementById('colorBox').style.backgroundColor = currentColor;
});