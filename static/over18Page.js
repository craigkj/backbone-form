function over18pageTemplate(locals) {
var jade_debug = [ new jade.DebugItem( 1, "views/pages/over18Page.jade" ) ];
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
jade_debug.unshift(new jade.DebugItem( 0, "views/pages/over18Page.jade" ));
jade_debug.unshift(new jade.DebugItem( 1, "views/partials/over18.jade" ));
buf.push("<form>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, "views/partials/over18.jade" ));
buf.push("<h2 class=\"form__title\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 2, jade_debug[0].filename ));
buf.push("Welcome Back");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 3, "views/partials/over18.jade" ));
buf.push("<div>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, "views/partials/over18.jade" ));
buf.push("<label for=\"username\" class=\"form__label\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
buf.push("Email or username");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 5, "views/partials/over18.jade" ));
buf.push("<input type=\"text\" name=\"username\" placeholder=\"Email or username\" value=\"example@bbc.co.uk\" class=\"form__field form__field--success\">");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 6, "views/partials/over18.jade" ));
buf.push("<span>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 6, jade_debug[0].filename ));
buf.push("!=username.error");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 7, "views/partials/over18.jade" ));
buf.push("<div>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, "views/partials/over18.jade" ));
buf.push("<label for=\"password\" class=\"form__label\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 8, jade_debug[0].filename ));
buf.push("Password");
jade_debug.shift();
jade_debug.shift();
buf.push("</label>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 9, "views/partials/over18.jade" ));
buf.push("<input type=\"password\" name=\"password\" placeholder=\"Password\" value=\"Password\" class=\"form__field form__field--success\">");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 10, "views/partials/over18.jade" ));
buf.push("<a href=\"\" class=\"form__link form__link--forgot\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 10, jade_debug[0].filename ));
buf.push("Forgot your password?");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 11, "views/partials/over18.jade" ));
buf.push("<div>");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 12, "views/partials/over18.jade" ));
buf.push("<input type=\"submit\" value=\"Sign In\" class=\"form__action\">");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 13, "views/partials/over18.jade" ));
buf.push("<p class=\"form__text\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 13, jade_debug[0].filename ));
buf.push("Dont have a BBC account yet? ");
jade_debug.shift();
jade_debug.unshift(new jade.DebugItem( 14, "views/partials/over18.jade" ));
buf.push("<a href=\"#\" class=\"form__link\">");
jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
jade_debug.unshift(new jade.DebugItem( 14, jade_debug[0].filename ));
buf.push("Sign up");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</form>");
jade_debug.shift();
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
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "extends ../layout\n\nappend body\n    include ../partials/over18\n    \n");
}
}