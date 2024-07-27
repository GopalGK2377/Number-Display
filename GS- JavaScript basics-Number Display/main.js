document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    const start = parseInt(document.getElementById('start').value, 10);
    const end = parseInt(document.getElementById('end').value, 10);

    if (isNaN(start) || isNaN(end) || start > end) {
        alert('Please enter a valid range.');
        return;
    }

    
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    
    let allNumbers = '';
    let oddNumbers = '';
    let evenNumbers = '';
    let primeNumbers = '';

    for (let i = start; i <= end; i++) {
        allNumbers += i + '<br>';
        if (i % 2 !== 0) {
            oddNumbers += i + '<br>';
        }
        if (i % 2 === 0) {
            evenNumbers += i + '<br>';
        }
        if (isPrime(i)) {
            primeNumbers += i + '<br>';
        }
    }

    
    document.getElementById('allNumbers').innerHTML = '<strong>Numbers:</strong><br>' + allNumbers;
    document.getElementById('oddNumbers').innerHTML = '<strong>Odd Numbers:</strong><br>' + oddNumbers;
    document.getElementById('evenNumbers').innerHTML = '<strong>Even Numbers:</strong><br>' + evenNumbers;
    document.getElementById('primeNumbers').innerHTML = '<strong>Prime Numbers:</strong><br>' + primeNumbers;
});
