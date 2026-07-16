// app/lib/schoolData.ts

export const schoolData = {
  about: {
    vision: "To create a transformative educational environment that nurtures holistic development, equipping students with the skills, values, and knowledge to thrive in a dynamic global society.",
    mission: "To foster an inclusive, engaging, and stress-free learning atmosphere where every child's unique potential is recognized and cultivated through innovative teaching methodologies.",
    aim: [
      "To impart quality education by maintaining a low student-teacher ratio.",
      "To blend modern technological teaching aids with traditional Indian values.",
      "To encourage critical thinking, creativity, and independent learning.",
      "To ensure physical, emotional, and social well-being through comprehensive co-curricular programs."
    ]
  },
  timings: {
    nursery: "9:00 AM to 12:00 PM",
    prePrimaryAndPrimary: "9:00 AM to 4:10 PM",
    highSchool: "8:00 AM to 5:30 PM",
    officeHours: "8:30 AM to 5:00 PM (Monday to Saturday)",
    meetingDean: "10:30 AM to 12:00 PM (By prior appointment only)",
    meetingTeacher: "9:00 AM to 12:00 PM (2nd Saturday of every month)"
  },
  awards: [
    "Star Student - Awarded monthly for overall academic excellence and active class participation.",
    "Best Disciplined - Recognizing students who consistently demonstrate exemplary behavior and adherence to school rules.",
    "100% Attendance - Honoring students who have not missed a single day of the academic year.",
    "Budding Artist - Given to students showing exceptional talent in arts and crafts.",
    "Sports Champion - Awarded to outstanding performers in physical education and inter-house sports.",
    "Helping Hand - Recognizing students who show remarkable empathy and helpfulness towards peers."
  ],
  appFeatures: [
    {
      title: "Real-Time Notifications",
      description: "Receive instant alerts for important circulars, sudden holidays, and upcoming school events directly on your smartphone."
    },
    {
      title: "Attendance Tracking",
      description: "Monitor your child's daily attendance records and receive automated alerts if they are marked absent."
    },
    {
      title: "Digital Report Cards",
      description: "Access term-wise academic progress, subject-wise grades, and teacher remarks securely through the portal."
    },
    {
      title: "Homework & Assignments",
      description: "View daily homework logs, project deadlines, and submission statuses to help your child stay on track."
    },
    {
      title: "GPS Bus Tracking",
      description: "Track the real-time location of the school transport to ensure your child's safety and timely pick-up/drop-off."
    },
    {
      title: "Fee Management",
      description: "Check fee balances, view upcoming due dates, and securely download payment receipts from past transactions."
    }
  ],
  feePolicy: {
    ems: {
      tuition: [
        { installment: "1st", percentage: "40%", dates: "On or before June 15th" },
        { installment: "2nd", percentage: "30%", dates: "On or before October 15th" },
        { installment: "3rd", percentage: "30%", dates: "On or before February 15th" }
      ],
      transport: [
        { installment: "1st", percentage: "50%", dates: "On or before June 15th" },
        { installment: "2nd", percentage: "50%", dates: "On or before October 15th" }
      ]
    },
    acCampus: {
      tuition: [
        { installment: "1st", percentage: "50%", dates: "On or before June 10th" },
        { installment: "2nd", percentage: "50%", dates: "On or before September 10th" }
      ],
      transport: [
        { installment: "1st", percentage: "50%", dates: "On or before June 10th" },
        { installment: "2nd", percentage: "50%", dates: "On or before September 10th" }
      ]
    }
  }
};