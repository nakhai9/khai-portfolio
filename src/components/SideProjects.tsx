import type { FC } from "react";

import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

import type { Project } from "../data/data";
import { BaseProjectCard, BaseSection } from "../shared/components";

export type SideProjectsProps = {
  projects: Project[];
};

/** Project showcase grid. */
const SideProjects: FC<SideProjectsProps> = ({ projects }) => {
  const { t } = useTranslation();

  return (
    <BaseSection id="projects" title={t("projects.title")}>
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {projects.map((project) => (
          <BaseProjectCard
            key={project.id}
            name={project.name}
            description={t(`projects.items.${project.id}.description`)}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            imageAlt={t("projects.imageAlt", { name: project.name })}
            launchUrl={project.launchUrl}
            launchLabel={t("projects.liveDemo")}
          />
        ))}
      </Box>
    </BaseSection>
  );
};

export default SideProjects;
