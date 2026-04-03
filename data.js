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
    departments: {
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
                    { code: '211501', name: 'History of the Emergence of Independent Bangladesh', credits: 4 },
                ]
            }
        },
        'Management': {
            name: 'Management (Honours)',
            years: {
                1: [
                    { code: '212601', name: 'Introduction to Business', credits: 4 },
                    { code: '212603', name: 'Principles of Management', credits: 4 },
                    { code: '212605', name: 'Principles of Accounting', credits: 4 },
                    { code: '212607', name: 'Principles of Marketing', credits: 4 },
                    { code: '212609', name: 'Micro Economics', credits: 4 },
                    { code: '211501', name: 'History of the Emergence of Independent Bangladesh', credits: 4 },
                ]
            }
        },
        'English': {
            name: 'English (Honours)',
            years: {
                1: [
                    { code: '211101', name: 'Introduction to Poetry', credits: 4 },
                    { code: '211103', name: 'Introduction to Prose', credits: 4 },
                    { code: '211105', name: 'Introduction to Drama', credits: 4 },
                    { code: '211107', name: 'Reading Skills', credits: 4 },
                    { code: '211501', name: 'History of the Emergence of Independent Bangladesh', credits: 4 },
                    { code: '211109', name: 'Introduction to English Studies', credits: 4 },
                ]
            }
        }
    }
};

export default nuData;
