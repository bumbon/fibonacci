			// var userNum = prompt('Enter a desired lenth of Fibonacci sequence: ', '0');

			function fibonacci(n) {
				
				var fib = [];
				fib[0] = 1;
				fib[1] = 1;
				for (var i = 2; i < n; i++) {
				fib.push(fib[i-2]+fib[i-1]);
					}
					return fib.slice(-1);
			}

			function fibonacciAll(n) {
				
				var fib = [];
				fib[0] = 1;
				fib[1] = 1;
				for (var i = 2; i < n; i++) {
				fib.push(fib[i-2]+fib[i-1]);
					}
					return fib;
					
			}

			// document.write(fibonacci(userNum));

				function fibResult() {
		    var userNum = document.getElementById("user").value;
		    if (isNaN(userNum)) {
		    	document.getElementById("resultLast").innerHTML = 'Enter a number, please!';
		    	
		    }else{
		    	document.getElementById("resultLast").innerHTML = fibonacci(userNum);
		    	document.getElementById("resultAll").innerHTML = fibonacciAll(userNum);
		    }
		    
		}






