<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<link rel="stylesheet" href="/static/css/admin/be/merchandise/list.css" />
<div>
	<h4 style="cursor:default;">管理商品</h4>
	<div id="merchandise">
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
				<input type="text" class="form-control" placeholder="商品名搜索">
			</div>
			<button class="btn btn-default">提交</button>
		</div>
	</div>
</div>
<div>
	<table class="table table-bordered">
		<thead>
			<tr>
				<th style="width:32px;"></th>
				<th><input type="checkbox" /></th>
				<th>ID</th>
				<th>圖片</th>
				<th>名稱</th>
				<th>定價</th>
				<th>成本價</th>
				<th>庫存</th>
				<th>小類</th>
				<th>規格</th>
				<th>進貨日期</th>
				<th>進貨廠家</th>
			</tr>
		</thead>
		<tbody id="merchandiseT">
			<tr>
				<td>1</td>
				<td><input type="checkbox" /></td>
				<td>1</td>
				<td><img class="img-thumbnail" src="/static/img/O1CN01TXmWLU1oz9fkFX6kg_!!2179955295.jpg"></td>
				<td>欧式美全铜水晶吊灯</td>
				<td>2560</td>
				<td>1900</td>
				<td>10</td>
				<td data-s_cid="3">吊灯</td>
				<td>220V～ 50Hz</td>
				<td>2011-01-23</td>
				<td>泰皓灯饰厂</td>
			</tr>
			<tr>
				<td>2</td>
				<td><input type="checkbox" /></td>
				<td>2</td>
				<td><img class="img-thumbnail" src="/static/img/O1CN01VE8FL51fODFZJfvKe_!!0-item_pic.jpg"></td>
				<td>组合简约水晶吸顶灯</td>
				<td>1838</td>
				<td>1400</td>
				<td>3</td>
				<td>吸顶灯</td>
				<td>220-240V～ 50Hz</td>
				<td>2011-01-23</td>
				<td>泰皓灯饰厂</td>
			</tr>
			<tr>
				<td>3</td>
				<td><input type="checkbox" /></td>
				<td>3</td>
				<td><img class="img-thumbnail" src="/static/img/O1CN01pzLOsm1fODFvuSXy5_!!0-item_pic.jpg"></td>
				<td>圆形卧室吸顶灯</td>
				<td>2398</td>
				<td>1980</td>
				<td>1</td>
				<td>吸顶灯</td>
				<td>220-240V～ 50Hz</td>
				<td>2011-01-23</td>
				<td>泰皓灯饰厂</td>
			</tr>
		</tbody>
	</table>
</div>
<div id="merchandiseP">
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
<div class="modal fade" id="merchandiseM" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 class="modal-title" id="myModalLabel">商品模塊</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" role="form">
					<div class="form-group">
						<label class="col-sm-3  control-label">圖片預覽：</label>
						<div class="col-sm-8">
							<img class="img-thumbnail" id="imageView" />
						</div>
					</div>
					<div class="form-group">
						<label for="m_image" class="col-sm-3 control-label">圖片下載路徑：</label>
						<div class="col-sm-8">
							<input type="file" id="m_image" class="form-control">
						</div>
					</div>
					<div class="form-group">
						<label for="m_name" class="col-sm-3 control-label">名稱：</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" id="m_name" placeholder="请输入名稱">
						</div>
					</div>
					<div class="form-group">
						<label for="m_price" class="col-sm-3 control-label">定價：</label>
						<div class="col-sm-8">
							<input type="number" class="form-control" id="m_price" placeholder="请输入定價">
						</div>
					</div>
					<div class="form-group">
						<label for="m_cost_price" class="col-sm-3 control-label">成本價：</label>
						<div class="col-sm-8">
							<input type="number" class="form-control" id="m_cost_price" placeholder="請輸入成本價">
						</div>
					</div>
					<div class="form-group">
						<label for="m_repertory" class="col-sm-3 control-label">庫存量：</label>
						<div class="col-sm-8">
							<input type="number" class="form-control" id="m_repertory" placeholder="請輸入庫存量">
						</div>
					</div>
					<div class="form-group">
						<label for="s_cid" class="col-sm-3 control-label">小類：</label>
						<div class="col-sm-8">
							<select id="s_cid" class="form-control">
								<option value="0" selected>--請選擇--</option>
							</select>
						</div>
					</div>
					<div>
						<div class="form-group">
							<label for="m_specification" class="col-sm-3 control-label">規格：</label>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="m_specification" placeholder="請輸入規格" />
							</div>
						</div>
					</div>
					<div>
						<div class="form-group">
							<label for="m_date " class="col-sm-3 control-label">日期：</label>
							<div class="col-sm-8">
								<input type="date" class="form-control" id="m_date"/> 
							</div>
						</div>
					</div>
					<div>
						<div class="form-group">
							<label for="m_manufacturers" class="col-sm-3 control-label">廠家：</label>
							<div class="col-sm-8">
								<input type="text" class="form-control" id="m_manufacturers" placeholder="請輸入廠家" />
							</div>
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