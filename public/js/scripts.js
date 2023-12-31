// dropdown button
$(document).ready(function () {

    // Year at the bottom
    $('#year').html = new Date().getFullYear();

    
    $(".dropdown-button").on("click", function () {
        // find closest tr and toggle dropdown
        $(this).closest('tr').find('.dropdown-menu').toggleClass("hidden");
    });

    // Close the dropdowns when clicking outside
    $(document).on("click", function (event) {
        if (!$(".dropdown-button").is(event.target) && !$(".dropdown-menu").is(event.target) &&
            $(".dropdown-menu").has(event.target).length === 0) {
            $(".dropdown-menu").addClass("hidden");
        }
    });
});

