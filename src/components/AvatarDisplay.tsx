import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import IconButton from '@mui/material/IconButton';
import { utilService } from '../services/util.service';
import { User } from '../interfaces/user.interface';
export function AvatarDisplay({ isDisplay, users, max }: AvatarDisplayProps) {
    const displayedUsers = users.slice(0, isDisplay ? max : 2);
    return <AvatarGroup max={max} sx={isDisplay ? { '&.css-1ytufz-MuiAvatarGroup-root': { display: 'inline-block' }, '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 10 }, '& .MuiAvatar-root-MuiAvatarGroup-avatar': { display: "none" } } : {}}>
        {displayedUsers.map((user, idx) =>
            <Avatar key={idx} {...utilService.stringAvatar(user.fullname)} />
        )}
        {!isDisplay && <IconButton sx={{ marginInlineEnd: 4 }}>
            <PersonAddAltRoundedIcon />
        </IconButton>}
    </AvatarGroup>
}

export type AvatarDisplayProps = { isDisplay: boolean, users: User[], max: 3 | 1 }