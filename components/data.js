import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "What we stand for",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Empowering Every Voice",
      desc: "We believe in amplifying the voices of all citizens, ensuring that every vote counts and every perspective is valued in shaping our collective future.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Delivering Results, Not Rhetoric",
      desc: "Our track record speaks for itself—pragmatic solutions, tangible progress, and a steadfast commitment to improving the lives of all those we serve.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Building Bridges, Not Barriers",
      desc: "In a time of division, we pledge to bridge the gaps that divide us, fostering unity, understanding, and cooperation for the betterment of our communities and our nation.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "WHAT WE WANT TO ACHIEVE",
  desc: "Over the last year there has been a high demand for change and innovation. We have listened to your feedback and have come up with a list of benefits that we want to achieve.",
  image: benefitTwoImg,
  bullets: [
    {
    title: "New co-working space on campus (in building 05)",
      desc: "Study spaces are limited. More even during Learnphase. To remedy this problem we want to create a new co-working space on campus. A space where students can grind together and exchange ideas.",
      icon: <FaceSmileIcon />,
    }, 
    {
      title: "Increased GYM capacity with a new GYM in the city centre",
      desc: "The current GYM is too small and the capacity is limited. We want to increase the capacity by building a new GYM in the city centre. This will also make it easier for students living in the city centre to access the GYM.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Exam database with past exams",
      desc: "Old exams should be more easily accessible. We want to create a database with past exams. This will help students to prepare for their exams and to get a better understanding of the exam format.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Expanded Mensa capacity by allocating additional space",
      desc: "The Mensa is often overcrowded. We want to expand the Mensa capacity by allocating additional space.",
      icon: <SunIcon />,
    },
    {
      title: "Improvement of the Return of Grades System in cooperation with the University.",
      desc: "The current system has some flaws. We want to improve the system in cooperation with the University. Making it possible for all students to recieve their grade at mitnight.",
      icon: <AdjustmentsHorizontalIcon />, 
    },
  ],
};


export {benefitOne, benefitTwo};
