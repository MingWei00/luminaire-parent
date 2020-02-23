	function getMerchandisePage(pageNum) {
		var m_name = $("#merchandise").find("input").val();
		$.ajax({
			url:"/be/merchandise/list",
			type:"POST",
			data:{"pageNum":pageNum,"m_name":m_name},
			success:function(result){//<img class="img-thumbnail" src="../../../../img/ylbackground.jpg">
				if(result.code == "200"){
					$("#merchandiseT").empty();
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

	setTrBackgorundC($("#merchandiseT"));
	$("#merchandiseP button").each(function(index,value){
		$(this).click(function(){
			alert("a")
			var $pageNum = $(this).data("pageNum");
			getPage($pageNum);
		});
	});
	
	$("#merchandiseP input").change(function(){
		alert("b")
		getPage($(this).val());
	});

	$("#merchandise").find("button:first").click(function() {
		$("#merchandiseM").data("modal", "insert");
		$("#merchandiseM #myModalLabel").text("添加商品信息");
		$("#merchandiseM #imageView").attr("src","../../../../img/ylbackground.jpg");
		$("#merchandiseM #m_image")[0].value="";
		$("#merchandiseM #m_name").val("");
		$("#merchandiseM #m_price").val("");
		$("#merchandiseM #m_cost_price").val("");
		$("#merchandiseM #m_repertory").val("");
		$("#merchandiseM #s_cid").val("0");
		$("#merchandiseM #m_specification").val("");
		$("#merchandiseM #m_date").val("");
		$("#merchandiseM #m_manufacturers").val("");
		$("#merchandiseM").modal('show');
	});

	$("#merchandiseM").find(".modal-footer button:eq(1)").click(function() {
		if($(this).parents("#merchandiseM").data("modal") != "insert") {
			return;
		}
		var formData = new FormData();
		formData.append("m_image",$("#merchandiseM #m_image")[0].files[0]);
		formData.append("m_name",$("#merchandiseM #m_name").val());
		formData.append("m_price",$("#merchandiseM #m_price").val());
		formData.append("m_cost_price",$("#merchandiseM #m_cost_price").val());
		formData.append("m_repertory",$("#merchandiseM #m_repertory").val());
		formData.append("s_cid",$("#merchandiseM #s_cid").val())
		formData.append("m_specification",$("#merchandiseM #m_specification").val());
		formData.append("m_date",$("#merchandiseM #m_date").val());
		formData.append("m_manufacturers",$("#merchandiseM #m_manufacturers").val());
		/*		$.ajax({
					type: "POST",
					url: "/admin/big_category/insert",
					data:formData,
					contentType: false,
					processData: false,
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

	$("#merchandise").find("button:eq(1)").click(function() {
		$("#merchandiseM").data("modal", "update");
		var $tr = getHavaCObject($("#merchandiseT"));
		if($tr != null) {
		$("#merchandiseM #myModalLabel").text("修改商品信息");
		$("#merchandiseM #imageView").attr("src","/admin/loadeImage"+$tr.find("td:eq(3) img").data("m_image"));
		$("#merchandiseM #imageView").data("oldImagePath",$tr.find("td:eq(3) img").data("m_image"));
		$("#merchandiseM #m_image")[0].value="";
		$("#merchandiseM #m_name").val($tr.find("td:eq(4)").text());
		$("#merchandiseM #m_name").data("m_id",$tr.find("td:eq(2)").text());
		$("#merchandiseM #m_price").val($tr.find("td:eq(5)").text());
		$("#merchandiseM #m_cost_price").val($tr.find("td:eq(6)").text());
		$("#merchandiseM #m_repertory").val($tr.find("td:eq(7)").text());
		$("#merchandiseM #s_cid").val($tr.find("td:eq(8)").data("s_cid"));
		$("#merchandiseM #m_specification").val($tr.find("td:eq(9)").text());
		$("#merchandiseM #m_date").prop("value",$tr.find("td:eq(10)").text());
		$("#merchandiseM #m_manufacturers").val($tr.find("td:last").text());
		$("#merchandiseM").modal('show');
		} else {
			alert("請選擇要修改的行！");
		}
	});

	$("#merchandiseM").find(".modal-footer button:eq(1)").click(function() {
		if($(this).parents("#merchandiseM").data("modal") != "update") {
			return;
		}
		var formData = new FormData();
		formData.append("m_new_image",$("#merchandiseM #m_image")[0].files[0]);
		formData.append("m_old_image",$("#merchandiseM #imageView").data("oldImagePath"));	
		formData.append("m_name",$("#merchandiseM #m_name").val());
		formData.append("m_id",$("#merchandiseM #m_name").data("m_id"));
		formData.append("m_price",$("#merchandiseM #m_price").val());
		formData.append("m_cost_price",$("#merchandiseM #m_cost_price").val());
		formData.append("m_repertory",$("#merchandiseM #m_repertory").val());
		formData.append("s_cid",$("#merchandiseM #s_cid").val());
		formData.append("m_specification",$("#merchandiseM #m_specification").val());
		formData.append("m_date",$("#merchandiseM #m_date").attr("value"));
		formData.append("m_manufacturers",$("#merchandiseM #m_manufacturers").val());
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

	$("#merchandise").find("button:eq(2)").click(function() {
		var $bChecked = removeBigCategorys($("#merchandiseT"));
		var $tr = getHavaCObject($("#merchandiseT"));
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

	$("#merchandise").find("button:last").click(function() {
		var $value = $(this).prev().children("input").val();
		getMerchandisePage(1, $value);
	});
	
	$("#m_image").change(function(){
		$("#imageView").attr("src",getObjectURL($(this)[0].files[0]));
	})

    function getObjectURL(file) {
        var url = null;
        if (window.createObjcectURL != undefined) {
            url = window.createOjcectURL(file);
        } else if (window.URL != undefined) {
            url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) {
            url = window.webkitURL.createObjectURL(file);
        }
        return url;
    }
