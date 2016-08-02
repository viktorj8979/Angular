var PanelsController = function($resource) {
  var scope = this;
  var models = $resource('app/models/:modelId.json', {modelId:'@id'});

  scope.currentModel = models.get({modelId: 1});

  scope.$watch('currentModel', function() { 
    scope.currentModelJson = angular.toJson(scope.currentModel.layout, true);
  });

  scope.$watch('currentModelJson', function() { 
    scope.currentModel.layout = angular.fromJson(scope.currentModelJson, false);
  });
};

PanelsController.$inject = ['$resource'];