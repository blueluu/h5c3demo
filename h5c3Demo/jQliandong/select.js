$.fn.selectDate = function(){
	var minYear = 1900;
	var maxYear = (new Date()).getFullYear();
	var yearSel = document.getElementById('year');
	var monthSel = document.getElementById('month');
	var daySel = document.getElementById('day');

	for(var y=maxYear;y>=minYear;y--){
		var yearOpt = document.createElement('option');
		yearOpt.value = y;
		yearOpt.innerHTML = y + '年';
		yearSel.append(yearOpt);
	}

	$('#year').focus(function(event){
		removeOption(monthSel);
		addOption(12,'月',monthSel);
		removeOption(daySel);
	});

	$('#month').focusout(function(){
		removeOption(daySel);
		var year = $('#year option:selected').val();
		var month = $('#month option:selected').val();
		if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
			addOption(31,'日',daySel);
		}else if(month==4 || month==6 || month==9 || month==11){
			addOption(30,'日',daySel);
		}else if(month==2){
			if((year%4==0 && year%100!=0) || (year%400==0)){
				addOption(29,'日',daySel);
			}else{
				addOption(28,'日',daySel);
			}
		}
	});

	function addOption(num,unit,parent){
		//num: 选项个数
		//unit: 单位（年／月／日）
		//parent: 父对象
		for(var i=1;i<=num;i++){
			var opt = document.createElement('option');
			$(opt).attr('value',i);
			if(i<10) {i = '0'+i;}
			$(opt).html(i+unit);
			$(parent).append(opt);
		}
	}

	function removeOption(parent){
		// parent: 父对象
		var options = $(parent).find('option');
		for(var i=1;i<=options.length-1;i++){
			parent.removeChild(options[i]);
		}
	}
}