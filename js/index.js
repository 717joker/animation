$(function() {
	initDetail.init();
})

var initLoading = (function() {
	var $loadingBox = $(".loading-box"),
		$run = $(".loading-range .run"),
		cur = 0,
		imgList = ["img/图层 1.png", "img/图层 2.png", "img/图层 3.png", "img/图层 4.png", "img/图层 5.png"],
		imgLength = imgList.length;

	var getImgList = function() {
		imgList.forEach(function(item) {
			var img = new Image; //创建一个image标签
			img.src = item;
			img.onload = function() {
				img = null;
				cur++;
				setImgRange();
			}
		})
	}
	var setImgRange = function() {
		$run.css("width", cur / imgLength * 100 + "%");
		if(cur >= imgLength) {
			var rangeTimer = setTimeout(function() {
				$loadingBox.remove();
				initPhone.init();
			}, 1000);
		}
	}
	return {
		init: function() {
			$loadingBox.css("display", "block");
			getImgList();
		}
	}
})()

var initPhone = (function() {
	var $phoneBox = $(".phone-box"),
		$phoneClose = $(".phone-close");

	var closePlan = $.Callbacks();
	closePlan.add(function() {
		//处理第一步
	});
	closePlan.add(function() {
		//处理第一步
	});
	return {
		init: function() {
			$phoneBox.css("display", "block");
			$phoneClose.click(closePlan.fire);
		}
	}
})()

var initMsg = (function() {
	var $msgBox = $(".msg-box"),
		$msgLi = $msgBox.find("li"),
		$key = $msgBox.find(".key"),
		$keyWord = $key.find(".key-word"),
		$keySend = $key.find(".send");

	var $msgPlan = $.Callbacks();

	//控制信息逐条显示
	$msgPlan.add(function() {
		var index = -1,
			stepTimer = null;
		stepTimer = setInterval(function() {
			index++;
			if(index == 2) {
				//表示绑定在此元素上的动画结束之后执行，有几个样式被改变就执行几次
				//$msgLi.eq(index).one;和on的作用一样，但是one只能被执行一次
				$msgLi.eq(index).one("transitionend", function() {
					console.log(123);
					clearInterval(stepTimer);
					return;
				})
			}
			$msgLi.eq(index).css({
				opacity: 1,
				transform: 'translateY(0)'
			});
		}, 1500)
	})

	return {
		init: function() {
			$msgBox.css("display", "block");
			$msgPlan.fire();
		}
	}
})()

var initCube = (function() {
	var $cubeBox = $(".cube-box");

	return {
		init: function() {
			$cubeBox.css("display", "block");
		}
	}
})()

var initDetail = (function() {
	var $detailBox = $(".detail-box"),
		$swiperContainer = $(".swiper-container");

	var setSwiper = function() {
		var mySwiper = new Swiper('.swiper-container', {
			loop: false
		})
	}
	return {
		init: function() {
			$detailBox.css("display", "block");
			setSwiper();
		}
	}
})()