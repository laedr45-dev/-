function send() {
  const name = document.getElementById("name").value;
  const discord = document.getElementById("discord").value;
  const reason = document.getElementById("reason").value;
  const msg = document.getElementById("msg");

  if (!name || !discord || !reason) {
    msg.style.color = "red";
    msg.textContent = "❌ الرجاء تعبئة جميع الحقول";
    return;
  }

  msg.style.color = "lightgreen";
  msg.textContent = "✅ تم إرسال طلبك، سيتم المراجعة";
}
