ace.define("ace/snippets/curly",[], function(require, exports, module) {
"use strict";

exports.snippetText = "";
exports.scope = "curly";

});
                (function() {
                    ace.require(["ace/snippets/curly"], function(m) {
                        if (typeof module == "object") {
                            module.exports = m;
                        }
                    });
                })();
            