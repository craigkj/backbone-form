function layoutTemplate(locals) {
var jade_debug = [ new jade.DebugItem( 1, "views/layout.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_debug.unshift(new jade.DebugItem( 0, "views/layout.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "views/layout.jade" ));
buf.push("<!DOCTYPE html>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 2, "views/layout.jade" ));
buf.push("<html lang=\"en\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 3, "views/layout.jade" ));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "views/layout.jade" ));
buf.push("<head>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, "views/layout.jade" ));
buf.push("<title>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("Test");
jade_debug.shift();
jade_debug.shift();
buf.push("</title>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "views/layout.jade" ));
buf.push("<script src=\"runtime.js\" type=\"text/javascript\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "views/layout.jade" ));
buf.push("<script src=\"over18.js\" type=\"text/javascript\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 8, "views/layout.jade" ));
buf.push("<script src=\"ageCheck.js\" type=\"text/javascript\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "views/layout.jade" ));
buf.push("<script src=\"bundle.js\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "views/layout.jade" ));
buf.push("<body>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 11, "views/layout.jade" ));
buf.push("<div class=\"page\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "views/layout.jade" ));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
buf.push("");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\nhtml(lang=\"en\")\n  block vars\n  head\n    title Test\n    script(src=\"runtime.js\" type=\"text/javascript\")\n    script(src='over18.js' type=\"text/javascript\")\n    script(src='ageCheck.js' type=\"text/javascript\")\n    script(src='bundle.js')\n  body\n    .page\n        block body\n");
}
}