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
