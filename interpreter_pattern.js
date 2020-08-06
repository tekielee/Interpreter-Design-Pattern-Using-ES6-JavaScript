class TerminalExpression {
	constructor(data) {
		this.data = data;
	}
	
	interpret(context) {
		if(context.includes(this.data)) {
			return true;
		}
		
		return false;
	}
}

class OrExpression {
	constructor(expr1, expr2) {
		this.expr1 = expr1;
		this.expr2 = expr2;
	}
	
	interpret(context) {
		return this.expr1.interpret(context) || this.expr2.interpret(context);
	}
}

class AndExpression {
	constructor(expr1, expr2) {
		this.expr1 = expr1;
		this.expr2 = expr2;
	}
	
	interpret(context) {
		return this.expr1.interpret(context) && this.expr2.interpret(context);
	}
}

class InterpreterPattern {
	constructor() {
		this.robert = new TerminalExpression('Robert');
		this.john = new TerminalExpression('John');
		
		this.julie = new TerminalExpression('Julie');
		this.married = new TerminalExpression('Married');
	}
	
	getMaleExpression() {
		return new OrExpression(this.robert, this.john);
	}
	
	getMarriedWomanExpression() {
		return new AndExpression(this.julie, this.married);
	}
}

const interpreterPattern = new InterpreterPattern();
const isMale = interpreterPattern.getMaleExpression();
const isMarriedWoman = interpreterPattern.getMarriedWomanExpression();

console.log('John is male? ' + isMale.interpret('John'));
console.log('Julie is a married women? ' + isMarriedWoman.interpret('Julie Married'));