$(function() {

	var $a = $(".panel-body ul li a");

	$.each($a, function() {
		$(this).click(function(index, value) {
			var $ename = $(this).data("name");
			var $cname = $(this).text();

			if(Judgement($cname) == true && $ename != undefined) {
				addtags($ename, $cname);
				edittags($ename);
			} else if(Judgement($cname) == false) {
				edittags($ename);
			}

		});
	});

	function Judgement(name) {
		var $tab = $("#myTab li a");
		var result = true;

		$.each($tab, function(index, value) {
			if($(this).text() == name) {
				result = false;
			}
		});

		return result;
	}

	function addtags(ename, cname) {
		var $img = "<img id='remove" + ename + "' class='remove' src='/static/img/remove.jpg'/>";
		var $li = $("<li><a>" + cname + $img + "</a></li>");
		$li.find("a").attr('href', '#' + ename);
		$("#myTab").append($li);
		removetags(ename);
	}

	function edittags(ename) {
		var $tab = $("#myTab li a");
		var $tabContent = $("#myTabContent div");
		$.each($tab, function(index, value) {
			if("#" + ename == $(this).attr("href")) {
				$(this).parent("li").attr("class", "active");
				$(this).attr("aria-expanded", "true");
				addAClick($(this));
			} else {
				$(this).parent("li").attr("class", "");
				$(this).attr("aria-expanded", "false");
			}
		});

		$.each($tabContent, function(index, value) {
			if(ename == $(this).attr("id")) {
				$(this).attr("class", "tab-pane fade active in");
			} else {
				if($(this).attr("class") == "tab-pane fade active in") {
					$(this).attr("class", "tab-pane fade");
				}
			}
		});
	}

	function addAClick(label) {
		label.on("click", function() {
			var $href = $(this).attr("href").substring(1);
			edittags($href);
		});
	}

	function removetags(ename) {
		$("#remove" + ename).click(function() {
			removebeforedit($(this).parent(), ename);
			$(this).parents("li").remove();
		});
	}

	function removebeforedit(whetherToChoose, ename) {
		var value = whetherToChoose.parent().attr("class");
		var $href = whetherToChoose.parent().prev().children(":first").attr("href").substring(1);

		if(value == "active") {
			whetherToChoose.parent().prev().attr("class", "active");
			whetherToChoose.attr("aria-expanded", "true");
			$("#myTabContent  #" + ename).attr("class", "tab-pane fade");
			$("#myTabContent  #" + $href).attr("class", "tab-pane fade active in");
		}
	}

	$("#changepwd").find(".modal-footer button:eq(1)").click(function() {
		$("#changepwd").modal('hide');
	});

	$("#log_off").find(".modal-footer button:eq(1)").click(function() {
		$("#log_off").modal('hide');
	});

});