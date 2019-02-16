function Autolunbo(obj, active) {
	var box = getId(obj);

	var ul = box.getElementsByClassName('ul')[0];
	var aLis = box.getElementsByTagName('li');

	var light = box.getElementsByClassName('light')[0];
	var aSpan = light.getElementsByTagName('span');
	var iw = parseInt(getStyle(aLis[0], 'width'));

	var pis = box.getElementsByClassName('pis')[0];
	var prev = box.getElementsByClassName('prev')[0];
	var next = box.getElementsByClassName('next')[0];

	var num = 0;
	var timer = null;

	for(var i = 0; i < aLis.length; i++) {
		aLis[i].style.left = iw + 'px';
	}
	css(aLis[0], 'left', 0);

	function spanNext() {
		for(var i = 0; i < aSpan.length; i++) {
			aSpan[i].className = '';
		}
		aSpan[num].className = active;
	}
	for(var i = 0; i < aSpan.length; i++) {
		aSpan[i].index = i;
		aSpan[i].onclick = function() {
			if(this.index > num) {
				startMove(aLis[num], {
					left: -iw
				});
				css(aLis[this.index], 'left', iw + 'px');
			} else {
				startMove(aLis[num], {
					left: iw
				});
				css(aLis[this.index], 'left', -iw + 'px');
			}
			startMove(aLis[this.index], {
				left: 0
			});
			num = this.index;
			spanNext();
		}
	}

	function autoplay() {
		startMove(aLis[num], {
			left: -iw
		});
		num = ++num >= aLis.length ? 0 : num;
		css(aLis[num], 'left', iw + 'px');
		startMove(aLis[num], {
			left: 0
		});
		spanNext();
	}

	timer = setInterval(autoplay, 2000)
	box.onmouseover = function() {
		clearInterval(timer);
	}
	box.onmouseout = function() {
		timer = setInterval(autoplay, 2000);
	}

	prev.onclick = () => {
		startMove(aLis[num], {
			left: iw
		});
		num = --num < 0 ? aLis.length - 1 : num;
		css(aLis[num], 'left', -iw + 'px');
		startMove(aLis[num], {
			left: 0
		});
		spanNext();
	}
	next.onclick = () => {
		autoplay();
	}
}