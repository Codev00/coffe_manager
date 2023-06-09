import Navbar from "../Navbar/Navbar";
import "./Default.scss";

type Props = {
   children: string | JSX.Element | JSX.Element[];
};

const Default = ({ children }: Props): JSX.Element => {
   return (
      <div className="wrapper">
         <Navbar />
         <div className="container-fluid">{children}</div>
      </div>
   );
};

export default Default;
