function agecheckpageTemplate(locals) {
var jade_debug = [ new jade.DebugItem( 1, "views/pages/ageCheckPage.jade" ) ];
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
buf.push("<script src=\"jade/runtime.js\" type=\"text/javascript\">");
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
buf.push("<script src=\"bundle.js\" type=\"text/javascript\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "views/layout.jade" ));
buf.push("<script src=\"page/page.js\" type=\"text/javascript\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();
buf.push("</head>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 12, "views/layout.jade" ));
buf.push("<body>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, "views/layout.jade" ));
buf.push("<ul>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, "views/layout.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, "views/layout.jade" ));
buf.push("<a href=\"./agecheck\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 15, jade_debug[0].filename ));
buf.push("ageCheck");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 16, "views/layout.jade" ));
buf.push("<li>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, "views/layout.jade" ));
buf.push("<a href=\"./over\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 17, jade_debug[0].filename ));
buf.push("over");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</body>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 18, "views/layout.jade" ));
buf.push("<div class=\"page\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 19, "views/layout.jade" ));
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
buf.push("");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 0, "views/pages/ageCheckPage.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "views/partials/ageCheck.jade" ));
buf.push("<form class=\"ageCheck\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "views/partials/ageCheck.jade" ));
buf.push("<h2 class=\"form__title\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, jade_debug[0].filename ));
buf.push("First things first, how old are you?");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 4, "views/partials/ageCheck.jade" ));
buf.push("<input type=\"radio\" name=\"radio\" id=\"over18\" checked class=\"form__radio\">");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "views/partials/ageCheck.jade" ));
buf.push("<label for=\"over18\" class=\"form__label form__label--radio\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
buf.push("Over 18");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "views/partials/ageCheck.jade" ));
buf.push("<input type=\"radio\" name=\"radio\" id=\"under18\" class=\"form__radio\">");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "views/partials/ageCheck.jade" ));
buf.push("<label for=\"under18\" class=\"form__label form__label--radio\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
buf.push("Under 18");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "views/partials/ageCheck.jade" ));
buf.push("<input type=\"submit\" value=\"Continue\" class=\"submit\">");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "views/partials/ageCheck.jade" ));
buf.push("<script type=\"text/javascript\">");
jade_debug.unshift(new jade.DebugItem( 18, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 18, jade_debug[0].filename ));
buf.push("document.querySelectorAll('.submit')[0].addEventListener('click', function(event) {");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 18, jade_debug[0].filename ));
buf.push("    event.preventDefault();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 18, jade_debug[0].filename ));
buf.push("    document.querySelectorAll('.page')[0].innerHTML = window.over18Template();");
jade_debug.shift();
buf.push("\n");
jade_debug.unshift(new jade.DebugItem( 18, jade_debug[0].filename ));
buf.push("});");
jade_debug.shift();
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 20, "views/layout.jade" ));
buf.push("<script src=\"therouter.js\" type=\"text/javascript\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.shift();
buf.push("</script>");
jade_debug.shift();
jade_debug.shift();
buf.push("</html>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "extends ../layout\n\nappend body\n    include ../partials/ageCheck\n    \n");
}
}