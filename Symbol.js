/*
 * A symbol is a unique and immutable data type and may be used as an identifier for object properties. The symbol object is an implicit object wrapper for the symbol primitive data type.
 * 
 * Syntax
 *		Symbol([description])
 * 
 * Parameters
 *		description Optional
 *		Optional, string.A description of the symbol which can be used for debugging but not to access the symbol itself.
 * 
 * Description
 *		To create a new primitivesymbol, you simply write Symbol() with anoptionalstring as its description:
 * */

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

/*
 * The above code creates three new symbols. 
 * Note that Symbol("foo") does not coerce the string "foo" into a symbol. It creates a new symbol each time:
 */
 
Symbol("foo") === Symbol("foo"); // whatch:	Symbol("foo") === Symbol("foo")	value:false	type:Boolean

/*
 * Symbol is not a constructor
 * The following syntax with the new operator will throw a TypeError:
 */
if (false) // change on true to check the exception
	var sym = new Symbol(); // TypeError: Symbol is not a constructor

/* 
 * This prevents authors from creating an explicit Symbol wrapper object instead of a new symbol value. 
 * Creating an explicit wrapper object around primitive data types is no longer supported starting with
 * ECMAScript 6. However, existing primitive wrapper objects like new Boolean, new String and
 * new Number can still be created for legacy reasons.
 */

/*
 * And if you really want to create a Symbol wrapper object, you can use the Object() function:
 */

var sym = Symbol("foo");	//		Whatch:sym			Value:Symbol(foo)	Type:Unknown
typeof sym;					//		Watch:typeof sym	Value:"symbol"		Type:String
var symObj = Object(sym);	//		Watch:symObj		Value:{Symbol}		Type:Object
typeof symObj;				//		Watch:typeof symObj	Value:"object"		Type:String

