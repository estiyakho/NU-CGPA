import nuData from './data.js';

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const selectionSection = document.getElementById('selection-section');
const calculatorSection = document.getElementById('calculator-section');
const cgpaSection = document.getElementById('cgpa-section');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const backToCalcBtn = document.getElementById('back-to-calc-btn');
const addSubjectBtn = document.getElementById('add-subject-btn');
const subjectsContainer = document.getElementById('subjects-container');
const calculateCgpaBtn = document.getElementById('calculate-cgpa-btn');
const shareBtn = document.getElementById('share-btn');

// State
let currentState = {
    dept: '',
    year: '',
    syllabus: '2013-2014',
    subjects: [],
    theme: localStorage.getItem('theme') || 'dark-mode'
};

// Initialize Theme
body.className = currentState.theme;

// Theme Toggle
themeToggle.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
    body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    currentState.theme = newTheme;
});

// App Flow
startBtn.addEventListener('click', () => {
    const deptSelect = document.getElementById('department');
    const yearSelect = document.getElementById('year');
    const syllabusSelect = document.getElementById('syllabus');
    
    if (!deptSelect.value) {
        alert('Please select a department first.');
        return;
    }

    currentState.dept = deptSelect.value;
    currentState.year = yearSelect.value;
    currentState.syllabus = syllabusSelect.value;
    
    showCalculator();
});

backBtn.addEventListener('click', () => {
    selectionSection.classList.remove('hidden');
    calculatorSection.classList.add('hidden');
});

backToCalcBtn.addEventListener('click', () => {
    calculatorSection.classList.remove('hidden');
    cgpaSection.classList.add('hidden');
});

calculateCgpaBtn.addEventListener('click', () => {
    calculatorSection.classList.add('hidden');
    cgpaSection.classList.remove('hidden');
});

function showCalculator() {
    selectionSection.classList.add('hidden');
    calculatorSection.classList.remove('hidden');
    
    const syllabusData = nuData.syllabi[currentState.syllabus];
    document.getElementById('current-dept-display').textContent = syllabusData[currentState.dept]?.name || 'Custom Department';
    document.getElementById('current-year-display').textContent = `${currentState.year}${getOrdinal(currentState.year)} Year (${currentState.syllabus})`;
    
    loadInitialSubjects();
}

function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

function loadInitialSubjects() {
    subjectsContainer.innerHTML = '';
    const syllabusData = nuData.syllabi[currentState.syllabus];
    const deptData = syllabusData[currentState.dept];
    const initialSubjects = deptData?.years[currentState.year] || [];
    
    initialSubjects.forEach(sub => addSubjectRow(sub.name, sub.code, sub.credits));
    
    if (initialSubjects.length === 0) {
        addSubjectRow(); // Add one empty row for custom
    }
    
    updateGPA();
}

function addSubjectRow(name = '', code = '', credits = 4) {
    const row = document.createElement('div');
    row.className = 'subject-row';
    
    row.innerHTML = `
        <div class="subject-main">
            <div class="subject-details">
                <input type="text" class="subj-name" value="${name}" placeholder="Subject Name">
                <input type="text" class="subj-code" value="${code}" placeholder="Code">
            </div>
            <button class="delete-btn"><i data-lucide="trash-2"></i></button>
        </div>
        <div class="subject-controls">
            <select class="grade-select">
                <option value="" disabled selected>Grade</option>
                ${nuData.gradingSystem.map(g => `<option value="${g.point}">${g.grade} (${g.range})</option>`).join('')}
            </select>
            <div class="input-with-label">
                <label>Credits</label>
                <input type="number" class="credit-input" value="${credits}" step="0.5">
            </div>
        </div>
    `;
    
    subjectsContainer.appendChild(row);
    lucide.createIcons();
    
    // Event Listeners for Real-time calculation
    row.querySelector('.grade-select').addEventListener('change', updateGPA);
    row.querySelector('.credit-input').addEventListener('input', updateGPA);
    row.querySelector('.delete-btn').addEventListener('click', () => {
        row.remove();
        updateGPA();
    });
}

addSubjectBtn.addEventListener('click', () => addSubjectRow());

function updateGPA() {
    const rows = document.querySelectorAll('.subject-row');
    let totalPoints = 0;
    let totalCredits = 0;
    
    rows.forEach(row => {
        const gradePoint = parseFloat(row.querySelector('.grade-select').value);
        const credits = parseFloat(row.querySelector('.credit-input').value);
        
        if (!isNaN(gradePoint) && !isNaN(credits)) {
            totalPoints += (gradePoint * credits);
            totalCredits += credits;
        }
    });
    
    const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
    
    document.getElementById('total-credits').textContent = totalCredits;
    document.getElementById('calculated-gpa').textContent = gpa;
}

// CGPA Logic
const yearGpas = document.querySelectorAll('.year-gpa');
const yearCredits = document.querySelectorAll('.year-credits');

function updateCGPA() {
    let totalPoints = 0;
    let totalCredits = 0;
    
    for (let i = 0; i < 4; i++) {
        const gpa = parseFloat(yearGpas[i].value);
        const credits = parseFloat(yearCredits[i].value);
        
        if (!isNaN(gpa) && !isNaN(credits)) {
            totalPoints += (gpa * credits);
            totalCredits += credits;
        }
    }
    
    const cgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
    document.getElementById('calculated-cgpa').textContent = cgpa;
}

yearGpas.forEach(el => el.addEventListener('input', updateCGPA));
yearCredits.forEach(el => el.addEventListener('input', updateCGPA));

// Share Results
shareBtn.addEventListener('click', async () => {
    const cgpa = document.getElementById('calculated-cgpa').textContent;
    const shareText = `My National University (NU) CGPA is ${cgpa}! Check your GPA and CGPA here: ${window.location.href}`;
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'My NU CGPA',
                text: shareText,
                url: window.location.href,
            });
        } catch (err) {
            copyToClipboard(shareText);
        }
    } else {
        copyToClipboard(shareText);
    }
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Results copied to clipboard!');
    });
}
