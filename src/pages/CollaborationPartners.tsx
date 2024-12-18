import JessicaImage from "../assets/images/collaboration-partners/jessica-image.png";
import DmytroImage from "../assets/images/collaboration-partners/dmytro-image.png";

export const CollaborationPartners = () => {
  return (
    <div className="profiles">
      <section className="profile-jessica">
        <img
          src={JessicaImage}
          alt="image of Jessica Bräun"
          loading="lazy"
        ></img>
        <div className="info-text">
          <h1>Jessica Bräun</h1>
          <h3>Dipl. Ing. (FH) Biotechnologie</h3>
          <h3>Founder JHealthSolutions GmbHG</h3>
        </div>
      </section>

      <section className="profile-dmytro">
        <img
          src={DmytroImage}
          alt="image of Jessica Bräun"
          loading="lazy"
        ></img>
        <div className="info-text">
          <h1>Dmytro Vakulenko</h1>
          <h3>Prof. Dr. Biological Sciences</h3>
          <h3>Founder Innovation in Medicine LLC</h3>
        </div>
      </section>
    </div>
  );
};

export default CollaborationPartners;
