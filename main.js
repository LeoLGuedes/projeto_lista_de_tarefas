$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const newTask = $('#nome-tarefa').val()
        const itemList = $('<li></li>')
        
        $(`<button class="btn-invisible"><p class="texto-com-risco">${newTask}</p></button>`).appendTo(itemList)
        $(itemList).appendTo('ul')

        $('#nome-tarefa').val('')
    })

    $('ul').on('click', function(){
        $('.btn-invisible').click(function(){
            $('.texto-com-risco').css("text-decoration", "line-through")
        })
    })
})

