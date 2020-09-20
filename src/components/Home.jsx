import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SlideShow from "./Carousel";
import Content from "./Content";
import { getUsers } from "../services/mock-data";

function Home() {
  return (
    <div>
      <SlideShow
        img1="https://storage0.dms.mpinteractiv.ro/media/1/1481/21455/17057621/1/utcn-e1429527464858.jpg"
        img2="https://previews.123rf.com/images/cartophil/cartophil1605/cartophil160500164/60734427-the-building-of-the-technical-university-in-cluj-napoca.jpg"
        img3="https://www.monitorulcj.ro/documente/stories/2017/07/11/UTCN_1.JPG"
        img4="https://www.monitorulcj.ro/documente/stories/2017/07/11/UTCN_1.JPG"
        img5="https://www.monitorulcj.ro/documente/stories/2017/07/11/UTCN_1.JPG"
        label1="Slide label 1"
        label2="Slide label 2"
        label3="Slide label 3"
        label4="Slide label 4"
        label5="Slide label 5"
      />
      <Content
        title="Bine ati venit pe pagina AEL2.0"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
}

export default Home;
