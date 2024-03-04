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
  image: benefitTwoImg,
  bullets: [
    {
      title: "Improvement of the Return of Grades System in cooperation with the University.",
      desc: "We receive our grades very late compared to other Universities and Compass often starts slowing down when we receive them. We want to improve this in cooperation with the University. Making this process more timely and more student friendly.",
      icon: <AdjustmentsHorizontalIcon />, 
    },
    {
      title: "Exam database with past exams",
      desc: "Other universities have made exams accessible to their students. So why not us? We want to create a database with old exams from students for students.",
      icon: <CursorArrowRaysIcon />,
    },
    {
    title: "New co-working space on campus (in building 05)",
      desc: "The SHSG is moving to building 05 and we want to have an accessible space for all students. This will be achieved by creating a co-working space in the same building. Additionally there will be an Open-Door policy for the SHSG office so that every student can come and talk to us.",
      icon: <FaceSmileIcon />,
    }, 
    {
      title: "Expanded Mensa capacity by allocating additional space",
      desc: "The Mensa is often overcrowded. We want to work with the university to expand the Mensa capacity by allocating additional space in building 07.",
      icon: <SunIcon />,
    },
    {
      title: "Increased GYM capacity with a new GYM in the city centre",
      desc: "For many years students have been trying to increase the gym capacity. There have been plans for a new gym in the city centre. We want to give this project the necessary attention to make it a reality.",
      icon: <DevicePhoneMobileIcon />,
    },
    
  ],
};


export {benefitOne, benefitTwo};
