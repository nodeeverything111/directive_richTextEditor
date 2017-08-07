angular.module('editmodule',[]).directive('editTool',['$rootScope',function(rootscope){
	return{
		restrict: 'EA',
		scope:{data:'=output'},
		templateUrl:'/uslx/tpl.uslx',
		link:function($scope){
			rootscope.title='yideliang';
			$scope.data={};
		}
	}
}])