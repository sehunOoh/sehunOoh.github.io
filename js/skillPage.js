$(document).ready(function () {
	$('#skillArrow').click(function(){
		window.open("../html/projectPage.html", "_self");
	});
    $('#software').hover(function(){
	$('li').hide();
		$('#C').css('display', 'inline-block');
		$('#Arduino').css('display', 'inline-block');
		$('#Stm32').css('display', 'inline-block');
		$('#TrueSTUDIO').css('display', 'inline-block');
		$('#keil').css('display', 'inline-block');
		$('#Atmel').css('display', 'inline-block');
		$('#VmLab').css('display', 'inline-block');
		$('#Quartus').css('display', 'inline-block');
		$('#MatLab').css('display', 'inline-block');
    }, function() {
		setTimeout(() => { 
			$('#C').hide();
			$('#Arduino').hide();
			$('#Stm32').hide();
			$('#TrueSTUDIO').hide();
			$('#keil').hide();
			$('#Atmel').hide();
			$('#VmLab').hide();
			$('#Quartus').hide();
			$('#MatLab').hide();
		}, 500);
    });
    $('#hardware').hover(function(){
		$('#OrCAD').css('display', 'inline-block');
		$('#PADS').css('display', 'inline-block');
    }, function() {
		setTimeout(() => { 
			$('#OrCAD').hide();
			$('#PADS').hide();
		}, 500);
    });
    $('#print').hover(function(){
		$('#123D').css('display', 'inline-block');
		$('#inventer').css('display', 'inline-block');
		$('#Cura').css('display', 'inline-block');
    }, function() {
		setTimeout(() => { 
			$('#123D').hide();
			$('#inventer').hide();
			$('#Cura').hide();
		}, 500);
    });
    $('#web').hover(function(){
		$('#JAVA').css('display', 'inline-block');
		$('#HTML').css('display', 'inline-block');
		$('#CSS').css('display', 'inline-block');
		$('#JavaScript').css('display', 'inline-block');
		$('#Servlet').css('display', 'inline-block');
		$('#Spring').css('display', 'inline-block');
		$('#Postman').css('display', 'inline-block');
		$('#React').css('display', 'inline-block');
		$('#AWS').css('display', 'inline-block');
		$('#JMeter').css('display', 'inline-block');
		$('#ngrok').css('display', 'inline-block');
    }, function() {
		setTimeout(() => { 
			$('#JAVA').hide();
			$('#HTML').hide();
			$('#CSS').hide();
			$('#JavaScript').hide();
			$('#Servlet').hide();
			$('#Spring').hide();
			$('#Postman').hide();
			$('#React').hide();
			$('#AWS').hide();
			$('#JMeter').hide();
			$('#ngrok').hide();
		}, 500);
    });
    $('#sql').hover(function(){
		$('#Oracle').css('display', 'inline-block');
		$('#MySQL').css('display', 'inline-block');
    }, function() {
		setTimeout(() => { 	
			$('#Oracle').hide();
			$('#MySQL').hide();
		}, 500);
    });
    $('#ai').hover(function(){
		$('#Python').css('display', 'inline-block');
		$('#Jython').css('display', 'inline-block');
		$('#Zeroth').css('display', 'inline-block');
		$('#OpenCV').css('display', 'inline-block');
		$('#Teachable').css('display', 'inline-block');
    }, function() {
		setTimeout(() => { 
			$('#Python').hide();
			$('#Jython').hide();
			$('#Zeroth').hide();
			$('#OpenCV').hide();
			$('#Teachable').hide();
		}, 500);
    });
    $('#collaboration').hover(function(){
		$('#Draw').css('display', 'inline-block');
		$('#Figma').css('display', 'inline-block');
		$('#Git').css('display', 'inline-block');
		$('#Jira').css('display', 'inline-block');
		$('#notion').css('display', 'inline-block');
    }, function() {
		setTimeout(() => { 
			$('#Draw').hide();
			$('#Figma').hide();
			$('#Git').hide();
			$('#Jira').hide();
			$('#notion').hide();
		}, 500);
    });
    $('#software').click(function(){
		$('li').hide();
		$('#C').css('display', 'inline-block');
		$('#Arduino').css('display', 'inline-block');
		$('#Stm32').css('display', 'inline-block');
		$('#TrueSTUDIO').css('display', 'inline-block');
		$('#keil').css('display', 'inline-block');
		$('#Atmel').css('display', 'inline-block');
		$('#VmLab').css('display', 'inline-block');
		$('#Quartus').css('display', 'inline-block');
		$('#MatLab').css('display', 'inline-block');
    });
});