	function getSmallCPage(pageNum) {
		var s_cname = $("#small_category").find("input").val();
		$.ajax({
			url:"/be/smallCategory/list",
			type:"POST",
			data:{"pageNum":pageNum,"s_cname":s_cname},
			success:function(result){
				if(result.code == "200"){
					$("#smallCTable").empty();
					$("#smallCModal #b_cid").empty();
					$.each(result.data.pageInfo.list,function(index,smallCategory){
						var $tr = $("<tr><td></td><td class='js'><input type='checkbox'/></td><td></td><td></td><td></td></tr>");
						$tr.find("td:first").text(index+1);
						$tr.find("td:eq(2)").text(smallCategory.sCid);
						$tr.find("td:eq(3)").text(smallCategory.sCname);
						$.each(result.data.bigCategories,function(index,bigCategory){
							if(bigCategory.bCid == smallCategory.bCid){
								$tr.find("td:last").data("b_cid",smallCategory.bCid);
								$tr.find("td:last").text(bigCategory.bCname);
							}
						});
						$("#smallCTable").append($tr);
					});

					$.each(result.data.bigCategories,function(index,bigCategory){
						$("#smallCModal #b_cid").append("<option value='"+bigCategory.bCid+"'>"+bigCategory.bCname+"</option>");
					});

					var $pageInfo = result.data.pageInfo;
					$("#smallCPage button:first").data("pageNum",1);
					$("#smallCPage button:eq(1)").data("pageNum",$pageInfo.prePage);
					$("#smallCPage button:eq(2)").data("pageNum",$pageInfo.nextPage);
					$("#smallCPage button:last").data("pageNum",$pageInfo.pages);

					$("#smallCPage input").val($pageInfo.pageNum);
					$("#smallCPage input").next().text($pageInfo.pages);
					$("#smallCPage div span:first").text($pageInfo.startRow);
					$("#smallCPage div span:eq(1)").text($pageInfo.endRow);
					$("#smallCPage div span:last").text($pageInfo.endRow);

					setTrBackgorundC($("#smallCTable"));
				}else{
					alert("系统出错！");
				}
			}
		});
	}

	getSmallCPage();

	$("#smallCPage button").each(function(index, value) {
		$(this).click(function() {
			var $pageNum = $(this).data("pageNum");
			getSmallCPage($pageNum);
		});
	});

	$("#smallCPage input").change(function() {
		getSmallCPage($(this).val());
	});

	$("#small_category").find("button:first").click(function() {
		$("#smallCModal").data("modal", "insert");
		$("#smallCModal #myModalLabel").text("添加商品小類")
		$("#smallCModal #b_cid").val("1");
		$("#smallCModal #s_cname").val("");
		$("#smallCModal").modal('show');
	});

	$("#smallCModal").find(".modal-footer button:eq(1)").click(function() {
		if($(this).parents("#smallCModal").data("modal") != "insert") {
			return;
		}
		var $b_cid = $("#smallCModal #b_cid").val();
		var $s_cname = $("#smallCModal #s_cname").val();
		$.ajax({
			type: "POST",
			url: "/be/smallCategory/insert",
			data: {
				"sCname":$s_cname,
				"bCid": $b_cid
			},
			success: function(result) {
				if(result.code == "200") {
					if(result.data != "success"){
						alert(result.data);
					}else{
						getSmallCPage($("#smallCPage input").val());
						if(confirm("是否要继续添加")){
							return;
						}
						$("#smallCModal").modal('hide');
					}
				} else{
					alert("系统出错！");
				}
			}
		});
	});

	$("#small_category").find("button:eq(1)").click(function() {
		$("#smallCModal").data("modal", "update");
		var $tr = getHavaCObject($("#smallCTable"));
		if($tr != null) {
			$("#smallCModal #myModalLabel").text("修改商品小類")
			$("#smallCModal #b_cid").val($tr.find("td:last").data("b_cid"));
			$("#smallCModal #s_cname").data("s_cid", $tr.find("td:eq(2)").text());
			$("#smallCModal #s_cname").val($tr.find("td:eq(3)").text());
			$("#smallCModal").modal('show');
		} else {
			alert("請選擇要修改的行！");
		}
	});

	$("#smallCModal").find(".modal-footer button:eq(1)").click(function() {
		if($(this).parents("#smallCModal").data("modal") != "update") {
			return;
		}
		var $b_cid = $("#smallCModal #b_cid").val();
		var $s_cname = $("#smallCModal #s_cname").val();
		var $s_cid = $("#smallCModal #s_cname").data("s_cid");
		$.ajax({
			type: "POST",
			url: "/be/smallCategory/update",
			data: {
				"sCid":$s_cid,
				"sCname":$s_cname,
				"bCid": $b_cid
			},
			success: function(result) {
				if(result.code == "200") {
					if(result.data != "success"){
						alert(result.data);
					}else{
						getSmallCPage($("#smallCPage input").val());
						$("#smallCModal").modal('hide');
					}
				} else{
					alert("系统出错！");
				}
			}
		});
	});

	$("#small_category").find("button:eq(2)").click(function() {
		var $bChecked = removetrs($("#smallCTable"));
		var $tr = getHavaCObject($("#smallCTable"));
		var formData = new FormData();
		if($tr != null) {
			if(!confirm("確定要刪除嗎？")) {
				return;
			}
			formData.append("s_cid",$tr.find("td:eq(2)").text());
			removeSmallCategory(formData);
		} else if($bChecked.length > 0) {
			if(!confirm("確定要刪除嗎？")) {
				return;
			}
			$.each($bChecked, function(index, value) {
				formData.append("s_cid",$(this).parent().next().text());
			})
			removeSmallCategory(formData);
		} else {
			alert("請選擇要刪除的行！");
		}
	});

	function removeSmallCategory(formData){
		$.ajax({
			type: "POST",
			url: "/be/smallCategory/delete",
			data: formData,
			contentType: false,
			processData: false,
			success: function(result) {
				if(result.code == "200") {
					getSmallCPage($("#smallCPage input").val());
				}else{
					alert("系统出错！")
				}
			}
		});
	}

	$("#small_category").find("button:eq(3)").click(function() {
		getSmallCPage(1);
	});
