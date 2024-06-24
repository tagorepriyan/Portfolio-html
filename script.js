function copyPhoneNumber() {
    var phoneNumber = "+91 6383759915";
    navigator.clipboard.writeText(phoneNumber).then(function() {
      alert("Phone number copied!");
    });
  }

  function copyEmail() {
    var email = "tagorepryansaravanavel@gmail.com";
    navigator.clipboard.writeText(email).then(function() {
      alert("Email copied!");
    });
  }

  function goBack() {
    window.location.href = "../index.html";
  }
