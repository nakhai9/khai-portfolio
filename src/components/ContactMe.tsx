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
    <Section id="contact" title="Contact Me">
      <div className="grid md:grid-cols-2 bg-[var(--hunt-2)] mx-auto rounded-md">
        <div className="p-5">
          <div className="mb-3 font-medium text-2xl text-center">
            Send Me a Message
          </div>
          <form className="flex flex-col flex-1 gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="" className="block mb-1 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                className="bg-transparent p-2 border-[var(--hunt-4)] border-2 focus:border-[var(--hunt-3)] rounded focus:outline-none w-full"
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
                className="bg-transparent p-2 border-[var(--hunt-4)] border-2 focus:border-[var(--hunt-3)] rounded focus:outline-none w-full"
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
                className="bg-transparent p-2 border-[var(--hunt-4)] border-2 focus:border-[var(--hunt-3)] rounded focus:outline-none w-full"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="flex justify-center items-center gap-2 bg-[var(--hunt-3)] hover:bg-[var(--hunt-6)] px-3 py-2 rounded-md w-full font-medium text-white cursor-pointer"
              >
                SEND ME YOUR MESSAGE <Send size={18} />
              </button>
            </div>
          </form>
        </div>
        <div className="p-5">
          <div className="mb-3 font-medium text-2xl text-center">
            Contact Information
          </div>
          <div className="gap-4 grid grid-cols-2">
            <div className="flex flex-col justify-center items-center gap-2 bg-[var(--hunt-1)] p-3 rounded-md text-sm">
              <Mail className="" />{" "}
              <a href={`mailto:${APP_DATA.me.email}`}>{APP_DATA.me.email}</a>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-[var(--hunt-1)] p-3 rounded-md text-sm">
              <Phone /> {APP_DATA.me.phone}
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-[var(--hunt-1)] p-3 rounded-md text-sm">
              <MapPin /> {APP_DATA.me.address}
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-[var(--hunt-1)] p-3 rounded-md text-sm">
              <Linkedin />
              <a href={APP_DATA.me.linkedin}>nakhai9</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
