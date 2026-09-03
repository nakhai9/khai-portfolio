import { useState } from "react";
import type { ChangeEvent, FC, FormEvent } from "react";

import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import emailjs from "@emailjs/browser";
import { Box, Link, Stack, Typography } from "@mui/material";

import { APP_DATA } from "../data/data";
import {
  BaseButton,
  BaseSection,
  BaseSurface,
  BaseTextField,
} from "../shared/components";
import { isEmail } from "../utils/common";

type ContactMeForm = {
  name: string;
  email: string;
  message: string;
};

const EMPTY_FORM: ContactMeForm = { name: "", email: "", message: "" };

/** Contact form (EmailJS) plus the static contact details. */
const ContactMe: FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactMeForm>(EMPTY_FORM);
  const [isSending, setIsSending] = useState(false);
  const { me, emailServiceConfig } = APP_DATA;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error(t("contact.errors.required"));
      return;
    }

    if (!isEmail(email)) {
      toast.error(t("contact.errors.invalidEmail"));
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(
        emailServiceConfig.serviceId ?? "",
        emailServiceConfig.templateId ?? "",
        { ...formData },
        emailServiceConfig.userId ?? ""
      );

      setFormData(EMPTY_FORM);
      toast.success(t("contact.success"));
    } catch (error) {
      console.error(error);
      toast.error(t("contact.errors.failed"));
    } finally {
      setIsSending(false);
    }
  };

  const contactItems = [
    {
      id: "email",
      icon: <Mail size={20} />,
      value: me.email,
      href: `mailto:${me.email}`,
    },
    { id: "phone", icon: <Phone size={20} />, value: me.phone },
    { id: "address", icon: <MapPin size={20} />, value: me.address },
    {
      id: "linkedin",
      icon: <Linkedin size={20} />,
      value: me.linkedinLabel,
      href: me.linkedin,
      external: true,
    },
  ];

  return (
    <BaseSection id="contact" title={t("contact.title")}>
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "stretch",
        }}
      >
        <BaseSurface sx={{ p: { xs: 3, md: 4 } }}>
          <Stack
            component="form"
            spacing={2.5}
            onSubmit={handleSubmit}
            noValidate
          >
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              {t("contact.formTitle")}
            </Typography>

            <BaseTextField
              required
              name="name"
              label={t("contact.fields.name")}
              value={formData.name}
              onChange={handleChange}
            />
            <BaseTextField
              required
              name="email"
              type="email"
              label={t("contact.fields.email")}
              value={formData.email}
              onChange={handleChange}
            />
            <BaseTextField
              required
              multiline
              minRows={4}
              name="message"
              label={t("contact.fields.message")}
              value={formData.message}
              onChange={handleChange}
            />

            <BaseButton
              type="submit"
              disabled={isSending}
              startIcon={<Send size={18} />}
            >
              {isSending ? t("contact.sending") : t("contact.submit")}
            </BaseButton>
          </Stack>
        </BaseSurface>

        <BaseSurface sx={{ p: { xs: 3, md: 4 } }}>
          <Stack spacing={2.5}>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              {t("contact.infoTitle")}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              }}
            >
              {contactItems.map((item) => (
                <Stack
                  key={item.id}
                  spacing={1}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    minHeight: 104,
                    borderRadius: 2,
                    textAlign: "center",
                    color: "primary.main",
                    backgroundColor: "background.default",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  {item.icon}
                  {item.href ? (
                    <Link
                      href={item.href}
                      variant="body2"
                      sx={{ color: "text.primary", wordBreak: "break-word" }}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : null)}
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <Typography
                      variant="body2"
                      sx={{ color: "text.primary", wordBreak: "break-word" }}
                    >
                      {item.value}
                    </Typography>
                  )}
                </Stack>
              ))}
            </Box>
          </Stack>
        </BaseSurface>
      </Box>
    </BaseSection>
  );
};

export default ContactMe;
