function agecheckTemplate(locals) {
var jade_debug = [ new jade.DebugItem( 1, "views/partials/ageCheck.jade" ) ];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;

jade_debug.unshift(new jade.DebugItem( 0, "views/partials/ageCheck.jade" ));
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
buf.push("<input type=\"radio\" name=\"radio\" id=\"over18\" checked=\"checked\" class=\"form__radio\"/>");
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
buf.push("<input type=\"radio\" name=\"radio\" id=\"under18\" class=\"form__radio\"/>");
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
buf.push("<input type=\"submit\" value=\"Continue\" class=\"submit\"/>");
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
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "form.ageCheck\n    h2.form__title First things first, how old are you?\n    \n    input(type=\"radio\" name=\"radio\" id=\"over18\" checked).form__radio\n    label(for=\"over18\").form__label.form__label--radio Over 18\n    input(type=\"radio\" name=\"radio\" id=\"under18\").form__radio\n    label(for=\"under18\").form__label.form__label--radio Under 18\n    \n    input(type=\"submit\" value=\"Continue\").submit\n    \n\n\nscript(type=\"text/javascript\").\n    document.querySelectorAll('.submit')[0].addEventListener('click', function(event) {\n        event.preventDefault();\n        document.querySelectorAll('.page')[0].innerHTML = window.over18Template();\n    });\n");
}
}