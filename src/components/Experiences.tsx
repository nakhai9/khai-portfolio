import type { FC } from "react";

import {
  Bot,
  CalendarDays,
  ExternalLink,
  Layers,
  MapPin,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { Box, Divider, Link, Stack, Typography } from "@mui/material";

import type { Experience } from "../data/data";
import {
  BaseBulletList,
  BaseMetaRow,
  BaseSection,
  BaseStatusDot,
  BaseSurface,
  BaseTag,
  BaseTimelineItem,
} from "../shared/components";

export type ExperiencesProps = {
  list: Experience[];
};

/** Number of duties shown before the "show all" toggle appears. */
const COLLAPSED_DUTY_COUNT = 4;

/** Work history timeline. Roles and duties are resolved from the locale files. */
const Experiences: FC<ExperiencesProps> = ({ list }) => {
  const { t } = useTranslation();

  return (
    <BaseSection id="experiences" title={t("experiences.title")}>
      <Stack>
        {list.map((experience, index) => {
          const duties = t(`experiences.items.${experience.id}.duties`, {
            returnObjects: true,
          }) as string[];

          const period = `${experience.from} - ${
            experience.isCurrent ? t("experiences.present") : experience.to
          }`;

          const websiteLabel = t("experiences.visitWebsite", {
            company: experience.companyName,
          });

          return (
            <BaseTimelineItem
              key={experience.id}
              marker={experience.initials}
              highlighted={experience.isCurrent}
              isLast={index === list.length - 1}
            >
              <BaseSurface
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  borderColor: experience.isCurrent ? "primary.main" : "divider",
                  transition: "border-color .25s ease",
                  "&:hover": { borderColor: "primary.main" },
                }}
              >
                <Stack spacing={2.5}>
                  {/* Header: role, company and period */}
                  <Stack spacing={1}>
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      spacing={1}
                      sx={{
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", md: "center" },
                      }}
                    >
                      <Typography variant="h6" sx={{ lineHeight: 1.3 }}>
                        {t(`experiences.items.${experience.id}.role`)}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "center", flexShrink: 0 }}
                      >
                        {experience.isCurrent ? (
                          <BaseStatusDot label={t("experiences.present")} />
                        ) : null}
                        <Stack
                          direction="row"
                          spacing={0.75}
                          sx={{ alignItems: "center", color: "text.disabled" }}
                        >
                          <CalendarDays size={14} />
                          <Typography variant="caption" sx={{ fontWeight: 700 }}>
                            {period}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={2}
                      useFlexGap
                      sx={{ flexWrap: "wrap", alignItems: "center" }}
                    >
                      <Link
                        href={experience.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtitle2"
                        aria-label={websiteLabel}
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: "primary.main",
                          fontWeight: 700,
                          "&:hover": { color: "primary.light" },
                        }}
                      >
                        {experience.companyName}
                        <ExternalLink size={13} />
                      </Link>

                      <Stack
                        direction="row"
                        spacing={0.75}
                        sx={{ alignItems: "center", color: "text.secondary" }}
                      >
                        <Users size={14} />
                        <Typography variant="caption">
                          {t("experiences.teamSize", {
                            count: experience.teamSize,
                          })}
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        spacing={0.75}
                        sx={{ alignItems: "center", color: "text.secondary" }}
                      >
                        <MapPin size={14} />
                        <Typography variant="caption">
                          {t(`experiences.workplace.${experience.workplace}`)}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>

                  <Divider sx={{ borderColor: "divider" }} />

                  {/* Structured meta: stack and AI tooling */}
                  <Stack spacing={1.5}>
                    <BaseMetaRow
                      label={t("experiences.techStack")}
                      icon={<Layers size={14} />}
                    >
                      {experience.technologies.map((technology) => (
                        <BaseTag key={technology} label={technology} />
                      ))}
                    </BaseMetaRow>

                    {experience.aiTools.length > 0 ? (
                      <BaseMetaRow
                        label={t("experiences.aiTools")}
                        icon={<Bot size={14} />}
                      >
                        {experience.aiTools.map((tool) => (
                          <BaseTag key={tool} label={tool} variant="outline" />
                        ))}
                      </BaseMetaRow>
                    ) : null}
                  </Stack>

                  {/* Responsibilities */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        mb: 1,
                        color: "text.disabled",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 0.6,
                      }}
                    >
                      {t("experiences.responsibilities")}
                    </Typography>
                    <BaseBulletList
                      items={Array.isArray(duties) ? duties : []}
                      collapsedCount={COLLAPSED_DUTY_COUNT}
                      expandLabel={t("experiences.showMore")}
                      collapseLabel={t("experiences.showLess")}
                    />
                  </Box>
                </Stack>
              </BaseSurface>
            </BaseTimelineItem>
          );
        })}
      </Stack>
    </BaseSection>
  );
};

export default Experiences;
