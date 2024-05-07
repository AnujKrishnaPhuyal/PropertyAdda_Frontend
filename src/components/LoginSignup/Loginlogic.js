export const isloggedin = () => {
  let Token = localStorage.getItem("access");
  if (Token === null) {
    return false;
  } else {
    return true;
  }
};
