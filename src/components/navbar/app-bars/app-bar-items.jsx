import Button  from '@mui/material/Button';

const AppBarItems = ({ navbarData }) => {
   return navbarData.map((item) => <Button>{item.head}</Button>);
};

export default AppBarItems;
