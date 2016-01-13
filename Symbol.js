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

