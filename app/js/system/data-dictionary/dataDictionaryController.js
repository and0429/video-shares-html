'use strict';

var System = angular.module('System', []);

System.controller('DataDictionaryCtrl', ['$uibModal', '$scope', 'DataDictionaryService', 
    function($uibModal, $scope, DataDictionaryService){

    $scope.option = {};

    DataDictionaryService.list('sss').then(function(data){

        $scope.option = {
            data: data,
            enableSorting: false,
            enableCellEditOnFocus: true,
            columnDefs: [ 
                {field: 'type', displayName: '类型', enableSorting: false},
                { field: 'key', displayName: '键', enableSorting: false },
                { field: 'value', displayName: '值'},
                {   
                    name: 'option',
                    displayName: '操作', 
                    cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="grid.appScope.edit(row.entity)" >Edit</button> '
                }
            ]
        }
    })


    $scope.edit = function(param){

        $scope.items = ['item1', 'item2', 'item3'];

        if (param) {
            console.log("编辑");
        }else{
            console.log("新增");
        }
        /*$state.go('datadictionry_edit');*/
        var modalInstance = $uibModal.open({
          animation: true,
          backdrop: 'static',
          templateUrl: 'tpls/system/data-dictionary/edit.html',
          /*templateUrl: 'edit.html',*/
          controller: 'DictionaryEditCtrl',
          /*size: 'lg',*/
          resolve: {
            items: function(){
                return $scope.items;
            }
          }
        });

        modalInstance.result.then(
            function (selectedItem) {
                $scope.selected = selectedItem;
                console.log(selectedItem);
            }, 
            function () {
                console.log('Modal dismissed at: ' + new Date());
            }
        );
  };
}]);


/**
 * 数据字典编辑模态框
 */
System.controller('DictionaryEditCtrl', ['$uibModalInstance', '$scope', 'items', function($uibModalInstance, $scope, items){
     $scope.items = items;
     $scope.ok = function(){
        $uibModalInstance.close($scope.items);
     };

     $scope.cancel = function(){
        $uibModalInstance.dismiss('cancel');
     }

}]);