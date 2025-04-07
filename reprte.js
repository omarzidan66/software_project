let count = 0;
const maxCount = 75;  // جعل النسبة النهائية 75%
const textElement = document.querySelector(".counter-text");
const progressCircle = document.querySelector(".progress-circle");
const circumference = 2 * Math.PI * 45; // محيط الدائرة الصحيح
progressCircle.style.strokeDasharray = circumference;
progressCircle.style.strokeDashoffset = circumference;
function updateCounter() {
  if (count <= maxCount) {
    textElement.textContent = count + "%";  // تحديث النص ليعرض النسبة المئوية
    let progress = (count / 100) * circumference;  // حساب التقدم بالدائرة بناءً على 100% وليس 75%
    progressCircle.style.strokeDashoffset = circumference - progress;  // تحديث الـ stroke-dashoffset للدائرة
    count++;
    setTimeout(updateCounter, 30);  // استدعاء الدالة بشكل متكرر لتحديث العد
  }
}

updateCounter(); // بدء العد