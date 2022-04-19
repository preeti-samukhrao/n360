$(document).ready(function() {
   let myTable = $('#example').DataTable({
        "oLanguage": {
            "oPaginate": {
            "sFirst": "First page"
            }
        },
        "scrollY": 220,
        "scrollX": true,
        "pageLength": 15,
        "lengthMenu": [[15, 30, 60],[15, 30, "All"]],
        columnDefs: [{
           orderable: false,
           className: 'select-checkbox',
           targets: 0,
        }],
        select: 'multi',
        order: [[1, 'asc'],],
        select: {
            style: 'multi',
            selector: 'td:first-child',
         },
        
        "oLanguage": {
            "sSearch": "REPORT DATA "
        },
        "language": {
            "info": "_START_ - _END_of _TOTAL_ Items",
        },
        dom: 'Blfrtip',
        buttons: [
            'copy', 'print', 'excel', 'pdf'
        ],
        "pagingType": "full_numbers",
        initComplete: function () {
            this.api().columns().every( function (i) {
                if(i == 0) { return; }
                var column = this;
                var headerText = $(column.header()).text();
                $('<select style="width:100%; margin-top:10px" class="per-page"><option></option></select>').appendTo( $(column.header()) ).select2({
                        data: column.data().unique(),
                        multiple: false,
                        theme: 'classic',
                        placeholder: 'Select ' + headerText,
                        allowClear: true,
                    }).on('select2:select', function(e) {
                        var $this = $(this);
                        var val = $.fn.dataTable.util.escapeRegex(
                            $this.val()
                        );
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    });
            } );
        }
   });
});


function Reset() {
   var dropDown = document.getElementById("reports");
   var dropDown1 = document.getElementById("properties");
   var dropDown2 = document.getElementById("prop-valus");
   var dropDown3 = document.getElementById("select-option");
   dropDown.selectedIndex = 0;
   dropDown1.selectedIndex = 0;
   dropDown2.selectedIndex = 0;
   dropDown3.selectedIndex = 0;
}