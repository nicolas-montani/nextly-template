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
  title: "What we are going to do",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Gym in the City",
      desc: "Lorem ipsum is a placeholder text commonly used in the design and publishing industries to demonstrate",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Exam Database",
      desc: "Lorem ipsum is a placeholder text commonly used in the design and publishing industries to demonstrate",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Something more",
      desc: "Lorem ipsum is a placeholder text commonly used in the design and publishing industries to demonstrate",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
