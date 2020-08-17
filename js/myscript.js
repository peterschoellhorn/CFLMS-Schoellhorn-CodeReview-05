var movies = JSON.parse(moviedata);

console.log(movies);



for (let i = 0; i < movies.length; i++){
	$("#film_box").append(`<div class = "film" id = movie_${i}>`)
	let likes = Math.floor(Math.random()*10)+1
	$(`#movie_${i}`).append(`<div class = image_box><img></div><div class = info_box><h2>${movies[i].name}</h2><h6>Description: ${movies[i].description}</h6> <div class = like_box><button class = "like_button" id = button_${i}> Like  <i class="fa fa-thumbs-up"></i></button> <h3 class = likes> ${likes} </h3></div></div>`)
	$(`#movie_${i} .image_box img`).attr("src", `${movies[i].image}`)
}

$("button").on("click", function(event){
	event.preventDefault()

	let button_class = $(this).attr("class")
	let button_id = $(this).attr("id")

	if (button_class == "like_button"){
		let likes = parseInt($(this).siblings().text())
		likes += 1
		$(this).siblings().text(likes)
	} else if (button_class == "sub_button"){
		if (button_id == "numerical"){
			var order = $(".film").sort(function (a, b){
				return $(b).find("h3").text() - $(a).find("h3").text()
			})
		} else if (button_id == "alphabetical"){
			var order = $(".film").sort(function (a, b){
				return $(a).find("h2").text() < $(b).find("h2").text() ? -1:1
			})
		}
		$("#film_box").html(order)

		$(".like_button").on("click", function(){
			let likes = parseInt($(this).siblings().text())
			likes += 1
			$(this).siblings().text(likes)
		})
	}
})

