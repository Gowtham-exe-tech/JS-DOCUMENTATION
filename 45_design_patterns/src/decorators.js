// DECORATOR: wrap a function to add behaviour without editing it
export function withLogging(name, fn) {
  return async (...args) => {
    console.log(`  [log] ${name} started`);
    const start = Date.now();
    const result = await fn(...args);
    console.log(`  [log] ${name} finished in ${Date.now() - start}ms`);
    return result;
  };
}
export function withRetry(fn, retries = 3) {
  return async (...args) => {
    let lastError;
    for (let attempt = 1; attempt <= retries; attempt++) {
      try { return await fn(...args); } catch (error) {
        lastError = error;
        console.log(`  [retry] attempt ${attempt} failed: ${error.message}`);
      }
    }
    throw lastError;
  };
}
