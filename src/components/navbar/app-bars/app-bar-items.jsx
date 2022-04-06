import Button  from '@mui/material/Button';

const AppBarItems = ({ navbarData }) => {
   return navbarData.map((item) => <Button sx={{marginRight: 1.5}}>{item.head}</Button>);
};

export default AppBarItems;
