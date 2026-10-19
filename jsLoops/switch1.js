// Write a function named categorizeHttpStatus(statusCode) 
// that takes an HTTP status number and returns a short classification
//  string: 200, 201, 204 $\rightarrow$ 'success'400, 401, 403, 404 
//  $\rightarrow$ 'client error'500, 502, 503 $\rightarrow$ 
//  'server error'Anything else $\rightarrow$ 'unrecognized'Constraint:
//   Leverage intentional switch fallthrough grouping cleanly.



const statusCode = 404;

function categorizeHttpStatus(statusCode) {
    switch (statusCode) {
        case 200:
        case 201:
        case 204:
            console.log("success");
            break;
        case 400:
        case 401:
        case 403:
        case 404:
            console.log("client error");
            break;
        case 500:
        case 502:
        case 503:
            console.log("servor error");
            break;
        default:
            console.log("unrecognized")

    }
}
categorizeHttpStatus(statusCode);