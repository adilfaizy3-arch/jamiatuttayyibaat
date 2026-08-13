// ========== CONFIG ==========
const WHATSAPP_NUMBER = "917394869484"; // no + or leading zeros, country code included

// Cities offered in the Prayer Times widget — { label: [city, country] }
const PRAYER_CITIES = {
    "Mecca": ["Mecca", "Saudi Arabia"],
    "Madinah": ["Madinah", "Saudi Arabia"],
    "Delhi": ["Delhi", "India"],
    "Mumbai": ["Mumbai", "India"],
    "Bangalore": ["Bangalore", "India"],
    "Lucknow": ["Lucknow", "India"],
    "Karachi": ["Karachi", "Pakistan"],
    "Dubai": ["Dubai", "United Arab Emirates"],
    "London": ["London", "United Kingdom"],
    "New York": ["New York", "United States"]
};
const PRAYER_ORDER = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
const PRAYER_ICONS = { Fajr: "fa-cloud-sun", Dhuhr: "fa-sun", Asr: "fa-cloud-sun", Maghrib: "fa-moon", Isha: "fa-star-and-crescent" };

// ========== TRANSLATIONS ==========
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_courses: "Courses", nav_testimonials: "Testimonials", nav_faq: "FAQ", nav_contact: "Contact",
        hero_title: "Welcome to Jamiatut Tayyibaat", hero_desc: "Illuminating minds with authentic Islamic knowledge and modern excellence.", hero_btn: "Explore Our Courses",
        about_title: "About Our Institute", about_p1: "At <strong>Jamiatut Tayyibaat</strong>, we bridge the gap between traditional Islamic scholarship and the modern world. Our curriculum is designed to nurture both the soul and the mind.", about_p2: "We offer a unique blend of Quranic studies, Islamic jurisprudence, and contemporary skills like technology and leadership, preparing students for a global future while staying rooted in faith.", about_btn: "Learn More",
        courses_title: "Our Courses",
        course1_title: "Tajweed & Quran", course1_desc: "Master the art of reciting the Holy Quran with precise Tajweed rules and beautiful Qirat.",
        course2_title: "Islamic Jurisprudence", course2_desc: "Deep dive into Fiqh, Hadith sciences, and the rich history of Islamic scholarship.",
        course3_title: "Arabic & Modern Tech", course3_desc: "Learn the Arabic language fluently while mastering modern digital tools and coding.",
        enroll_btn: "Enroll Now",
        testimonials_title: "What Our Students Say",
        t1_quote: "Jamiatut Tayyibaat gave me a strong foundation in Tajweed while helping me stay connected to modern studies. Truly a blessing.",
        t1_name: "Aisha R.", t1_role: "Tajweed & Quran Student",
        t2_quote: "The teachers here explain Fiqh with so much clarity. I finally understand rulings I had struggled with for years.",
        t2_name: "Yusuf M.", t2_role: "Islamic Jurisprudence Student",
        t3_quote: "Learning Arabic alongside modern tech skills felt unique to this institute. Highly recommend to every student.",
        t3_name: "Fatima S.", t3_role: "Arabic & Modern Tech Student",
        faq_title: "Frequently Asked Questions",
        faq1_q: "Are the classes online or in-person?", faq1_a: "We offer flexible learning options — please contact us on WhatsApp to know the current schedule and mode for each course.",
        faq2_q: "Is there an admission fee?", faq2_a: "Fee details vary by course. Message us on WhatsApp and our team will share the exact fee structure with you.",
        faq3_q: "Do you offer separate classes for beginners?", faq3_a: "Yes, our courses are structured for different levels, from complete beginners to advanced students.",
        faq4_q: "How can I enroll?", faq4_a: "Simply click any \"Enroll Now\" button or the WhatsApp button, and our admissions team will guide you through the process.",
        contact_title: "Get in Touch", contact_desc: "Have a question about our courses or admissions? Send us a message or reach out directly on WhatsApp.",
        contact_phone_label: "WhatsApp / Phone", contact_email_label: "Email", contact_location_label: "Location",
        contact_location_value: "Available Online Worldwide",
        form_name: "Your Name", form_email: "Your Email", form_message: "Your Message", form_submit: "Send Message",
        form_sending: "Sending...", form_success: "Message sent successfully! We'll get back to you soon.", form_error: "Something went wrong. Please try again or message us on WhatsApp.",
        nav_prayer: "Prayer Times", nav_finder: "Find My Course",
        prayer_title: "Today's Prayer Times", prayer_desc: "Never miss a prayer — select your city below.", prayer_loading: "Loading prayer times...",
        gregorian_label: "Gregorian", hijri_label: "Hijri",
        stats_title: "Jamiatut Tayyibaat in Numbers",
        stat1_label: "Years of Excellence", stat2_label: "Students Enrolled", stat3_label: "Courses Offered", stat4_label: "Certified Teachers",
        finder_title: "Which Course Suits You?", finder_desc: "Answer 3 quick questions and we'll recommend the perfect course for you.",
        finder_start: "Start Quiz",
        fq1: "What is your main goal?",
        fq1_o1: "Recite the Quran beautifully & correctly", fq1_o2: "Understand Islamic rulings deeply", fq1_o3: "Learn Arabic & modern skills together",
        fq2: "What is your current level?",
        fq2_o1: "Complete beginner", fq2_o2: "Some knowledge already", fq2_o3: "Looking to go advanced",
        fq3: "How much time can you give weekly?",
        fq3_o1: "A few hours", fq3_o2: "Several hours", fq3_o3: "As much as needed",
        finder_result_title: "Your Recommended Course:",
        finder_result_enroll: "Enroll in This Course", finder_restart: "Take Quiz Again",
        mnav_home: "Home", mnav_courses: "Courses", mnav_finder: "Finder", mnav_whatsapp: "Chat",
        teachers_title: "Our Teachers",
        teacher1_s1: "Tahfeez-ul-Quran", teacher1_s2: "Tajweed", teacher1_s3: "Hadeeth", teacher1_s4: "Fiqh",
        teacher2_s1: "Nadhrah Quran", teacher2_s2: "Urdu", teacher2_s3: "Basic Islamic Knowledge",
        teacher3_s1: "Hadeeth", teacher3_s2: "Fiqh", teacher3_s3: "Tafseer",
        syllabus_title: "Our Complete Syllabus", syllabus_desc: "A detailed look at every course and subject taught at Jamiatut Tayyibaat.",
        syl_tab_aalima: "Aalima Course (4 Years)", syl_tab_momina: "Momina Course",
        syl_tab_momina_ibtedayi: "Momina Course Ibtedayi", syl_tab_tahfeez: "Tahfeez-ul-Quran (Girls)",
        rules_title: "Daily Lesson System & Academic Rules",
        upcoming_title: "Upcoming Courses", coming_soon: "Coming Soon",
        upcoming1_title: "Arabic Academic & Native Modern Speaking", upcoming1_desc: "Master academic Arabic grammar alongside natural, modern conversational speaking skills.",
        upcoming2_title: "Quran Tafseer", upcoming2_desc: "An in-depth exploration of the meanings, context, and wisdom behind the verses of the Holy Quran.",
        fq1_o4: "Understand the deep meaning of the Quran", fq1_o5: "Speak and write Arabic fluently",
        fq2_o4: "I can recite well, want to understand meaning", fq2_o5: "I want to focus purely on the language",
        fq3_o4: "Enough for deep reflection and study", fq3_o5: "Daily short practice sessions",
        footer_text: "&copy; 2026 Jamiatut Tayyibaat. All Rights Reserved."
    },
    ar: {
        nav_home: "الرئيسية", nav_about: "عن المعهد", nav_courses: "الدورات", nav_testimonials: "الآراء", nav_faq: "الأسئلة الشائعة", nav_contact: "اتصل بنا",
        hero_title: "مرحبًا بكم في جامعة الطيبات", hero_desc: "تنوير العقول بالمعرفة الإسلامية الأصيلة والتميز الحديث.", hero_btn: "استكشف دوراتنا",
        about_title: "عن معهدنا", about_p1: "في <strong>جامعة الطيبات</strong>، نسد الفجوة بين المنح الدراسية الإسلامية التقليدية والعالم الحديث. تم تصميم منهجنا لتنمية الروح والعقل معًا.", about_p2: "نقدم مزيجًا فريدًا من الدراسات القرآنية والفقه الإسلامي والمهارات المعاصرة مثل التكنولوجيا والقيادة، لإعداد الطلاب لمستقبل عالمي مع الحفاظ على جذورهم الإيمانية.", about_btn: "اعرف المزيد",
        courses_title: "دوراتنا",
        course1_title: "التجويد والقرآن", course1_desc: "إتقن فن تلاوة القرآن الكريم بأحكام التجويد الدقيقة والقراءات الجميلة.",
        course2_title: "الفقه الإسلامي", course2_desc: "تعمق في الفقه وعلوم الحديث والتاريخ الغني للدراسات الإسلامية.",
        course3_title: "اللغة العربية والتقنية الحديثة", course3_desc: "تعلم اللغة العربية بطلاقة مع إتقان الأدوات الرقمية الحديثة والبرمجة.",
        enroll_btn: "سجّل الآن",
        testimonials_title: "ماذا يقول طلابنا",
        t1_quote: "منحني معهد جامعة الطيبات أساسًا قويًا في التجويد مع مساعدتي على البقاء على اتصال بالدراسات الحديثة. إنها نعمة حقيقية.",
        t1_name: "عائشة ر.", t1_role: "طالبة تجويد وقرآن",
        t2_quote: "يشرح المعلمون هنا الفقه بوضوح شديد. أخيرًا فهمت أحكامًا كنت أعاني معها منذ سنوات.",
        t2_name: "يوسف م.", t2_role: "طالب فقه إسلامي",
        t3_quote: "تعلم اللغة العربية إلى جانب مهارات التقنية الحديثة كان تجربة فريدة في هذا المعهد. أوصي به بشدة.",
        t3_name: "فاطمة س.", t3_role: "طالبة عربية وتقنية حديثة",
        faq_title: "الأسئلة الشائعة",
        faq1_q: "هل الدروس عبر الإنترنت أم حضوريًا؟", faq1_a: "نقدم خيارات تعلم مرنة — يرجى التواصل معنا عبر واتساب لمعرفة الجدول الحالي وطريقة كل دورة.",
        faq2_q: "هل هناك رسوم للتسجيل؟", faq2_a: "تختلف تفاصيل الرسوم حسب الدورة. راسلنا عبر واتساب وسيشارك فريقنا هيكل الرسوم الدقيق معك.",
        faq3_q: "هل توجد دروس منفصلة للمبتدئين؟", faq3_a: "نعم، دوراتنا مصممة لمستويات مختلفة، من المبتدئين تمامًا إلى الطلاب المتقدمين.",
        faq4_q: "كيف يمكنني التسجيل؟", faq4_a: "ببساطة اضغط على أي زر \"سجّل الآن\" أو زر واتساب، وسيقوم فريق القبول لدينا بإرشادك خلال العملية.",
        contact_title: "تواصل معنا", contact_desc: "هل لديك سؤال حول دوراتنا أو القبول؟ أرسل لنا رسالة أو تواصل معنا مباشرة عبر واتساب.",
        contact_phone_label: "واتساب / هاتف", contact_email_label: "البريد الإلكتروني", contact_location_label: "الموقع",
        contact_location_value: "متاح عبر الإنترنت في جميع أنحاء العالم",
        form_name: "اسمك", form_email: "بريدك الإلكتروني", form_message: "رسالتك", form_submit: "إرسال الرسالة",
        form_sending: "جارٍ الإرسال...", form_success: "تم إرسال الرسالة بنجاح! سنتواصل معك قريبًا.", form_error: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا عبر واتساب.",
        nav_prayer: "أوقات الصلاة", nav_finder: "اختر دورتك",
        prayer_title: "أوقات الصلاة اليوم", prayer_desc: "لا تفوّت أي صلاة — اختر مدينتك أدناه.", prayer_loading: "جارٍ تحميل أوقات الصلاة...",
        gregorian_label: "ميلادي", hijri_label: "هجري",
        stats_title: "جامعة الطيبات بالأرقام",
        stat1_label: "سنوات من التميّز", stat2_label: "طالب مسجّل", stat3_label: "دورة متاحة", stat4_label: "معلم معتمد",
        finder_title: "ما هي الدورة المناسبة لك؟", finder_desc: "أجب عن 3 أسئلة سريعة وسنوصي لك بالدورة المثالية.",
        finder_start: "ابدأ الاختبار",
        fq1: "ما هو هدفك الرئيسي؟",
        fq1_o1: "تلاوة القرآن بجمال وصحة", fq1_o2: "فهم الأحكام الإسلامية بعمق", fq1_o3: "تعلّم العربية والمهارات الحديثة معًا",
        fq2: "ما هو مستواك الحالي؟",
        fq2_o1: "مبتدئ تمامًا", fq2_o2: "لدي بعض المعرفة", fq2_o3: "أسعى للتقدّم",
        fq3: "كم من الوقت يمكنك تخصيصه أسبوعيًا؟",
        fq3_o1: "بضع ساعات", fq3_o2: "عدة ساعات", fq3_o3: "بقدر ما يلزم",
        finder_result_title: "الدورة الموصى بها لك:",
        finder_result_enroll: "سجّل في هذه الدورة", finder_restart: "أعد الاختبار",
        mnav_home: "الرئيسية", mnav_courses: "الدورات", mnav_finder: "اختبار", mnav_whatsapp: "دردشة",
        teachers_title: "أساتذتنا",
        teacher1_s1: "تحفيظ القرآن", teacher1_s2: "التجويد", teacher1_s3: "الحديث", teacher1_s4: "الفقه",
        teacher2_s1: "ناظرة القرآن", teacher2_s2: "الأردية", teacher2_s3: "أساسيات المعرفة الإسلامية",
        teacher3_s1: "الحديث", teacher3_s2: "الفقه", teacher3_s3: "التفسير",
        syllabus_title: "منهجنا الكامل", syllabus_desc: "نظرة تفصيلية على كل دورة ومادة تُدرّس في جامعة الطيبات.",
        syl_tab_aalima: "دورة العالمية (4 سنوات)", syl_tab_momina: "دورة المؤمنة",
        syl_tab_momina_ibtedayi: "دورة المؤمنة الابتدائية", syl_tab_tahfeez: "تحفيظ القرآن (للبنات)",
        rules_title: "نظام الدروس اليومية والقواعد الأكاديمية",
        upcoming_title: "الدورات القادمة", coming_soon: "قريبًا",
        upcoming1_title: "العربية الأكاديمية والمحادثة الحديثة", upcoming1_desc: "إتقان قواعد اللغة العربية الأكاديمية إلى جانب مهارات المحادثة الحديثة الطبيعية.",
        upcoming2_title: "تفسير القرآن", upcoming2_desc: "استكشاف معمّق لمعاني وسياق وحكمة آيات القرآن الكريم.",
        fq1_o4: "فهم المعنى العميق للقرآن", fq1_o5: "التحدث والكتابة بالعربية بطلاقة",
        fq2_o4: "أجيد التلاوة، أريد فهم المعنى", fq2_o5: "أريد التركيز على اللغة فقط",
        fq3_o4: "وقت كافٍ للتأمل والدراسة العميقة", fq3_o5: "جلسات ممارسة يومية قصيرة",
        footer_text: "&copy; 2026 جامعة الطيبات. جميع الحقوق محفوظة."
    },
    ur: {
        nav_home: "صفحہ اول", nav_about: "ہمارے بارے میں", nav_courses: "کورسز", nav_testimonials: "آراء", nav_faq: "سوالات", nav_contact: "رابطہ کریں",
        hero_title: "جامعۃ الطیبات میں خوش آمدید", hero_desc: "مستند اسلامی علم اور جدید مہارت کے ساتھ ذہنوں کو روشن کرنا۔", hero_btn: "ہمارے کورسز دیکھیں",
        about_title: "ہمارے ادارے کے بارے میں", about_p1: "<strong>جامعۃ الطیبات</strong> میں، ہم روایتی اسلامی تعلیم اور جدید دنیا کے درمیان فرق کو پاٹتے ہیں۔ ہمارا نصاب روح اور دماغ دونوں کی پرورش کے لیے ڈیزائن کیا گیا ہے۔", about_p2: "ہم قرآنی علوم، اسلامی فقہ، اور ٹیکنالوجی اور قیادت جیسی جدید مہارتوں کا انوکھا امتزاج پیش کرتے ہیں، جو طلباء کو ایمان میں جڑے رہتے ہوئے عالمی مستقبل کے لیے تیار کرتا ہے۔", about_btn: "مزید جانیں",
        courses_title: "ہمارے کورسز",
        course1_title: "تجوید و قرآن", course1_desc: "قرآن مجید کو درست تجوید کے قواعد اور خوبصورت قرات کے ساتھ پڑھنے کے فن میں مہارت حاصل کریں۔",
        course2_title: "اسلامی فقہ", course2_desc: "فقہ، حدیث کے علوم، اور اسلامی تعلیمات کی بھرپور تاریخ میں گہرائی سے جانیں۔",
        course3_title: "عربی اور جدید ٹیکنالوجی", course3_desc: "جدید ڈیجیٹل ٹولز اور کوڈنگ میں مہارت حاصل کرتے ہوئے عربی زبان روانی سے سیکھیں۔",
        enroll_btn: "ابھی داخلہ لیں",
        testimonials_title: "ہمارے طلباء کیا کہتے ہیں",
        t1_quote: "جامعۃ الطیبات نے مجھے تجوید میں مضبوط بنیاد دی اور ساتھ ہی جدید تعلیم سے جڑے رہنے میں مدد کی۔ واقعی ایک نعمت ہے۔",
        t1_name: "عائشہ ر.", t1_role: "تجوید و قرآن کی طالبہ",
        t2_quote: "یہاں کے اساتذہ فقہ کو بہت وضاحت سے سمجھاتے ہیں۔ میں نے بالآخر وہ مسائل سمجھ لیے جن سے برسوں سے الجھن میں تھی۔",
        t2_name: "یوسف م.", t2_role: "اسلامی فقہ کے طالب علم",
        t3_quote: "جدید ٹیکنالوجی کی مہارتوں کے ساتھ عربی زبان سیکھنا اس ادارے میں منفرد تجربہ رہا۔ ہر طالب علم کو انتہائی تجویز کرتا ہوں۔",
        t3_name: "فاطمہ س.", t3_role: "عربی و جدید ٹیکنالوجی کی طالبہ",
        faq_title: "اکثر پوچھے جانے والے سوالات",
        faq1_q: "کیا کلاسز آن لائن ہیں یا حاضری کے ساتھ؟", faq1_a: "ہم لچکدار تعلیمی اختیارات فراہم کرتے ہیں — براہ کرم موجودہ شیڈول اور ہر کورس کا طریقہ جاننے کے لیے واٹس ایپ پر رابطہ کریں۔",
        faq2_q: "کیا داخلے کی کوئی فیس ہے؟", faq2_a: "فیس کی تفصیلات کورس کے مطابق مختلف ہوتی ہیں۔ واٹس ایپ پر پیغام بھیجیں، ہماری ٹیم آپ کے ساتھ صحیح فیس کی تفصیل شیئر کرے گی۔",
        faq3_q: "کیا مبتدیوں کے لیے الگ کلاسز ہیں؟", faq3_a: "جی ہاں، ہمارے کورسز مختلف سطحوں کے لیے ترتیب دیے گئے ہیں، بالکل نئے آنے والوں سے لے کر اعلیٰ سطح کے طلباء تک۔",
        faq4_q: "میں داخلہ کیسے لے سکتا/سکتی ہوں؟", faq4_a: "بس کسی بھی \"ابھی داخلہ لیں\" بٹن یا واٹس ایپ بٹن پر کلک کریں، ہماری داخلہ ٹیم آپ کی مکمل رہنمائی کرے گی۔",
        contact_title: "ہم سے رابطہ کریں", contact_desc: "کیا ہمارے کورسز یا داخلے کے بارے میں کوئی سوال ہے؟ ہمیں پیغام بھیجیں یا براہ راست واٹس ایپ پر رابطہ کریں۔",
        contact_phone_label: "واٹس ایپ / فون", contact_email_label: "ای میل", contact_location_label: "مقام",
        contact_location_value: "دنیا بھر میں آن لائن دستیاب",
        form_name: "آپ کا نام", form_email: "آپ کا ای میل", form_message: "آپ کا پیغام", form_submit: "پیغام بھیجیں",
        form_sending: "بھیجا جا رہا ہے...", form_success: "پیغام کامیابی سے بھیج دیا گیا! ہم جلد آپ سے رابطہ کریں گے۔", form_error: "کچھ غلط ہو گیا۔ دوبارہ کوشش کریں یا واٹس ایپ پر رابطہ کریں۔",
        nav_prayer: "اوقاتِ نماز", nav_finder: "اپنا کورس تلاش کریں",
        prayer_title: "آج کے نماز کے اوقات", prayer_desc: "کوئی نماز مِس نہ کریں — نیچے اپنا شہر منتخب کریں۔", prayer_loading: "نماز کے اوقات لوڈ ہو رہے ہیں...",
        gregorian_label: "عیسوی", hijri_label: "ہجری",
        stats_title: "جامعۃ الطیبات ہندسوں میں",
        stat1_label: "سالوں کی مہارت", stat2_label: "داخلہ لینے والے طلباء", stat3_label: "دستیاب کورسز", stat4_label: "مستند اساتذہ",
        finder_title: "آپ کے لیے کون سا کورس بہتر ہے؟", finder_desc: "3 آسان سوالات کے جواب دیں، ہم آپ کے لیے بہترین کورس تجویز کریں گے۔",
        finder_start: "کوئز شروع کریں",
        fq1: "آپ کا بنیادی مقصد کیا ہے؟",
        fq1_o1: "قرآن کو خوبصورتی اور درستگی سے پڑھنا", fq1_o2: "اسلامی احکام کو گہرائی سے سمجھنا", fq1_o3: "عربی زبان اور جدید مہارتیں ساتھ سیکھنا",
        fq2: "آپ کی موجودہ سطح کیا ہے؟",
        fq2_o1: "بالکل نیا شروع کر رہا/رہی ہوں", fq2_o2: "کچھ معلومات پہلے سے ہیں", fq2_o3: "اعلیٰ سطح تک جانا چاہتا/چاہتی ہوں",
        fq3: "آپ ہفتے میں کتنا وقت دے سکتے ہیں؟",
        fq3_o1: "چند گھنٹے", fq3_o2: "کئی گھنٹے", fq3_o3: "جتنا ضروری ہو",
        finder_result_title: "آپ کے لیے تجویز کردہ کورس:",
        finder_result_enroll: "اس کورس میں داخلہ لیں", finder_restart: "دوبارہ کوئز لیں",
        mnav_home: "صفحہ اول", mnav_courses: "کورسز", mnav_finder: "تلاش", mnav_whatsapp: "چیٹ",
        teachers_title: "ہمارے اساتذہ",
        teacher1_s1: "تحفیظ القرآن", teacher1_s2: "تجوید", teacher1_s3: "حدیث", teacher1_s4: "فقہ",
        teacher2_s1: "ناظرہ قرآن", teacher2_s2: "اردو", teacher2_s3: "بنیادی اسلامی معلومات",
        teacher3_s1: "حدیث", teacher3_s2: "فقہ", teacher3_s3: "تفسیر",
        syllabus_title: "ہمارا مکمل نصاب", syllabus_desc: "جامعۃ الطیبات میں پڑھائے جانے والے ہر کورس اور مضمون کی تفصیل۔",
        syl_tab_aalima: "عالمہ کورس (4 سال)", syl_tab_momina: "مومنہ کورس",
        syl_tab_momina_ibtedayi: "مومنہ کورس ابتدائی", syl_tab_tahfeez: "تحفیظ القرآن (للبنات)",
        rules_title: "روزانہ اسباق کا نظام اور تعلیمی قواعد",
        upcoming_title: "آنے والے کورسز", coming_soon: "جلد آ رہا ہے",
        upcoming1_title: "عربی اکیڈمک اور جدید بول چال", upcoming1_desc: "عربی اکیڈمک قواعد کے ساتھ ساتھ فطری اور جدید بول چال کی مہارت حاصل کریں۔",
        upcoming2_title: "تفسیر قرآن", upcoming2_desc: "قرآن مجید کی آیات کے معانی، سیاق و سباق اور حکمت کا گہرائی سے مطالعہ۔",
        fq1_o4: "قرآن کے گہرے معنی سمجھنا", fq1_o5: "عربی روانی سے بولنا اور لکھنا",
        fq2_o4: "تلاوت اچھی ہے، معنی سمجھنا چاہتا/چاہتی ہوں", fq2_o5: "صرف زبان پر توجہ دینا چاہتا/چاہتی ہوں",
        fq3_o4: "گہرے غور و فکر اور مطالعے کے لیے کافی وقت", fq3_o5: "روزانہ مختصر مشق کے سیشنز",
        footer_text: "&copy; 2026 جامعۃ الطیبات۔ جملہ حقوق محفوظ ہیں۔"
    }
};

const RTL_LANGS = ["ar", "ur"];

function changeLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
    document.documentElement.setAttribute('dir', RTL_LANGS.includes(lang) ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
}

document.addEventListener('DOMContentLoaded', function () {
    const langSelect = document.getElementById('languageSelect');

    langSelect.addEventListener('change', function () {
        changeLanguage(this.value);
        localStorage.setItem('preferredLang', this.value);
    });

    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && translations[savedLang]) {
        langSelect.value = savedLang;
        changeLanguage(savedLang);
    }

    // ===== MOBILE MENU =====
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });

    // ===== SCROLL EFFECT (navbar) — throttled with requestAnimationFrame
    //       so the browser only updates once per paint frame instead of
    //       running this on every single scroll pixel (the main cause of
    //       scroll jank on mid-range phones) =====
    const navbar = document.getElementById('navbar');
    let scrollTicking = false;
    function handleScrollEffects() {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 50);
        backToTopBtn.classList.toggle('visible', y > 400);
        scrollTicking = false;
    }
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            requestAnimationFrame(handleScrollEffects);
            scrollTicking = true;
        }
    }, { passive: true });

    // ===== WHATSAPP ENROLL BUTTONS =====
    document.querySelectorAll('.btn-enroll').forEach(btn => {
        btn.addEventListener('click', () => {
            const course = btn.getAttribute('data-course') || 'your courses';
            const message = `Assalamu Alaikum, I would like to enroll in "${course}" at Jamiatut Tayyibaat. Please share more details.`;
            const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });

    // ===== FAQ ACCORDION =====
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.closest('.faq-item');
            const wasActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!wasActive) item.classList.add('active');
        });
    });

    // ===== SCROLL REVEAL =====
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));

    // ===== BACK TO TOP =====
    var backToTopBtn = document.getElementById('backToTop');
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== CONTACT FORM (Formspree) =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const statusEl = document.getElementById('formStatus');
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const lang = document.getElementById('languageSelect').value;
            const t = translations[lang] || translations.en;

            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.textContent = t.form_sending;
            statusEl.className = 'form-status';
            statusEl.style.display = 'none';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    statusEl.textContent = t.form_success;
                    statusEl.className = 'form-status success';
                    contactForm.reset();
                } else {
                    statusEl.textContent = t.form_error;
                    statusEl.className = 'form-status error';
                }
            } catch (err) {
                statusEl.textContent = t.form_error;
                statusEl.className = 'form-status error';
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });
    }

    // ===== DARK MODE =====
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });

    // ===== NEW FEATURES =====
    initPrayerTimes();
    initStatsCounter();
    initCourseFinder();
    initSyllabus();
});

/* =========================================================
   PRAYER TIMES + HIJRI DATE
========================================================= */
function initPrayerTimes() {
    const citySelect = document.getElementById('citySelect');
    if (!citySelect) return;

    Object.keys(PRAYER_CITIES).forEach(label => {
        const opt = document.createElement('option');
        opt.value = label;
        opt.textContent = label;
        citySelect.appendChild(opt);
    });

    const savedCity = localStorage.getItem('prayerCity');
    citySelect.value = (savedCity && PRAYER_CITIES[savedCity]) ? savedCity : 'Mecca';

    citySelect.addEventListener('change', () => {
        localStorage.setItem('prayerCity', citySelect.value);
        loadPrayerTimes(citySelect.value);
    });

    loadPrayerTimes(citySelect.value);
}

async function loadPrayerTimes(cityLabel) {
    const grid = document.getElementById('prayerGrid');
    const gregEl = document.getElementById('gregorianDate');
    const hijriEl = document.getElementById('hijriDate');
    const lang = document.getElementById('languageSelect').value;
    const t = translations[lang] || translations.en;

    grid.innerHTML = '<div class="prayer-loading">' + t.prayer_loading + '</div>';

    const [city, country] = PRAYER_CITIES[cityLabel] || PRAYER_CITIES['Mecca'];
    try {
        const res = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=2`);
        const data = await res.json();
        if (!data || data.code !== 200) throw new Error('bad response');

        const timings = data.data.timings;
        const hijri = data.data.date.hijri;
        const greg = data.data.date.gregorian;

        if (gregEl) gregEl.textContent = `${t.gregorian_label}: ${greg.day} ${greg.month.en} ${greg.year}`;
        if (hijriEl) hijriEl.textContent = `${t.hijri_label}: ${hijri.day} ${hijri.month.en} ${hijri.year} AH`;

        const now = new Date();
        const nowMinutes = now.getHours() * 60 + now.getMinutes();
        let nextPrayer = null;
        let nextDiff = Infinity;

        const cells = PRAYER_ORDER.map(name => {
            const time = timings[name];
            const [h, m] = time.split(':').map(Number);
            const mins = h * 60 + m;
            let diff = mins - nowMinutes;
            if (diff < 0) diff += 24 * 60;
            if (diff < nextDiff) { nextDiff = diff; nextPrayer = name; }
            return { name, time, icon: PRAYER_ICONS[name] || 'fa-mosque' };
        });

        grid.innerHTML = cells.map(c => `
            <div class="prayer-cell${c.name === nextPrayer ? ' next-prayer' : ''}">
                <i class="fas ${c.icon}"></i>
                <div class="p-name">${c.name}</div>
                <div class="p-time">${c.time}</div>
            </div>
        `).join('');
    } catch (err) {
        grid.innerHTML = '<div class="prayer-loading">Could not load prayer times right now. Please try again later.</div>';
    }
}

/* =========================================================
   ANIMATED STATS COUNTER
========================================================= */
function initStatsCounter() {
    const statEls = document.querySelectorAll('.stat-num[data-count]');
    if (!statEls.length) return;

    const animate = (el) => {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1600;
        const startTime = performance.now();
        function tick(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
        }
        requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    statEls.forEach(el => io.observe(el));
}

/* =========================================================
   "WHICH COURSE SUITS YOU?" FINDER QUIZ
========================================================= */
const QUIZ_COURSE_MAP = {
    "Tajweed & Quran": { icon: "fa-quran" },
    "Islamic Jurisprudence": { icon: "fa-landmark" },
    "Arabic & Modern Tech": { icon: "fa-laptop-code" },
    "Quran Tafseer": { icon: "fa-book-quran" },
    "Arabic Language": { icon: "fa-comments" }
};

let quizAnswers = [];

function initCourseFinder() {
    const startBtn = document.getElementById('quizStartBtn');
    if (!startBtn) return;

    startBtn.addEventListener('click', () => {
        quizAnswers = [];
        showQuizStep(1);
    });

    document.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const step = parseInt(btn.closest('.quiz-step').getAttribute('data-step'), 10);
            const course = btn.getAttribute('data-course');
            quizAnswers[step - 1] = course;

            if (step < 3) {
                showQuizStep(step + 1);
            } else {
                showQuizResult();
            }
        });
    });

    const restartBtn = document.getElementById('quizRestartBtn');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            quizAnswers = [];
            showQuizStep(0);
        });
    }
}

function showQuizStep(step) {
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.quiz-progress span').forEach(p => p.classList.remove('active'));

    if (step === 0) {
        document.getElementById('quizStepIntro').classList.add('active');
        return;
    }
    document.getElementById('quizStep' + step).classList.add('active');
    for (let i = 1; i <= step; i++) {
        const dot = document.querySelector('.quiz-progress span[data-dot="' + i + '"]');
        if (dot) dot.classList.add('active');
    }
}

function showQuizResult() {
    // Most-picked course wins; ties resolved by the first question's answer.
    const counts = {};
    quizAnswers.forEach(c => { counts[c] = (counts[c] || 0) + 1; });
    let winner = quizAnswers[0];
    let max = 0;
    Object.keys(counts).forEach(c => { if (counts[c] > max) { max = counts[c]; winner = c; } });

    const lang = document.getElementById('languageSelect').value;
    const t = translations[lang] || translations.en;
    const courseKeyMap = { "Tajweed & Quran": "course1_title", "Islamic Jurisprudence": "course2_title", "Arabic & Modern Tech": "course3_title", "Quran Tafseer": "upcoming2_title", "Arabic Language": "upcoming1_title" };
    const descKeyMap = { "Tajweed & Quran": "course1_desc", "Islamic Jurisprudence": "course2_desc", "Arabic & Modern Tech": "course3_desc", "Quran Tafseer": "upcoming2_desc", "Arabic Language": "upcoming1_desc" };

    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.quiz-progress span').forEach(p => p.classList.add('active'));

    const resultBox = document.getElementById('quizResultBox');
    resultBox.innerHTML = `
        <div class="quiz-result">
            <i class="fas ${QUIZ_COURSE_MAP[winner].icon}"></i>
            <p style="color:var(--gold-dark);font-weight:600;text-transform:uppercase;font-size:0.8rem;letter-spacing:1px;">${t.finder_result_title}</p>
            <h3>${t[courseKeyMap[winner]]}</h3>
            <p>${t[descKeyMap[winner]]}</p>
            <button class="btn-enroll" data-course="${winner}" style="margin-bottom:14px;"><i class="fas fa-paper-plane"></i> ${t.finder_result_enroll}</button>
            <br>
            <button class="quiz-restart" id="quizRestartBtn2">${t.finder_restart}</button>
        </div>
    `;
    resultBox.querySelector('.btn-enroll').addEventListener('click', function () {
        const message = `Assalamu Alaikum, I would like to enroll in "${winner}" at Jamiatut Tayyibaat. Please share more details.`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    });
    resultBox.querySelector('#quizRestartBtn2').addEventListener('click', () => {
        quizAnswers = [];
        showQuizStep(0);
    });
    document.getElementById('quizResultStep').classList.add('active');
}

/* =========================================================
   PWA: service worker registration + install button
========================================================= */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').catch(() => {});
    });
}

let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const btn = document.getElementById('installBtn');
    if (btn) btn.style.display = 'flex';
});

document.addEventListener('DOMContentLoaded', () => {
    const installBtn = document.getElementById('installBtn');
    if (installBtn) {
        installBtn.addEventListener('click', async () => {
            if (!deferredInstallPrompt) return;
            deferredInstallPrompt.prompt();
            await deferredInstallPrompt.userChoice;
            deferredInstallPrompt = null;
            installBtn.style.display = 'none';
        });
    }
});

window.addEventListener('appinstalled', () => {
    const btn = document.getElementById('installBtn');
    if (btn) btn.style.display = 'none';
});

/* =========================================================
   SYLLABUS: course tabs + year accordion
========================================================= */
function initSyllabus() {
    const tabBtns = document.querySelectorAll('.syllabus-tab-btn');
    const panels = document.querySelectorAll('.syllabus-panel');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-target')).classList.add('active');
        });
    });

    document.querySelectorAll('.syllabus-year-head').forEach(head => {
        head.addEventListener('click', () => {
            head.closest('.syllabus-year').classList.toggle('open');
        });
    });
}
