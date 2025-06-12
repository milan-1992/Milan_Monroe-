// انتظر حتى يتم تحميل كل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    
    // هذه دالة وهمية للتهيئة، لا تقم بتغييرها
    // It's a placeholder function, don't change it
    function initializeApp(config) {
        // This is a mock initialization. The real initialization happens in index.html
        // We just need a reference to the configuration.
        // The real Firebase app instance is available globally because it was declared in a classic script in index.html.
        return window.firebase.app.getApps().length === 0 ? window.firebase.initializeApp(config) : window.firebase.app.getApps()[0];
    }

    // هنا نقوم بوضع نفس معلومات الإعداد الموجودة في ملف index.html
    // لا تقلق، هذا التكرار ضروري لكي يتمكن هذا الملف من التعرف على مشروعك
    const firebaseConfig = {
        apiKey: "AIzaSyCCRMDWzy226sLgEOiRUk6ak9gP8PpZOqk",
        authDomain: "milan-monroe-diary.firebaseapp.com",
        projectId: "milan-monroe-diary",
        storageBucket: "milan-monroe-diary.firebasestorage.app",
        messagingSenderId: "395222582236",
        appId: "1:395222582236:web:1662225e111de7d2f64519"
        // measurementId is optional
    };

    // نقوم بتهيئة تطبيق Firebase وقاعدة البيانات
    const app = initializeApp(firebaseConfig);
    const db = window.firebase.firestore.getFirestore(app);

    // --- الجزء الخاص بحفظ البيانات ---

    // نحصل على عناصر الصفحة التي سنتعامل معها
    const storyInput = document.getElementById('storyInput');
    const saveStoryBtn = document.getElementById('saveStoryBtn');

    // نتأكد أن الزر ومربع النص موجودان قبل إضافة أي أوامر
    if (saveStoryBtn && storyInput) {
        // نضيف مُستمع لضغطة الزر
        saveStoryBtn.addEventListener('click', async () => {
            const storyText = storyInput.value.trim(); // نأخذ النص من المربع ونحذف المسافات الزائدة

            // نتأكد أن المستخدم كتب شيئًا
            if (storyText === "") {
                alert("الرجاء كتابة شيء قبل الحفظ.");
                return; // نوقف التنفيذ
            }

            try {
                // نحاول إضافة "مستند" جديد إلى "مجموعة" اسمها stories
                const docRef = await window.firebase.firestore.addDoc(window.firebase.firestore.collection(db, "stories"), {
                    text: storyText,
                    createdAt: window.firebase.firestore.serverTimestamp() // يسجل تاريخ ووقت الإضافة تلقائيًا
                });
                
                alert("تم حفظ القصة بنجاح!");
                storyInput.value = ""; // نفرّغ مربع النص بعد الحفظ

            } catch (error) {
                console.error("حدث خطأ أثناء حفظ القصة: ", error);
                alert("عذرًا، حدث خطأ ما أثناء محاولة الحفظ. الرجاء المحاولة مرة أخرى.");
            }
        });
    }
});

