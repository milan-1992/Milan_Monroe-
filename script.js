// ننتظر حتى يتم تحميل جميع عناصر الصفحة بالكامل قبل تشغيل الكود
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. تعريف العناصر الأساسية ---
    // نخبر جافاسكريبت بالبحث في ملف HTML عن العناصر التي سنحتاجها
    // ونعطيها أسماء مختصرة لاستخدامها في الكود.
    const addStoryBtn = document.getElementById('addStoryBtn');
    const notesBtn = document.getElementById('notesBtn');
    const galleryBtn = document.getElementById('galleryBtn');
    const contentArea = document.getElementById('content-area');

    // --- 2. إضافة وظيفة لزر "إضافة قصة / خاطرة" ---
    // هنا نقول: "عندما يتم الضغط على الزر addStoryBtn، قم بتنفيذ الكود التالي"
    addStoryBtn.addEventListener('click', () => {
        // نعرض نموذج كتابة القصة في منطقة المحتوى
        showStoryForm();
    });

    /**
     * دالة لعرض نموذج إدخال القصة
     */
    function showStoryForm() {
        // أولاً، نقوم بتفريغ منطقة المحتوى من أي شيء موجود بداخلها
        contentArea.innerHTML = '';

        // ثانياً، نجهز كود HTML جديد يحتوي على مربع نص وزر للحفظ
        const storyFormHTML = `
            <div class="form-container">
                <h2>اكتب قصتك أو خاطرتك</h2>
                <textarea id="storyTextarea" rows="12" placeholder="ابدأ الكتابة هنا..."></textarea>
                <button id="saveStoryBtn" class="action-button">حفظ القصة</button>
                <div id="message-box" class="message-box hidden"></div>
            </div>
        `;

        // ثالثاً، نضع الكود الجديد الذي جهزناه داخل منطقة المحتوى
        contentArea.innerHTML = storyFormHTML;

        // رابعاً، بعد أن ظهر النموذج، نبحث الآن عن عناصره الجديدة
        const saveStoryBtn = document.getElementById('saveStoryBtn');
        const storyTextarea = document.getElementById('storyTextarea');

        // خامساً، نضيف وظيفة لزر الحفظ الجديد
        saveStoryBtn.addEventListener('click', () => {
            const storyText = storyTextarea.value;
            saveStory(storyText);
        });
    }

    /**
     * دالة لحفظ وعرض القصة
     * @param {string} text - النص الذي كتبه المستخدم
     */
    function saveStory(text) {
        // نتأكد أن المستخدم كتب شيئاً
        if (text.trim() === '') {
            // استخدام صندوق رسائل مخصص بدلاً من alert
            const messageBox = document.getElementById('message-box');
            messageBox.textContent = 'لا يمكنك حفظ قصة فارغة!';
            messageBox.classList.remove('hidden');
            // إخفاء الرسالة بعد 3 ثوانٍ
            setTimeout(() => {
                messageBox.classList.add('hidden');
            }, 3000);
            return; // نوقف تنفيذ الكود
        }

        // نجهز كود HTML لعرض القصة المحفوظة
        const savedStoryHTML = `
            <div class="story-display">
                <h3>تم حفظ خاطرتك بنجاح:</h3>
                <p>${text.replace(/\n/g, '<br>')}</p> 
                <button id="editStoryBtn" class="action-button">تعديل</button>
            </div>
        `;

        // نعرض القصة المحفوظة في منطقة المحتوى
        contentArea.innerHTML = savedStoryHTML;

        // نضيف وظيفة لزر التعديل الجديد
        const editStoryBtn = document.getElementById('editStoryBtn');
        editStoryBtn.addEventListener('click', () => {
            // عند الضغط على تعديل، نعيد عرض النموذج مع النص القديم
            editStory(text);
        });
    }

    /**
     * دالة لتعديل قصة موجودة
     * @param {string} existingText - النص الحالي للقصة
     */
    function editStory(existingText) {
        showStoryForm(); // نعيد عرض النموذج أولاً
        // نضع النص القديم في مربع النص ليتم تعديله
        document.getElementById('storyTextarea').value = existingText;
    }

    // رسالة للتأكيد أن الملف يعمل (يمكنك رؤيتها في أدوات المطورين بالمتصفح)
    console.log("ملف جافاسكريبت يعمل وجاهز للتفاعل!");

});

