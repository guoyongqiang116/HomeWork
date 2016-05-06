



//                       第一种
//var table = '<table border="1">';
//
//for (var i = 1; i <= 9; i++) {
//	table += '<tr>';
//	for (var j = 1; j <= i; j++) {
//		table += '<td>' + j + 'x' + i + ' = ' + i * j +'</td>'
//	}
//	table += '</tr>';
//}
//table += '</table>';
//
//document.write(table);
//
//console.log(table);

var table = '<table cellspacing="1">';  //border="1"
    for (var i=1; i<=9; i++) {
    	table +='<tr>';
	    	for (var j=1; j<=i; j++) {
	    		table +='<td>' + j + '*' + i + '=' + i *j +'</td>';
	    	}
    	table +='</tr>';
    }
    table += '</table>';
    document.write(table);

//                                        第二种
// var wp = document.getElementById('wp');
// var tableHtml = [
//		'<table border="1">' ,
//		//   '<tr>',
//		//      '<td></td>',
//		//    '</tr>',
//		//'</table>'
//		]
//  for (var i = 1; i <= 9; i++) {
// 	tableHtml.push('<tr>');
// 	for (var j = 1; j <= i; j++) {
// 	    tableHtml.push('<td>'+ j + 'x' + i + ' = ' + i * j + '</td>');
// 	}
// 	tableHtml.push('</tr>');	
//	//console.log(i);
//  }
// //document.write(i);
// tableHtml.push('</table>');
// 
// wp.innerHTML = tableHtml.join('');


 

/*<style>
			.cell {
				display: inline-block;
				width: 80px;
				height: 35px;
				line-height: 40px;
				text-indent: 10px;
				background-color: #ccc;
				border: 1px solid red;
				margin-right: -1px;
				margin-top: -1px;
			}
			
		</style>
		<script>
			for(var i=1; i<10; i++) {
				
				for(var j=1; j<=i; j++) {
					document.write('<span class="cell">'+ j +'&times' + i + '=' + i * j + '</span>');
				}
				
				document.write('<br>');
			}
		</script>*/














