import java from '../images/icons/java-icon.svg'
import c from '../images/icons/c.svg'
import cpp from '../images/icons/c++.svg'
import django from '../images/icons/django.svg'
import sqlite from '../images/icons/sqlite.svg'
import oracle from '../images/icons/oracle.svg'
import intellij from '../images/icons/intellij.svg'
import eclipse from '../images/icons/eclipse.svg'
import git from '../images/icons/git.svg'
import postman from '../images/icons/postman.svg'
import figma from '../images/icons/figma.svg'
import tailwind from '../images/icons/tailwind.svg'


// Project Thumbnail
import shrinky from '../images/projectThumbnail/Shrinkyin.png'
export const Bio = {
  name: "Sandeep Mundergi",
  roles: [
    "Full Stack Developer",
    "Programmer",
  ],
  description:
    "I am a computer Science undergrad student with highly motivated and problem-solving skills seeking to learn new technologies and fulfill the needs of the organization.",
  github: "https://github.com/Sandeepmundergi",
  resume:
    "https://drive.google.com/file/d/1-NbngryYf1u5blxRveenjR-GlFGCLPog/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/sandeepmundergi13/",
  twitter: "https://twitter.com/SandeepM1310",
  insta: "https://www.instagram.com/sandeep.sandy1310/",
  facebook: "https://www.facebook.com/sandeep.mundergi",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "TailWind",
        image: tailwind,
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image: java,
      },
      {
        name: "Python",
        image:
          "https://www.vectorlogo.zone/logos/python/python-icon.svg",
      },
      {
        name: "C",
        image:
          c,
      },
      {
        name: "C++",
        image: cpp,
      },
      {
        name: "Django",
        image: django,
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        image:
          "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
      },
      {
        name: "Sqlite",
        image: sqlite,
      },
      {
        name: "Oracle 10g",
        image: oracle,
      },

    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: git,
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Eclipse",
        image:
          eclipse,
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "intellij",
        image: intellij,
      },
      {
        name: "Postman",
        image: postman,
      },
      {
        name: "Adobe XD",
        image:
          "https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667",
      },
      {
        name: "Figma",
        image: figma,
      },
    ],
  },
];

export const experiences = [

  {
    id: 0,
    img: "https://www.pentonix.co.in/wp-content/uploads/2023/12/pentonix_logo_white_small.png",
    role: "Junior Software Developer Intern",
    company: "Pentonix E-learning Solutions",
    date: "Oct 2023 - Present",
    desc: "Working as Full-Stack Developer",
    skills: [
      "Python",
      "ReactJS",
      "HTML",
      "CSS",
      "JavaScript",
      "SharePoint"
    ],
    doc: "https://drive.google.com/file/d/1PVpEpJaG-sv_-h5wPJIr-ftZqGJIKT4e/view?usp=sharing",
  },
];

export const education = [
  {
    id: 0,
    img: "https://bitm.edu.in//wp-content/uploads/2016/03/logobitm-1.jpg",
    school: "Ballari Institute of Technology and Management",
    date: "Aug 2019 - May 2023",
    grade: "7.86 CGPA",
    desc: "I hold a Bachelor's degree in Computer Science and Engineering from Ballari Institute of Technology and Management, with a CGPA of 7.87. My coursework included Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. Additionally, I completed a Full Stack Java and Soft Skills training at TNSIF, and a Web Development course at QSpiders Training, Ballari.I am ready to contribute to your team's success.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  // {
  //   id: 1,
  //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
  //   school: "Methodist School, Dankuni",
  //   date: "Apr 2019 - Apr 2025",
  //   grade: "88.2%",
  //   desc: "I completed my class 12 high school education at Methodist School, Dankuni, where I studied Science with Computer Science.",
  //   degree: "ISC(XII), Science with Computer",
  // },
  // {
  //   id: 2,
  //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
  //   school: "Methodist School, Dankuni",
  //   date: "Apr 2017 - Apr 2019",
  //   grade: "92.3%",
  //   desc: "I completed my class 10 education at Methodist School, Dankuni, where I studied Science with Computer Application.",
  //   degree: "ICSC(X), Science with Computer",
  // },
];

export const projects = [
  {
    id: 9,
    title: "Shrinky.in",
    date: "Nov 2022 - Mar 2023",
    description:
      "The importance of URL shortening at the time of sharing on various platforms. URLs are long, and unattractive, on most social platforms. A URL Shortener service creates a short URL in case of a long URL. Short URLs are exceedingly handy to share through SMS/tweets and they can be printed in books/magazines easily. In addition, it is easy and less error-prone to type a short URL when compared to its longer version.\n\nHere a methodology is proposed which is a web-based system using Django Framework that shortens the URL provided by the user. the proposed system permits the user to create a custom URL with a maximum character limit which is specified by the admin/host. The system also provides a QR code for the shortened URL and provide the user with end-to-end access to the URL controls. The generated URL has certain click limitations and time.",
    image: shrinky,
    tags: [
      "Python",
      "Django",
      "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite",
    ],
    category: "web app",
    github: "https://github.com/SandeepR1305/Shrinky.in",
    webapp: "",
  },
  // {
  //   id: 0,
  //   title: "Podstream",
  //   date: "Apr 2023 - May 2023",
  //   description:
  //     "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
  //   image:
  //     "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
  //   tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Podstream",
  //   webapp: "https://podstream.netlify.app/",
  //   member: [
  //     {
  //       name: "Sandeep Mundergi",
  //       img: "https://avatars.githubusercontent.com/u/64485885?v=4",
  //       linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
  //       github: "https://github.com/rishavchanda/",
  //     },
  //     {
  //       name: "Upasana Chaudhuri",
  //       img: "https://avatars.githubusercontent.com/u/100614635?v=4",
  //       linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
  //       github: "https://github.com/upasana0710",
  //     },
  //   ],
  // },
  // {
  //   id: 1,
  //   title: "Vexa",
  //   date: "Oct 2022 - Present",
  //   description:
  //     "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
  //   image:
  //     "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
  //   tags: [
  //     "React Js",
  //     "MongoDb",
  //     "Node Js",
  //     "Express Js",
  //     "Redux",
  //     "NodeMailer",
  //   ],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Project-Management-App",
  //   webapp: "https://vexa-app.netlify.app/",
  // },
  // {
  //   id: 2,
  //   title: "Brain Tumor Detection",
  //   date: "Jan 2023 - Mar 2023",
  //   description:
  //     "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
  //   image:
  //     "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
  //   tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
  //   category: "machine learning",
  //   github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
  //   webapp: "https://brain-tumor.netlify.app/",
  //   member: [
  //     {
  //       name: "Sandeep Mundergi",
  //       img: "https://avatars.githubusercontent.com/u/64485885?v=4",
  //       linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
  //       github: "https://github.com/rishavchanda/",
  //     },
  //     {
  //       name: "Upasana Chaudhuri",
  //       img: "https://avatars.githubusercontent.com/u/100614635?v=4",
  //       linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
  //       github: "https://github.com/upasana0710",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Buckoid",
  //   date: "Dec 2021 - Apr 2022",
  //   description:
  //     "App Is Currently In Playstore 100+ Downloads. This Project proposes an “Expense Tracking App”. Keep track of your personal expenses and compare them to your monthly income with the budget planner. It has Google Drive Cloud API for Backup of User Room Database. Made with Kotlin in MVVM Architecture & Live Data.",
  //   image:
  //     "https://camo.githubusercontent.com/fbf405040ae86b5d4a40f24e4ac034982cb8c0e2d850560ba64527997b258be8/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f6c6f67696e2d65613565322e61707073706f742e636f6d2f6f2f4255434b4f49442532302831292e706e673f616c743d6d6564696126746f6b656e3d32653735376235372d323964372d346263612d613562322d653164346538313432373435",
  //   tags: ["Kotlin", "MVVM", "Room Database", "Google Drive Cloud API"],
  //   category: "android app",
  //   github: "https://github.com/rishavchanda/Buckoid-Android-App",
  //   webapp: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
  // },
  // {
  //   id: 10,
  //   title: "Job Finding App",
  //   date: "Jun 2023 - Jul 2023",
  //   description:
  //     "A Job Finding App made with React Native, Axios. Users can search for any job coming from API and apply there.",
  //   image:
  //     "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
  //   tags: ["React Native", "JavaScript", "Axios"],
  //   category: "android app",
  //   github: "https://github.com/rishavchanda/Job-finder-App",
  //   webapp: "https://github.com/rishavchanda/Job-finder-App",
  // },
  // {
  //   id: 4,
  //   title: "Whatsapp Clone",
  //   date: "Jul 2021",
  //   description:
  //     "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
  //   image:
  //     "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
  //   tags: ["React Js", "Firebase", "Firestore", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Whatsapp-Clone-React-Js",
  //   webapp: "https://whatsapp-clone-rishav.web.app",
  // },
  // {
  //   id: 5,
  //   title: "Todo Web App",
  //   date: "Jun 2021",
  //   description:
  //     " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
  //   image:
  //     "https://camo.githubusercontent.com/a328255ad96f861f57d25096d28018ab2656c689a1456b0d145764009bed2d1a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
  //   tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Todo-Web-App",
  //   webapp: "https://rishav-react-todo.netlify.app/",
  // },
  // {
  //   id: 6,
  //   title: "Breaking Bad",
  //   date: "Jun 2021",
  //   description:
  //     "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
  //   image:
  //     "https://camo.githubusercontent.com/cd07010cbeb90cb1b43a5d6162784326aef02210ef7d41a0f9ae043b3e392378/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
  //   tags: ["React Js", "API", "Axios", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/rishavchanda/Breaking-Bad",
  //   webapp: "https://breaking-bad-webapp.netlify.app",
  // },
  // {
  //   id: 7,
  //   title: "Quiz App",
  //   date: "Dec 2020 - Jan 2021",
  //   description:
  //     "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
  //   image:
  //     "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
  //   tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
  //   category: "android app",
  //   github: "https://github.com/rishavchanda/Quiz-Earn",
  //   webapp: "https://github.com/rishavchanda/Quiz-Earn",
  // },
  // {
  //   id: 8,
  //   title: "Face Recognition",
  //   date: "Jan 2021",
  //   description:
  //     "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
  //   image:
  //     "https://camo.githubusercontent.com/a8b3e1ebf26d4c95f75bc6671189a3590eb67eb8332d7c7452492990e731efb9/68747470733a2f2f77617265686f7573652d63616d6f2e696e67726573732e636d68312e707366686f737465642e6f72672f356137383335396561323762643261633232336437656662306639303831306437373930383436312f363837343734373037333361326632663633366336663735363432653637363937343638373536323735373336353732363336663665373436353665373432653633366636643266363137333733363537343733326633383339333633363339333232663332333433343333333033333339333832663333333636363330363533333636333032643331333336333632326433313331363533373264333833323335333832643334363433303633333936333635333136353334333133393265363736393636",
  //   tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
  //   category: "machine learning",
  //   github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  //   webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  // },
];

export const TimeLineData = [
  // { year: 2017, text: "Started my journey" },
  // { year: 2018, text: "Worked as a freelance developer" },
  // { year: 2019, text: "Founded JavaScript Mastery" },
  // { year: 2020, text: "Shared my projects with the world" },
  // { year: 2021, text: "Started my own platform" },
];
