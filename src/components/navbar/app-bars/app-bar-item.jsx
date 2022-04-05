import { AppBarItemText } from "./app-bar.styles";

const AppBarItem = ({ data }) => {
   return (
      <AppBarItemText  variant="h6" component="div">
         {data.head}
      </AppBarItemText>
   );
};

export default AppBarItem;
