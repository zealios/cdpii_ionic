angular.module('cdpii.controllers', ['ngPDFViewer'])

.controller('BookViewController', ['$scope', '$stateParams', 'PDFViewerService', function($scope, $stateParams, pdf) {
	// $scope.viewContent = '<b>' + $stateParams.id + '</b>';
	// $scope.viewTitle = $stateParams.title;
	switch(parseInt($stateParams.id)) {
		case 1: $scope.pageBgColor = '#E9E7C7'; break;
		case 2: $scope.pageBgColor = '#E2E2E4'; break;
		case 3: $scope.pageBgColor = '#F7D2D1'; break;
		case 4: $scope.pageBgColor = '#E8E3C4'; break;
		case 5: $scope.pageBgColor = '#D7EAF8'; break;
		case 6: $scope.pageBgColor = '#B5D7AA'; break;
		default: $scope.pageBgColor = '#FFFFFF';
	}

	$scope.currentPage = 1;
	$scope.totalPages = 3;

	$scope.pdfUrl = 'books/' + $stateParams.id + '/' + $stateParams.id + '.pdf';
	$scope.instance = pdf.Instance("pdfViewer");

	$scope.loadProgress = function(loaded, total, state) {
		// console.log('loaded =', loaded, 'total =', total, 'state =', state);
	};

	$scope.pageLoaded = function(curPage, totalPages) {
		$scope.currentPage = curPage;
		$scope.totalPages = totalPages;
	};

	$scope.nextPage = function() {
		// console.log("next");
		if (($scope.currentPage + 1) <= $scope.totalPages) {
			$scope.instance.nextPage();
			$scope.currentPage++;
		}		
	};

	$scope.prevPage = function() {
		// console.log("prev");
		if (($scope.currentPage - 1) >= 1) {
			$scope.instance.prevPage();
			$scope.currentPage--;
		}
	};
}]);