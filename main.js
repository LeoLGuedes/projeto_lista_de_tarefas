$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const newTask = $('#nome-tarefa').val()
        const itemList = $('<li></li>')
        
        $(`<p class="texto-com-risco">${newTask}</p>`).appendTo(itemList)
        $(itemList).appendTo('ul')

        $('#nome-tarefa').val('')
    })

    $("ul").on("click", "li", function () {
        $(this).toggleClass("strike-through");
    });
})
