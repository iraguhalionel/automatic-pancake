import { useId } from 'react'

import { Container } from '@/components/Container'
import Navigation from "@/components/Navigation";
import Image from "next/image";
import TeamBuilding from "@/images/TeamBuilding.png"
import UNHCR from "@/images/UNHCR.png"
import Link from "next/link";
import PortfolioPage from "@/components/PortfolioPage";

const features =
  {
    name: 'UNHCR Team Building 2023',
    link: 'UNHCR-Team-Building-2023',
    description:
      'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    icon: UNHCR,
    image: TeamBuilding,
  };
const unused = [
  {
    name: 'Scientific commette meeting 2022',
    link: 'UNHCR-Team-Building-2023',
    description:
      'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    icon: UNHCR,
    image: TeamBuilding,
  },
  {
    name: 'Hatana countrywide campaign 2022',
    link: 'UNHCR-Team-Building-2023',
    description:
      'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    icon: UNHCR,
    image: TeamBuilding,
  },
  {
    name: 'Wavumbuzi Challenge 2021',
    link: 'UNHCR-Team-Building-2023',
    description:
      'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    icon: UNHCR,
    image: TeamBuilding,
  },
  {
    name: 'Afrochammpion 2020',
    link: 'UNHCR-Team-Building-2023',
    description:
      'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    icon: UNHCR,
    image: TeamBuilding,
  },
  {
    name: 'Sanlam Repositioning 2019',
    link: 'UNHCR-Team-Building-2023',
    description:
      'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
    icon: UNHCR,
    image: TeamBuilding,
  }
]


function DeviceArrowIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        d="M12 25l8-8m0 0h-6m6 0v6"
        stroke="#171717"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}


function Home() {
  return (
    <div className="bg-black">
      <Navigation className="text-white" />
      <Container>
        <PortfolioPage />
      </Container>
    </div>
  );
}

export default Home;
