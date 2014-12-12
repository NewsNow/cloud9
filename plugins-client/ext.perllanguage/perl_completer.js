/**
 * Cloud9 Language Foundation
 *
 * @copyright 2011, Ajax.org B.V.
 * @license GPLv3 <http://www.gnu.org/licenses/gpl.txt>
 */
define(function(require, exports, module) {

var completeUtil = require("ext/codecomplete/complete_util");
var baseLanguageHandler = require('ext/language/base_handler');
// var perlSnippets = require("ext/perllanguage/snippets");

var completer = module.exports = Object.create(baseLanguageHandler);

completer.handlesLanguage = function(language) {
   return language === "perl";
};
      
// use doc.getLine(<row>) to read a line from the current document
// pos = { row: <row>, column: <col> }
completer.complete = function(doc, fullAst, pos, currentNode, callback) {
   var line = doc.getLine(pos.row);
   console.log('autocomplete-perl', pos, line);
   // callback([{name: 'xxx', replaceText: 'zzz', value: 'yyy', score: 100, meta: "rhyme", doc: '<pre>Hello</pre>'}]);
   // callback([{name: line+'xxx', replaceText: line+'zzz', score: 100, meta: "rhyme", doc: '<pre>Hello</pre>'}]);
   callback([{name: line, replaceText: line, score: 100, meta: "rhyme", doc: '<pre>Hello</pre>'}]);
};

});
