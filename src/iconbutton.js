import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export function Iconbutton(){
    return(
        <IconButton>
            <Badge color="secondary" badgeContent={0}>
                <ShoppingCartIcon fontSize='large'/>
            </Badge>
        </IconButton>
    );
}