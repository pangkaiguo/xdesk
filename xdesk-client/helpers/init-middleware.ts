// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middle: (arg0: any, arg1: any, arg2: (result: any) => void) => void) {
  return (req: any, res: any) =>
    new Promise((resolve, reject) => {
      middle(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    });
}

export const middleware = {
  initMiddleware
}