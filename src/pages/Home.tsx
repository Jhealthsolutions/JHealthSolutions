import { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, //Service id
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template_id
        event.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY //Public key
      )
      .then(
        (result) => {
          console.log("E-Mail send", result.text);
          alert(t("home-page.thank-you-message"));
          event.currentTarget.reset();
        },
        (error) => {
          console.error("Error while sending email", error.text);
          alert(t("home-page.error-message"));
        }
      );
  };

  return (
    <div className="home-container">
      <section className="image-section">
        <div className="text-box-image">
          <h2>{t("home-page.headline")}</h2>
          <p>{t("home-page.intro-text")}</p>
          <p className="second-text-box-image">{t("home-page.cta-text")}</p>
          <button className="contact-button" onClick={toggleFormVisibility}>
            {t("home-page.contact-button")}
          </button>

          {isFormVisible && (
            <div className="modal">
              <div className="modal-content">
                <button className="close-button" onClick={toggleFormVisibility}>
                  &times;
                </button>
                <h3>{t("home-page.modal-title")}</h3>
                <form onSubmit={handleSubmit}>
                  <label className="label">
                    {t("home-page.name-label")}
                    <input type="text" name="from_name" required />
                  </label>
                  <br />
                  <label className="label">
                    {t("home-page.email-label")}
                    <input type="email" name="from_email" required />
                  </label>
                  <br />
                  <label className="label">
                    {t("home-page.message-label")}
                    <textarea name="message" required />
                  </label>
                  <button className="submit-button" type="submit">
                    {t("home-page.submit-button")}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      <article className="text-info-section">
        <h1>{t("home-page.info-headline")}</h1>
        <p>{t("home-page.info-text")}</p>
      </article>
    </div>
  );
};

export default Home;
