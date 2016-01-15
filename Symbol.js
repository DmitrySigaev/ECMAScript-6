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
 
Symbol("foo") === Symbol("foo"); // Watch:	Symbol("foo") === Symbol("foo")	Value:false	Type:Boolean

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

var sym = Symbol("foo");	//		Watch:sym			Value:Symbol(foo)	Type:Unknown
typeof sym;					//		Watch:typeof sym	Value:"symbol"		Type:String
var symObj = Object(sym);	//		Watch:symObj		Value:{Symbol}		Type:Object
typeof symObj;				//		Watch:typeof symObj	Value:"object"		Type:String

/* ---------------------------------------------*/
 
/*
 * The Symbol.for(key) method searches for existing symbols in a runtime-wide symbol registry 
 * with the given key and returns it if found. Otherwise a new symbol gets created in the global symbol 
 * registry with this key.
 * 
 * Syntax
 *		Symbol.for(key);
 * Parameters
 *		key
 *			String, required. The key for the symbol (and also used for the description of the symbol).
 * Description
 *		In contrast to Symbol(), the Symbol.for() function creates a symbol available in a global symbol registry list. 
 *		ymbol.for() does also not necessarily create a new symbol on every call, but checks first if a symbol with the 
 *		iven key is already present in the registry. In that case, that symbol is returned. If no symbol with the given key
 *		is found, Symbol.for() will create a new global symbol.
 *		
 * Global symbol registry
 *		The global symbol registry is a list with the following record structure and it is initialized empty:
 *		A record in the global symbol registry
 *			Field name	Value
 *			[[key]]		A string key used to identify a symbol.
 *			[[symbol]]	A symbol that is stored globally.
 */

Symbol.for("foo"); // create a new global symbol
Symbol.for("foo"); // retrieve the already created symbol

// Same global symbol, but not locally
Symbol.for("bar") === Symbol.for("bar"); // Watch:Symbol.for("bar") === Symbol.for("bar")	Value:true	Type:Boolean
Symbol("bar") === Symbol("bar");		 // Watch:Symbol("bar") === Symbol("bar")			Value:false	Type:Boolean

// The key is also used as the description
var sym = Symbol.for("mario");			 // Watch:sym				Value:Symbol(mario)		Type:Unknown
sym.toString();							 // Watch:sym.toString()	Value:"Symbol(mario)"	Type:String

/*
 * To avoid name clashes with yourglobalsymbol keys and other(library code) global symbols, it might be a good idea to
 * prefix your symbols:
 */
Symbol.for("es6.foo");
Symbol.for("es6.bar");

/* ---------------------------------------------*/

/*
 * The Symbol.keyFor(sym) method retrieves a shared symbol key from the global symbol registry for the given symbol.
 * 
 * Syntax
 *		Symbol.keyFor(sym);
 * Parameters
 *		sym
 *			Symbol, required. The symbol to find a key for.
 */

var globalSym = Symbol.for("foo");	// create a new global symbol
Symbol.keyFor(globalSym);			// Watch:Symbol.keyFor(globalSym)	Value:"foo"	Type:String


var localSym = Symbol();
Symbol.keyFor(localSym);			// Watch:Symbol.keyFor(localSym)	Value:undefined	Type:Undefined


/*
 * well-known symbols are not symbols registered in the global symbol registry:
 * Watch:Symbol.iterator	Value:Symbol(Symbol.iterator)	Type:Unknown
 */

Symbol.keyFor(Symbol.iterator)		// Watch:Symbol.keyFor(Symbol.iterator)	Value:undefined	Type:Undefined

/* 
 * So, let's try following:
 */
var SymIter = Symbol.iterator;						// Watch:SymIter	Value:Symbol(Symbol.iterator)	Type:Unknown
var globalSymIter = Symbol.for("Symbol.iterator");	// Watch:globalSymIter	Value:Symbol(Symbol.iterator)	Type:Unknown
Symbol.keyFor(globalSymIter);			// Watch:Symbol.keyFor(globalSymIter)	Value:"Symbol.iterator"	:Type:String

/* 
 * Don't be confused
 */

console.log(SymIter);
console.log(globalSymIter);
console.log(Symbol.keyFor(SymIter));
console.log(Symbol.keyFor(globalSymIter));


/* ---------------------------------------------*/

/*
 * The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.
 * 
 * Syntax
 *		Object.getOwnPropertySymbols(obj)
 * Parameters
 *		obj
 *			The object whose symbol properties are to be returned.
 * Description
 *		Similar to Object.getOwnPropertyNames(), you can get all symbol properties of a given object as an array of 
 *		symbols. Note that Object.getOwnPropertyNames() itself does not contain the symbol properties of an object 
 *		and only the string properties.
 * As all objects have no own symbol properties initially, Object.getOwnPropertySymbols() returns an empty array 
 * unless you have set symbol properties on your object.
 */

var obj = {};
var a = Symbol('a');
var b = Symbol.for('b');

obj[a] = 'localSymbol';
obj[b] = 'globalSymbol';


var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols);        // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]);     // Symbol(a)

