angular.module('cdpii.controllers', ['ngPDFViewer'])

.controller('BookViewController', ['$scope', '$stateParams', 'PDFViewerService', function($scope, $stateParams, pdf) {
	switch(parseInt($stateParams.id)) {
		case 1: $scope.pageBgColor = '#E9E7C7'; break;
		case 2: $scope.pageBgColor = '#E2E2E4'; break;
		case 3: $scope.pageBgColor = '#F7D2D1'; break;
		case 4: $scope.pageBgColor = '#E8E3C4'; break;
		case 5: $scope.pageBgColor = '#D7EAF8'; break;
		case 6: $scope.pageBgColor = '#B5D7AA'; break;
		default: $scope.pageBgColor = '#FFFFFF';
	}

	$scope.viewPages = [
		'books/' + $stateParams.id + '/' + $stateParams.id + '.1.pdf',
		'books/' + $stateParams.id + '/' + $stateParams.id + '.2.pdf',
		'books/' + $stateParams.id + '/' + $stateParams.id + '.3.pdf'
	];

	$scope.totalPages = $scope.viewPages.length;
	$scope.currentPage = 1;

	$scope.pdfUrl = $scope.viewPages.splice(0, 1)[0];
	$scope.instance = pdf.Instance("pdfViewer");

	$scope.loadProgress = function(loaded, total, state) {
		// console.log('loaded =', loaded, 'total =', total, 'state =', state);
	};

	$scope.pageLoaded = function(page, total) {
		var sourceCanvas = angular.element(document.querySelector('canvas'))[0],
				destCanvas = angular.element(document.querySelector('#pdfCanvas' + $scope.currentPage))[0];

		var ctx = destCanvas.getContext('2d');

		destCanvas.width = sourceCanvas.width;
		destCanvas.height = sourceCanvas.height;

		ctx.drawImage(sourceCanvas, 0,0);

		if ($scope.viewPages.length > 0) {
			$scope.currentPage++;
			$scope.pdfUrl = $scope.viewPages.splice(0, 1)[0];
			$scope.instance = pdf.Instance("pdfViewer");
		}
	};
}]);
