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

		- Now, see sameInputOutput

	- [ ] 115. 07-06 04:33 Can Everything Be Pure? | 5min
	- [ ] 116. 07-07 04:08 Idempotent | 4min
	- [ ] 117. 07-08 06:27 Imperative vs Declarative | 6min
	- [ ] 118. 07-09 05:28 Immutability | 5min
	- [ ] 119. 07-10 07:49 Higher Order Functions and Closures | 8min
	- [ ] 120. 07-11 04:24 Currying | 4min
	- [ ] 121. 07-12 04:24 Partial Application | 4min
	- [ ] 122. 07-13 00:12 Quick Note: Upcoming Videos | 1min
	- [ ] 123. 07-14 07:47 MCI: Memoization 1 | 8min
	- [ ] 124. 07-15 03:46 MCI: Memoization 2 | 4min
	- [ ] 125. 07-16 12:33 Compose and Pipe | 13min
	- [ ] 126. 07-17 01:46 Arity | 2min
	- [ ] 127. 07-18 02:54 Is FP The Answer To Everything? | 3min
	- [ ] 128. 07-19 21:48 Solution: Amazon | 22min
	- [ ] 129. 07-20 05:14 Reviewing FP | 5min
