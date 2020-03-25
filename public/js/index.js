$(document).ready(function () {
    $("#searchByName").on("click", function (event) {
        fetchRestaurantsByName();
        alert("name");
    });
    $("#searchByLocation").on("click", function (event) {
        fetchRestaurantsByLocation();
        alert("location");
    });
    $("#searchbtn101").click(function (e) {
        alert("searcheed");
        // e.preventDefault();
        // var search = $("[name=search]").val();
        // var resNode = e.target;
        // var resName = resNode.innerText.trim();
        // console.log(resName);
        // localStorage.setItem('restaurantToSearch', resName);
        // window.location = 'Restaurant.html';
    });
});