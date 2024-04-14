/**
 * Universal 'all-in-one' function that unites the DOM-functions
 * => document.getElementById
 * => document.getElementsByTagName
 * => document.getElementsByClassName
 * => document.getElementsByName
 * => document.querySelectorAll
 *  
 * prepend 'export' if you wanna import the function in a module!
 * 
 * @param {string} selector any valid CSS selector
 * @param {number | string} child optional,
 * determines which child of the found nodelist or HTML-collection
 * is supposed to be returned. A number returns the child of the given index. A tilde '~' or the
 * string expression ':last-child' returns the last child of the list / collection.
 * @returns a single element (if selector is a valid ID or child is specified)
 * in all other cases a zero-based nodelist or HTML-collection, matching the selector-parameter
 * If the list contains ONLY ONE element, this element is returned only!
 * @usage   $('main-content')     -   returns an element with ID 'main-content'
 *          $('div','~')          -   returns the last div-container of the document
 *          $('a',0)              -   returns the first link (<a>-element)
 *          $('div.myClass')      -   returns a list with all div's containing class 'myClass'
 *          $('div.myClass','~')  -   returns last div containing class 'myClass'
 *          $('.clsNames',3)      -   returns the 4th(!) child of the wanted class list
 *          $('input[type=text]') -   returns a list with all input elements, being text fields
 *          $('[name]')           -   returns a list with all elements, having a 'name' attribute
 */
export default function $(selector, child) {
    // is the last child wanted?
    const getLastChild = (child == '~' || child == ':last-child') ? true : false;
    // check, if 'child' is numeric!
    if (!isNumeric(child, true) || child < 0) child = false;

    // query-selector provided?
    const querySelector = ['[', '.', '#', ':', '>'].some(char => {
        return selector.includes(char);
    });
    if (querySelector) {
        const elements = getElements(document.querySelectorAll(selector), child, getLastChild);
        if (elements) return elements;
    }
    
    const element = document.getElementById(selector); // now search for ID...
    if (element) return element; // ID was found!    
    const htmlTags = document.getElementsByTagName(selector);
    if (htmlTags.length > 0) return getElements(htmlTags, child, getLastChild); // no ID! continue in HTML-tags...     
    const classNames = document.getElementsByClassName(selector);// is the selector a class...? 
    if (classNames.length > 0) return getElements(classNames, child, getLastChild);
    const names = document.getElementsByName(selector); // ...or is it a name finally?
    if (names.length > 0) return getElements(names, child, getLastChild);
    return null;
}

function getElements(nodeList, child, getLastChild) {
    // don't return a node list, with only ONE child! 
    // but this single child-element instead 
    if (nodeList.length == 1) return nodeList[0];
    if (getLastChild) child = nodeList.length - 1;
    return (child === false) ? nodeList : nodeList[child];
}

/**
 * Checks properly (!), if the given expression is numeric.
 * recognizes: undefined, NaN, Null, infinity etc.
 * @param {number | numeric string} expression 
 * @param {boolean} allowStringNumbers optional, tells if string literals are allowed or not (default)
 * @returns true | false
 */
export function isNumeric(expression, allowStringNumbers) {
    if (allowStringNumbers == true) return Number.isFinite(parseFloat(expression));
    return Number.isFinite(expression);
}

/**
 * extends the Math-Object by a special round-function that allows to
 * round a given number toa given amount of decimal digits
 * @param {number} number numeric expression
 * @param {number} decimals count of decimal digits
 * @returns the rounded number with assignet decimal digits
 */
Math.roundDec = function(number, decimals = 0) {
    const dec = decimals * 10;
    if (dec == 0) return Math.round(number + Number.EPSILON);
    return Math.round((number + Number.EPSILON) * dec) / dec;
}

/**
 * loads HTML-templates at run time to the page.
 * Iterates through all elements containing the attribute 'w3-include-html'.
 * i.e.: 
 *  
 * header w3-include-html="templates/header.html" will load a given header
 */
export async function includeHTML() {
    // let includeElements = $('[w3-include-html]'); 
    // = document.querySelectorAll('[w3-include-html]')
    const W3_ATTR = 'w3-include-html';
    let includeElements = document.querySelectorAll(`[${W3_ATTR}]`)
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        let file = element.getAttribute(W3_ATTR),
            resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
            element.removeAttribute(W3_ATTR);
        } else {
            element.innerHTML = `Page not found: "${file}"`;
        }        
    }
}