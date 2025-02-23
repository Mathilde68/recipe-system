const errorHandler = (error, request, response, next) => {
    console.error("Error:", error.message); // Log the error for debugging

    // Default to 500 if no status code is provided
    const statusCode = error.status || 500;

    // Send a consistent error response
    response.status(statusCode).json({
        message: error.message || "Something went wrong on the server",
    });
};

module.exports = errorHandler;