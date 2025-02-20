# Unhandled Promise Rejection in Express.js Application

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections.  The `bug.js` file contains code that uses asynchronous operations without proper error handling.  This can lead to unexpected crashes.

## Bug Description

The application uses `someAsyncOperation()`, which simulates an asynchronous operation that may fail. If the operation fails, the error is not handled correctly leading to an unhandled promise rejection.  This results in a crash of the application.  The error is logged to the console, but the application does not gracefully handle the error. 

## Solution

The `bugSolution.js` file provides a corrected version that uses a centralized error handler to catch and manage exceptions gracefully, preventing the application from crashing unexpectedly. It handles both synchronous and asynchronous errors and provides better error reporting.

## How to reproduce
1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js` to observe the application crash due to the unhandled promise rejection.
4. Run `node bugSolution.js` to see the application handle the error gracefully.