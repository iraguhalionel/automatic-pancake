import { useId } from 'react'

import { Container } from '@/components/Container'
import Navigation from "@/components/Navigation";
import Image from "next/image";
import TeamBuilding from "@/images/TeamBuilding.png"
import UNHCR from "@/images/UNHCR.png"
import Link from "next/link";
import PortfolioPage from "@/components/PortfolioPage";

const videos = [
  {
    title: 'The ‘Icyivugo’ Commercial, 2023',
    category: 'Conceptualizing, script writing, casting, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/v1692625893/Ndi_Rwema_TVC_cnftxc.mp4",
  },
  {
    title: 'The ‘Shoulder Tap’ Commercial, 2022',
    category: 'Conceptualizing, casting, script writing, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,w_1280/v1692626422/Hatana_Teaser_Video_without_coming_soon_ljcyim.mp4",
  },
  {
    title: 'The Hatana Teaser Commercial, 2022',
    category: 'Conceptualizing, casting, script writing, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,w_1280/v1692626422/Hatana_Teaser_Video_without_coming_soon_ljcyim.mp4",
  },
  /*{
    title: 'The Wavumbuzi Award Ceremony, 2021',
    category: 'Conceptualizing, live streaming, video production, animation production',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/v1692625893/Ndi_Rwema_TVC_cnftxc.mp4",
  },*/
  {
    title: 'Sanlam Repositioning Ceremony, 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,h_720/v1692885856/1._sanlam_launch_staff_event_highlights_360p_k4ylhz.mp4",
  },
  {
    title: 'Sanlam Rebranding Public Event 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,h_720/v1692885856/1._sanlam_launch_staff_event_highlights_360p_k4ylhz.mp4",
  },
  {
    title: 'Sanlam Rebranding Staff Event 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,h_720/v1692885856/1._sanlam_launch_staff_event_highlights_360p_k4ylhz.mp4",
  },
  {
    title: 'Inyange chocolate milk, 2019',
    category: 'Conceptualizing, casting, script writing,sound production,video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/v1692885854/inyange_chocolate_milk_v7_en_720p_mrlmc9.mp4",
  },
  // Add more video objects...
];


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
