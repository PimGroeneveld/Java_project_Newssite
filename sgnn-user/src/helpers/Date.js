const prettyDate = (dateString) => {
  if(!dateString) {return null}
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
  const date = dateString.split("T")[0].split("-");
  const time = dateString.split("T")[1].split(":");
  return date[2] + " " + monthNames[date[1]] + " " + date[0] + " at " + time[0] + ":" + time[1];
}

export default prettyDate;
