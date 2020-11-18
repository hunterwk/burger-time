$(() => {
    $(".eaten").on("click", function () {
      const burger_id = this.value;
      $.ajax({
        method: "PUT",
        url: `/burgers/${burger_id}/eaten`,
      }).then(() => {
        location.reload();
      });
    });
  });