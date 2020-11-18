$(() => {
    $(".devour").on("click", function () {
        const burger_id = this.value;
        console.log(this.value);
        $.ajax({
            method: "PUT",
            url: `/burgers/${burger_id}/devoured`,
        }).then(() => {
            location.reload();
        });
    });
});

$(() => {
    $(".valid").on("click", function () {
        var x = document.forms["burger"]["burger_name"].value.trim();
        if (x == "" || x == null) {
            alert("Burger must have a name!");
            return false;
        }
    })
})
