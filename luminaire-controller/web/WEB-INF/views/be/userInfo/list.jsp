<link rel="stylesheet" href="../../../../css/admin/be/userInfo/list.css" />
<link rel="stylesheet" href="../../../../css/bootstrap.min.css" />
<script type="text/javascript" src="../../../../js/jquery-3.3.1.js"></script>
<script type="text/javascript" src="../../../../js/bootstrap.min.js"></script>
<script type="text/javascript" src="../../../../js/admin/be/userInfo/list.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<div>
	<h4 style="cursor:default;">管理用戶</h4>
	<div id="userInfo">
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
				<input type="text" class="form-control" placeholder="用戶名搜索">
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
				<th>真實姓名</th>
				<th>賬號名</th>
				<th>密碼</th>
				<th>賬號類</th>
				<th>性別</th>
				<th>年齡</th>
				<th>生日日期</th>
				<th>身份證</th>
				<th>郵箱</th>
				<th>電話號碼</th>
				<th>收貨地址</th>
			</tr>
		</thead>
		<tbody id="userInfoTable">
			<tr>
				<td>1</td>
				<td><input type="checkbox" /></td>
				<td>Bangalore</td>
				<td>560001</td>
				<td>Bangalore</td>
				<td>560001</td>
				<td data-a_tid="2">Bangalore</td>
				<td>女</td>
				<td>20</td>
				<td>2010-09-12</td>
				<td>Bangalorsfsfsdafae</td>
				<td>560001</td>
				<td>354</td>
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
<div id="userInfoPage">
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
<div class="modal fade" id="userInfoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 class="modal-title" id="myModalLabel">用戶模塊</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" role="form">
					<div class="form-group">
						<label for="u_name" class="col-sm-3 control-label">真實姓名：</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="u_name" placeholder="请输入真實姓名">
						</div>
					</div>
					<div class="form-group">
						<label for="a_name" class="col-sm-3 control-label">賬號名：</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="a_name" placeholder="请输入賬號名">
						</div>
					</div>
					<div class="form-group">
						<label for="a_pwd" class="col-sm-3 control-label">密碼：</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="a_pwd" placeholder="请输入密碼">
						</div>
					</div>
					<div class="form-group">
						<label for="a_tid" class="col-sm-3 control-label">賬號類型：</label>
						<div class="col-sm-8">
							<select id="a_tid" class="form-control">
								<option value="0" selected>--請選擇--</option>
								<option value="2">普通用戶</option>
							</select>
						</div>
					</div>
					<div class="form-group">
						<label for="u_sex" class="col-sm-3 control-label">性別：</label>
						<div class="col-sm-8">
							<select id="u_sex" class="form-control">
								<option value="0" selected>--請選擇--</option>
								<option>男</option>
								<option>女</option>
							</select>
						</div>
					</div>
					<div class="form-group">
						<label for="u_age" class="col-sm-3 control-label">年齡：</label>
						<div class="col-sm-8">
							<input type="number" class="form-control" id="u_age" placeholder="请输入年齡">
						</div>
					</div>
					<div class="form-group">
						<label for="u_birthdate" class="col-sm-3 control-label">生日日期：</label>
						<div class="col-sm-8">
							<input type="date" class="form-control" id="u_birthdate" placeholder="请输入生日日期">
						</div>
					</div>
					<div class="form-group">
						<label for="u_identity_card" class="col-sm-3 control-label">身份証：</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="u_identity_card" placeholder="请输入身份証">
						</div>
					</div>
					<div class="form-group">
						<label for="u_mailbox" class="col-sm-3 control-label">郵箱：</label>
						<div class="col-sm-8">
							<input type="email" class="form-control" id="u_mailbox" placeholder="请输入郵箱">
						</div>
					</div>
					<div class="form-group">
						<label for="u_phone" class="col-sm-3 control-label">手機號：</label>
						<div class="col-sm-8">
							<input type="number" class="form-control" id="u_phone" placeholder="请输入手機號">
						</div>
					</div>
					<div class="form-group">
						<label for="u_address" class="col-sm-3 control-label">收貨地址：</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="u_address" placeholder="收貨地址">
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