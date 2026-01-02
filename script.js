function sendWhatsApp() {
  var plan = document.getElementById("plan").value;
  var device = document.getElementById("device").value;
  var name = document.getElementById("name").value;

  var phone = "916289033804"; // ✅ Updated WhatsApp number

  var message =
    "Hello IPTV Team,%0A%0A" +
    "Name: " + name + "%0A" +
    "Plan: " + plan + "%0A" +
    "Device: " + device + "%0A%0A" +
    "I want to subscribe. Payment screenshot sent.";

  var url = "https://wa.me/" + phone + "?text=" + message;
  window.open(url, "_blank");

}
document.getElementById("paid-btn").addEventListener("click", function() {
    document.getElementById("payment-section").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
});
