var movies = JSON.parse(moviedata);

console.log(movies);

// extract img value

//let i = 0;
//while (i < movies.length) {
//	console.log(movies[i].image);
//	i += 1;
//}

let i = 0;
while (i < movies.length) {
	//function createElement() {
	const container = document.getElementById("pic_container");
	const new_div = document.createElement("div");
	container.appendChild(new_div);
	let IMG = document.createElement("img");
	IMG.src = movies[i].image;
	new_div.appendChild(IMG);
	i += 1;
}
//var ImgSrc = movies.map(GetImageSrc);
// function GetImageSrc(value, index)

// extract values from img key in array movies

//var storedLikes = {"movie1", "movie2", "movie3", "movie4", "movie5", "movie6", "movie7"};

//var likes = 0;
//    function vote() {
//        likes += 1;
//        document.getElementById("likes").innerHTML = likes;
//    };

//    console.log(likes);

//function Votingsystem (first, last, age, eye) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.eyeColor = eye;
//    }
