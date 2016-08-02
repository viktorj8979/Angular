angular.widget('@ui:panels', function(expression, element) {
  var compiler = this;

  function buildPanels(scope, linkElement, model)
  {
    if (angular.isDefined(model) && angular.isDefined(model.layout)) {
      var layout = model.layout;
      linkElement.empty();

      for(var i=0, cols=model.layout.length; i<cols; i++) {
        var columnElement = angular.element('<div class="ui-column ui-sortable"></div>');  

        for(var j=0, panels=model.layout[i].length; j<panels; j++) {
          var panelElement = angular.element('<div class="dragbox"></div>');

          function getPanelContent(panel) {
            return panel.hasOwnProperty('content')
              ? panel.content
              : (panel.hasOwnProperty('url') ? panel.url : '');
          }

          panelElement.append('<h6>' +  model.layout[i][j].header + '</h6>');
          panelElement.append('<div>' + getPanelContent( model.layout[i][j]) + '</div>');
          panelElement.attr('ui-column-id', i);
          panelElement.attr('ui-panel-id', j);
          columnElement.append(panelElement);
        }

        columnElement.sortable({
          opacity: 0.8,
          connectWith: ".ui-column",
          receive: function(event, ui) {
            var newLayout = [];

            var columnsDom = ui.item.context.parentElement.parentElement.children;
            for(var i=0, cols=columnsDom.length; i<cols; i++) {
              newLayout[i] = [];
              var panelsDom = columnsDom[i].children;
              for(var j=0, panels=panelsDom.length; j<panels; j++) {
                var oldColumnId = $(panelsDom[j]).attr('ui-column-id');
                var oldPanelId = $(panelsDom[j]).attr('ui-panel-id');
                model.layout[oldColumnId][oldPanelId] = layout[oldColumnId][oldPanelId];
                newLayout[i][j] = layout[oldColumnId][oldPanelId];
              }
            }

            buildPanels(linkElement, model);
            model.layout = newLayout;
            scope.$digest();
          }
        });

        linkElement.append(columnElement);
      }
    }    
  }
  
  return function(linkElement) {
    var scope = this;
    scope.$watch(element.attr('model'), function() { 
      var model = scope.$eval(element.attr('model'), linkElement);
      buildPanels(scope, linkElement, model);
    });
  };
});
