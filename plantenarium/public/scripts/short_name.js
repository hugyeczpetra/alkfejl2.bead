const $recipes = $('li.list-group-item')
$recipes.each(function (i, el) {
    const $el = $(el); 
    if ($el.text().trim().length < 15) {
        $el.css('border', '1px solid Navy')
    }
})