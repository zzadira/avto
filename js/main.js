
	jQuery(document).ready(function(){
			
			
			$('.menu a.a1').click(function(){
				$.scrollTo('#point1', 1500, {offset: {top:-75} });
				return false;
			});
			
			$('.menu a.a2').click(function(){
				$.scrollTo('#point2', 1500, {offset: {top:-75} });
				return false;
			});
			
			$('.menu a.a3').click(function(){
				$.scrollTo('#point3', 1500, {offset: {top:-75} });
				return false;
			});
			
			$('.menu a.a4').click(function(){
				$.scrollTo('#point4', 1500, {offset: {top:-75} });
				return false;
			});
			
			$('.menu a.a5').click(function(){
				$.scrollTo('#point5', 1500, {offset: {top:-75} });
				return false;
			});
			
			$('.menu a.a6').click(function(){
				$.scrollTo('#point6', 1500, {offset: {top:-75} });
				return false;
			});
			
		
			$(".modalbox").fancybox();
			
			
			$("#contact1").submit(function() { return false; });

		
			$("#send1").on("click", function(){
		
				var err = false;
				
				var nameval  = $("#name1").val();
				var namelen    = nameval.length;
				var phoneval    = $("#phone1").val();
				var phonelen    = phoneval.length;
				
				
				if ((namelen < 3)||(nameval=='')){
					$("#name1").addClass("error1");
					$('.err_txt span').css({"display":"block"});
					err = true;
				} else {
					$("#name1").removeClass("error1");
					$('.err_txt span').css({"display":"none"});
				}
				
				
				if ((phonelen < 5)||(phoneval=='')){
					$("#phone1").addClass("error1");
					$('.err_txt span').css({"display":"block"});
					err = true;
				} else {
					$("#phone1").removeClass("error1");
					$('.err_txt span').css({"display":"none"});
				}
				
				if (!err) {
						
					$.ajax({
						type: 'POST',
						url: './js/sendmessage1.php',
						data: $("#contact1").serialize(),
						success: function(data) {
							if(data == "true") {
								$(".tnx1").fadeIn(300).delay(4500).fadeOut(300);
							}
						}
					});
				}	
			});
			
			$("#contact2").submit(function() { return false; });

		
			$("#send2").on("click", function(){
		
				var err = false;
				
				var nameval  = $("#name2").val();
				var namelen    = nameval.length;
				var phoneval    = $("#phone2").val();
				var phonelen    = phoneval.length;
				
				
				if ((namelen < 3)||(nameval=='')){
					$("#name2").addClass("error1");
					err = true;
				} else {
					$("#name2").removeClass("error1");
				}
				
				
				if ((phonelen < 5)||(phoneval=='')){
					$("#phone2").addClass("error2");
					err = true;
				} else {
					$("#phone2").removeClass("error2");
				}
				
				if (!err) {
						
					$.ajax({
						type: 'POST',
						url: './js/sendmessage2.php',
						data: $("#contact2").serialize(),
						success: function(data) {
							if(data == "true") {
								$(".tnx1").fadeIn(300).delay(1500).fadeOut(300);
							}
						}
					});
				}	
			});
			
			$("#contact3").submit(function() { return false; });

		
			$("#send3").on("click", function(){
		
				var err = false;
				
				var nameval  = $("#name3").val();
				var namelen    = nameval.length;
				var phoneval    = $("#phone3").val();
				var phonelen    = phoneval.length;
				var messval  = $("#mess3").val();
				var messlen    = messval.length;
				
				
				if ((namelen < 3)||(nameval=='')){
					$("#name3").addClass("error1");
					err = true;
				} else {
					$("#name3").removeClass("error1");
				}
				
				
				if ((phonelen < 5)||(phoneval=='')){
					$("#phone3").addClass("error2");
					err = true;
				} else {
					$("#phone3").removeClass("error2");
				}
				
				if (!err) {
						
					$.ajax({
						type: 'POST',
						url: './js/sendmessage3.php',
						data: $("#contact3").serialize(),
						success: function(data) {
							if(data == "true") {
								$(".tnx1").fadeIn(300).delay(1500).fadeOut(300);
							}
						}
					});
				}	
			});
			
			
			$("#contact4").submit(function() { return false; });

		
			$("#send4").on("click", function(){
		
				var err = false;
				
				var nameval  = $("#name4").val();
				var namelen    = nameval.length;
				var phoneval    = $("#phone4").val();
				var phonelen    = phoneval.length;
				
				
				if ((namelen < 3)||(nameval=='')){
					$("#name4").addClass("error1");
					err = true;
				} else {
					$("#name4").removeClass("error1");
				}
				
				
				if ((phonelen < 5)||(phoneval=='')){
					$("#phone4").addClass("error2");
					err = true;
				} else {
					$("#phone4").removeClass("error2");
				}
				
				if (!err) {
						
					$.ajax({
						type: 'POST',
						url: './js/sendmessage4.php',
						data: $("#contact4").serialize(),
						success: function(data) {
							if(data == "true") {
								setTimeout("$.fancybox.close()", 100);
								$(".tnx1").fadeIn(300).delay(1500).fadeOut(300);
							}
						}
					});
				}	
			});
	})
		
