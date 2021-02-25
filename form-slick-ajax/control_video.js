(function($){
	$.fn.controlVideos = function (cmd,options) {
		var mYel = this;
		var settings = {};
		var defaults = {
			onplay : function(){}
			,onpause : function(){}
			,onended : function(){}
			,oncanplay : function(){}
			,listener : function(e){
				if (e.origin.indexOf('www.youtube.com') !== -1){
					var data = JSON.parse(e.data);
					if( typeof(data.info)!="undefined" && data.info && typeof(data.info.playerState) !== "undefined" ){
						switch(data.info.playerState){
							case -1:
								break;
							case 0:
								settings['onended']();
								break;
							case 1:
								settings['onplay']();
								break;
							case 2:
								settings['onpause']();
								break;
							case 3:
								break;
							case 5:
								break;
							default:
								break;
						}
					}else if(data.event == "onReady"){
						settings['oncanplay']();
						settings['oncanplay'] = function(){};
					}
				}
			}
		};
		settings = $.extend({}, defaults, options);
		var fn = {
			updateOptions: function(options){
				settings = $.extend({}, settings, options);
			},
			setEvent: function(){
				if(mYel.filter('iframe').length > 0){
					fn.handle(1);
				}
				mYel.filter('video').each(function(ind,elm){
					for(var k in settings){
						elm[k] = settings[k];
					}
				});
			},
			unique: function(elm){
				var elmObj = $(elm);
				if( elmObj.is("[data-unique]") ){
					return elmObj.attr('data-unique');
				}else{
					var gen = (new Date().getTime() + Math.random() + '').replace(".","");
					elmObj.attr('data-unique',gen);
					return gen;
				}
			},
			handle:function(add) {
				var w3 = add ? window.addEventListener : window.removeEventListener;
				w3 ? w3('message', settings['listener'], !1) : (add ? window.attachEvent : window.detachEvent)('onmessage', settings['listener']);
				if(add){
					mYel.filter('iframe').each(function(ind,elm){
						elm.contentWindow.postMessage(JSON.stringify({
							"event": "listening",
							"id": fn.unique(elm)
						}), "*");
					});
				}
			},
			play:function(){
				mYel.filter('iframe').each(function(ind,elm){
					// $(elm).show();
					elm.contentWindow.postMessage(JSON.stringify({"event":"command","func":"playVideo","args":""}), '*');
				});
				mYel.filter('video').each(function(ind,elm){
					// $(elm).show();
					elm.play();
				});
			},
			pause:function(){
				mYel.filter('iframe').each(function(ind,elm){
					elm.contentWindow.postMessage(JSON.stringify({"event":"command","func":"pauseVideo","args":""}), '*');
				});
				mYel.filter('video').each(function(ind,elm){
					elm.pause();
				});
			},
			stop:function(){
				mYel.filter('iframe').each(function(ind,elm){
					elm.contentWindow.postMessage(JSON.stringify({"event":"command","func":"stopVideo","args":""}), '*');
				});
				mYel.filter('video').each(function(ind,elm){
					elm.pause();
					elm.currentTime = 0;
				});
			},
			muted:function(value){
				if(value){
					mYel.filter('iframe').each(function(ind,elm){
						elm.contentWindow.postMessage(JSON.stringify({"event":"command","func":"mute","args":""}), '*');
					});
				}else{
					mYel.filter('iframe').each(function(ind,elm){
						elm.contentWindow.postMessage(JSON.stringify({"event":"command","func":"unMute","args":""}), '*');
					});
				}
				mYel.filter('video').each(function(ind,elm){
					elm.muted = value;
				});
			},
			volume:function(value){
				mYel.filter('iframe').each(function(ind,elm){
					elm.contentWindow.postMessage(JSON.stringify({"event":"command","func":"setVolume","args":[value]}), '*');
				});
				mYel.filter('video').each(function(ind,elm){
					elm.volume = value;
				});
			},
			currentTime:function(time){
				if(time === undefined){
					var currentTime = 0;
					mYel.filter('video').each(function(ind,elm){
						currentTime = elm.currentTime
					});
					return currentTime;
				}else{
					mYel.filter('iframe').each(function(ind,elm){
						elm.contentWindow.postMessage(JSON.stringify({"event":"command","func":"seekTo","args":[time,true]}), '*');
					});
					mYel.filter('video').each(function(ind,elm){
						elm.currentTime = time;
					});
				}
			},
			duration:function(){
				var duration = 0;
				mYel.filter('video').each(function(ind,elm){
					duration = elm.duration
				});
				return duration;
			}
		};

		if( typeof(cmd)!=="undefined" && cmd !== "" ){
			fn[cmd]();
		}

		return fn;
	};
})(jQuery)