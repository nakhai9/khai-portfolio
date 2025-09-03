/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useState } from "react";

import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "react-toastify";

import emailjs from "@emailjs/browser";

import { APP_DATA } from "../data/data";
import { isEmail } from "../utils/common";
import Section from "./ui/Section";

type ContactMeProps = {
  //   TODO
};

type ContactMeForm = {
  name: string;
  message: string;
  email: string;
};

const ContactMe: React.FC<ContactMeProps> = () => {
  const [formData, setFormData] = useState<ContactMeForm>({
    name: "",
    message: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { name, email, message } = formData;
      if (!name || !message || !email) {
        toast.error("Name, Email or Message is required", {
          position: "top-right",
        });
        return;
      }

      if (!isEmail(email)) {
        toast.error("Invalid email", {
          position: "top-right",
        });
        return;
      }

      const template_params = {
        ...formData,
      };

      const response = await emailjs.send(
        APP_DATA.emailServiceConfig.serviceId || "",
        APP_DATA.emailServiceConfig.templateId || "",
        template_params,
        APP_DATA.emailServiceConfig.userId || ""
      );

      if (response.text === "OK") {
        setFormData({
          name: "",
          message: "",
          email: "",
        });
      }

      toast.success(
        "Your message has been successfully sent. I’ll get back to you as soon as possible",
        {
          position: "top-right",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Section title="Contact Me">
        <div className="grid md:grid-cols-2 bg-[#323443] mx-auto rounded-md">
          <div className="p-5">
            <div className="mb-3 font-medium text-2xl text-center">
              Send Me a Message
            </div>
            <form
              className="flex flex-col flex-1 gap-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="" className="block mb-1 font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  className="bg-[#0a0119] p-2 focus:border-amber-500 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 w-full text-slate-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="" className="block mb-1 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  className="bg-[#0a0119] p-2 focus:border-amber-500 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 w-full text-slate-500"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="" className="block mb-1 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  className="bg-[#0a0119] p-2 focus:border-amber-500 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 w-full text-slate-500"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="flex justify-center items-center gap-2 bg-amber-600 hover:bg-amber-400 px-3 py-2 rounded-md w-full font-medium hover:text-amber-600 cursor-pointer"
                >
                  SEND ME YOUR MESSAGE <Send size={18} />
                </button>
              </div>
            </form>
          </div>
          <div className="p-5">
            <ul>
              <li className="mb-6 font-medium text-2xl text-center">
                Contact Information
              </li>
              <li className="flex items-center gap-4 mb-6">
                <MapPin className="text-amber-500" /> {APP_DATA.me.address}
              </li>
              <li className="flex items-center gap-4 mb-6">
                <Mail className="text-amber-500" /> {APP_DATA.me.email}
              </li>
              <li className="flex items-center gap-4 mb-6">
                <Phone className="text-amber-500" /> {APP_DATA.me.phone}
              </li>
              <li className="flex items-center gap-4 mb-6">
                <Linkedin className="text-amber-500" />{" "}
                <a href={APP_DATA.me.linkedin}>nakhai9</a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactMe;
