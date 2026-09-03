import type { FC } from "react";

import { useTranslation } from "react-i18next";

import { Stack } from "@mui/material";

import { APP_DATA } from "../data/data";
import { BaseSection, BaseSkillTile } from "../shared/components";

/** Grid of technology tiles. */
const Skills: FC = () => {
  const { t } = useTranslation();

  return (
    <BaseSection id="skills" title={t("skills.title")}>
      <Stack
        direction="row"
        useFlexGap
        spacing={2.5}
        sx={{ flexWrap: "wrap", justifyContent: "center" }}
      >
        {APP_DATA.skills.map((skill) => (
          <BaseSkillTile key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </Stack>
    </BaseSection>
  );
};

export default Skills;
