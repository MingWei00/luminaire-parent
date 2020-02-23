<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>光明網</title>
		<link rel="stylesheet" href="/static/css/bootstrap.min.css" />
		<link rel="stylesheet" href="/static/css/admin/be/index.css" />
		<script type="text/javascript" src="/static/js/jquery-3.3.1.js"></script>
		<script type="text/javascript" src="/static/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="/static/js/admin/be/index.js"></script>
	</head>

		<body>
		<div class="container">
			<div class="row clearfix">
				<div class="col-md-12 column">
					<nav class="navbar navbar-default" role="navigation">
						<div class="container-fluid">
							<div class="navbar-header">
								<a class="navbar-brand" href="#">光明網後臺管理</a>
							</div>
							<div class="navbar-right">
								<p class="navbar-text"><b>歡迎：</b>肖劍</p>
							</div>
						</div>
					</nav>
				</div>
			</div>
			<div class="row clearfix">
				<div class="col-md-2 column">
					<h4 style="cursor:default;">導航菜單</h4>
					<div class="panel-group" id="accordion">
						<div class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title">
                					<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                						用戶管理    
                					</a>
            					</h4>
							</div>
							<div id="collapseOne" class="panel-collapse collapse">
								<div class="panel-body">
									<ul class="nav nav-pills nav-stacked">
										<li>
											<a data-name="user" href="#">管理用戶</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title">
                					<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                						商品管理    
                					</a>
            					</h4>
							</div>
							<div id="collapseTwo" class="panel-collapse collapse">
								<div class="panel-body">
									<ul class="nav nav-pills nav-stacked">
										<li>
											<a data-name="big_category" href="#">管理商品大類型</a>
										</li>
										<li>
											<a data-name="small_category" href="#">管理商品小類型</a>
										</li>
										<li>
											<a data-name="goods" href="#">管理商品</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title">
                					<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                						訂單管理    
                					</a>
            					</h4>
							</div>
							<div id="collapseThree" class="panel-collapse collapse">
								<div class="panel-body">
									<ul class="nav nav-pills nav-stacked">
										<li>
											<a data-name="user2" href="#">管理訂單</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title">
                					<a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                						oo    
                					</a>
            					</h4>
							</div>
							<div id="collapseFour" class="panel-collapse collapse">
								<div class="panel-body">
									<ul class="nav nav-pills nav-stacked">
										<li>
											<a data-name="user3" href="#">oo</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title">
                					<a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                						    公告管理
                					</a>
            					</h4>
							</div>
							<div id="collapseFive" class="panel-collapse collapse">
								<div class="panel-body">
									<ul class="nav nav-pills nav-stacked">
										<li>
											<a data-name="user4" href="#">管理公告</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title">
                					<a data-toggle="collapse" data-parent="#accordion" href="#collapseSix">
                						    標簽管理
                					</a>
            					</h4>
							</div>
							<div id="collapseSix" class="panel-collapse collapse">
								<div class="panel-body">
									<ul class="nav nav-pills nav-stacked">
										<li>
											<a data-name="user5" href="#">管理標簽</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title">
                					<a data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">
                						   系統設置
                					</a>
            					</h4>
							</div>
							<div id="collapseSeven" class="panel-collapse collapse">
								<div class="panel-body">
									<ul class="nav nav-pills nav-stacked">
										<li>
											<a data-toggle="modal" data-target="#changepwd" href="#">修改密碼</a>
										</li>
										<li>
											<a data-toggle="modal" data-target="#log_off" href="#">安全退出</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-10 column">
					<ul id="myTab" class="nav nav-tabs">
						<li class="active">
							<a href="#home" data-toggle="tab">首頁</a>
						</li>
					</ul>
					<div id="myTabContent" class="tab-content">
						<div class="tab-pane fade active in" id="home">
							<div class="jumbotron">
								<h1>欢迎登陆页面！</h1>
								<p>这是一个超大屏幕（Jumbotron）的实例。</p>
								<p>
									<a class="btn btn-primary btn-lg" role="button">
										学习更多</a>
								</p>
							</div>
						</div>
						<div class="tab-pane fade" id="big_category">
							<jsp:include page="big_category/list.jsp"/>
						</div>
						<div class="tab-pane fade" id="small_category">
							<jsp:include page="small_category/list.jsp"/>
						</div>
						<div class="tab-pane fade" id="goods">
							<jsp:include page="merchandise/list.jsp"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>

<div class="modal fade" id="changepwd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 class="modal-title" id="myModalTitle">修改密碼</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" role="form">
					<div class="form-group">
						<label for="accountName" class="col-sm-3 control-label">賬號名：</label>
						<div class="col-sm-9">
							<input type="text" class="form-control" id="accountname" placeholder="请输入賬號名">
						</div>
					</div>
					<div class="form-group">
						<label for="pwd" class="col-sm-3 control-label">原密碼：</label>
						<div class="col-sm-9">
							<input type="text" class="form-control" id="pwd" placeholder="请输原密碼">
						</div>
					</div>
					<div class="form-group">
						<label for="newpwd" class="col-sm-3 control-label">新密碼：</label>
						<div class="col-sm-9">
							<input type="text" class="form-control" id="newpwd" placeholder="请输入新密碼">
						</div>
					</div>
					<div class="form-group">
						<label for="newpwds" class="col-sm-3 control-label">確認新密碼：</label>
						<div class="col-sm-9">
							<input type="text" class="form-control" id="newpwds" placeholder="请再次输入新密碼">
						</div>
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
				<button type="button" class="btn btn-primary">保存</button>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="log_off" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 class="modal-title" id="myModalLabel">系統提示！</h4>
			</div>
			<div class="modal-body">
				是否退出光明網後臺管理系統
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
				<button type="button" class="btn btn-primary">確定</button>
			</div>
		</div>
	</div>
</div>


	<script type="text/javascript" src="/static/js/admin/be/big_category/list.js"></script>
	<script type="text/javascript" src="/static/js/admin/be/small_category/list.js"></script>
	<script type="text/javascript" src="/static/js/admin/be/merchandise/list.js"></script>
</html>