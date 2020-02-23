<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<div>
	<h4 style="cursor:default;">管理商品大类</h4>
	<div id="big_category">
		<button type="button" class="btn btn-default btn-sm">
			<span class="glyphicon glyphicon-plus"></span> 添加
		</button>
		<button type="button" class="btn btn-default btn-sm">
			<span class="glyphicon glyphicon-pencil"></span> 修改
		</button>
		<button type="button" class="btn btn-default btn-sm">
			<span class="glyphicon glyphicon-minus"></span> 刪除
		</button>
		<div style="float:right;padding-bottom:1px;">
			<div style="display:inline-block;margin-bottom: 0">
				<input type="text" class="form-control" placeholder="大類搜索">
			</div>
			<button class="btn btn-default">搜索</button>
		</div>
	</div>
</div>
<div style="height:250px;">
	<table class="table table-bordered">
		<thead>
			<tr>
				<td style="width:32px;"></td>
				<th><input type="checkbox" /></th>
				<th>ID</th>
				<th>大類型名</th>
			</tr>
		</thead>
		<tbody id="bigCTable">

		</tbody>
	</table>
</div>
<div id="bigCPage">
	<button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-fast-backward"></span>
        </button>
	<button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon glyphicon-backward"></span>
       </button> 第
	<input style="width:30px" type="text" />共<span>0</span>頁
	<button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon glyphicon-forward"></span>
        </button>
	<button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-fast-forward"></span>
      </button>
	<div style="float:right;">
		顯示<span>0</span>到<span>0</span>，共<span>0</span>記錄
	</div>
</div>
<div class="modal fade" id="bigCModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 class="modal-title" id="myModalLabel">商品大類模塊</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" role="form">
					<div class="form-group">
						<label for="b_cname" class="col-sm-3 control-label">類型名稱：</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="b_cname" placeholder="请输入類型名">
						</div>
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
				<button type="button" class="btn btn-primary">保存</button>
			</div>
		</div>
	</div>
</div>