var Backbone = require('backbone');

var HomeView = Backbone.View.extend({
  tagName: "div",
  id: "home-view",
  initialize: function() {
      $("body").html(this.el);
      this.render();
  },
  render: function() {
      this.$el.html("<h1>Part 1</h1><ul><li><a href='#over'>Over</a></li><li><a href='#under'>Under</a></li></ul>");
  }
});

var Over18View = Backbone.View.extend({
    tagName: "div",
    id: "over-view",
    initialize: function() {
        $("body").html(this.el);
        this.render();
    },
    render: function() {
        this.$el.html("<h1>Over Eighteen</h1><a href='#complete'>Complete</a>");
    }
});

var Under18View = Backbone.View.extend({
    tagName: "div",
    id: "under-view",
    initialize: function() {
        $("body").html(this.el);
        this.render();
    },
    render: function() {
        this.$el.html("<h1>Under Eighteen</h1><a href='#complete'>Complete</a>");
    }
});
var Registered = Backbone.View.extend({
    tagName: "div",
    id: "registered",
    initialize: function() {
        $("body").html(this.el);
        this.render();
    },
    render: function() {
        this.$el.html("<h1>Registered!</h1>");
    }
});

var Router = Backbone.Router.extend({
  routes : {
      "" : "home",
      "home" : "home",
      "over" : "over",
      "under" : "under",
      "complete" : "complete"
  },
  home : function() {
      this.view = new HomeView();
  },
  over : function() {
      this.view = new Over18View();
  },
  under : function() {
      this.view = new Under18View();
  },
  complete : function() {
      this.view = new Registered();
  }
});

var router = new Router();
Backbone.history.start();
