$( function() {
  $( "#sortable1" ).sortable({
    items: "li:not(.ui-state-disabled)"
  });
  $( "#sortable1 li, #sortable2 li" ).disableSelection();
} );
$( function() {
  $( "#draggable" ).draggable({ revert: "valid" });
  $( "#draggable2" ).draggable({ revert: "invalid" });
  $( "#draggable3" ).draggable({ revert: "invalid" });
  $( "#draggable4" ).draggable({ revert: "invalid" });


  $( "#droppable" ).droppable({
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
  });
} );
