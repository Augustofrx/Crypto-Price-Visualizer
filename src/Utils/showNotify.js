import { toast } from "react-hot-toast";

export const showNotify = (favorites, name) => {
  if (favorites.includes(name)) {
    toast.error("Removed from favorites", {
      position: "top-center",
      style: {
        backgroundColor: "#212529",
        color: "white",
        border: "2px solid red",
      },
      autoClose: 2000,
    });
  } else {
    toast.success("Added to favorites successfully", {
      position: "top-center",
      style: {
        backgroundColor: "#212529",
        color: "white",
        border: "2px solid green",
      },
      autoClose: 2000,
    });
  }
};
