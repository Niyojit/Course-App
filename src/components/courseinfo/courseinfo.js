
export const productRows = [
  {
    id: 1,
    Course: "Google Data Analytics",
    Instructor: "John Doe",
    Description: "Learn data analysis and visualization using Google tools.",
    EnrollmentStatus: "Open",
    Duration: "6 months",
    Schedule: "Mon, Wed, Fri - 10:00 AM to 12:00 PM",
    Location: "Online",
    Prerequisites: "Basic computer skills",
    Rating: "4.8",
    Skills: "Data Analysis, SQL, R Programming, Data Visualization",
    progress: 70, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Data Analytics',
        content: 'Overview of data analytics, tools, and techniques.'
      },
      {
        week: 2,
        topic: 'Data Collection',
        content: 'Methods and tools for data collection.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 2,
    Course: "Introduction to Machine Learning",
    Instructor: "Jane Smith",
    Description: "Introduction to machine learning concepts and applications.",
    EnrollmentStatus: "Closed",
    Duration: "3 months",
    Schedule: "Tue, Thu - 1:00 PM to 3:00 PM",
    Location: "Online",
    Prerequisites: "Basic programming knowledge",
    Rating: "4.5",
    Skills: "Machine Learning, Python, Algorithms, Data Science",
    progress: 40, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Machine Learning',
        content: 'Overview of machine learning, types, and applications.'
      },
      {
        week: 2,
        topic: 'Supervised Learning',
        content: 'Concepts and techniques of supervised learning.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 103,
        name: 'Charlie Brown',
        email: 'charlie@example.com',
      },
      {
        id: 104,
        name: 'David Williams',
        email: 'david@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 3,
    Course: "Web Development Bootcamp",
    Instructor: "Sam Johnson",
    Description: "Comprehensive bootcamp covering front-end and back-end web development.",
    EnrollmentStatus: "In Progress",
    Duration: "9 months",
    Schedule: "Mon, Wed, Fri - 3:00 PM to 6:00 PM",
    Location: "Online",
    Prerequisites: "None",
    Rating: "4.7",
    Skills: "HTML, CSS, JavaScript, React, Node.js",
    progress: 20, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Web Development',
        content: 'Overview of web development, tools, and environment setup.'
      },
      {
        week: 2,
        topic: 'HTML Basics',
        content: 'Learning the basics of HTML.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 105,
        name: 'Emma Wilson',
        email: 'emma@example.com',
      },
      {
        id: 106,
        name: 'Frank Thomas',
        email: 'frank@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 4,
    Course: "Data Science with Python",
    Instructor: "Alice Brown",
    Description: "Advanced data science course using Python and its libraries.",
    EnrollmentStatus: "Open",
    Duration: "6 months",
    Schedule: "Tue, Thu - 9:00 AM to 11:00 AM",
    Location: "Online",
    Prerequisites: "Basic Python knowledge",
    Rating: "4.9",
    Skills: "Python, Data Analysis, Machine Learning, Pandas",
    progress: 80, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Data Science',
        content: 'Overview of data science, tools, and techniques.'
      },
      {
        week: 2,
        topic: 'Python Basics',
        content: 'Learning the basics of Python for data science.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 107,
        name: 'Grace Martinez',
        email: 'grace@example.com',
      },
      {
        id: 108,
        name: 'Henry Lee',
        email: 'henry@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 5,
    Course: "Full Stack Web Developer",
    Instructor: "Michael White",
    Description: "Become a full stack web developer with this comprehensive course.",
    EnrollmentStatus: "Closed",
    Duration: "12 months",
    Schedule: "Mon, Wed, Fri - 1:00 PM to 4:00 PM",
    Location: "Online",
    Prerequisites: "Basic programming knowledge",
    Rating: "4.6",
    Skills: "HTML, CSS, JavaScript, React, Node.js, MongoDB",
    progress: 60, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Full Stack Development',
        content: 'Overview of full stack development, tools, and environment setup.'
      },
      {
        week: 2,
        topic: 'Front-end Development',
        content: 'Learning the basics of front-end development.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 109,
        name: 'Isabella Taylor',
        email: 'isabella@example.com',
      },
      {
        id: 110,
        name: 'Jack Harris',
        email: 'jack@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 6,
    Course: "Deep Learning Specialization",
    Instructor: "Emily Davis",
    Description: "Specialization in deep learning and neural networks.",
    EnrollmentStatus: "Open",
    Duration: "5 months",
    Schedule: "Mon, Wed - 2:00 PM to 5:00 PM",
    Location: "Online",
    Prerequisites: "Basic machine learning knowledge",
    Rating: "4.8",
    Skills: "Deep Learning, Neural Networks, TensorFlow, Keras",
    progress: 50, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Deep Learning',
        content: 'Overview of deep learning, tools, and techniques.'
      },
      {
        week: 2,
        topic: 'Neural Networks',
        content: 'Learning the basics of neural networks.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 111,
        name: 'Kevin Robinson',
        email: 'kevin@example.com',
      },
      {
        id: 112,
        name: 'Liam Clark',
        email: 'liam@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 7,
    Course: "Digital Marketing",
    Instructor: "William Brown",
    Description: "Learn the fundamentals of digital marketing and its strategies.",
    EnrollmentStatus: "In Progress",
    Duration: "4 months",
    Schedule: "Tue, Thu - 10:00 AM to 12:00 PM",
    Location: "Online",
    Prerequisites: "None",
    Rating: "4.4",
    Skills: "SEO, Content Marketing, Social Media, Analytics",
    progress: 30, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 8,
    Course: "Cyber Security Certification",
    Instructor: "Olivia Harris",
    Description: "Get certified in cyber security and learn to protect systems.",
    EnrollmentStatus: "Open",
    Duration: "7 months",
    Schedule: "Mon, Wed - 4:00 PM to 6:00 PM",
    Location: "Online",
    Prerequisites: "Basic networking knowledge",
    Rating: "4.7",
    Skills: "Cyber Security, Network Security, Ethical Hacking, Risk Management",
    progress: 45, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 9,
    Course: "Cloud Computing",
    Instructor: "Noah Wilson",
    Description: "Learn cloud computing with AWS, Azure, and other tools.",
    EnrollmentStatus: "Closed",
    Duration: "6 months",
    Schedule: "Tue, Thu - 3:00 PM to 5:00 PM",
    Location: "Online",
    Prerequisites: "Basic computer knowledge",
    Rating: "4.5",
    Skills: "AWS, Azure, Cloud Architecture, DevOps",
    progress: 65,
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 10,
    Course: "Project Management",
    Instructor: "Ava Thompson",
    Description: "Master the art of project management with this course.",
    EnrollmentStatus: "In Progress",
    Duration: "3 months",
    Schedule: "Mon, Wed - 11:00 AM to 1:00 PM",
    Location: "Online",
    Prerequisites: "None",
    Rating: "4.6",
    Skills: "Project Management, Agile, Scrum, Risk Management",
    progress: 25, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 11,
    Course: "Google Data Analytics",
    Instructor: "John Doe",
    Description: "Learn data analysis and visualization using Google tools.",
    EnrollmentStatus: "Open",
    Duration: "6 months",
    Schedule: "Mon, Wed, Fri - 10:00 AM to 12:00 PM",
    Location: "Online",
    Prerequisites: "Basic computer skills",
    Rating: "4.8",
    Skills: "Data Analysis, SQL, R Programming, Data Visualization",
    progress: 70, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 12,
    Course: "Project Management",
    Instructor: "Ava Thompson",
    Description: "Master the art of project management with this course.",
    EnrollmentStatus: "In Progress",
    Duration: "3 months",
    Schedule: "Mon, Wed - 11:00 AM to 1:00 PM",
    Location: "Online",
    Prerequisites: "None",
    Rating: "4.6",
    Skills: "Project Management, Agile, Scrum, Risk Management",
    progress: 25, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 13,
    Course: "Project Management",
    Instructor: "Ava Thompson",
    Description: "Master the art of project management with this course.",
    EnrollmentStatus: "In Progress",
    Duration: "3 months",
    Schedule: "Mon, Wed - 11:00 AM to 1:00 PM",
    Location: "Online",
    Prerequisites: "None",
    Rating: "4.6",
    Skills: "Project Management, Agile, Scrum, Risk Management",
    progress: 25, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 14,
    Course: "Project Management",
    Instructor: "Ava Thompson",
    Description: "Master the art of project management with this course.",
    EnrollmentStatus: "In Progress",
    Duration: "3 months",
    Schedule: "Mon, Wed - 11:00 AM to 1:00 PM",
    Location: "Online",
    Prerequisites: "None",
    Rating: "4.6",
    Skills: "Project Management, Agile, Scrum, Risk Management",
    progress: 25, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 15,
    Course: "Project Management",
    Instructor: "Ava Thompson",
    Description: "Master the art of project management with this course.",
    EnrollmentStatus: "In Progress",
    Duration: "3 months",
    Schedule: "Mon, Wed - 11:00 AM to 1:00 PM",
    Location: "Online",
    Prerequisites: "None",
    Rating: "4.6",
    Skills: "Project Management, Agile, Scrum, Risk Management",
    progress: 25, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 16,
    Course: "Project Management",
    Instructor: "Ava Thompson",
    Description: "Master the art of project management with this course.",
    EnrollmentStatus: "In Progress",
    Duration: "3 months",
    Schedule: "Mon, Wed - 11:00 AM to 1:00 PM",
    Location: "Online",
    Prerequisites: "None",
    Rating: "4.6",
    Skills: "Project Management, Agile, Scrum, Risk Management",
    progress: 25, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 17,
    Course: "Project Management",
    Instructor: "Ava Thompson",
    Description: "Master the art of project management with this course.",
    EnrollmentStatus: "In Progress",
    Duration: "3 months",
    Schedule: "Mon, Wed - 11:00 AM to 1:00 PM",
    Location: "Online",
    Prerequisites: "None",
    Rating: "4.6",
    Skills: "Project Management, Agile, Scrum, Risk Management",
    progress: 25, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 18,
    Course: "Project Management",
    Instructor: "Ava Thompson",
    Description: "Master the art of project management with this course.",
    EnrollmentStatus: "In Progress",
    Duration: "3 months",
    Schedule: "Mon, Wed - 11:00 AM to 1:00 PM",
    Location: "Online",
    Prerequisites: "None",
    Rating: "4.6",
    Skills: "Project Management, Agile, Scrum, Risk Management",
    progress: 25, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
  {
    id: 19,
    Course: "Project Management",
    Instructor: "Ava Thompson",
    Description: "Master the art of project management with this course.",
    EnrollmentStatus: "In Progress",
    Duration: "3 months",
    Schedule: "Mon, Wed - 11:00 AM to 1:00 PM",
    Location: "Online",
    Prerequisites: "None",
    Rating: "4.6",
    Skills: "Project Management, Agile, Scrum, Risk Management",
    progress: 25, // Example progress
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Digital Marketing',
        content: 'Overview of digital marketing, tools, and strategies.'
      },
      {
        week: 2,
        topic: 'SEO Basics',
        content: 'Learning the basics of search engine optimization.'
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 113,
        name: 'Mia Young',
        email: 'mia@example.com',
      },
      {
        id: 114,
        name: 'Noah King',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ]
  },
];
