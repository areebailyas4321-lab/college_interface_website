const PU_IMAGE_URL = 'images/punjab uni.jpeg';

const courses = [
  {
    id: 'bsit',
    title: 'BS Information Technology',
    icon: 'fa-laptop-code',
    gradient: 'linear-gradient(135deg,#0f2b46,#1a3c5e)',
    image: PU_IMAGE_URL,
    intro: 'Computing, software, networks and applied IT.',
    subjects: [
      { title: 'Web Development', desc: 'HTML, CSS, JavaScript, responsive design and basic front-end frameworks.' },
      { title: 'Database Systems', desc: 'Relational database design, SQL, normalization, transactions.' },
      { title: 'Computer Networks', desc: 'Network models, protocols (TCP/IP), routing, switching.' },
      { title: 'Software Engineering', desc: 'Software development life-cycle, requirements engineering, UML.' },
      { title: 'Information Security', desc: 'Fundamentals of information assurance, encryption, authentication.' },
      { title: 'Cloud Computing', desc: 'Introduction to cloud platforms, virtualization, deployment models.' }
    ]
  },
  {
    id: 'bscs',
    title: 'BS Computer Science',
    icon: 'fa-desktop',
    gradient: 'linear-gradient(135deg,#0f2b46,#2b4f73)',
    image: PU_IMAGE_URL,
    intro: 'Strong foundation in computing theory and systems.',
    subjects: [
      { title: 'Programming Fundamentals', desc: 'Procedural and object-oriented programming concepts.' },
      { title: 'Data Structures', desc: 'Arrays, linked lists, stacks, queues, trees, graphs.' },
      { title: 'Artificial Intelligence', desc: 'Basic AI concepts including search algorithms, ML fundamentals.' },
      { title: 'Operating Systems', desc: 'Process scheduling, concurrency, memory management.' },
      { title: 'Human-Computer Interaction', desc: 'Designing user-centered interfaces, usability testing.' },
      { title: 'Mobile App Development', desc: 'Principles of mobile programming, responsive UI.' }
    ]
  },
  {
    id: 'math',
    title: 'BS Mathematics',
    icon: 'fa-square-root-alt',
    gradient: 'linear-gradient(135deg,#0f2b46,#2e7d7e)',
    image: PU_IMAGE_URL,
    intro: 'Pure and applied mathematics for analytical careers.',
    subjects: [
      { title: 'Calculus I', desc: 'Limits, continuity, derivatives and integrals.' },
      { title: 'Linear Algebra', desc: 'Vector spaces, matrices, determinants, eigenvalues.' },
      { title: 'Differential Equations', desc: 'Ordinary differential equations, methods of solution.' },
      { title: 'Real Analysis', desc: 'Rigorous approach to sequences, series, convergence.' },
      { title: 'Numerical Methods', desc: 'Approximation techniques for solving mathematical problems.' },
      { title: 'Statistics', desc: 'Probability theory, statistical inference, distributions.' }
    ]
  },
  {
    id: 'eng',
    title: 'BS English (Literature)',
    icon: 'fa-book-open',
    gradient: 'linear-gradient(135deg,#0f2b46,#b4942b)',
    image: PU_IMAGE_URL,
    intro: 'Literary study, linguistics and critical skills.',
    subjects: [
      { title: 'Poetry', desc: 'Study of poetic forms, meter, imagery, and close reading.' },
      { title: 'Drama', desc: 'Analysis of plays from different periods, performance context.' },
      { title: 'Novel', desc: 'Study of the novel as a genre, narrative techniques.' },
      { title: 'Linguistics', desc: 'Foundations of phonetics, morphology, syntax and semantics.' },
      { title: 'Literary Criticism', desc: 'Major critical theories and movements.' },
      { title: 'Research Methods', desc: 'Academic writing, citation, library research.' }
    ]
  },
  {
    id: 'psy',
    title: 'BS Applied Psychology',
    icon: 'fa-brain',
    gradient: 'linear-gradient(135deg,#0f2b46,#5c2e6d)',
    image: PU_IMAGE_URL,
    intro: 'Study of human behavior, assessment and applied techniques.',
    subjects: [
      { title: 'Introduction to Psychology', desc: 'Major schools in psychology, history and core concepts.' },
      { title: 'Social Psychology', desc: 'How individuals think about, influence, and relate to one another.' },
      { title: 'Developmental Psychology', desc: 'Lifespan development, cognitive and social growth.' },
      { title: 'Abnormal Psychology', desc: 'Understanding disorders, diagnostic frameworks.' },
      { title: 'Experimental Psychology', desc: 'Design and analysis of psychological experiments.' },
      { title: 'Psychological Testing', desc: 'Principles of psychometrics, test construction.' }
    ]
  },
  {
    id: 'bot',
    title: 'BS Botany',
    icon: 'fa-leaf',
    gradient: 'linear-gradient(135deg,#0f2b46,#2e6d44)',
    image: PU_IMAGE_URL,
    intro: 'Plant sciences, ecology and lab skills.',
    subjects: [
      { title: 'Plant Anatomy', desc: 'Structure of plant tissues and organs, microscopic techniques.' },
      { title: 'Genetics', desc: 'Mendelian genetics, molecular genetics, DNA structure.' },
      { title: 'Ecology', desc: 'Ecosystems, population dynamics, conservation biology.' },
      { title: 'Plant Physiology', desc: 'Physiological processes, photosynthesis, respiration.' },
      { title: 'Cell Biology', desc: 'Cell structure, organelles, cellular processes.' },
      { title: 'Plant Pathology', desc: 'Diseases affecting plants, pathogens, disease cycles.' }
    ]
  },
  {
    id: 'isl',
    title: 'BS Islamic Studies',
    icon: 'fa-mosque',
    gradient: 'linear-gradient(135deg,#0f2b46,#7d2e2e)',
    image: PU_IMAGE_URL,
    intro: 'Islamic disciplines: Quran, Hadith, law and history.',
    subjects: [
      { title: 'Quranic Studies', desc: 'Study of the Qurʾān, exegesis (tafsir).' },
      { title: 'Hadith Studies', desc: 'Collections of Hadith, classification, authentication.' },
      { title: 'Islamic History', desc: 'Key events and figures in Islamic civilization.' },
      { title: 'Fiqh (Jurisprudence)', desc: 'Principles of Islamic law, major schools of thought.' },
      { title: 'Islamic Philosophy', desc: 'Major thinkers, theological debates.' },
      { title: 'Comparative Religion', desc: 'Study of Islamic perspectives in relation to other faiths.' }
    ]
  }
];

const grid = document.getElementById('courseGrid');

function createCourseCard(course){
  const col = document.createElement('div');
  col.className = 'col-lg-4 col-md-6';

  const card = document.createElement('div');
  card.className = 'course-card';
  card.style.background = course.gradient;

  const img = document.createElement('img');
  img.className = 'course-img';
  img.src = course.image;
  img.alt = course.title;

  const imgWrap = document.createElement('div');
  imgWrap.className = 'course-img-wrap';
  const badge = document.createElement('div');
  badge.className = 'affiliation-badge';
  badge.textContent = 'Affiliated with Punjab University Lahore';
  imgWrap.appendChild(img);
  imgWrap.appendChild(badge);

  const icon = document.createElement('i');
  icon.className = `fa ${course.icon}`;

  const title = document.createElement('div');
  title.className = 'course-title';
  title.textContent = course.title;

  const sub = document.createElement('div');
  sub.className = 'course-sub';
  sub.textContent = course.intro;

  const subjects = document.createElement('div');
  subjects.className = 'subjects-list';
  subjects.id = `subjects-${course.id}`;
  subjects.innerHTML = course.subjects
    .map((s, idx) => `<a href="#" data-course="${course.id}" data-idx="${idx}">${s.title}</a>`)
    .join('');

  card.appendChild(imgWrap);
  card.appendChild(icon);
  card.appendChild(title);
  card.appendChild(sub);
  card.appendChild(subjects);

  card.addEventListener('click', function(e){
    if(e.target.tagName.toLowerCase() === 'a') return;
    const list = card.querySelector('.subjects-list');
    const isOpen = list.style.display === 'block';
    document.querySelectorAll('.subjects-list').forEach(l => { l.style.display = 'none'; });
    document.querySelectorAll('.course-card').forEach(c => { c.classList.remove('active'); });
    if(!isOpen){
      list.style.display = 'block';
      card.classList.add('active');
    }
  });

  col.appendChild(card);
  return col;
}

courses.forEach(c => {
  grid.appendChild(createCourseCard(c));
});

const overlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalIcon = document.getElementById('modalIcon');
const modalClose = document.getElementById('modalClose');

function openModal(courseId, subjectIdx){
  const course = courses.find(c => c.id === courseId);
  if(!course) return;
  const subject = course.subjects[subjectIdx];
  if(!subject) return;
  modalTitle.textContent = subject.title;
  modalBody.innerHTML = `<p>${subject.desc}</p>`;
  modalIcon.className = `fa ${course.icon}`;
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', function(e){
  if(e.target === overlay) closeModal();
});

document.body.addEventListener('click', function(e){
  const a = e.target.closest('a[data-course]');
  if(!a) return;
  e.preventDefault();
  const courseId = a.getAttribute('data-course');
  const idx = parseInt(a.getAttribute('data-idx'),10);
  openModal(courseId, idx);
});

const applyBtn = document.getElementById('applyNowBtn');
const admissionForm = document.getElementById('admissionForm');
const studentForm = document.getElementById('studentForm');
const formMessage = document.getElementById('formMessage');

applyBtn.addEventListener('click', () => {
  admissionForm.style.display = 'block';
  applyBtn.style.display = 'none';
});

studentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = '✅ Your application has been submitted successfully!';
  studentForm.reset();
});

const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', function(){
  if(window.pageYOffset > 300){
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    if(overlay.style.display === 'flex') closeModal();
  }
});
