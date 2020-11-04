- [ ] Section 07: Functional Programming 00/20 | 1hr 55min
	- [ ] 110. 07-01 02:29 Section Overview | 2min
	  - Composition vs Inheritance
	  - Curry
	  - Partial Application
	  - Pure Functions
	  - Referential Transparency
	  - Compose
	  - Pipe
	  - LISP 1958
	  - Lambda Calculus
	  - Works well with Distributed Computing
	    - Pascal, Scala, Clojure
	  - Works well with Parallel Computing
	  - Redux, React
	- [ ] 111. 07-02 03:31 Functional Programming Introduction | 4min
	  - What is Functional Programming?
	  	- Functional programming is ALL ABOUT SEPARATION OF CONCERNS
	  	- Also separates Data from Function
	  - Emphasis on Simplicity where Data and Functions are concerned
	  - No classes and methods
	  - Functions OPERATE on well-defined data structures like arrays and objects, rather than BELONGING to the data structure
	  - Very Important Pillar
	    - PURE FUNCTIONS
	    - All objects created in FP are IMMUTABLE
	- [ ] 112. 07-03 03:37 Exercise: Amazon | 4min
		- A function has to always return the same output, given the same input.
		- The function cannot modify anything outside of itself (no side effects).
	- [ ] 113. 07-04 04:35 Pure Functions | 5min
	  - See the noSideEffects folder.
	- [ ] 114. 07-05 07:47 Pure Functions 2 | 8min

    - Let's say that I have

		```javascript
		function a() {
			console.log('hi'); // Is this a pure function?
		}
		```
		
		- No, this function affects The Browser, which is outside of a().
		- Now, see the sameInputOutput folder

	- [ ] 115. 07-06 04:33 Can Everything Be Pure? | 5min

		- Communicating with the outside world in any way is a side effect.
		- The goal is MINIMIZE SIDE EFFECTS, but some of my code will be impure.

		- Functions should do this:
		  - 1 Task
			- return Statement
			- Pure
			- No shared state
			- Immutable state
			- Composable
			- Predictable
	
	- [ ] 116. 07-07 04:08 Idempotent | 4min

		```javascript
		function notGood() {
			return Math.random(num);
		}
		```

	- [ ] 117. 07-08 06:27 Imperative vs Declarative | 6min
	  - Declarative Code "What to do, and what should happen"

		```javascript
		let result = 1 + obj.x; // Declarative
		```

		- jQuery is more Imperative
		- React is more Declarative

	- [ ] 118. 07-09 05:28 Immutability | 5min

		- "Not changing the data/state"

		```javascript
		const obj = { name: 'Andrei' }

		function clone(obj) {
			return { ...obj }; // This is pure
		}

		// obj.name = 'Nana'; // A return to working with objects

		// The FP way
		function updateName(obj) {
			const obj2 = clone(obj);
			obj2.name = 'Nana';
			return obj2;
		}

		const updatedObj = updateName(obj);
		console.log(obj, updatedObj); // { name: 'Andrei' } { name: 'Nana' }
		```

		- Don't all these copies just fill up our memory?
		- "Structual Sharing"
		- I don't actually copy everything

	- [ ] 119. 07-10 07:49 Higher Order Functions and Closures | 8min

		- HOFs take one or more arguments OR return a function (often called a "callback")

		```javascript
		const hof = () => () => 5;
		hof()() // 5
		```

		```javascript
		const hof = (fn) => fn(5);
		hof(function a(x) { return x } // 5

		// Closure
		// Mechanism for containing some sort of state

		const closure = function() {
			let count = 0;
			return function increment() {
				count++; // Impure
			}
		};

		const incrementFn = closure();

		incrementFn(); // 1
		incrementFn(); // 2
		incrementFn(); // 3

		// I'm modifying state outside of my function
		```

		```javascript
		// Pure-function use of a closure
		const closure = function() {
			let count = 55;
			return function getCount() {
				return count; // Pure
			}
		};

		const getCounter = closure();

		getCounter(); // Others can't modify my private variable
		getCounter();
		getCounter();
		```

	- [ ] 120. 07-11 04:24 Currying | 4min

		```javascript
		const multiply = (a, b) => a*b; // non-curried function

		const curriedMultiply = (a) => (b) => a*b;
		curriedMultiply(5)(3); // 15

		// I can now create multiple utility functions
		const curriedMultiplyBy5 = curriedMultiply(5); // 20
		```
	
	- [ ] 121. 07-12 04:24 Partial Application | 4min

		- Curried Version
		```javascript
		const multiply = (a, b, c) => a*b*c; // non-curried function

		const partialMultiplyBy5 = multiply.bind(null, 5);
		partialMultiplyBy5(4)(10); // 200, the 5 was acquired in the line above
		```

	- [ ] 123. 07-14 07:47 MCI: Memoization 1 | 8min

		- Dynamic Programming
		- Memoization ~~~~ Caching
		- Backpack metaphor

		```javascript
		function addTo80(n) {
			console.log('long time'); // long time, long time, long time, 85
			return n + 80;
		}

		addTo80(5); // 85

		let cache = {};
		function memoizedAddTo80(n) {

			if (n in cache) {
				return cache[n];
			} else {
				cache[n] = n + 80;
				return cache[n];
			}
		}

		console.log('1', memoizedAddTo80(5)); // 85
		console.log('2', memoizedAddTo80(6)); // 86
		```

		```javascript
		function addTo80(n) {
			console.log('long time'); // long time, long time, long time, 85
			return n + 80;
		}

		addTo80(5); // 85

		let cache = {};
		function memoizedAddTo80(n) {

			if (n in cache) {
				return cache[n];
			} else {
				console.log('long time');
				cache[n] = n + 80;
				return cache[n];
			}
		}

		console.log('1', memoizedAddTo80(5)); // 85
		console.log('2', memoizedAddTo80(6)); // 86
		```

	- [ ] 124. 07-15 03:46 MCI: Memoization 2 | 4min
	- [ ] 125. 07-16 12:33 Compose and Pipe | 13min
	  - Any transformation should be obvious

		``` javascript
		// abs(-50 * 3)
		const compose = (f, g) => (data) => f(g(data));
		const multiplyBy3(num) => num*3;
		const makePositive(num) => Math.abs(num);

		const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive); // Ramda library? No.

		multiplyBy3AndAbsolute(-50); // 150
		```

		``` javascript
		// abs(-50 * 3)
		const pipe = (f, g) => (data) => g(f(data));
		const multiplyBy3(num) => num*3;
		const makePositive(num) => Math.abs(num);

		const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive); // Ramda library? No.

		multiplyBy3AndAbsolute(-50); // 150
		```

	- [ ] 126. 07-17 01:46 Arity | 2min
	  - The number of arguments a function takes "Arity of one"
	
	- [ ] 127. 07-18 02:54 Is FP The Answer To Everything? | 3min
	- [ ] 128. 07-19 21:48 Solution: Amazon | 22min
	- [ ] 129. 07-20 05:14 Reviewing FP | 5min
