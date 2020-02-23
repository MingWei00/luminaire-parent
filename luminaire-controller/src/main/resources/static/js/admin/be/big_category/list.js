function setTrBackgorundC(table) {
	var $bigTr = table.find("tr");
	$.each($bigTr, function(index, value) {
		$(this).find("td:gt(1)").click(function() {
			if ($(this).parent().css("background-color") == "rgba(0, 0, 0, 0)" && $(this).prevAll(".js").find("input").prop("checked") == false) {
				$(this).parent().css("background-color", "azure");
				changeC(index, $bigTr);
			} else {
				$(this).parent().css("background-color", "rgba(0, 0, 0, 0)");
			}
		});

		$(this).find("input[type='checkbox']").change(function(){
			if ($(this).prop("checked") == true) {
				$(this).parents("tr").css("background-color", "rgba(0, 0, 0, 0)");
			}
		})
	});

	if (table.prev().find("input").prop("checked") == true) {
		table.prev().find("input").prop("checked", false);
	}

	table.prev().find("input").click(function() {
		$.each($bigTr,function(index,value){
			$(this).css("background-color", "rgba(0, 0, 0, 0)");
		});
		checked($(this).prop("checked"),$(this).parents("thead").next());
	})
}

function changeC(bRowCount, $tr) {
	$.each($tr, function(index, value) {
		if(bRowCount != index) {
			$(this).css("background-color", "rgba(0, 0, 0, 0)")
		}
	});
}

function checked(flag,table) {
	var $bigTr = table.find("tr");
	$.each($bigTr, function(index, value) {
		$(this).find("input").prop("checked", flag);
		$(this).find("input").click(function() {
			table.prev().find("input").prop("checked", false);
		})
	});
}

function getHavaCObject(table) {
	var $bigTr = table.find("tr");
	var $object;
	$.each($bigTr, function(index, value) {
		if($(this).css("background-color") != "rgba(0, 0, 0, 0)") {
			$object = $(this);
		}
	});
	return $object;
}

function removetrs(table) {
	var $bChecked = [];
	table.find("input:checked").each(function(index, value) {
		$bChecked[index] = $(this);
	});
	return $bChecked;
}

	function getBigCPage(pageNum) {
		var b_cname = $("#big_category").find("input").val();
				$.ajax({
					url:"/be/bigCategory/list",
					type:"POST",
					data:{"pageNum":pageNum,"b_cname":b_cname},
					success:function(result){
						if(result.code == "200"){
							$("#bigCTable").empty();
							$.each(result.data.list,function(index,value){
								var $tr = $("<tr><td></td><td class='js'><input type='checkbox'/></td><td></td><td></td></tr>");
								$tr.find("td:first").text(index+1);
								$tr.find("td:eq(2)").text(value.bCid);
								$tr.find("td:last").text(value.bCname);
								$("#bigCTable").append($tr);
							});

							$("#bigCPage button:first").data("pageNum",1);
							$("#bigCPage button:eq(1)").data("pageNum",result.data.prePage);
							$("#bigCPage button:eq(2)").data("pageNum",result.data.nextPage);
							$("#bigCPage button:last").data("pageNum",result.data.pages);

							$("#bigCPage input").val(result.data.pageNum);
							$("#bigCPage input").next().text(result.data.pages);
							$("#bigCPage div span:first").text(result.data.startRow);
							$("#bigCPage div span:eq(1)").text(result.data.endRow);
							$("#bigCPage div span:last").text(result.data.endRow);

							setTrBackgorundC($("#bigCTable"));
						}else{
							alert("系统出错！");
						}
					}
				});
	}

	getBigCPage();

	$("#bigCPage button").each(function(index, value) {
		$(this).click(function() {
			var $pageNum = $(this).data("pageNum");
			getBigCPage($pageNum);
		});
	});

	$("#bigCPage input").change(function() {
		getBigCPage($(this).val());
	});

	$("#big_category").find("button:first").click(function() {
		$("#bigCModal").data("modal", "insert");
		$("#bigCModal #myModalLabel").text("添加商品大類")
		$("#bigCModal #b_cname").data("b_cid", "");
		$("#bigCModal #b_cname").val("");
		$("#bigCModal").modal('show');
	});

	$("#bigCModal").find(".modal-footer button:eq(1)").click(function() {
		if($(this).parents("#bigCModal").data("modal") != "insert") {
			return;
		}
		var $b_cname = $("#bigCModal #b_cname").val();
		$.ajax({
			type: "POST",
			url: "/be/bigCategory/insert",
			data: {
				"bCname":$b_cname
			},
			success: function(result) {
				if(result.code == "200") {
					if(result.data != "success"){
						alert(result.data);
					}else{
						getBigCPage($("#bigCPage input").val());
						if(confirm("是否要继续添加")){
							return;
						}
						$("#bigCModal").modal('hide');
					}
				} else{
					alert("系统出错！");
				}
			}
		});
	});

	$("#big_category").find("button:eq(1)").click(function() {
			$("#bigCModal").data("modal", "update");
			var $tr = getHavaCObject($("#bigCTable"));
			if($tr != null) {
				$("#bigCModal #myModalLabel").text("修改商品大類")
				$("#bigCModal #b_cname").data("b_cid", $tr.find("td:eq(2)").text());
				$("#bigCModal #b_cname").val($tr.find("td:last").text());
				$("#bigCModal").modal('show');
		} else {
			alert("請選擇要修改的行！");
		}
	});

	$("#bigCModal").find(".modal-footer button:eq(1)").click(function() {
		if($(this).parents("#bigCModal").data("modal") != "update") {
			return;
		}
		var $b_cid = $("#bigCModal #b_cname").data("b_cid");
		var $b_cname = $("#bigCModal #b_cname").val();
				$.ajax({
					type: "POST",
					url: "/be/bigCategory/update",
					data: {
						"bCid": $b_cid,
						"bCname": $b_cname
					},
					success: function(result) {
						if(result.code == "200") {
							if(result.data != "success"){
								alert(result.data);
							}else{
								getBigCPage($("#bigCPage input").val());
								$("#bigCModal").modal('hide');
							}
						} else{
							alert("系统出错！");
						}
					}
				});
	});

	$("#big_category").find("button:eq(2)").click(function() {
		var $bChecked = removetrs($("#bigCTable"));
		var $tr = getHavaCObject($("#bigCTable"));
		var formData = new FormData();
		if($tr != null) {
			if(!confirm("確定要刪除嗎？")) {
			return;
			}
			formData.append("b_cid",$tr.find("td:eq(2)").text());
			removeBigCategory(formData);
		} else if($bChecked.length > 0) {
			if(!confirm("確定要刪除嗎？")) {
			return;
			}
			$.each($bChecked, function(index, value) {
				formData.append("b_cid",$(this).parent().next().text());
			})
			removeBigCategory(formData);
		} else {
			alert("請選擇要刪除的行！");
		}
	});

	function removeBigCategory(formData){
		$.ajax({
			type: "POST",
			url: "/be/bigCategory/delete",
			data: formData,
			contentType: false,
			processData: false,
			success: function(result) {
				if(result.code == "200") {
					getBigCPage($("#bigCPage input").val());
					getSmallCPage($("#smallCPage input").val());
				}else{
					alert("系统出错！")
				}
			}
		});
	}

	$("#big_category").find("button:eq(3)").click(function() {
		getBigCPage(1);
	});
