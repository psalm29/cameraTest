
var serviceURL = "http://localhost/Testing20/services/";/////http://localhost/Testing18/services/
//var id = getUrlVars()["id"];
var products;
function getEmployeeList() {
	//$.mobile.loading("show");
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
	
		
		
		$('#employeeList li').remove();
		products = data.items;
		
		$.each(products, function(index, products) {
			
			
			$('#employeeList').append('<li><a data-transition="slide" href="productdetails.html?id=' + products.id + '">' +
					'<img style="margin-top: 12px;margin-left: 8px;" height="120" width="120" src="pics/' + products.image + '"/>' +
					'<h2>' + products.name + '</h2>' +
					'<p>' + products.seller + '</p>' +
					'<h2 style="color:#ff6600" ><span style="color:#ff6600">NGN </span>' + products.amount + '</h2></a></li>');
		});
		
		$('#employeeList').listview('refresh');
		//$.mobile.loading( "hide" );
	});
}

function displayEmployee(data) {
	//$.mobile.loading( "show");
	console.log('RESTful successful opened');
	var products = data.item;
	console.log(products);
	$('#pd_pic').attr('src', 'img/images/' + products.picture);
	$('#pd_pdtname').text(products.name);
	$('#pdtpricevalue').text(products.price);
	$('#pd_pdtavblevalue').text(products.status);
	$('#pd_pddpvalue').text(products.status);
	//$.mobile.loading( "hide" );
	console.log(products.phone);
	/*if (employee.managerId>0) {
		$('#actionList').append('<li><a href="#Pdt_page?id=' + employee.managerId + '"><h3>View Manager</h3>' +
				'<p>' + employee.managerFirstName + ' ' + employee.managerLastName + '</p></a></li>');
	}
	if (employee.reportCount>0) {
		$('#actionList').append('<li><a href="reportlist.html?id=' + employee.id + '"><h3>View Direct Reports</h3>' +
				'<p>' + employee.reportCount + '</p></a></li>');
	}
	if (employee.email) {
		$('#actionList').append('<li><a href="mailto:' + employee.email + '"><h3>Email</h3>' +
				'<p>' + employee.email + '</p></a></li>');
	}
	if (employee.officePhone) {
		$('#actionList').append('<li><a href="tel:' + employee.officePhone + '"><h3>Call Office</h3>' +
				'<p>' + employee.officePhone + '</p></a></li>');
	}
	if (employee.cellPhone) {
		$('#actionList').append('<li><a href="tel:' + employee.cellPhone + '"><h3>Call Cell</h3>' +
				'<p>' + employee.cellPhone + '</p></a></li>');
		$('#actionList').append('<li><a href="sms:' + employee.cellPhone + '"><h3>SMS</h3>' +
				'<p>' + employee.cellPhone + '</p></a></li>');
	}
	$('#actionList').listview('refresh');*/
	
}
function renderproductdetails(){
$.getJSON(serviceURL + 'getemployee.php?id='+id, function(data) {
	
	console.log('RESTful successful opened');
	var products = data.item;
	console.log(products);
	$('#pd_pic').attr('src', 'img/images/' + products.picture);
	$('#pd_pdtname').text(products.name);
	$('#pdtpricevalue').text(products.price);
	$('#pd_pdtavblevalue').text(products.status);
	$('#pd_pddpvalue').text(products.status);
	console.log(products.phone);
		});
}


function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
		
    }
    return vars;
}

////-------------------------------------------------------------login system

$('#loginDialog').live('pageshow', function(event) {
	/*var name = $('#name').val();
var pwd = $('#pwd').val();

var good = 'good';
var exist = 'exist';

$('#loginForm').post('http://douychi.com/services/login.php', {user: name, pwd: pwd}, function(result){
	if(result == good){
		alert ('Login good');
	}else if(result == exist){
		alert ('Login good');
	}
});*/
	$('#loginbtn').click(function(){
		var sn = $('#seller_nm').val();
		var pw = $('#seller_pw').val();
		if(sn == "chiaka" && pw == "douye"){
			$('#login_error').fadeIn("slow");
			$('#login_error').text("vaild seller's name and password");
			$('#login_error').css("background-color","rgba(51,51,51,1)");
			
			}else{
					$('#login_error').fadeIn("slow");
					$('#login_error').delay(2800);
					$('#login_error').fadeOut("slow");
				}
		
		});
	
		
		
	
	}); 
////-------------------------------------------------------------login system



$('#bar').live('pageshow', function(event) {
	
	getEmployeeList();
	
	});
$('#Pdt_page').live('pageshow', function(event) {
	/*
	var id = getUrlVars()["id"];
	console.log('id = ' + id );
	$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
	//renderproductdetails();
	*/
	});

	
$('#bar').live('pageshow', function(event) {
	
	
	$('#mpa').click(function(){ 
	
		 $('#mpa').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))"); 
		 $('#pd_catgy_activename').text("Mobile accessories");
	
	});
	$('#pc').click(function(){
		  $('#pc').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))"); 
		  $('#pd_catgy_activename').text("PC");
	});
	$('#ta').click(function(){  
		$('#ta').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))"); 
		$('#pd_catgy_activename').text("Tablets");
	});
	$('#sp').click(function(){  
		$('#sp').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))");
		$('#pd_catgy_activename').text("Smart phones");
	});
	$('#mp').click(function(){  
		$('#mp').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))"); 
		$('#pd_catgy_activename').text("Mobile phones");
	});

	
	
	
	
	////--------------hover event----------------------------------
	$('#mpa').hover(
	function(){ $('#mpa').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))");   }
	,
	function(){ $('#mpa').css("background-image"," -webkit-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))");}
	);
	$('#pc').hover(
	function(){ $('#pc').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))");   }
	,
	function(){ $('#pc').css("background-image"," -webkit-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))");}
	);
	$('#ta').hover(
	function(){ $('#ta').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))");   }
	,
	function(){ $('#ta').css("background-image"," -webkit-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))");}
	);
	$('#sp').hover(
	function(){ $('#sp').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))");   }
	,
	function(){ $('#sp').css("background-image"," -webkit-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))");}
	);
	$('#mp').hover(
	function(){ $('#mp').css("background-image"," -webkit-linear-gradient(left,#fff,rgba(255, 255, 255, 0))");   }
	,
	function(){ $('#mp').css("background-image"," -webkit-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))");}
	);
	
});
$('#foo').live('pageshow', function(event) {
	$('#mpa_btn').click(function(){  $('#mpa_btn').css("background-color","rgba(0, 0, 0, 0.80)"); });
	$('#pc_btn').click(function(){  $('#pc_btn').css("background-color","rgba(0, 0, 0, 0.80)"); });
	$('#ta_btn').click(function(){  $('#ta_btn').css("background-color","rgba(0, 0, 0, 0.80)"); });	
	$('#sp_btn').click(function(){  $('#sp_btn').css("background-color","rgba(0, 0, 0, 0.80)"); });		
	$('#mp_btn').click(function(){  $('#mp_btn').css("background-color","rgba(0, 0, 0, 0.80)"); });		
	
	////--------------hover event----------------------------------
	$('#mpa_btn').hover(
	function(){ $('#mpa_btn').css("background-color","rgba(71, 70, 70, 0.92)");   }
	,
	function(){ $('#mpa_btn').css("background-color"," rgba(70, 70, 70, 0.64)");}
	);
	$('#pc_btn').hover(
	function(){ $('#pc_btn').css("background-color","rgba(71, 70, 70, 0.92)");   }
	,
	function(){ $('#pc_btn').css("background-color"," rgba(70, 70, 70, 0.64)");}
	);
	$('#ta_btn').hover(
	function(){ $('#ta_btn').css("background-color","rgba(71, 70, 70, 0.92)");   }
	,
	function(){ $('#ta_btn').css("background-color"," rgba(70, 70, 70, 0.64)");}
	);
	$('#sp_btn').hover(
	function(){ $('#sp_btn').css("background-color","rgba(71, 70, 70, 0.92)");   }
	,
	function(){ $('#sp_btn').css("background-color"," rgba(70, 70, 70, 0.64)");}
	);
	$('#mp_btn').hover(
	function(){ $('#mp_btn').css("background-color","rgba(71, 70, 70, 0.92)");   }
	,
	function(){ $('#mp_btn').css("background-color"," rgba(70, 70, 70, 0.64)");}
	);
	
	
	/////--------------link to next page------------------------------------
	$('#mpa_btn').click(function(){ 

	$.mobile.changePage( "#bar", { transition: "pop", changeHash: false });
	
	});
	
});

$('#foo').live('cat_page', function(event) {
	
	
	setTimeout(function(){
					scroll.refresh();
				},100);
	});
	

		

	
	
	
	

var scroll = new iScroll('wrapper', { vScrollbar: true, hScrollbar:false, hScroll:false });

    
	
	function onLoad() {
		
		document.addEventListener("deviceready", onDeviceReady, false);
		 document.addEventListener("online", onOnline, false);

        
    }


    function onDeviceReady() {
		
      
					
				
		
    }
	
	
	function onOnline() {
		
		
    }