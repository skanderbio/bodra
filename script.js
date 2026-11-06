// ضع رقم واتساب المتجر بصيغة دولية دون + أو مسافات، مثال الجزائر: 213XXXXXXXXX
const STORE_WHATSAPP = "213XXXXXXXXX";
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const city = document.getElementById("city").value.trim();
  const qty = document.getElementById("qty").value;
  const status = document.getElementById("formStatus");
  if (STORE_WHATSAPP.includes("X")) {
    status.textContent = "لتفعيل الطلبات، أضف رقم واتساب المتجر داخل ملف script.js.";
    return;
  }
  const msg = `طلب جديد: بودرة النجم الإفريقي 450 غرام\nالاسم: ${name}\nالهاتف: ${phone}\nالولاية/البلدية: ${city}\nالكمية: ${qty}`;
  window.open(`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  status.textContent = "تم فتح واتساب برسالة الطلب.";
});
