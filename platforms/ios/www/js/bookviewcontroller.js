angular.module('cdpii.controllers', ['ngPDFViewer'])

.controller('BookViewController', ['$scope', '$stateParams', '$ionicSlideBoxDelegate', 'PDFViewerService', function($scope, $stateParams, $ionicSlideBoxDelegate, pdf) {
	var booksPages = [3, 3, 3, 3, 3, 3];

	switch(parseInt($stateParams.id)) {
		case 1: $scope.pageBgColor = '#E9E7C7'; break;
		case 2: $scope.pageBgColor = '#E2E2E4'; break;
		case 3: $scope.pageBgColor = '#F7D2D1'; break;
		case 4: $scope.pageBgColor = '#E8E3C4'; break;
		case 5: $scope.pageBgColor = '#D7EAF8'; break;
		case 6: $scope.pageBgColor = '#B5D7AA'; break;
		default: $scope.pageBgColor = '#FFFFFF';
	}

	$scope.viewPages = [];

	var pageCount = booksPages[parseInt($stateParams.id) - 1];

	// USING JPEG
	for (var i = 1; i <= pageCount; i++) {
			$scope.viewPages.push('books/' + $stateParams.id + '/' + $stateParams.id + '.' + i + '.jpg');
	}

	$scope.title = $stateParams.title;
	$scope.totalPages = $scope.viewPages.length;
	$scope.currentPage = 1;

	$scope.disableSwipe = function() {
		$ionicSlideBoxDelegate.enableSlide(false);
	};

	$scope.prevPage = function() {
		if ($scope.currentPage > 1) {
			$ionicSlideBoxDelegate.previous();
			$scope.currentPage--;
		}
	};

	$scope.nextPage = function() {
		if ($scope.currentPage < $scope.totalPages) {
			$ionicSlideBoxDelegate.next();
			$scope.currentPage++;
		}
	};

	// USING PDF
	// for (var i = 1; i <= pageCount; i++) {
	// 		$scope.viewPages.push('books/' + $stateParams.id + '/' + $stateParams.id + '.' + i + '.pdf');
	// }
	//
	// $scope.totalPages = $scope.viewPages.length;
	// $scope.currentPage = 1;
	//
	// $scope.pdfUrl = $scope.viewPages.splice(0, 1)[0];
	// $scope.instance = pdf.Instance("pdfViewer");
	//
	// $scope.loadProgress = function(loaded, total, state) {
	// 	// console.log('loaded =', loaded, 'total =', total, 'state =', state);
	// };
	//
	// $scope.pageLoaded = function(page, total) {
	// 	var sourceCanvas = angular.element(document.querySelector('canvas'))[0],
	// 			destCanvas = angular.element(document.querySelector('#pdfCanvas' + $scope.currentPage))[0];
	//
	// 	var ctx = destCanvas.getContext('2d');
	//
	// 	destCanvas.width = sourceCanvas.width;
	// 	destCanvas.height = sourceCanvas.height;
	//
	// 	ctx.drawImage(sourceCanvas, 0,0);
	//
	// 	if ($scope.viewPages.length > 0) {
	// 		$scope.currentPage++;
	// 		$scope.pdfUrl = $scope.viewPages.splice(0, 1)[0];
	// 		$scope.instance = pdf.Instance("pdfViewer");
	// 	}
	// };
}]);
