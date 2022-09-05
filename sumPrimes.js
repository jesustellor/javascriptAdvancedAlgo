function sumPrimes(num) {
    let primes = [];
    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0)) {
        primes.push(i);
      }
  
    }
  // testing the every() method to make sure why it works.  
  // return primes.every((prime) => 6 % prime !== 0);
  return primes.reduce((sum, prime) => sum + prime, 0);
  }
  
  console.log(sumPrimes(10));