import React from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Contacts from "../../Components/Contacts/Contacts";
import Navigator from "../../Components/Navigator/Navigator";
import Service from "../../Components/Servicess/Service";
import Introduction from "../../Components/Introduction/Introduction";
import EmailSub from "../../Components/EmailSub/EmailSub";

export default function MainPage() {
  return (
    <div>
      <Navigator />
      <AboutMe />
      <Introduction />
      <Service />
      <EmailSub />
      <Contacts />
    </div>
  );
}
