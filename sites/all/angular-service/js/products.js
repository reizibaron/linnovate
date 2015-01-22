var app = angular.module('App', []).controller();

app.controller('home', ['$scope','$http', function($scope,$http) {
    $scope.title = "Search products";
    $scope.products = {};
    $http.get("http://mysite.local:8083/json-products")
    .success(function(response) {
    	$scope.products = response;
    });
}]);


//I put this in block
// <script type="text/javascript" src="sites/all/angular-service/angular.min.js"></script>
// <script type="text/javascript" src="sites/all/angular-service/products.js"></script>
//    <div ng-app="App">
//     <div ng-controller = "home">
//     {{title}}
//     <input type="text" ng-model="search.title">
//     <table>
//       <tr  ng-repeat="product in products | filter:search | orderBy:'title'"  >
//         <td> <a href = "/node/{{product.nid}}">{{product.title}}</a> </td>
//         <td> 
//           <a href = "/node/{{product.nid}}">
//   		      <img src = "/sites/mysite.local/files/{{product.filename}}" style=" width: 132px;	height: 95px;">  
//           </a>    
//         </td>
//       </tr>   
//     </table>     
//   </div>
// </div>