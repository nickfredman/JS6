$(document).on('ready', function() {
    $('.updater').hide();
    $('.update').on('click', function(e) {
        // $(this).slideDown(500);
        $('.updater').show(500);
        e.preventDefault();
    });
    $('.profile-form').on('submit', function(e) {
        var name = $('#name').val();
        var bio = $('#bio').val();
        var books = $('#books').val();
        var fave = [];
        $('input[type="checkbox"]').each(function() {
            if($(this).is(":checked")) {
                fave.push($(this).attr("value"));
            }
        });
        fave = fave.join(", ");
        console.log(fave);
        e.preventDefault();
        $('p.name').text(name);
        $('p.bio').text(bio);
        $('p.books').text(books);
        $('p.library').text(fave);
        $('.updater').hide(500);
    });
});