Home.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.user = options.user;
    this.$infoPanel = options.infoPanel;
  },

  routes: {
    "": "index",
    "edit/info": "editInfo"
  },

  index: function () {
    //info panel view
    this.user.fetch();
    var view = new Home.Views.InfoPanel({model: this.user});
    this.swapInfoView(view);
  },

  editInfo: function () {
    // this.user.fetch();
    var view = new Home.Views.EditUser({model: this.user});
    this.swapInfoView(view);
  },

  swapInfoView: function (view){
    this.infoView && this.infoView.remove();
    this.infoView = view;
    this.$infoPanel.html(this.infoView.render().$el);
  }

})
