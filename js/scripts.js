//  set the carousel image cycle interval to 2000 ms upon load (the default is 5000 ms otherwise), and implement pause/play functionality via the jQuery click() 
<script>
    $(function () {
        $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
                if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
    $("#carouselButton").children("i").removeClass("fa-pause");
    $("#carouselButton").children("i").addClass("fa-play");
                } else {
        $(".carousel").carousel("cycle");
    $("#carouselButton").children("i").removeClass("fa-play");
    $("#carouselButton").children("i").addClass("fa-pause");
                }
            });
        });
</script>