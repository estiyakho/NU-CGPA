const nuData = {
    gradingSystem: [
        { grade: 'A+', point: 4.00, range: '80-100%' },
        { grade: 'A', point: 3.75, range: '75-79%' },
        { grade: 'A-', point: 3.50, range: '70-74%' },
        { grade: 'B+', point: 3.25, range: '65-69%' },
        { grade: 'B', point: 3.00, range: '60-64%' },
        { grade: 'B-', point: 2.75, range: '55-59%' },
        { grade: 'C+', point: 2.50, range: '50-54%' },
        { grade: 'C', point: 2.25, range: '45-49%' },
        { grade: 'D', point: 2.00, range: '40-44%' },
        { grade: 'F', point: 0.00, range: '0-39%' },
    ],
    programs: {
        'Honours': [
            { id: 'Accounting', name: 'Accounting (হিসাববিজ্ঞান)' },
            { id: 'Anthropology', name: 'Anthropology (মানবতত্ত্ব)' },
            { id: 'Arabic', name: 'Arabic (আরবি)' },
            { id: 'Bangla', name: 'Bangla (বাংলা)' },
            { id: 'Botany', name: 'Botany (উদ্ভিদবিদ্যা)' },
            { id: 'Biochemistry_Biology', name: 'Biochemistry and Molecular Biology (জীবরসায়ন এবং আণবিক জীববিদ্যা)' },
            { id: 'Chemistry', name: 'Chemistry (রসায়ন)' },
            { id: 'CSE', name: 'Computer Science and Engineering (CSE)' },
            { id: 'Economics', name: 'Economics (অর্থনীতি)' },
            { id: 'English', name: 'English (ইংরেজি)' },
            { id: 'Environment_Science', name: 'Environment Science (পরিবেশ বিজ্ঞান)' },
            { id: 'Finance_Banking', name: 'Finance And Banking (অর্থনীতি ও ব্যাংকিং)' },
            { id: 'Geography_Environment', name: 'Geography and Environment (ভূগোল এবং পরিবেশ)' },
            { id: 'History', name: 'History (ইতিহাস)' },
            { id: 'Home_Economics', name: 'Home Economics (গৃহ অর্থনীতি)' },
            { id: 'Islamic_History_Culture', name: 'Islamic History and Culture (ইসলামিক ইতিহাস ও সংস্কৃতি)' },
            { id: 'Islamic_Studies', name: 'Islamic Studies (ইসলামিক স্টাডিজ)' },
            { id: 'Library_Information_Science', name: 'Library and Information Science (গ্রন্থাগার এবং তথ্য বিজ্ঞান)' },
            { id: 'Management', name: 'Management (ব্যবস্থাপনা)' },
            { id: 'Marketing', name: 'Marketing (বিপণন)' },
            { id: 'Mathematics', name: 'Mathematics (গণিত)' },
            { id: 'Philosophy', name: 'Philosophy (দর্শন)' },
            { id: 'Physics', name: 'Physics (ভৌতবিজ্ঞান)' },
            { id: 'Political_Science', name: 'Political Science (রাজনীতি বিজ্ঞান)' },
            { id: 'Psychology', name: 'Psychology (মনোবিজ্ঞান)' },
            { id: 'Sanskrit', name: 'Sanskrit (সংস্কৃত)' },
            { id: 'Social_Work', name: 'Social Work (সামাজিক কাজ)' },
            { id: 'Sociology', name: 'Sociology (সমাজবিজ্ঞান)' },
            { id: 'Soil_Science', name: 'Soil Science (মাটির বিজ্ঞান)' },
            { id: 'Statistics', name: 'Statistics (পরিসংখ্যান)' },
            { id: 'Zoology', name: 'Zoology (প্রাণিবিদ্যা)' },
            { id: 'Custom', name: 'Custom / Other' }
        ],
        'Degree': [
            { id: 'Accounting_Degree', name: 'Accounting (হিসাববিজ্ঞান)' },
            { id: 'Arabic_Degree', name: 'Arabic (আরবি ভাষা)' },
            { id: 'Bangla_Elective_Degree', name: 'Bangla Elective (বাংলা (ঐচ্ছিক))' },
            { id: 'Biochemistry_Biology_Degree', name: 'Biochemistry and Molecular Biology (জীবরসায়ন ও অণুজীববিজ্ঞান)' },
            { id: 'Botany_Degree', name: 'Botany (উদ্ভিদবিদ্যা)' },
            { id: 'Chemistry_Degree', name: 'Chemistry (রসায়ন)' },
            { id: 'Computer_Science_Degree', name: 'Computer Science (কম্পিউটার বিজ্ঞান)' },
            { id: 'Drama_Media_Degree', name: 'Drama and Media Studies (নাট্যকলা ও গণমাধ্যম অধ্যয়ন)' },
            { id: 'Economics_Degree', name: 'Economics (অর্থনীতি)' },
            { id: 'English_Elective_Degree', name: 'English Elective (ইংরেজি (ঐচ্ছিক))' },
            { id: 'Finance_Banking_Degree', name: 'Finance and Banking (অর্থায়ন ও ব্যাংকিং)' },
            { id: 'Geography_Environment_Degree', name: 'Geography and Environment (ভূগোল ও পরিবেশবিদ্যা)' },
            { id: 'History_Degree', name: 'History (ইতিহাস)' },
            { id: 'Home_Economics_Degree', name: 'Home Economics (গৃহ অর্থনীতি)' },
            { id: 'Islamic_History_Culture_Degree', name: 'Islamic History and Culture (ইসলামের ইতিহাস ও সংস্কৃতি)' },
            { id: 'Islamic_Studies_Degree', name: 'Islamic Studies (ইসলামি শিক্ষা)' },
            { id: 'Library_Information_Degree', name: 'Library and Information Science (গ্রন্থাগার ও তথ্যবিজ্ঞান)' },
            { id: 'Management_Degree', name: 'Management (ব্যবস্থাপনা)' },
            { id: 'Marine_Engineering_Degree', name: 'Marine Engineering (মেরিন ইঞ্জিনিয়ারিং)' },
            { id: 'Marine_Fisheries_Degree', name: 'Marine Fisheries (মেরিন মৎস্যবিজ্ঞান)' },
            { id: 'Marketing_Degree', name: 'Marketing (বিপণন)' },
            { id: 'Mathematics_Degree', name: 'Mathematics (গণিত)' },
            { id: 'B_Music_Degree', name: 'B Music (সঙ্গীত)' },
            { id: 'Nautical_Degree', name: 'Nautical (নটিক্যাল বিজ্ঞান)' },
            { id: 'Pali_Degree', name: 'Pali (পালি ভাষা)' },
            { id: 'Philosophy_Degree', name: 'Philosophy (দর্শন)' },
            { id: 'Physics_Degree', name: 'Physics (পদার্থবিজ্ঞান)' },
            { id: 'Political_Science_Degree', name: 'Political Science (রাষ্ট্রবিজ্ঞান)' },
            { id: 'Psychology_Degree', name: 'Psychology (মনোবিজ্ঞান)' },
            { id: 'Sanskrit_Degree', name: 'Sanskrit (সংস্কৃত ভাষা)' },
            { id: 'Social_Work_Degree', name: 'Social Work (সমাজকর্ম)' },
            { id: 'Sociology_Degree', name: 'Sociology (সমাজবিজ্ঞান)' },
            { id: 'Soil_Science_Degree', name: 'Soil Science (মৃত্তিকাবিজ্ঞান)' },
            { id: 'B_Sports_Degree', name: 'B Sports (ক্রীড়া বিজ্ঞান)' },
            { id: 'Statistics_Degree', name: 'Statistics (পরিসংখ্যান)' },
            { id: 'Zoology_Degree', name: 'Zoology (প্রাণিবিদ্যা)' },
            { id: 'Custom', name: 'Custom / Other' }
        ],
        'Masters': [
            { id: 'Custom', name: 'Custom / Other' }
        ],
        'Professional': [
            { id: 'Custom', name: 'Custom / Other' }
        ]
    },
    syllabi: {
        '2013-2014': {
            'CSE': {
                name: 'Computer Science and Engineering',
                years: {
                    1: [
                        { code: '510201', name: 'Structured Programming Language', credits: 3 },
                        { code: '510202', name: 'Structured Programming Language Lab', credits: 1.5 },
                        { code: '510203', name: 'Electrical and Electronic Circuit', credits: 3 },
                        { code: '510204', name: 'Electrical and Electronic Circuit Lab', credits: 1.5 },
                        { code: '510205', name: 'Discrete Mathematics', credits: 3 },
                        { code: '510207', name: 'Physics', credits: 3 },
                        { code: '510208', name: 'Physics Lab', credits: 1 },
                        { code: '510209', name: 'Calculus', credits: 3 },
                        { code: '510211', name: 'English', credits: 3 },
                    ],
                    2: [
                        { code: '520201', name: 'Data Structure', credits: 3 },
                        { code: '520202', name: 'Data Structure Lab', credits: 1.5 },
                        { code: '520203', name: 'Object Oriented Programming', credits: 3 },
                        { code: '520204', name: 'Object Oriented Programming Lab', credits: 1.5 },
                        { code: '520205', name: 'Digital Logic Design', credits: 3 },
                        { code: '520206', name: 'Digital Logic Design Lab', credits: 1.5 },
                        { code: '520207', name: 'Mathematics for Computing', credits: 3 },
                        { code: '520209', name: 'Basic Statistics', credits: 3 },
                    ]
                }
            },
            'Accounting': {
                name: 'Accounting (Honours)',
                years: {
                    1: [
                        { code: '212501', name: 'Principles of Accounting', credits: 4 },
                        { code: '212503', name: 'Principles of Finance', credits: 4 },
                        { code: '212505', name: 'Principles of Marketing', credits: 4 },
                        { code: '212507', name: 'Principles of Management', credits: 4 },
                        { code: '212509', name: 'Micro Economics', credits: 4 },
                        { code: '211501', name: 'History of the Emergence of Independent Bangladesh', credits: 4 }
                    ],
                    2: [
                        { code: '222501', name: 'Computer and Information Technology (Accounting)', credits: 4 },
                        { code: '222503', name: 'Taxation in Bangladesh', credits: 4 },
                        { code: '222505', name: 'Intermediate Accounting', credits: 4 },
                        { code: '222507', name: 'Business Mathematics', credits: 4 },
                        { code: '222509', name: 'Business Statistics (In English)', credits: 4 },
                        { code: '222511', name: 'Macro Economics', credits: 4 },
                        { code: '222513', name: 'Business Communication and Report Writing (In English)', credits: 4 }
                    ],
                    3: [
                        { code: '232501', name: 'Audit and Assurance', credits: 4 },
                        { code: '232503', name: 'Advanced Accounting-I', credits: 4 },
                        { code: '232505', name: 'Cost Accounting', credits: 4 },
                        { code: '232507', name: 'Management Accounting (In English)', credits: 4 },
                        { code: '232509', name: 'Business and Commercial Laws', credits: 4 },
                        { code: '232511', name: 'Entrepreneurship', credits: 4 },
                        { code: '232513', name: 'Financial Management', credits: 4 },
                        { code: '232515', name: 'Banking and Insurance Theories, Laws and Accounts', credits: 4 }
                    ],
                    4: [
                        { code: '242501', name: 'Accounting Theory', credits: 4 },
                        { code: '242503', name: 'Advanced Auditing & Professional Ethics', credits: 4 },
                        { code: '242505', name: 'Accounting Information Systems', credits: 4 },
                        { code: '242507', name: 'Organizational Behavior', credits: 4 },
                        { code: '242509', name: 'Corporate Law and Practices', credits: 4 },
                        { code: '242511', name: 'Working Capital Management and Financial Statement Analysis', credits: 4 },
                        { code: '242513', name: 'Advanced Accounting-II', credits: 4 },
                        { code: '242515', name: 'Investment Analysis and Portfolio Management', credits: 4 },
                        { code: '242517', name: 'Research Methodology (In English)', credits: 4 },
                        { code: '242518', name: 'Viva-voce', credits: 4 }
                    ]
                }
            },
            'Economics': { name: 'Economics (Honours)', years: {} },
            'English': {
                name: 'English (Honours)',
                years: {
                    1: [
                        { code: '211101', name: 'English Reading Skills', credits: 4 },
                        { code: '211103', name: 'English Writing Skills', credits: 4 },
                        { code: '211105', name: 'Introduction to Poetry', credits: 4 },
                        { code: '211107', name: 'Introduction to Prose: Fiction and Non-Fiction', credits: 4 },
                        { code: '211501', name: 'History of the Emergence of Independent Bangladesh', credits: 4 },
                        { code: '212009', name: 'Introducing Sociology', credits: 4 }
                    ],
                    2: [
                        { code: '221101', name: 'Introduction to Drama', credits: 4 },
                        { code: '221103', name: 'Romantic Poetry', credits: 4 },
                        { code: '221105', name: 'Advanced Reading and Writing', credits: 4 },
                        { code: '221107', name: 'History of English Literature', credits: 4 },
                        { code: '221909', name: 'Political Organization/System of UK & USA', credits: 4 },
                        { code: '222009', name: 'Sociology of Bangladesh', credits: 4 },
                        { code: '222115', name: 'Bangladesh Society and Culture', credits: 4 }
                    ],
                    3: [
                        { code: '231101', name: 'Elizabethan and Jacobean Drama', credits: 4 },
                        { code: '231103', name: '16th and 17th Century Poetry', credits: 4 },
                        { code: '231105', name: '17th and 18th Century Non-Fictional Prose', credits: 4 },
                        { code: '231107', name: 'Restoration and 18th Century Fiction', credits: 4 },
                        { code: '231109', name: 'Restoration and 18th Century Poetry/Drama', credits: 4 },
                        { code: '231111', name: 'Victorian Poetry', credits: 4 },
                        { code: '231113', name: 'Introduction to Literary Criticism', credits: 4 },
                        { code: '231115', name: 'Introduction to Linguistics', credits: 4 }
                    ],
                    4: [
                        { code: '241101', name: '19th Century Novel', credits: 4 },
                        { code: '241103', name: '20th Century Poetry', credits: 4 },
                        { code: '241105', name: '20th Century Drama', credits: 4 },
                        { code: '241107', name: '20th Century Novel', credits: 4 },
                        { code: '241109', name: 'American Poetry', credits: 4 },
                        { code: '241111', name: 'American Literature: Fiction and Drama', credits: 4 },
                        { code: '241113', name: 'Classics in Translation', credits: 4 },
                        { code: '241115', name: 'Literary Criticism (Victorian to Modern)', credits: 4 },
                        { code: '241117', name: 'Continental Literature', credits: 4 },
                        { code: '241119', name: 'Approaches and Methods of Language Teaching', credits: 4 },
                        { code: '241120', name: 'Viva-voce', credits: 4 }
                    ]
                }
            },
            'Anthropology': { name: 'Anthropology (Honours)', years: {} },
            'Arabic': { name: 'Arabic (Honours)', years: {} },
            'Bangla': { name: 'Bangla (Honours)', years: {} },
            'Botany': { name: 'Botany (Honours)', years: {} },
            'Biochemistry_Biology': { name: 'Biochemistry and Molecular Biology (Honours)', years: {} },
            'Chemistry': { name: 'Chemistry (Honours)', years: {} },
            'Environment_Science': { name: 'Environment Science (Honours)', years: {} },
            'Finance_Banking': { name: 'Finance And Banking (Honours)', years: {} },
            'Geography_Environment': { name: 'Geography and Environment (Honours)', years: {} },
            'History': { name: 'History (Honours)', years: {} },
            'Home_Economics': { name: 'Home Economics (Honours)', years: {} },
            'Islamic_History_Culture': { name: 'Islamic History and Culture (Honours)', years: {} },
            'Islamic_Studies': { name: 'Islamic Studies (Honours)', years: {} },
            'Library_Information_Science': { name: 'Library and Information Science (Honours)', years: {} },
            'Philosophy': { name: 'Philosophy (Honours)', years: {} },
            'Physics': { name: 'Physics (Honours)', years: {} },
            'Political_Science': { name: 'Political Science (Honours)', years: {} },
            'Psychology': { name: 'Psychology (Honours)', years: {} },
            'Sanskrit': { name: 'Sanskrit (Honours)', years: {} },
            'Social_Work': { name: 'Social Work (Honours)', years: {} },
            'Sociology': { name: 'Sociology (Honours)', years: {} },
            'Soil_Science': { name: 'Soil Science (Honours)', years: {} },
            'Statistics': { name: 'Statistics (Honours)', years: {} },
            'Zoology': { name: 'Zoology (Honours)', years: {} },
            'Mathematics': { name: 'Mathematics (Honours)', years: {} },
            'Management': {
                name: 'Management (Honours)',
                years: {
                    1: [
                        { code: '212601', name: 'Introduction to Business', credits: 4 },
                        { code: '212603', name: 'Principles of Management', credits: 4 },
                        { code: '212605', name: 'Principles of Accounting', credits: 4 },
                        { code: '212607', name: 'Principles of Marketing', credits: 4 },
                        { code: '212609', name: 'Micro-Economics', credits: 4 },
                        { code: '211501', name: 'History of the Emergence of Independent Bangladesh', credits: 4 }
                    ],
                    2: [
                        { code: '222601', name: 'Human Resource Management', credits: 4 },
                        { code: '222603', name: 'Business Communication (In English)', credits: 4 },
                        { code: '222605', name: 'Legal Environment of Business', credits: 4 },
                        { code: '222607', name: 'Principles of Finance', credits: 4 },
                        { code: '222609', name: 'Business Mathematics', credits: 4 },
                        { code: '222611', name: 'Computer and Information Technology', credits: 4 },
                        { code: '222613', name: 'Macro Economics', credits: 4 }
                    ],
                    3: [
                        { code: '232601', name: 'Operation Management', credits: 4 },
                        { code: '232603', name: 'Business Statistics (In English)', credits: 4 },
                        { code: '232605', name: 'Organizational Behavior', credits: 4 },
                        { code: '232607', name: 'Entrepreneurship', credits: 4 },
                        { code: '232609', name: 'Management Information System', credits: 4 },
                        { code: '232611', name: 'Company Law', credits: 4 },
                        { code: '232613', name: 'Management Accounting (In English)', credits: 4 },
                        { code: '232615', name: 'Marketing Management', credits: 4 }
                    ],
                    4: [
                        { code: '242601', name: 'Bank Management', credits: 4 },
                        { code: '242603', name: 'Financial Management (In English)', credits: 4 },
                        { code: '242605', name: 'Supply Chain Management', credits: 4 },
                        { code: '242607', name: 'Industrial Relations', credits: 4 },
                        { code: '242609', name: 'Project Management', credits: 4 },
                        { code: '242611', name: 'International Trade', credits: 4 },
                        { code: '242613', name: 'Investment Management', credits: 4 },
                        { code: '242615', name: 'Bangladesh Economy', credits: 4 },
                        { code: '242617', name: 'Entrepreneurship Development', credits: 4 },
                        { code: '242618', name: 'Viva-voce', credits: 4 }
                    ]
                }
            },
            'Marketing': {
                name: 'Marketing (Honours)',
                years: {
                    1: [
                        { code: '212301', name: 'Introduction to Business', credits: 4 },
                        { code: '212303', name: 'Principles of Marketing-I', credits: 4 },
                        { code: '212305', name: 'Financial Accounting', credits: 4 },
                        { code: '212307', name: 'Principles of Management', credits: 4 },
                        { code: '212309', name: 'Introduction to Computer', credits: 4 },
                        { code: '211501', name: 'History of the Emergence Independent of Bangladesh', credits: 4 }
                    ],
                    2: [
                        { code: '222301', name: 'Business Communication (In English)', credits: 4 },
                        { code: '222303', name: 'Fundamentals of Finance', credits: 4 },
                        { code: '222305', name: 'Business Statistics-I (In English)', credits: 4 },
                        { code: '222307', name: 'Business Mathmetics', credits: 4 },
                        { code: '222309', name: 'Insurance and Risk Management', credits: 4 },
                        { code: '222311', name: 'Micro Economics', credits: 4 },
                        { code: '222313', name: 'Agricultural Marketing', credits: 4 }
                    ],
                    3: [
                        { code: '232301', name: 'Principles of Marketing-II', credits: 4 },
                        { code: '232303', name: 'Organizational Behavior', credits: 4 },
                        { code: '232305', name: 'Financial Management', credits: 4 },
                        { code: '232307', name: 'Business Statistics-II (In English)', credits: 4 },
                        { code: '232309', name: 'Advertising & Promotion', credits: 4 },
                        { code: '232311', name: 'Legal Aspects of Marketing', credits: 4 },
                        { code: '232313', name: 'Macro Economics', credits: 4 },
                        { code: '232315', name: 'Taxation in Bangladesh', credits: 4 }
                    ],
                    4: [
                        { code: '242301', name: 'Marketing Management', credits: 4 },
                        { code: '242303', name: 'Human Resource Management', credits: 4 },
                        { code: '242305', name: 'International Business', credits: 4 },
                        { code: '242307', name: 'Consumer Behavior', credits: 4 },
                        { code: '242309', name: 'Sales Management', credits: 4 },
                        { code: '242311', name: 'Brand Management', credits: 4 },
                        { code: '242313', name: 'Entrepreneurship Development', credits: 4 },
                        { code: '242315', name: 'Bangladesh Economics', credits: 4 },
                        { code: '242317', name: 'Marketing Research', credits: 4 },
                        { code: '242318', name: 'Viva-voce', credits: 4 }
                    ]
                }
            },
            'BBS_Degree': { name: 'BBS (Degree)', years: {} },
            'BA_Degree': { name: 'BA (Degree)', years: {} },
            'BSc_Degree': { name: 'BSc (Degree)', years: {} },
            'BSS_Degree': { name: 'BSS (Degree)', years: {} },
            // Degree (Pass Course) Syllabi 2013-2014
            'Accounting_Degree': { name: 'Accounting (হিসাববিজ্ঞান)', years: {} },
            'Arabic_Degree': { name: 'Arabic (আরবি ভাষা)', years: {} },
            'Bangla_Elective_Degree': { name: 'Bangla Elective (বাংলা (ঐচ্ছিক))', years: {} },
            'Biochemistry_Biology_Degree': { name: 'Biochemistry and Molecular Biology (জীবরসায়ন ও অণুজীববিজ্ঞান)', years: {} },
            'Botany_Degree': { name: 'Botany (উদ্ভিদবিদ্যা)', years: {} },
            'Chemistry_Degree': { name: 'Chemistry (রসায়ন)', years: {} },
            'Computer_Science_Degree': { name: 'Computer Science (কম্পিউটার বিজ্ঞান)', years: {} },
            'Drama_Media_Degree': { name: 'Drama and Media Studies (নাট্যকলা ও গণমাধ্যম অধ্যয়ন)', years: {} },
            'Economics_Degree': { name: 'Economics (অর্থনীতি)', years: {} },
            'English_Elective_Degree': { name: 'English Elective (ইংরেজি (ঐচ্ছিক))', years: {} },
            'Finance_Banking_Degree': { name: 'Finance and Banking (অর্থায়ন ও ব্যাংকিং)', years: {} },
            'Geography_Environment_Degree': { name: 'Geography and Environment (ভূগোল ও পরিবেশবিদ্যা)', years: {} },
            'History_Degree': { name: 'History (ইতিহাস)', years: {} },
            'Home_Economics_Degree': { name: 'Home Economics (গৃহ অর্থনীতি)', years: {} },
            'Islamic_History_Culture_Degree': { name: 'Islamic History and Culture (ইসলামের ইতিহাস ও সংস্কৃতি)', years: {} },
            'Islamic_Studies_Degree': { name: 'Islamic Studies (ইসলামি শিক্ষা)', years: {} },
            'Library_Information_Degree': { name: 'Library and Information Science (গ্রন্থাগার ও তথ্যবিজ্ঞান)', years: {} },
            'Management_Degree': { name: 'Management (ব্যবস্থাপনা)', years: {} },
            'Marine_Engineering_Degree': { name: 'Marine Engineering (মেরিন ইঞ্জিনিয়ারিং)', years: {} },
            'Marine_Fisheries_Degree': { name: 'Marine Fisheries (মেরিন মৎস্যবিজ্ঞান)', years: {} },
            'Marketing_Degree': { name: 'Marketing (বিপণন)', years: {} },
            'Mathematics_Degree': { name: 'Mathematics (গণিত)', years: {} },
            'B_Music_Degree': { name: 'B Music (সঙ্গীত)', years: {} },
            'Nautical_Degree': { name: 'Nautical (নটিক্যাল বিজ্ঞান)', years: {} },
            'Pali_Degree': { name: 'Pali (পালি ভাষা)', years: {} },
            'Philosophy_Degree': { name: 'Philosophy (দর্শন)', years: {} },
            'Physics_Degree': { name: 'Physics (পদার্থবিজ্ঞান)', years: {} },
            'Political_Science_Degree': { name: 'Political Science (রাষ্ট্রবিজ্ঞান)', years: {} },
            'Psychology_Degree': { name: 'Psychology (মনোবিজ্ঞান)', years: {} },
            'Sanskrit_Degree': { name: 'Sanskrit (সংস্কৃত ভাষা)', years: {} },
            'Social_Work_Degree': { name: 'Social Work (সমাজকর্ম)', years: {} },
            'Sociology_Degree': { name: 'Sociology (সমাজবিজ্ঞান)', years: {} },
            'Soil_Science_Degree': { name: 'Soil Science (মৃত্তিকাবিজ্ঞান)', years: {} },
            'B_Sports_Degree': { name: 'B Sports (ক্রীড়া বিজ্ঞান)', years: {} },
            'Statistics_Degree': { name: 'Statistics (পরিসংখ্যান)', years: {} },
            'Zoology_Degree': { name: 'Zoology (প্রাণিবিদ্যা)', years: {} }
        },
        '2024-2025': {
            'CSE': {
                name: 'Computer Science and Engineering',
                years: {
                    1: [
                        { code: '510201', name: 'Structured Programming Language', credits: 3 },
                        { code: '510202', name: 'Structured Programming Language Lab', credits: 1.5 },
                        { code: '510203', name: 'Electrical and Electronic Circuit', credits: 3 },
                        { code: '510204', name: 'Electrical and Electronic Circuit Lab', credits: 1.5 },
                        { code: '510205', name: 'Calculus', credits: 3 },
                        { code: '510207', name: 'Physics', credits: 3 },
                        { code: '510209', name: 'English', credits: 3 },
                        { code: '510211', name: 'Discrete Mathematics', credits: 3 },
                        { code: '510213', name: 'Digital Systems Design', credits: 3 },
                        { code: '510212', name: 'Digital Systems Lab', credits: 1.5 },
                        { code: '510215', name: 'Linear Algebra', credits: 3 },
                        { code: '510217', name: 'Statistics and Probability', credits: 3 },
                        { code: '510219', name: 'History of the Emergence of Independent Bangladesh', credits: 3 }
                    ]
                }
            },
            'Accounting': {
                name: 'Accounting (Honours)',
                years: {
                    1: [
                        { code: '212501', name: 'Principles of Accounting', credits: 4 },
                        { code: '212503', name: 'Principles of Finance', credits: 4 },
                        { code: '212505', name: 'Principles of Marketing', credits: 4 },
                        { code: '212507', name: 'Principles of Management', credits: 4 },
                        { code: '212509', name: 'Micro Economics', credits: 4 },
                        { code: '219901', name: 'History of Bangladesh: Language, Culture and Identity', credits: 4 }
                    ]
                }
            },
            'Economics': { name: 'Economics (Honours)', years: {} },
            'English': {
                name: 'English (Honours)',
                years: {
                    1: [
                        { code: '211101', name: 'English Reading Skills', credits: 4 },
                        { code: '211103', name: 'English Writing Skills', credits: 4 },
                        { code: '211105', name: 'Introduction to Poetry', credits: 4 },
                        { code: '211107', name: 'Introduction to Prose: Fiction and Non-Fiction:', credits: 4 },
                        { code: '219901', name: 'History of Bangladesh: Language, Culture and Identity', credits: 4 },
                        { code: '219903', name: 'Information and Communication Technology', credits: 3 }
                    ]
                }
            },
            'Anthropology': { name: 'Anthropology (Honours)', years: {} },
            'Arabic': { name: 'Arabic (Honours)', years: {} },
            'Bangla': { name: 'Bangla (Honours)', years: {} },
            'Botany': { name: 'Botany (Honours)', years: {} },
            'Biochemistry_Biology': { name: 'Biochemistry and Molecular Biology (Honours)', years: {} },
            'Chemistry': { name: 'Chemistry (Honours)', years: {} },
            'Environment_Science': { name: 'Environment Science (Honours)', years: {} },
            'Finance_Banking': { name: 'Finance And Banking (Honours)', years: {} },
            'Geography_Environment': { name: 'Geography and Environment (Honours)', years: {} },
            'History': { name: 'History (Honours)', years: {} },
            'Home_Economics': { name: 'Home Economics (Honours)', years: {} },
            'Islamic_History_Culture': { name: 'Islamic History and Culture (Honours)', years: {} },
            'Islamic_Studies': { name: 'Islamic Studies (Honours)', years: {} },
            'Library_Information_Science': { name: 'Library and Information Science (Honours)', years: {} },
            'Philosophy': { name: 'Philosophy (Honours)', years: {} },
            'Physics': { name: 'Physics (Honours)', years: {} },
            'Political_Science': { name: 'Political Science (Honours)', years: {} },
            'Psychology': { name: 'Psychology (Honours)', years: {} },
            'Sanskrit': { name: 'Sanskrit (Honours)', years: {} },
            'Social_Work': { name: 'Social Work (Honours)', years: {} },
            'Sociology': { name: 'Sociology (Honours)', years: {} },
            'Soil_Science': { name: 'Soil Science (Honours)', years: {} },
            'Statistics': { name: 'Statistics (Honours)', years: {} },
            'Zoology': { name: 'Zoology (Honours)', years: {} },
            'Mathematics': { name: 'Mathematics (Honours)', years: {} },
            'Management': {
                name: 'Management (Honours)',
                years: {
                    1: [
                        { code: '212601', name: 'Introduction to Business', credits: 4 },
                        { code: '212603', name: 'Principles of Management', credits: 4 },
                        { code: '212605', name: 'Principles of Accounting', credits: 4 },
                        { code: '212607', name: 'Principles of Marketing', credits: 4 },
                        { code: '212609', name: 'Micro-Economics', credits: 4 },
                        { code: '219901', name: 'History of Bangladesh: Language, Culture and Identity', credits: 4 }
                    ]
                }
            },
            'Marketing': {
                name: 'Marketing (Honours)',
                years: {
                    1: [
                        { code: '212301', name: 'Introduction to Business', credits: 4 },
                        { code: '212303', name: 'Principles of Marketing-I', credits: 4 },
                        { code: '212305', name: 'Financial Accounting', credits: 4 },
                        { code: '212307', name: 'Principles of Management', credits: 4 },
                        { code: '212309', name: 'Introduction to Computer', credits: 4 },
                        { code: '219901', name: 'History of Bangladesh: Language, Culture and Identity', credits: 4 }
                    ]
                }
            },
            'BBS_Degree': { name: 'BBS (Degree)', years: {} },
            'BA_Degree': { name: 'BA (Degree)', years: {} },
            'BSc_Degree': { name: 'BSc (Degree)', years: {} },
            'BSS_Degree': { name: 'BSS (Degree)', years: {} }
        }
    }
};

export default nuData;
