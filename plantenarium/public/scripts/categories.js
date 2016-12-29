const $list = $('<ul />')
$('.panel-heading').each((i, el) => {
    $('<li />')
        .html($(el).text().trim())
        .appendTo($list)
})
$('.container').append($list)