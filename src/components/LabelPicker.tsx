import { Box, Stack, Tooltip } from "@mui/material";
import { tagsTranslation } from "../translations/tags.translations";
import { Tags, tagsColorMapping } from "../interfaces/tags.interface";
import { useState } from "react";

export function LabelPicker({ labels }: LabelPickerProps) {
    const [picked, setPicked] = useState<keyof typeof Tags | null>(null)
    const [hovered, setHovered] = useState<keyof typeof Tags | null>(null);
    return <Box>
        <span>Labels</span>
        <Stack direction="row" spacing={1}>
            {(Object.keys(Tags) as Array<keyof typeof Tags>).filter(key => isNaN(Number(key))).map((key, idx) =>
                <Tooltip onMouseEnter={() => setHovered(key)} onMouseLeave={() => setHovered(null)} key={idx} title={tagsTranslation[Tags[key]]} open={picked === key || hovered === key}>
                    <Box onClick={() => setPicked((prevValue) => prevValue === key ? null : key)} sx={{ height: 32, width: 48, borderRadius: "3px", bgcolor: tagsColorMapping[Tags[key]], fontSize: "0.8em" }}>
                    </Box>
                </Tooltip>
            )}
        </Stack>
    </Box >
}

export type LabelPickerProps = { labels: Tags[] }