document.addEventListener('DOMContentLoaded', function () {
	chrome.storage.local.get('annotationcode', function (result) {
		if (result.annotationcode != undefined) {
			document.getElementById('data').value = result.annotationcode
		} else {
			chrome.storage.local.set({
				annotationcode: ''
			});
		};
	})
});
document.getElementById('save').addEventListener('click', function () {
	chrome.storage.local.set({
		annotationcode: document.getElementById('data').value
	}, function () {});
})
