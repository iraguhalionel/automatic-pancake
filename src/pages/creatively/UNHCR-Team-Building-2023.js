import { useId } from 'react'
import Image from 'next/image';

import Image1 from "@/images/clients/image1.png";
import Image2 from "@/images/clients/image4.png";
import Image3 from "@/images/clients/image5.png";
import Image4 from "@/images/clients/image6.png";
import Image5 from "@/images/clients/image7.png";
import Image6 from "@/images/clients/image8.png";
import Image7 from "@/images/clients/image9.png";
import Image8 from "@/images/clients/image10.png";
import Image9 from "@/images/clients/image11.png";
import Image10 from "@/images/clients/image12.png";
import Image11 from "@/images/clients/image13.png";
import Image12 from "@/images/clients/image27.png";
import Image13 from "@/images/clients/image15.png";
import Image14 from "@/images/clients/image23.png";
import Image15 from "@/images/clients/image17.png";
import Image16 from "@/images/clients/image18.png";
import Image17 from "@/images/clients/image19.png";
import Image18 from "@/images/clients/image20.png";
import Image19 from "@/images/clients/image21.png";
import Image20 from "@/images/clients/image22.png";
import Image21 from "@/images/clients/logo1.png";

import { Container } from '@/components/Container'
import Navigation from "@/components/Navigation";

const features = [
  {
    name: 'Unlimited inboxes',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    icon: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=360&q=80",
  },
  {
    name: 'Manage team members',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    icon: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=360&q=80",
  },
  {
    name: 'Spam report',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    icon: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=360&q=80",
  },
]
const feature = {
    name: 'Unlimited inboxes',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    icon: Image1,
  }
function Creatively() {
  return (
    <section>
      <Navigation />
      <div>
        <div className="mx-auto px-32">
          <h2 className="font-bold tracking-tight my-8">
            Scientific committe meeting 2022
          </h2>
          <div key={feature.name} className="flex flex-col">
            <div  className="flex flex-row gap-4">
              <div>
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&q=80" alt={feature.name}/>
              </div>
              <div className="mt-1 flex flex-auto flex-col text-gray-200">
                <p>{feature.name}</p>
                <p className="flex-auto">{feature.description}</p>
              </div>
            </div>

          </div>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 mt-8">

            {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <img src={feature.icon}  alt={feature.name}/>
              </dt>

            </div>
          ))}
          </dl>
          <div>
            <h2 className="font-bold tracking-tight mt-8 mb-4">
              Behind the Scnene
            </h2>
            <div key={feature.name} className="flex flex-col">
              <div  className="flex flex-row gap-4">
                <div>
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=360&q=80" alt={feature.name}/>
                </div>
                <div className="mt-1 flex flex-auto flex-col text-gray-200">
                  <p className="flex-auto">{feature.description}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Creatively;
