<link rel="stylesheet" href="../../../../css/admin/be/mean/list.css" />
<link rel="stylesheet" href="../../../../css/bootstrap.min.css" />
<script type="text/javascript" src="../../../../js/jquery-3.3.1.js"></script>
<script type="text/javascript" src="../../../../js/bootstrap.min.js"></script>
<script type="text/javascript" src="../../../../js/admin/be/mean/list.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<div>
	<h4 style="cursor:default;">管理菜單</h4>
	<div id="mean">
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
				<input type="text" class="form-control" placeholder="菜單名稱搜索">
			</div>
			<button class="btn btn-default">提交</button>
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
				<th>名稱</th>
				<th>位置設置</th>
				<th>英文名稱</th>
			</tr>
		</thead>
		<tbody id="meanTable">
			<tr>
				<td>1</td>
				<td><input type="checkbox" /></td>
				<td>Bangalore</td>
				<td>560001</td>
				<td>0</td>
				<td>560001</td>
			</tr>
			<tr>
				<td>2</td>
				<td><input type="checkbox" /></td>
				<td>Bangalore</td>
				<td>560001</td>
			</tr>
			<tr>
				<td>3</td>
				<td><input type="checkbox" /></td>
				<td>Bangalore</td>
				<td>560001</td>
			</tr>
		</tbody>
	</table>
</div>
<div id="meanPage">
	<button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-fast-backward"></span>
        </button>
	<button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon glyphicon-backward"></span>
       </button> 第
	<input type="number" autocomplete="off" style="width:30px" type="text" />共<span>4</span>頁
	<button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon glyphicon-forward"></span>
        </button>
	<button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-fast-forward"></span>
      </button>
	<div style="float:right;">
		顯示1到<span>3</span>，共<span>3</span>記錄
	</div>
</div>
<div class="modal fade" id="meanModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 class="modal-title" id="myModalLabel">菜單模塊</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" role="form">
					<div class="form-group">
						<label for="m_name" class="col-sm-3 control-label">名稱：</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="m_name" placeholder="请输入名稱">
						</div>
					</div>
					<div class="form-group">
						<label for="m_position" class="col-sm-3 control-label">位置：</label>
						<div class="col-sm-8">
							<input type="number" max="1" class="form-control" id="m_position" placeholder="请输入位置">
						</div>
					</div>
					<div class="form-group">
						<label for="m_ename" class="col-sm-3 control-label">英文名稱：</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="m_ename" placeholder="请输入英文名稱">
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