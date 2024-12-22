import JessicaImage from "../assets/images/collaboration-partners/jessica-image.png";
import DmytroImage from "../assets/images/collaboration-partners/dmytro-image.png";
import { useTranslation } from "react-i18next";

export const CollaborationPartners = () => {
  const { t } = useTranslation();

  return (
    <div className="profiles">
      <section className="profile-jessica">
        <img
          src={JessicaImage}
          alt="image of Jessica Bräun"
          loading="lazy"
        ></img>
        <article className="info-text">
          <h1>{t("collaboration-partners-page.jessica.name")}</h1>
          <h3>{t("collaboration-partners-page.jessica.degree")}</h3>
          <h3>{t("collaboration-partners-page.jessica.role")}</h3>
        </article>
      </section>

      <section className="profile-dmytro">
        <img
          src={DmytroImage}
          alt="image of Jessica Bräun"
          loading="lazy"
        ></img>
        <article className="info-text">
          <h1>{t("collaboration-partners-page.dmytro.name")}</h1>
          <h3>{t("collaboration-partners-page.dmytro.degree")}</h3>
          <h3>{t("collaboration-partners-page.dmytro.role")}</h3>
        </article>
      </section>
    </div>
  );
};

export default CollaborationPartners;
