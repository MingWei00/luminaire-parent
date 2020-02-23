<link rel="stylesheet" href="../../../../css/bootstrapStyle/bootstrapStyle.css" />
<link rel="stylesheet" href="../../../../css/bootstrap.min.css" />
<script type="text/javascript" src="../../../../js/jquery-3.3.1.js"></script>
<script type="text/javascript" src="../../../../js/bootstrap.min.js"></script>
<script type="text/javascript" src="../../../../js/admin/be/account_type/list.js"></script>
<script type="text/javascript" src="../../../../js/ztree/jquery.ztree.core.js"></script>
<script type="text/javascript" src="../../../../js/ztree/jquery.ztree.excheck.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<div>
	<h4 style="cursor:default;">管理賬號類</h4>
	<div id="account_type">
		<button type="button" class="btn btn-default btn-sm">
			<span class="glyphicon glyphicon-plus"></span> 添加
		</button>
		<button type="button" class="btn btn-default btn-sm">
			<span class="glyphicon glyphicon-pencil"></span> 修改
		</button>
		<button type="button" class="btn btn-default btn-sm">
			<span class="glyphicon glyphicon-minus"></span> 刪除
		</button>
		<button type="button" class="btn btn-default btn-sm">
			 <span class="glyphicon glyphicon-globe"></span> 授權
		</button>
		<div style="float:right;padding-bottom:1px;">
			<div style="display:inline-block;margin-bottom: 0">
				<input type="text" class="form-control" placeholder="類名稱搜索">
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
			</tr>
		</thead>
		<tbody id="account_tTable">
			<tr>
				<td>1</td>
				<td><input type="checkbox" /></td>
				<td>Bangalore</td>
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
<div id="account_tPage">
	<button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-fast-backward"></span>
        </button>
	<button type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon glyphicon-backward"></span>
       </button> 第
	<input style="width:30px" type="text" />共<span>4</span>頁
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
<div class="modal fade" id="account_tModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 class="modal-title" id="myModalLabel">賬號類模塊</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" role="form">
					<div class="form-group">
						<label for="a_tname" class="col-sm-3 control-label">名稱：</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="a_tname" placeholder="请输類型名">
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
<div class="modal fade" id="account_tTreeM" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 class="modal-title" id="myModalLabel">賬戶類授權</h4>
			</div>
			<div class="modal-body">
				<ul id="tree" class="ztree"></ul>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
				<button type="button" class="btn btn-primary">保存</button>
			</div>
		</div>
	</div>
</div>