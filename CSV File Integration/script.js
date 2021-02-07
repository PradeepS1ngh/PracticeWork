console.log("Hello World!");

// $(document).ready(function(){
//     $('#csvFileContainer').click(function(){
//         console.log("Clicked");
//     })
// })

let load = document.getElementById('load_data');


load.addEventListener("click",function(){
    $.ajax({
        url : 'Employe.csv',
        dateType : "text",
        success : function(data){
            var employe_data = data.split(/\r?\n|\r/);
            var table_data = '<table>';
            for(var count=0;count<employe_data.length;count++){
                table_data += '<tr>';
                var cell_data = employe_data[count].split(",");
                for(var cell_count = 0;cell_count<cell_data.length;cell_count++){
                    if(count == 0){    // heading
                        table_data += '<th>'+cell_data[cell_count]+'</th>';
                    }else{
                        table_data += '<td>'+cell_data[cell_count]+'</td>';
                    }
                }
                table_data += '</tr>';
            }
            table_data += '<table>';
            $('#csvFileContainer').html(table_data);
        }
    })
})

$.ajax({
    url : 'Employe.csv',
    dateType : "text",
    success : function(data){
        var employe_data = data.split(/\r?\n|\r/);
        var table_data = '<table>';
        for(var count=0;count<employe_data.length;count++){
            table_data += '<tr>';
            var cell_data = employe_data[count].split(",");
            for(var cell_count = 0;cell_count<cell_data.length;cell_count++){
                if(count == 0){    // heading
                    table_data += '<th>'+cell_data[cell_count]+'</th>';
                }else{
                    table_data += '<td>'+cell_data[cell_count]+'</td>';
                }
            }
            table_data += '</tr>';
        }
        table_data += '<table>';
        $('#csvFileContainer').html(table_data);
    }
})