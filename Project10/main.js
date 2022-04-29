$(document).ready(function () {
    //  jQuery in here
    $("button").on("click", function () {
      const randomNumber = Math.ceil(Math.random() * 88);
      $.get(
        `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`,
        function (data) {
          // console.log(data);
          $("h1.name").text(data["name"]);
          $(".character-img").attr("src", data["image"]);
          $(".born").text(data["born"]);
          $(".height").text(data["height"]);
          $(".mass").text(data["mass"]);
          $(".species").text(data["species"]);
          $(".gender").text(data["gender"]);
          $(".homeworld").text(data["homeworld"]);
          $(".wiki").attr("href", data["wiki"]);
        }
      );
    });
  });