$(function() {

	function setTrBackgorundC(table) {
		var $bigTr = table.find("tr");

		$.each($bigTr, function(index, value) {
			$(this).find("td:gt(1)").on("click",function() {
				if($(this).parent().css("background-color") == "rgba(0, 0, 0, 0)") {
					$(this).parent().css("background-color", "azure");
					changeC(index, $bigTr);
				} else {
					$(this).parent().css("background-color", "rgba(0, 0, 0, 0)")
				}
			});
		});
	}

	function changeC(bRowCount, $tr) {
		$.each($tr, function(index, value) {
			if(bRowCount != index) {
				$(this).css("background-color", "rgba(0, 0, 0, 0)")
			}
		});
	}

	$("#meanTable").prev().find("input").click(function() {
		checked($(this).prop("checked"),$(this).parents("thead").next());
	})

	function checked(flag,table) {
		var $bigTr = table.find("tr");
		$.each($bigTr, function(index, value) {
			$(this).find("input").prop("checked", flag);
			$(this).find("input").click(function() {
				table.prev().find("input").prop("checked", false);
			})
		});
	}

	function getMeanPage(pageNum, b_cname) {
		alert("a")
		/*		$.ajax({
					url:"/admin/big_category/list",
					type:"POST",
					data:{"pageNum":pageNum,"b_cname",b_cname},
					success:function(result){
						if(result.code == "200"){
							$.each(result.data,function(index,value){
								
							});
						}
					}
				});*/
		setTrBackgorundC($("#meanTable"));
	}

	getMeanPage();
	
	$("#meanPage button").each(function(index, value) {
		$(this).click(function() {
			alert("a")
			var $pageNum = $(this).data("pageNum");
			getPage($pageNum);
		});
	});

	$("#meanPage input").change(function() {
		alert("b")
		getPage($(this).val());
	});

	$("#mean").find("button:first").click(function() {
		$("#meanModal").data("modal", "insert");
		$("#meanModal #myModalLabel").text("添加菜單")
		$("#meanModal #m_name").val("");
		$("#meanModal #m_position").val("");
		$("#meanModal #m_name").data("m_id","");
		$("#meanModal #m_ename").val("");
		$("#meanModal").modal('show');
	});

	$("#meanModal").find(".modal-footer button:eq(1)").click(function() {
		if($(this).parents("#meanModal").data("modal") != "insert") {
			return;
		}
		var formData = new FormData();
		formData.append("m_name",$("#meanModal #m_name").val());
		formData.append("m_position",$("#meanModal #m_position").val());
		formData.append("m_ename",$("#meanModal #m_ename").val());
		/*		$.ajax({
					type: "POST",
					url: "/admin/big_category/insert",
					data: {"b_cname":$b_cname},
					success: function(result) {
						if(result.code == "200"){
						//$(this).parents("#bigCModal").modal('hide');
						}else if(result.code == "500"){
							
						}
					}
				});*/
	});

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

	$("#mean").find("button:eq(1)").click(function() {
		$("#meanModal").data("modal", "update");
		var $tr = getHavaCObject($("#meanTable"));
		if($tr != null) {
			$("#meanModal #myModalLabel").text("修改菜單")
			$("#meanModal #m_name").val($tr.find("td:eq(3)").text());
			$("#meanModal #m_name").data("m_id",$tr.find("td:eq(2)").text());
			$("#meanModal #m_position").val($tr.find("td:eq(4)").text());
			$("#meanModal #m_ename").val($tr.find("td:eq(5)").text());
			$("#meanModal").modal('show');
		} else {
			alert("請選擇要修改的行！");
		}
	});

	$("#meanModal").find(".modal-footer button:eq(1)").click(function() {
		if($(this).parents("#meanModal").data("modal") != "update") {
			return;
		}
		var dataForm = new FormData();
		dataForm.append("m_name",$("#meanModal #m_name").val());
		dataForm.append("m_name",$("#meanModal #m_name").data("m_id"));
		dataForm.append("m_position",$("#meanModal #m_position").val());
		dataForm.append("m_ename",("#userInfoModal #m_ename").val());
		/*		$.ajax({
					type: "POST",
					url: "/admin/big_category/update",
					data: {
						"b_cid": $b_cid,
						"b_cname": $b_cname
					},
					success: function(result) {
						if(result.code == "200") {
							//$(this).parents("#bigCModal").modal('hide');
						} else if(result.code == "500") {

						}
					}
				});*/
	});

	function removeBigCategorys(table) {
		var $bChecked = [];
		table.find("input:checked").each(function(index, value) {
			$bChecked[index] = $(this);
		});
		return $bChecked;
	}

	$("#mean").find("button:eq(2)").click(function() {
		var $bChecked = removeBigCategorys($("#meanTable"));
		var $tr = getHavaCObject($("#meanTable"));
		var $m_id = [];
		if($tr != null) {
			if(!confirm("確定要刪除嗎？")) {
			return;
		}
			$m_id[0] = $tr.find("td:eq(2)").text();
			$tr.remove();
			/*			$.ajax({
							type: "POST",
							url: "/admin/big_category/delete",
							data: {
								"b_cname": $tr.find("td:eq(1)").text()
							},
							success: function(result) {
								if(result.code == "200") {
									
								} else if(result.code == "500") {

								}
							}
						});*/
		} else if($bChecked.length > 0) {
			if(!confirm("確定要刪除嗎？")) {
			return;
		}
			$.each($bChecked, function(index, value) {
				$m_id[index] = $(this).parents("thead").next().find("td:eq(2)").text();
			})
			$.each($bChecked, function(index, value) {
				$(this).parents("tr").remove();
			})
		} else {
			alert("請選擇要刪除的行！");
		}
	});

	$("#mean").find("button:last").click(function() {
		var $value = $(this).prev().children("input").val();
		getMeanPage(1, $value);
	});
});