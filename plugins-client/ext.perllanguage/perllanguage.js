/**
 * Cloud9 Language Foundation
 *
 * @copyright 2011, Ajax.org B.V.
 * @license GPLv3 <http://www.gnu.org/licenses/gpl.txt>
 */
define(function(require, exports, module) {

var ext = require("core/ext");
var editors = require("ext/editors/editors");
var language = require("ext/language/language");

module.exports = ext.register("ext/perllanguage/perllanguage", {
    name    : "PERL Language Support",
    dev     : "Ajax.org",
    type    : ext.GENERAL,
    deps    : [editors, language],
    nodes   : [],
    alone   : true,

    init : function() {
       language.registerLanguageHandler("ext/perllanguage/perl_completer");
    }
});

});
