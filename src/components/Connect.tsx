import React from "react";

import { contacts, socialMediaLinks } from "../lib/resume";
import Link from "next/link";
const Connect = () => {
  return (
    <div className="sidebar-info_more m-5 flex flex-col items-center justify-center gap-4">
      <div className="w-full h-px bg-[#333333] my-4"></div>

      <ul className="contacts-list grid grid-cols-1 gap-4">
        {contacts.map((contact, index) => (
          <li key={index} className="contact-item flex items-center gap-4">
            <div className="icon-box text-[#ffcd67] shadow-2xl bg-[#373737] p-3 rounded-xl transform hover:translate-y-1 hover:shadow-xl transition ease-in-out duration-300">
              {contact.icon}
            </div>
            <div className="contact-info w-[calc(100%-46px)]">
              <p className="contact-title text-gray-400 text-xs uppercase mb-1">
                {contact.type}
              </p>
              {contact.href ? (
                <a
                  href={contact.href}
                  className="contact-link text-white text-sm"
                >
                  {contact.value}
                </a>
              ) : contact.datetime ? (
                <time
                  dateTime={contact.datetime}
                  className="text-white text-sm"
                >
                  {contact.value}
                </time>
              ) : contact.isAddress ? (
                <address className="text-white text-sm not-italic">
                  {contact.value}
                </address>
              ) : (
                <span className="text-white text-sm">{contact.value}</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="w-full h-px bg-[#333333] my-4"></div>
      <ul className="social-list flex justify-start items-center gap-4 pb-1 pl-2">
        {socialMediaLinks.map((social, index) => (
          <li key={index} className="social-item">
            <Link
              href={social.url}
              className="social-link text-gray-400 text-xl hover:text-gray-300 transform transition-transform duration-200 relative before:absolute before:inset-0 before:bg-inherit before:rounded-full before:transform before:scale-100 before:transition before:duration-200 before:shadow-lg hover:before:scale-110 hover:before:shadow-xl hover:-translate-y-1"
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Connect;
