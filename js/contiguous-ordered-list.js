var ContiguousOrderedList = {

	start: function() {
		var lists = document.querySelectorAll('ol');
		var length = lists.length;
		var lastSize = 0;
		for (var i = 0 ; i < length ; i++) {
			var list = lists[i];
			var items = list.querySelectorAll('li');
			if (i > 0) {
				list.setAttribute('start', lastSize + 1);
			}
			lastSize += items.length;
		}
	}

};
