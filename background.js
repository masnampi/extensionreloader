var id = "cfhdojbkjhnklbpkdaibdccddilifddb";
function reloadExtension(id) {
    if (confirm('Reload Extension with id '+id+' ?')) {
		chrome.management.setEnabled(id, false, function() {
	        chrome.management.setEnabled(id, true);
	    });		    
	}
}
chrome.browserAction.onClicked.addListener(function(tab) {
    reloadExtension(id);
});