function send() {
  const data = {
    name: document.getElementById("name").value,
    discord: document.getElementById("discord").value,
    reason: document.getElementById("reason").value
  };

  if (!data.name || !data.discord || !data.reason) {
    alert("عبّي كل الحقول");
    return;
  }

  localStorage.setItem("request", JSON.stringify(data));
  window.location.href = "support.html";
}

// صفحة الدعم
if (localStorage.getItem("request")) {
  const r = JSON.parse(localStorage.getItem("request"));
  if (document.getElementById("sName")) {
    sName.textContent = r.name;
    sDiscord.textContent = r.discord;
    sReason.textContent = r.reason;
  }
}

function accept() {
  document.getElementById("result").textContent = "✅ تم قبول الطلب";
}

function reject() {
  document.getElementById("result").textContent = "❌ تم رفض الطلب";
}
