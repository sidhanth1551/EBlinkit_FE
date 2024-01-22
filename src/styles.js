export const styles = {
  chatWithMeButton: {
    cursor: "pointer",
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
    // Border
    borderRadius: "50%",
    borderColor: "green",
    // Background
    backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/030/492/759/small/cute-green-robot-with-smiley-face-3d-illustration-of-cartoon-character-ai-generated-free-photo.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "84px",
    // Size
    width: "84px",
    height: "84px",
  },
  avatarHello: {
    // Position
    position: "absolute",
    left: "calc(-100% - 44px - 28px)",
    top: "calc(50% - 24px)",
    // Layering
    zIndex: "10000",
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
    // Border
    padding: "12px 12px 12px 16px",
    borderRadius: "24px",
    // Color
    backgroundColor: "#f9f0ff",
    color: "black",
  },
  supportWindow: {
    // Position
    position: "fixed",
    bottom: "116px",
    right: "24px",
    // Size
    width: "920px",
    height: "570px",
    maxWidth: "calc(100% - 48px)",
    maxHeight: "calc(100% - 48px)",
    backgroundColor: "white",
    // Border
    borderRadius: "12px",
    border: `2px solid #38A169`,
    overflow: "hidden",
    overflowY: "auto",
    // Shadow
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
  },
  mobileFriendly: {
    // Adjust the styles for mobile screens
    width: "100%", // Use the full width of the screen
    height: "100%", // Use the full height of the screen
    bottom: 0, // Stick to the bottom
    right: 0, // Stick to the right
    borderRadius: 0, // Remove border-radius
    border: "none", // Remove the border
    boxShadow: "none", // Remove the shadow
  },
  emailFormWindow: {
    width: "100%",
    overflow: "hidden",
    transition: "all 0.5s ease",
    WebkitTransition: "all 0.5s ease",
    MozTransition: "all 0.5s ease",
  },
  stripe: {
    position: "relative",
    top: "-45px",
    width: "100%",
    height: "308px",
    backgroundColor: "#F1C93B",
    transform: "skewY(-12deg)",
  },
  topText: {
    position: "relative",
    width: "100%",
    top: "15%",
    color: "white",
    fontSize: "24px",
    fontWeight: "600",
  },
  emailInput: {
    width: "66%",
    textAlign: "center",
    outline: "none",
    padding: "12px",
    borderRadius: "12px",
    border: "2px solid #7a39e0",
  },
  bottomText: {
    position: "absolute",
    width: "100%",
    top: "60%",
    color: "#7a39e0",
    fontSize: "24px",
    fontWeight: "600",
  },
  loadingDiv: {
    position: "absolute",
    height: "100%",
    width: "100%",
    textAlign: "center",
    backgroundColor: "white",
  },
  loadingIcon: {
    color: "#F1C93B",
    position: "absolute",
    top: "calc(50% - 51px)",
    left: "calc(50% - 51px)",
    fontWeight: "600",
  },
  chatEngineWindow: {
    width: "100%",
    backgroundColor: "#F1C93B",
  },
};
