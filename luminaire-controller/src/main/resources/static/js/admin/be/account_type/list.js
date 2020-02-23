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

	$("#account_tTable").prev().find("input").click(function() {
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

	function getAccountTypePage(pageNum, b_cname) {
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
		setTrBackgorundC($("#account_tTable"));
	}

	getAccountTypePage();
	
	$("#account_tPage button").each(function(index, value) {
		$(this).click(function() {
			alert("a")
			var $pageNum = $(this).data("pageNum");
			getPage($pageNum);
		});
	});

	$("#account_tPage input").change(function() {
		alert("b")
		getPage($(this).val());
	});

	$("#account_type").find("button:first").click(function() {
		$("#account_tModal").data("modal", "insert");
		$("#account_tModal #myModalLabel").text("添加賬號類")
		$("#account_tModal #a_tname").data("a_tid", "");
		$("#account_tModal #a_tname").val("");
		$("#account_tModal").modal('show');
	});

	$("#account_tModal").find(".modal-footer button:eq(1)").click(function() {
		if($(this).parents("#account_tModal").data("modal") != "insert") {
			return;
		}
		var $a_tname = $("#account_tModal").find(".modal-body #a_tname").val();
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

	$("#account_type").find("button:eq(1)").click(function() {
		$("#account_tModal").data("modal", "update");
		var $tr = getHavaCObject($("#account_tTable"));
		if($tr != null) {
			$("#account_tModal #myModalLabel").text("修改賬號類")
			$("#account_tModal #a_tname").data("a_tid", $tr.find("td:eq(2)").text());
			$("#account_tModal #a_tname").val($tr.find("td:last").text());
			$("#account_tModal").modal('show');
		} else {
			alert("請選擇要修改的行！");
		}
	});

	$("#account_tModal").find(".modal-footer button:eq(1)").click(function() {
		if($(this).parents("#account_tModal").data("modal") != "update") {
			return;
		}
		var $b_cid = $("#account_tModal #a_tname").data("a_tid");
		var $b_cname = $("#account_tModal #a_tname").val();
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

	$("#account_type").find("button:eq(2)").click(function() {
		var $bChecked = removeBigCategorys($("#account_tTable"));
		var $tr = getHavaCObject($("#account_tTable"));
		var $a_tid = [];
		if($tr != null) {
			if(!confirm("確定要刪除嗎？")) {
			return;
		}
			$a_tid[0] = $tr.find("td:eq(2)").text();
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
				$a_tid[index] = $(this).parents("thead").next().find("td:eq(2)").text();
			})
			$.each($bChecked, function(index, value) {
				$(this).parents("tr").remove();
			})
		} else {
			alert("請選擇要刪除的行！");
		}
	});

	$("#account_type").find("button:last").click(function() {
		var $value = $(this).prev().children("input").val();
		getAccountTypePage(1, $value);
	});
	
	var setting = {
        check: {
            //使用复选框
            enable: true
        },
        data: {
            //使用外部数据
            simpleData: {
                enable: true
            }
        }
    };

    function getIdsFromCheckNodes(event, treeId, treeNode) { //第二步
        var treeObj = $.fn.zTree.getZTreeObj("tree"),
            nodes = treeObj.getCheckedNodes(true),
            id = [];
        for (var i = 0; i < nodes.length; i++) {
            id[i] = nodes[i].id; //第三部
        }
        return id;
    }

	$("#account_type").find("button:eq(3)").click(function() {
		var $tr = getHavaCObject($("#account_tTable"));
		if($tr != null) {
			$("#account_tTreeM").modal('show');
		} else {
			alert("請選擇要修改的行！");
		}
/*		$.getJSON("/admin/privilege/list", {"roleId": 2}, function(result) {
			$.fn.zTree.init($("#tree"), setting, result);

		})*/
	});
    
     $("#account_tTreeM").click(function () {
        var ids = getIdsFromCheckNodes();
        console.log(ids);
        $("#account_tTreeM").modal('hide');
    });
});