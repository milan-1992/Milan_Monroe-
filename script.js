// --- 1. تعريف العناصر الأساسية ---
// نخبر جافاسكريبت بالبحث في ملف HTML عن العناصر التي سنحتاجها
// ونعطيها أسماء مختصرة لاستخدامها في الكود.

const addStoryBtn = document.getElementById('addStoryBtn');
const notesBtn = document.getElementById('notesBtn');
const galleryBtn = document.getElementById('galleryBtn');
const contentArea = document.getElementById('content-area');

// --- 2. إضافة وظيفة لزر "إضافة قصة" ---
// هنا نقول: "عندما يتم الضغط على الزر addStoryBtn، قم بتنفيذ الكود الموجود بالداخل"

addStoryBtn.addEventListener('click', () => {
    // أولاً، نقوم بتفريغ منطقة المحتوى من أي شيء موجود بداخلها
    contentArea.innerHTML = '';

    // ثانياً، نجهز كود HTML جديد يحتوي على مربع نص وزر للحفظ
    const storyFormHTML = `
        <h2>اكتب قصتك أو خاطرتك</h2>
        <textarea id="storyTextarea" rows="10" placeholder="ابدأ الكتابة هنا..."></textarea>
        <button id="saveStoryBtn">حفظ القصة</button>
    `;

    // ثالثاً، نضع الكود الجديد الذي جهزناه داخل منطقة المحتوى
    contentArea.innerHTML = storyFormHTML;
});

// رسالة للتأكيد أن الملف يعمل (يمكنك رؤيتها في أدوات المطورين بالمتصفح)
console.log("ملف جافاسكريبت يعمل وجاهز للتفاعل!");


