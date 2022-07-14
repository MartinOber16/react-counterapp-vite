import PropTypes from "prop-types";

// const newMessage = {
//   title: "First App",
//   message: "Soy un subtitulo",
// };

// const getSaludo = () => {
//   return "Hola Mundo!";
// };

// export const FirstApp = ({ title = "Hola, soy Martin.", subtitle = "" }) => {
export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      {/* <h1>{newMessage.title}</h1> */}
      {/* <p>{newMessage.message}</p> */}
      {/* <h1>{getSaludo()}</h1> */}
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  name: "Martin",
  subtitle: "No hay subtitulo",
  // title: "No hay titulo",
};
