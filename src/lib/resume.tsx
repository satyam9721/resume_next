import { Mail, Phone, Calendar, MapPin ,

  TwitterIcon,
  Linkedin,} from 'lucide-react';
interface Contact {
    type: string;
    icon: JSX.Element;
    value: string;
    href?: string;
    datetime?: string;
    isAddress?: boolean;
  }
export const Name = "Aman Gupta";
export const Occupation = "Web Developer";



export const contacts: Contact[] = [
    {
      type: 'Email',
      icon: <Mail />,
      value: 'imaman9294@gmail.com',
      href: 'mailto:richard@example.com'
    },
    {
      type: 'Phone',
      icon: <Phone />,
      value: '9170615023',
      href: 'tel:+12133522795'
    },
    
    {
      type: 'Location',
      icon: <MapPin />,
      value: 'Sacramento, California, USA',
      isAddress: true
    }
  ];

export const socialMediaLinks = [
    {
      name: 'Twitter',
      url: 'https://x.com/amangupta041?t=UVyLQ5ZY9ZRQKfy4WmtUmw&s=09',
      icon: <TwitterIcon />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aman-gupta-7577691b5',
      icon: <Linkedin />,
    },
    // Add more social media objects as needed
  ];