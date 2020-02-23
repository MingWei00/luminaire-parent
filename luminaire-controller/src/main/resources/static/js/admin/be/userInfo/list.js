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

	$("#userInfoTable").prev().find("input").click(function() {
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

	function getUserInfoPage(pageNum, b_cname) {
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
		setTrBackgorundC($("#userInfoTable"));
	}

	getUserInfoPage();
	
	$("#userInfoPage button").each(function(index, value) {
		$(this).click(function() {
			alert("a")
			var $pageNum = $(this).data("pageNum");
			getPage($pageNum);
		});
	});

	$("#userInfoPage input").change(function() {
		alert("b")
		getPage($(this).val());
	});

	$("#userInfo").find("button:first").click(function() {
		$("#userInfoModal").data("modal", "insert");
		$("#userInfoModal #myModalLabel").text("添加用戶")
			$("#userInfoModal #u_name").val("");
			$("#userInfoModal #a_name").val("");
			$("#userInfoModal #a_name").data("a_id","");
			$("#userInfoModal #a_pwd").val("");
			$("#userInfoModal #a_tid").val("0");
			$("#userInfoModal #u_sex").val("0");
			$("#userInfoModal #u_age").val("");
			$("#userInfoModal #u_birthdate").val("");
			$("#userInfoModal #u_identity_card").val("");
			$("#userInfoModal #u_mailbox").val("");
			$("#userInfoModal #u_phone").val("");
			$("#userInfoModal #u_address").val("");
		$("#userInfoModal").modal('show');
	});

	$("#userInfoModal").find(".modal-footer button:eq(1)").click(function() {
		if($(this).parents("#userInfoModal").data("modal") != "insert") {
			return;
		}
		var dataForm = new FormData();
		dataForm.append("u_name",$("#userInfoModal #u_name").val());
		dataForm.append("a_name",$("#userInfoModal #a_name").val());
		dataForm.append("a_pwd",$("#userInfoModal #a_pwd").val());
		dataForm.append("a_tid",$("#userInfoModal #a_tid").val());
		dataForm.append("u_sex",$("#userInfoModal #u_sex").val());
		dataForm.append("u_age",$("#userInfoModal #u_age").val());
		dataForm.append("u_birthdate",$("#userInfoModal #u_birthdate").val());
		dataForm.append("u_identity_card",$("#userInfoModal #u_identity_card").val());
		dataForm.append("u_mailbox",$("#userInfoModal #u_mailbox").val());
		dataForm.append("u_phone",$("#userInfoModal #u_phone").val());
		dataForm.append("u_address",$("#userInfoModal #u_address").val());
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

	$("#userInfo").find("button:eq(1)").click(function() {
		$("#userInfoModal").data("modal", "update");
		var $tr = getHavaCObject($("#userInfoTable"));
		if($tr != null) {
			$("#userInfoModal #myModalLabel").text("修改用戶信息")
			$("#userInfoModal #u_name").val($tr.find("td:eq(3)").text());
			$("#userInfoModal #a_name").val($tr.find("td:eq(4)").text());
			$("#userInfoModal #a_name").data("a_id",$tr.find("td:eq(2)").text());
			$("#userInfoModal #a_pwd").val($tr.find("td:eq(5)").text());
			$("#userInfoModal #a_tid").val($tr.find("td:eq(6)").data("a_tid"));
			$("#userInfoModal #u_sex").val($tr.find("td:eq(7)").text());
			$("#userInfoModal #u_age").val($tr.find("td:eq(8)").text());
			$("#userInfoModal #u_birthdate").attr("value",$tr.find("td:eq(9)").text());
			$("#userInfoModal #u_identity_card").val($tr.find("td:eq(10)").text());
			$("#userInfoModal #u_mailbox").val($tr.find("td:eq(11)").text());
			$("#userInfoModal #u_phone").val($tr.find("td:eq(12)").text());
			$("#userInfoModal #u_address").val($tr.find("td:last").text());
			$("#userInfoModal").modal('show');
		} else {
			alert("請選擇要修改的行！");
		}
	});

	$("#userInfoModal").find(".modal-footer button:eq(1)").click(function() {
		if($(this).parents("#userInfoModal").data("modal") != "update") {
			return;
		}
		var dataForm = new FormData();
		dataForm.append("u_name",$("#userInfoModal #u_name").val());
		dataForm.append("a_name",$("#userInfoModal #a_name").val());
		dataForm.append("a_name",$("#userInfoModal #a_name").data("a_id"));
		dataForm.append("a_pwd",$("#userInfoModal #a_pwd").val());
		dataForm.append("a_tid",$("#userInfoModal #a_tid").val());
		dataForm.append("u_sex",$("#userInfoModal #u_sex").val());
		dataForm.append("u_age",$("#userInfoModal #u_age").val());
		dataForm.append("u_birthdate",$("#userInfoModal #u_birthdate").val());
		dataForm.append("u_identity_card",$("#userInfoModal #u_identity_card").val());
		dataForm.append("u_mailbox",$("#userInfoModal #u_mailbox").val());
		dataForm.append("u_phone",$("#userInfoModal #u_phone").val());
		dataForm.append("u_address",$("#userInfoModal #u_address").val());
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

	$("#userInfo").find("button:eq(2)").click(function() {
		var $bChecked = removeBigCategorys($("#userInfoTable"));
		var $tr = getHavaCObject($("#userInfoTable"));
		var $a_id = [];
		if($tr != null) {
			if(!confirm("確定要刪除嗎？")) {
			return;
		}
			$a_id[0] = $tr.find("td:eq(2)").text();
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
				$a_id[index] = $(this).parents("thead").next().find("td:eq(2)").text();
			})
			$.each($bChecked, function(index, value) {
				$(this).parents("tr").remove();
			})
		} else {
			alert("請選擇要刪除的行！");
		}
	});

	$("#userInfo").find("button:last").click(function() {
		var $value = $(this).prev().children("input").val();
		getUserInfoPage(1, $value);
	});
});