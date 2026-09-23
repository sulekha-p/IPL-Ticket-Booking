function showToast(message = "Booking Confirmed!") {
let toast = document.getElementById("toast");
toast.innerHTML = message;
toast.style.display = "block";
setTimeout(function () {
    toast.style.display = "none";
}, 2000);
}
document.getElementById("bookBtn").addEventListener("click", function () {
document.getElementById("bookingForm").scrollIntoView({
behavior: "smooth"
});
});

document.getElementById("bookingForm").addEventListener("submit", function (event) {
event.preventDefault();
showToast();

});
